package com.moemao.tgks.mar.marzmap.action;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.moemao.tgks.common.core.action.TGKSAction;
import com.moemao.tgks.common.tool.CommonConstant;
import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.common.tool.StringUtil;
import com.moemao.tgks.mar.marzmap.entity.MarzMapEvt;
import com.moemao.tgks.mar.marzmap.entity.MarzMapReq;
import com.moemao.tgks.mar.marzmap.service.MarzMapService;

public class MarzMapAction extends TGKSAction
{
    /** 
     * @Fields serialVersionUID : TODO(用一句话描述这个变量表示什么) 
     */ 
    private static final long serialVersionUID = 6667846011553408607L;

    private static Log logger = LogFactory.getLog(MarzMapAction.class);
    
    /**
     * ﻿MarzMap业务接口
     */
    private MarzMapService mar_marzMapService;
    
    /**
     * 查询结果集
     */
    private List<MarzMapEvt> list;
    
    /**
     * ﻿MarzMapEvt对象
     */
    private MarzMapEvt marzMapEvt;
    
    /**
     * ﻿MarzMap查询条件封装对象（自动生成代码后需要new对象）
     */
    private MarzMapReq marzMapReq = new MarzMapReq();
    
    public String marzMapManager()
    {
    return SUCCESS;
    }
    
    public String queryMarzMap()
    {
    list = mar_marzMapService.queryMarzMap(marzMapReq);
    return SUCCESS;
    }
    
    public String editMarzMapPage()
    {
    String id = this.getRequest().getParameter("id");
    if (!CommonUtil.isEmpty(id))
    {
    marzMapEvt = mar_marzMapService.queryMarzMapById(id);
    }
    return SUCCESS;
    }
    
    public String editMarzMap()
    {
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "MarzMapAction.updateMarzMap");
    int result = 0;
    if (CommonUtil.isEmpty(marzMapEvt.getId()))
    {
    result = mar_marzMapService.addMarzMap(marzMapEvt);
    CommonUtil.systemLog("mar/editMarzMap.action", CommonConstant.SYSTEMLOG_TYPE_1, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("新增marzMapEvt\n%S", marzMapEvt.toString()));
    }
    else
    {
    result = mar_marzMapService.updateMarzMap(marzMapEvt);
    CommonUtil.systemLog("mar/editMarzMap.action", CommonConstant.SYSTEMLOG_TYPE_2, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("修改marzMapEvt\n%S", marzMapEvt.toString()));
    }
    CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_EXECUTE_NUMS, StringUtil.toBeString(result));
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "MarzMapAction.updateMarzMap");
    return SUCCESS;
    }
    
    public String deleteMarzMap()
    {
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "MarzMapAction.deleteMarzMap");
    String ids = this.getRequest().getParameter("ids");
    int result = mar_marzMapService.deleteMarzMap(CommonUtil.stringToList(ids));
    CommonUtil.systemLog("mar/deleteMarzMap.action", CommonConstant.SYSTEMLOG_TYPE_3, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("删除marzMapEvt\nID:%S", ids));
    CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_EXECUTE_NUMS, StringUtil.toBeString(result));
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "MarzMapAction.deleteMarzMap");
    return SUCCESS;
    }
    
    /**
     * @return 返回 mar_marzMapService
     */
    public MarzMapService getMar_marzMapService()
    {
        return mar_marzMapService;
    }
    
    /**
     * @param 对mar_marzMapService进行赋值
     */
    public void setMar_marzMapService(MarzMapService mar_marzMapService)
    {
        this.mar_marzMapService = mar_marzMapService;
    }
    
    /**
     * @return 返回 list
     */
    public List<MarzMapEvt> getList()
    {
        return list;
    }
    
    /**
     * @param 对list进行赋值
     */
    public void setList(List<MarzMapEvt> list)
    {
        this.list = list;
    }
    
    /**
     * @return 返回 marzMapEvt
     */
    public MarzMapEvt getMarzMapEvt()
    {
        return marzMapEvt;
    }
    
    /**
     * @param 对marzMapEvt进行赋值
     */
    public void setMarzMapEvt(MarzMapEvt marzMapEvt)
    {
        this.marzMapEvt = marzMapEvt;
    }
    
    /**
     * @return 返回 marzMapReq
     */
    public MarzMapReq getMarzMapReq()
    {
        return marzMapReq;
    }
    
    /**
     * @param 对marzMapReq进行赋值
     */
    public void setMarzMapReq(MarzMapReq marzMapReq)
    {
        this.marzMapReq = marzMapReq;
    }

}