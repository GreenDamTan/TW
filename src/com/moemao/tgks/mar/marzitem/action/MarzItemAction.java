package com.moemao.tgks.mar.marzitem.action;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.moemao.tgks.common.core.action.TGKSAction;
import com.moemao.tgks.common.tool.CommonConstant;
import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.common.tool.StringUtil;
import com.moemao.tgks.mar.marzitem.entity.MarzItemEvt;
import com.moemao.tgks.mar.marzitem.entity.MarzItemReq;
import com.moemao.tgks.mar.marzitem.service.MarzItemService;

public class MarzItemAction extends TGKSAction
{

    /** 
     * @Fields serialVersionUID
     */ 
    private static final long serialVersionUID = 9076197923029846982L;

private static Log logger = LogFactory.getLog(MarzItemAction.class);

/**
 * ﻿MarzItem业务接口
 */
private MarzItemService mar_marzItemService;

/**
 * 查询结果集
 */
private List<MarzItemEvt> list;

/**
 * ﻿MarzItemEvt对象
 */
private MarzItemEvt marzItemEvt;

/**
 * ﻿MarzItem查询条件封装对象（自动生成代码后需要new对象）
 */
private MarzItemReq marzItemReq = new MarzItemReq();

public String marzItemManager()
{
return SUCCESS;
}

public String queryMarzItem()
{
list = mar_marzItemService.queryMarzItem(marzItemReq);
return SUCCESS;
}

public String editMarzItemPage()
{
String id = this.getRequest().getParameter("id");
if (!CommonUtil.isEmpty(id))
{
marzItemEvt = mar_marzItemService.queryMarzItemById(id);
}
return SUCCESS;
}

public String editMarzItem()
{
CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "MarzItemAction.updateMarzItem");
int result = 0;
if (CommonUtil.isEmpty(marzItemEvt.getId()))
{
result = mar_marzItemService.addMarzItem(marzItemEvt);
CommonUtil.systemLog("mar/editMarzItem.action", CommonConstant.SYSTEMLOG_TYPE_1, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("新增marzItemEvt\n%S", marzItemEvt.toString()));
}
else
{
result = mar_marzItemService.updateMarzItem(marzItemEvt);
CommonUtil.systemLog("mar/editMarzItem.action", CommonConstant.SYSTEMLOG_TYPE_2, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("修改marzItemEvt\n%S", marzItemEvt.toString()));
}
CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_EXECUTE_NUMS, StringUtil.toBeString(result));
CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "MarzItemAction.updateMarzItem");
return SUCCESS;
}

public String deleteMarzItem()
{
CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "MarzItemAction.deleteMarzItem");
String ids = this.getRequest().getParameter("ids");
int result = mar_marzItemService.deleteMarzItem(CommonUtil.stringToList(ids));
CommonUtil.systemLog("mar/deleteMarzItem.action", CommonConstant.SYSTEMLOG_TYPE_3, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("删除marzItemEvt\nID:%S", ids));
CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_EXECUTE_NUMS, StringUtil.toBeString(result));
CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "MarzItemAction.deleteMarzItem");
return SUCCESS;
}

/**
 * @return 返回 mar_marzItemService
 */
public MarzItemService getMar_marzItemService()
{
    return mar_marzItemService;
}

/**
 * @param 对mar_marzItemService进行赋值
 */
public void setMar_marzItemService(MarzItemService mar_marzItemService)
{
    this.mar_marzItemService = mar_marzItemService;
}

/**
 * @return 返回 list
 */
public List<MarzItemEvt> getList()
{
    return list;
}

/**
 * @param 对list进行赋值
 */
public void setList(List<MarzItemEvt> list)
{
    this.list = list;
}

/**
 * @return 返回 marzItemEvt
 */
public MarzItemEvt getMarzItemEvt()
{
    return marzItemEvt;
}

/**
 * @param 对marzItemEvt进行赋值
 */
public void setMarzItemEvt(MarzItemEvt marzItemEvt)
{
    this.marzItemEvt = marzItemEvt;
}

/**
 * @return 返回 marzItemReq
 */
public MarzItemReq getMarzItemReq()
{
    return marzItemReq;
}

/**
 * @param 对marzItemReq进行赋值
 */
public void setMarzItemReq(MarzItemReq marzItemReq)
{
    this.marzItemReq = marzItemReq;
}

}