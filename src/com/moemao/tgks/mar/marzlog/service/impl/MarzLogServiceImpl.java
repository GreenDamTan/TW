package com.moemao.tgks.mar.marzlog.service.impl;

import java.util.List;

import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.mar.marzaccount.entity.MarzAccountEvt;
import com.moemao.tgks.mar.marzlog.dao.MarzLogDao;
import com.moemao.tgks.mar.marzlog.entity.MarzLogEvt;
import com.moemao.tgks.mar.marzlog.entity.MarzLogReq;
import com.moemao.tgks.mar.marzlog.service.MarzLogService;
import com.moemao.tgks.mar.tool.MarUtil;

public class MarzLogServiceImpl implements MarzLogService
{
/**
 * ﻿MarzLogDao
 */
private MarzLogDao mar_marzLogDao;

public List<MarzLogEvt> queryMarzLog(MarzLogReq marzLogReq)
{
if (CommonUtil.isEmpty(marzLogReq.getSortSql()))
{
marzLogReq.setSortSql(" t.ID DESC");
}
return mar_marzLogDao.mar_queryMarzLog(marzLogReq);
}

public MarzLogEvt queryMarzLogById(String id)
{
MarzLogReq marzLogReq = new MarzLogReq();
marzLogReq.setId(id);
MarzLogEvt marzLogEvt = null;
List<MarzLogEvt> marzLogList = mar_marzLogDao.mar_queryMarzLog(marzLogReq);
if (!CommonUtil.isEmpty(marzLogList))
{
marzLogEvt = marzLogList.get(0);
}
return marzLogEvt;
}

public int addMarzLog(MarzLogEvt marzLogEvt)
{
    marzLogEvt.setId(MarUtil.createUniqueID());
    return mar_marzLogDao.mar_addMarzLog(marzLogEvt);
}

public int marzLog(MarzAccountEvt account, String type, String info)
{
    // marzLog改成按tgksId查找
    MarzLogEvt marzLogEvt = new MarzLogEvt();
    marzLogEvt.setId(MarUtil.createUniqueID());
    marzLogEvt.setTgksId(account.getTgksId());
    marzLogEvt.setType(type);
    marzLogEvt.setInfo(info.replace("?", "").replace("�", ""));
    
    return mar_marzLogDao.mar_addMarzLog(marzLogEvt);
}

public int updateMarzLog(MarzLogEvt marzLogEvt)
{
return mar_marzLogDao.mar_updateMarzLog(marzLogEvt);
}

public int deleteMarzLog(List<String> ids)
{
return mar_marzLogDao.mar_deleteMarzLog(ids);
}

/**
 * @return 返回 mar_marzLogDao
 */
public MarzLogDao getMar_marzLogDao()
{
    return mar_marzLogDao;
}

/**
 * @param 对mar_marzLogDao进行赋值
 */
public void setMar_marzLogDao(MarzLogDao mar_marzLogDao)
{
    this.mar_marzLogDao = mar_marzLogDao;
}

}