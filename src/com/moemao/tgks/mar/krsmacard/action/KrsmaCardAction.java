package com.moemao.tgks.mar.krsmacard.action;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.moemao.tgks.common.core.action.TGKSAction;
import com.moemao.tgks.common.tool.CommonConstant;
import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.common.tool.StringUtil;
import com.moemao.tgks.mar.krsmacard.entity.KrsmaCardEvt;
import com.moemao.tgks.mar.krsmacard.entity.KrsmaCardReq;
import com.moemao.tgks.mar.krsmacard.service.KrsmaCardService;

public class KrsmaCardAction extends TGKSAction
{

    /** 
     * @Fields serialVersionUID
     */ 
    private static final long serialVersionUID = -2637660795444189585L;

    private static Log logger = LogFactory.getLog(KrsmaCardAction.class);
    
    /**
     * ﻿KrsmaCard业务接口
     */
    private KrsmaCardService mar_krsmaCardService;
    
    /**
     * 查询结果集
     */
    private List<KrsmaCardEvt> list;
    
    /**
     * ﻿KrsmaCardEvt对象
     */
    private KrsmaCardEvt krsmaCardEvt;
    
    /**
     * ﻿KrsmaCard查询条件封装对象（自动生成代码后需要new对象）
     */
    private KrsmaCardReq krsmaCardReq = new KrsmaCardReq();
    
    public String krsmaCardManager()
    {
    return SUCCESS;
    }
    
    public String queryKrsmaCard()
    {
    list = mar_krsmaCardService.queryKrsmaCard(krsmaCardReq);
    return SUCCESS;
    }
    
    public String editKrsmaCardPage()
    {
    String id = this.getRequest().getParameter("id");
    if (!CommonUtil.isEmpty(id))
    {
    krsmaCardEvt = mar_krsmaCardService.queryKrsmaCardById(id);
    }
    return SUCCESS;
    }
    
    public String editKrsmaCard()
    {
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "KrsmaCardAction.updateKrsmaCard");
    int result = 0;
    if (CommonUtil.isEmpty(krsmaCardEvt.getId()))
    {
    result = mar_krsmaCardService.addKrsmaCard(krsmaCardEvt);
    CommonUtil.systemLog("mar/editKrsmaCard.action", CommonConstant.SYSTEMLOG_TYPE_1, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("新增krsmaCardEvt\n%S", krsmaCardEvt.toString()));
    }
    else
    {
    result = mar_krsmaCardService.updateKrsmaCard(krsmaCardEvt);
    CommonUtil.systemLog("mar/editKrsmaCard.action", CommonConstant.SYSTEMLOG_TYPE_2, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("修改krsmaCardEvt\n%S", krsmaCardEvt.toString()));
    }
    CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_EXECUTE_NUMS, StringUtil.toBeString(result));
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "KrsmaCardAction.updateKrsmaCard");
    return SUCCESS;
    }
    
    public String deleteKrsmaCard()
    {
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "KrsmaCardAction.deleteKrsmaCard");
    String ids = this.getRequest().getParameter("ids");
    int result = mar_krsmaCardService.deleteKrsmaCard(CommonUtil.stringToList(ids));
    CommonUtil.systemLog("mar/deleteKrsmaCard.action", CommonConstant.SYSTEMLOG_TYPE_3, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("删除krsmaCardEvt\nID:%S", ids));
    CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_EXECUTE_NUMS, StringUtil.toBeString(result));
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "KrsmaCardAction.deleteKrsmaCard");
    return SUCCESS;
    }
    
    public String changeStatusKrsmaCard()
    {
        CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "KrsmaCardAction.changeKrsmaCard");
        String ids = this.getRequest().getParameter("ids");
        String type = this.getRequest().getParameter("type");
        String status = this.getRequest().getParameter("status");
        
        if ("sell".equals(type))
        {
            if ("0".equals(status))
            {
                mar_krsmaCardService.offSellKrsmaCard(CommonUtil.stringToList(ids));
            }
            else if ("1".equals(status))
            {
                mar_krsmaCardService.onSellKrsmaCard(CommonUtil.stringToList(ids));
            }
        }
        else if ("fame".equals(type))
        {
            if ("0".equals(status))
            {
                mar_krsmaCardService.offFameKrsmaCard(CommonUtil.stringToList(ids));
            }
            else if ("1".equals(status))
            {
                mar_krsmaCardService.onFameKrsmaCard(CommonUtil.stringToList(ids));
            }
        }
        
        CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "KrsmaCardAction.changeKrsmaCard");
        return SUCCESS;
    }
    
    /**
     * @return 返回 mar_krsmaCardService
     */
    public KrsmaCardService getMar_krsmaCardService()
    {
        return mar_krsmaCardService;
    }
    
    /**
     * @param 对mar_krsmaCardService进行赋值
     */
    public void setMar_krsmaCardService(KrsmaCardService mar_krsmaCardService)
    {
        this.mar_krsmaCardService = mar_krsmaCardService;
    }
    
    /**
     * @return 返回 list
     */
    public List<KrsmaCardEvt> getList()
    {
        return list;
    }
    
    /**
     * @param 对list进行赋值
     */
    public void setList(List<KrsmaCardEvt> list)
    {
        this.list = list;
    }
    
    /**
     * @return 返回 krsmaCardEvt
     */
    public KrsmaCardEvt getKrsmaCardEvt()
    {
        return krsmaCardEvt;
    }
    
    /**
     * @param 对krsmaCardEvt进行赋值
     */
    public void setKrsmaCardEvt(KrsmaCardEvt krsmaCardEvt)
    {
        this.krsmaCardEvt = krsmaCardEvt;
    }
    
    /**
     * @return 返回 krsmaCardReq
     */
    public KrsmaCardReq getKrsmaCardReq()
    {
        return krsmaCardReq;
    }
    
    /**
     * @param 对krsmaCardReq进行赋值
     */
    public void setKrsmaCardReq(KrsmaCardReq krsmaCardReq)
    {
        this.krsmaCardReq = krsmaCardReq;
    }

}