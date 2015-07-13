package com.moemao.tgks.mar.invite.action;

import java.text.MessageFormat;
import java.util.Date;
import java.util.List;

import org.json.JSONException;

import com.moemao.tgks.common.core.action.TGKSAction;
import com.moemao.tgks.common.tool.CommonConstant;
import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.mar.invite.service.InviteService;
import com.moemao.tgks.mar.passwordcard.entity.PasswordCardEvt;
import com.moemao.tgks.mar.passwordcard.entity.PasswordCardReq;
import com.moemao.tgks.mar.passwordcard.service.PasswordCardService;
import com.moemao.tgks.mar.tool.MarConstant;

public class InviteAction extends TGKSAction
{

    /** 
     * @Fields serialVersionUID
     */ 
    private static final long serialVersionUID = 1679904315491948085L;

    /**
     * ﻿PasswordCard业务接口
     */
    private PasswordCardService mar_passwordCardService;
    
    private InviteService mar_inviteService;
    
    private String inviteCode;
    
    private String password;
    
    public String invitePage()
    {
        return SUCCESS;
    }
    
    /**
     * @throws InterruptedException 
     * @throws JSONException 
     * 
     * @Title: invite
     * @Description: 网页入口请求招待
     * @return
     * @return String 返回类型
     * @throws
     */
    public String invite() throws JSONException, InterruptedException
    {
        String inviteCode = this.inviteCode;
        String password = this.password;
        
        // 验证参数的有效性
        if (CommonUtil.isEmpty(inviteCode) || CommonUtil.isEmpty(password))
        {
            return ERROR;
        }
        
        // ① 验证卡密的有效性
        PasswordCardReq passwordCardReq = new PasswordCardReq();
        passwordCardReq.setPassword(password);
        
        // 根据卡密查询是否有该数据
        List<PasswordCardEvt> list = this.mar_passwordCardService.queryPasswordCard(passwordCardReq);
        
        // 如果卡密本身不存在 返回ERROR
        if (CommonUtil.isEmpty(list))
        {
            return ERROR;
        }

        // 如果存在 则分两种情况 1 没刷过；2 刷到一半失败了
        PasswordCardEvt passwordCardEvt = list.get(0);        
        
        if(MarConstant.PASSWORDCARD_STATUS_2.equals(passwordCardEvt.getStatus()))
        {
            // 如果已经完成 则返回ERROR
            return ERROR;
        }
        else if (MarConstant.PASSWORDCARD_STATUS_1.equals(passwordCardEvt.getStatus()))
        {
            // 该卡密使用到一半 inviteCode从之前的记录中获取
            //inviteCode = passwordCardEvt.getInviteCode();
            // 现版本不能给再多一次的请求机会 否则会占用相当多的时间
            return ERROR;
        }
        else if (MarConstant.PASSWORDCARD_STATUS_0.equals(passwordCardEvt.getStatus()))
        {
            // 如果该卡密未使用过
            passwordCardEvt.setInviteCode(inviteCode);
            // 更新状态为任务中
            passwordCardEvt.setStatus(MarConstant.PASSWORDCARD_STATUS_1);
            this.mar_passwordCardService.updatePasswordCard(passwordCardEvt);
        }        
        
        // 开始刷招待
        CommonUtil.systemLog("mar/invite.action", CommonConstant.SYSTEMLOG_TYPE_2, CommonConstant.SUCCESS, MessageFormat.format("执行招待任务 卡密号码：{0} 招待ID：{1}", password, inviteCode));

        try
        {
            // 注册机制变更，现在要hash_token才能注册了 暂时用account表中的账号进行刷招待
            // 自动刷招待系统需要提前手动添加账号
            this.mar_inviteService.invite2(password, inviteCode);
        }
        catch (Exception e)
        {
            passwordCardEvt.setInviteCode("");
            passwordCardEvt.setStatus(MarConstant.PASSWORDCARD_STATUS_1);
            passwordCardEvt.setUsedTime(null);
            this.mar_passwordCardService.updatePasswordCard(passwordCardEvt);
            System.out.println("====招待报错退回状态====");
            return ERROR;
        }
        
        System.out.println("====招待已经全部完成====");// 临时打印
        
        // 刷完招待后 将卡密状态更新为已完成
        passwordCardEvt.setStatus(MarConstant.PASSWORDCARD_STATUS_2);
        passwordCardEvt.setUsedTime(new Date());
        this.mar_passwordCardService.updatePasswordCard(passwordCardEvt);

        return SUCCESS;
    }

    public PasswordCardService getMar_passwordCardService()
    {
        return mar_passwordCardService;
    }

    public void setMar_passwordCardService(PasswordCardService mar_passwordCardService)
    {
        this.mar_passwordCardService = mar_passwordCardService;
    }

    public String getInviteCode()
    {
        return inviteCode;
    }

    public void setInviteCode(String inviteCode)
    {
        this.inviteCode = inviteCode;
    }

    public String getPassword()
    {
        return password;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }

    public InviteService getMar_inviteService()
    {
        return mar_inviteService;
    }

    public void setMar_inviteService(InviteService mar_inviteService)
    {
        this.mar_inviteService = mar_inviteService;
    }
}
