package com.moemao.tgks.mar.passwordcard.action;

import java.util.List;
import java.util.UUID;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.moemao.tgks.common.core.action.TGKSAction;
import com.moemao.tgks.common.tool.CommonConstant;
import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.common.tool.StringUtil;
import com.moemao.tgks.mar.passwordcard.entity.PasswordCardEvt;
import com.moemao.tgks.mar.passwordcard.entity.PasswordCardReq;
import com.moemao.tgks.mar.passwordcard.service.PasswordCardService;
import com.moemao.tgks.mar.tool.MarConstant;

public class PasswordCardAction extends TGKSAction
{
    
    /** 
     * @Fields serialVersionUID 
     */ 
    private static final long serialVersionUID = -7932677574658946130L;

    private static Log logger = LogFactory.getLog(PasswordCardAction.class);
    
    /**
     * ﻿PasswordCard业务接口
     */
    private PasswordCardService mar_passwordCardService;
    
    /**
     * 查询结果集
     */
    private List<PasswordCardEvt> list;
    
    /**
     * ﻿PasswordCardEvt对象
     */
    private PasswordCardEvt passwordCardEvt;
    
    /**
     * ﻿PasswordCard查询条件封装对象（自动生成代码后需要new对象）
     */
    private PasswordCardReq passwordCardReq = new PasswordCardReq();
    
    private String passwordExport;
    
    public String passwordCardManager()
    {
    return SUCCESS;
    }
    
    public String queryPasswordCard()
    {
    list = mar_passwordCardService.queryPasswordCard(passwordCardReq);
    return SUCCESS;
    }
    
    public String editPasswordCardPage()
    {
    String id = this.getRequest().getParameter("id");
    if (!CommonUtil.isEmpty(id))
    {
    passwordCardEvt = mar_passwordCardService.queryPasswordCardById(id);
    }
    return SUCCESS;
    }
    
    public String editPasswordCard()
    {
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "PasswordCardAction.updatePasswordCard");
    int result = 0;
    if (CommonUtil.isEmpty(passwordCardEvt.getId()))
    {
    result = mar_passwordCardService.addPasswordCard(passwordCardEvt);
    CommonUtil.systemLog("mar/editPasswordCard.action", CommonConstant.SYSTEMLOG_TYPE_1, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("新增passwordCardEvt\n%S", passwordCardEvt.toString()));
    }
    else
    {
    result = mar_passwordCardService.updatePasswordCard(passwordCardEvt);
    CommonUtil.systemLog("mar/editPasswordCard.action", CommonConstant.SYSTEMLOG_TYPE_2, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("修改passwordCardEvt\n%S", passwordCardEvt.toString()));
    }
    CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_EXECUTE_NUMS, StringUtil.toBeString(result));
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "PasswordCardAction.updatePasswordCard");
    return SUCCESS;
    }
    
    public String deletePasswordCard()
    {
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "PasswordCardAction.deletePasswordCard");
    String ids = this.getRequest().getParameter("ids");
    int result = mar_passwordCardService.deletePasswordCard(CommonUtil.stringToList(ids));
    CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_EXECUTE_NUMS, StringUtil.toBeString(result));
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "PasswordCardAction.deletePasswordCard");
    return SUCCESS;
    }
    
    public String renewPasswordCard()
    {
        String ids = this.getRequest().getParameter("ids");
        if (!CommonUtil.isEmpty(ids))
        {
            list = mar_passwordCardService.queryPasswordCardByIds(CommonUtil.stringToList(ids));
            
            for (PasswordCardEvt passwordCardEvt : list)
            {
                passwordCardEvt.setStatus(MarConstant.PASSWORDCARD_STATUS_0);
                passwordCardEvt.setInviteCode("");
                passwordCardEvt.setUsedTime(null);
                mar_passwordCardService.updatePasswordCard(passwordCardEvt);
            }
        }
        return SUCCESS;
    }
    
    /**
     * 
     * @Title: createPasswordCard
     * @Description: 创建一批卡密
     * @return
     * @return String 返回类型
     * @throws
     */
    public String createPasswordCard()
    {
        int num = 30;
        
        for (int i = 0; i < num; i++)
        {
            passwordCardEvt = new PasswordCardEvt();
            passwordCardEvt.setStatus(MarConstant.PASSWORDCARD_STATUS_0);
            passwordCardEvt.setPassword(UUID.randomUUID().toString().replace("-", ""));
            
            this.mar_passwordCardService.addPasswordCard(passwordCardEvt);
        }
        
        return SUCCESS;
    }
    
    public String exportPasswordCard()
    {
        CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "PasswordCardAction.exportPasswordCard");
        passwordExport = "";
        String ids = this.getRequest().getParameter("ids");
        list = mar_passwordCardService.queryPasswordCardByIds(CommonUtil.stringToList(ids));
        for (PasswordCardEvt passwordCardEvt : list)
        {
            if (null != passwordCardEvt && passwordCardEvt.getPassword() != null && passwordCardEvt.getPassword() != "")
            {
                passwordExport += passwordCardEvt.getPassword() + "\n";
            }
        }
        CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_EXECUTE_NUMS, StringUtil.toBeString(list.size()));
        CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "PasswordCardAction.exportPasswordCard");
        return SUCCESS;
    }
    
    /**
     * @return 返回 mar_passwordCardService
     */
    public PasswordCardService getMar_passwordCardService()
    {
        return mar_passwordCardService;
    }
    
    /**
     * @param 对mar_passwordCardService进行赋值
     */
    public void setMar_passwordCardService(PasswordCardService mar_passwordCardService)
    {
        this.mar_passwordCardService = mar_passwordCardService;
    }
    
    /**
     * @return 返回 list
     */
    public List<PasswordCardEvt> getList()
    {
        return list;
    }
    
    /**
     * @param 对list进行赋值
     */
    public void setList(List<PasswordCardEvt> list)
    {
        this.list = list;
    }
    
    /**
     * @return 返回 passwordCardEvt
     */
    public PasswordCardEvt getPasswordCardEvt()
    {
        return passwordCardEvt;
    }
    
    /**
     * @param 对passwordCardEvt进行赋值
     */
    public void setPasswordCardEvt(PasswordCardEvt passwordCardEvt)
    {
        this.passwordCardEvt = passwordCardEvt;
    }
    
    /**
     * @return 返回 passwordCardReq
     */
    public PasswordCardReq getPasswordCardReq()
    {
        return passwordCardReq;
    }
    
    /**
     * @param 对passwordCardReq进行赋值
     */
    public void setPasswordCardReq(PasswordCardReq passwordCardReq)
    {
        this.passwordCardReq = passwordCardReq;
    }

    public String getPasswordExport()
    {
        return passwordExport;
    }

    public void setPasswordExport(String passwordExport)
    {
        this.passwordExport = passwordExport;
    }

}