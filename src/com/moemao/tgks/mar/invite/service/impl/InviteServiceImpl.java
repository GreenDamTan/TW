package com.moemao.tgks.mar.invite.service.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONObject;

import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.mar.account.entity.AccountEvt;
import com.moemao.tgks.mar.account.entity.AccountReq;
import com.moemao.tgks.mar.account.service.AccountService;
import com.moemao.tgks.mar.execute.MarzRequest;
import com.moemao.tgks.mar.invite.service.InviteService;
import com.moemao.tgks.mar.marz.tool.MarzConstant;
import com.moemao.tgks.mar.tool.MarConstant;

public class InviteServiceImpl implements InviteService
{
    private MarzRequest request = MarzRequest.getInstance();

    private AccountService mar_accountService;
    
    /**
     * 返回最后一个招待的ID 给自动刷初始流程提供5个石头
     
    public String invite(String inviteCode)
    {
        String inviteName = "Kirito";
        String inviteChara = "3";
        String[] result = new String[2];
        String sessionId;
        // 返回最后一个招待的ID
        String returnCode = "";
        // 招待个数
        int num = 10;
        JSONObject json= null;

        List<String> inviteSessonIdList = new ArrayList<String>();
        
        try
        {
            for (int i = 1; i <= num; i++)
            {
                result[0] = request.regist();
                
                // 从regist的result中解析出sessonId
                json= JSONObject.fromObject(result[0]);
                sessionId = (String) json.get("sess_key");
                inviteSessonIdList.add(sessionId.replace("=", ""));
            }
            
            for (String sid : inviteSessonIdList)
            {
                request.connect(sid);
            }
            
            Thread.sleep(5000);
            
            int index = 0;
            for (String sid : inviteSessonIdList)
            {
                index++;
                request.userCreate(sid, inviteName, inviteChara);
                result = request.homeShow(sid);
                sid = result[0];
                request.inviteCodeEnter(sid, inviteCode);
                System.out.println("第" + index + "个招待已经完成！");// 临时打印
                
                if (index == num)
                {
                    // 记录最后一个号的招待ID
                    returnCode = result[1].split("inviteid\":\"")[1].substring(0, 9);
                }
            }
        }
        catch (Exception e)
        {
            
        }
        
        return returnCode;
    }
    */
    public synchronized void invite2(String password, String inviteCode)
    {
        String sid;
        
        // 先查询之前是否已经刷过
        AccountReq accountReq = new AccountReq();
        accountReq.setInviteCode(inviteCode);
        accountReq.setTitle(password);
        List<AccountEvt> accountList = this.mar_accountService.queryAccount(accountReq);
        
        if (CommonUtil.isEmpty(accountList))
        {
            // 如果之前没有刷过
            accountReq = new AccountReq();
            accountReq.setStatus(MarConstant.ACCOUNT_STATUS_4);
            accountReq.setSortSql(" t.ID Limit 0, 20");
            
            // 查询出20个可以用来刷招待的号
            accountList = this.mar_accountService.queryAccount(accountReq);
            
            /*
            // 先绑定这10个号
            for (AccountEvt accountEvt : accountList)
            {
                accountEvt.setInviteCode(inviteCode);
                accountEvt.setTitle(password);
                this.mar_accountService.updateAccount(accountEvt);
            }
            */
        }
        
        Map<String, JSONObject> map = new HashMap<String, JSONObject>();
        int complete = 0;
        int count = 0;
        
        for (AccountEvt accountEvt : accountList)
        {
            try
            {
                count++;
                
                // 1 登录
                map = request.loginIOS(accountEvt.getUuid(), accountEvt.getHashToken());
                sid = map.get(MarzConstant.JSON_TAG_SID).getString(MarzConstant.JSON_TAG_SID);
                map = request.connect(sid);
                
                // 2 填招待ID
                map = request.inviteCodeEnter(sid, inviteCode);
                if (MarzConstant.RES_CODE_SUCCESS_0 == map.get(MarzConstant.JSON_TAG_RESCODE).getInt(MarzConstant.JSON_TAG_RESCODE))
                {
                    complete++;
                    
                    System.out.println("刷招待成功！当前第" + count + "个，成功" + complete + "个！");
                    
                    // 刷完招待更新一下账号状态
                    accountEvt.setStatus(MarConstant.ACCOUNT_STATUS_5);
                    accountEvt.setInviteCode(inviteCode);
                    accountEvt.setTitle(password);
                    this.mar_accountService.updateAccount(accountEvt);
                }
                else if (MarzConstant.RES_CODE_ERROR_M607 == map.get(MarzConstant.JSON_TAG_RESCODE).getInt(MarzConstant.JSON_TAG_RESCODE))
                {
                    System.out.println(inviteCode + "的招待已经刷满，无法再刷！");
                    break;
                }
                else
                {
                    System.out.println("刷招待失败！当前第" + count + "个，成功" + complete + "个！");
                    
                    accountEvt.setStatus(MarConstant.ACCOUNT_STATUS_0);
                    accountEvt.setInviteCode("");
                    accountEvt.setTitle("");
                    this.mar_accountService.updateAccount(accountEvt);
                    continue;
                }
                
                if (complete >= 10)
                {
                    break;
                }
            }
            catch (Exception e)
            {
                System.out.println("刷招待失败！");
                
                accountEvt.setStatus(MarConstant.ACCOUNT_STATUS_0);
                accountEvt.setInviteCode("");
                accountEvt.setTitle("");
                this.mar_accountService.updateAccount(accountEvt);
                continue;
            }
        }
    }
    
    public MarzRequest getRequest()
    {
        return request;
    }

    public void setRequest(MarzRequest request)
    {
        this.request = request;
    }

    public AccountService getMar_accountService()
    {
        return mar_accountService;
    }

    public void setMar_accountService(AccountService mar_accountService)
    {
        this.mar_accountService = mar_accountService;
    }
}
