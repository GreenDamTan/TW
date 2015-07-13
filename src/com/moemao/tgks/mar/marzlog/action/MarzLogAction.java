package com.moemao.tgks.mar.marzlog.action;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.moemao.tgks.common.core.action.TGKSAction;
import com.moemao.tgks.common.tool.CommonConstant;
import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.common.tool.StringUtil;
import com.moemao.tgks.mar.marz.tool.MarzConstant;
import com.moemao.tgks.mar.marzlog.entity.MarzLogEvt;
import com.moemao.tgks.mar.marzlog.entity.MarzLogReq;
import com.moemao.tgks.mar.marzlog.service.MarzLogService;

public class MarzLogAction extends TGKSAction
{

    /** 
     * @Fields serialVersionUID 
     */ 
    private static final long serialVersionUID = -2267871670148382511L;

private static Log logger = LogFactory.getLog(MarzLogAction.class);

/**
 * ﻿MarzLog业务接口
 */
private MarzLogService mar_marzLogService;

/**
 * 查询结果集
 */
private List<MarzLogEvt> list;

/**
 * ﻿MarzLogEvt对象
 */
private MarzLogEvt marzLogEvt;

/**
 * ﻿MarzLog查询条件封装对象（自动生成代码后需要new对象）
 */
private MarzLogReq marzLogReq = new MarzLogReq();

public String marzLogManager()
{
return SUCCESS;
}

public String queryMarzLog()
{
list = mar_marzLogService.queryMarzLog(marzLogReq);
return SUCCESS;
}

public String queryMarzLogByTgksId()
{
    MarzLogReq marzLogReq = new MarzLogReq();
    marzLogReq.setTgksId(CommonUtil.getUserInfoBySession().getUsername());
    marzLogReq.setSortSql(" t.ID DESC LIMIT 0 , 50");
    list = mar_marzLogService.queryMarzLog(marzLogReq);
    return SUCCESS;
}

public String queryMarzLogByTgksIdOnlyMarzCard()
{
    MarzLogReq marzLogReq = new MarzLogReq();
    marzLogReq.setTgksId(CommonUtil.getUserInfoBySession().getUsername());
    marzLogReq.setSortSql(" t.ID DESC");
    marzLogReq.setType(MarzConstant.MARZ_LOG_TYPE_9);
    list = mar_marzLogService.queryMarzLog(marzLogReq);
    return SUCCESS;
}

public String editMarzLogPage()
{
String id = this.getRequest().getParameter("id");
if (!CommonUtil.isEmpty(id))
{
marzLogEvt = mar_marzLogService.queryMarzLogById(id);
}
return SUCCESS;
}

public String editMarzLog()
{
CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "MarzLogAction.updateMarzLog");
int result = 0;
if (CommonUtil.isEmpty(marzLogEvt.getId()))
{
result = mar_marzLogService.addMarzLog(marzLogEvt);
CommonUtil.systemLog("mar/editMarzLog.action", CommonConstant.SYSTEMLOG_TYPE_1, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("新增marzLogEvt\n%S", marzLogEvt.toString()));
}
else
{
result = mar_marzLogService.updateMarzLog(marzLogEvt);
CommonUtil.systemLog("mar/editMarzLog.action", CommonConstant.SYSTEMLOG_TYPE_2, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("修改marzLogEvt\n%S", marzLogEvt.toString()));
}
CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_EXECUTE_NUMS, StringUtil.toBeString(result));
CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "MarzLogAction.updateMarzLog");
return SUCCESS;
}

public String deleteMarzLog()
{
CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "MarzLogAction.deleteMarzLog");
String ids = this.getRequest().getParameter("ids");
int result = mar_marzLogService.deleteMarzLog(CommonUtil.stringToList(ids));
CommonUtil.systemLog("mar/deleteMarzLog.action", CommonConstant.SYSTEMLOG_TYPE_3, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("删除marzLogEvt\nID:%S", ids));
CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_EXECUTE_NUMS, StringUtil.toBeString(result));
CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "MarzLogAction.deleteMarzLog");
return SUCCESS;
}

/**
 * @return 返回 mar_marzLogService
 */
public MarzLogService getMar_marzLogService()
{
    return mar_marzLogService;
}

/**
 * @param 对mar_marzLogService进行赋值
 */
public void setMar_marzLogService(MarzLogService mar_marzLogService)
{
    this.mar_marzLogService = mar_marzLogService;
}

/**
 * @return 返回 list
 */
public List<MarzLogEvt> getList()
{
    return list;
}

/**
 * @param 对list进行赋值
 */
public void setList(List<MarzLogEvt> list)
{
    this.list = list;
}

/**
 * @return 返回 marzLogEvt
 */
public MarzLogEvt getMarzLogEvt()
{
    return marzLogEvt;
}

/**
 * @param 对marzLogEvt进行赋值
 */
public void setMarzLogEvt(MarzLogEvt marzLogEvt)
{
    this.marzLogEvt = marzLogEvt;
}

/**
 * @return 返回 marzLogReq
 */
public MarzLogReq getMarzLogReq()
{
    return marzLogReq;
}

/**
 * @param 对marzLogReq进行赋值
 */
public void setMarzLogReq(MarzLogReq marzLogReq)
{
    this.marzLogReq = marzLogReq;
}

}