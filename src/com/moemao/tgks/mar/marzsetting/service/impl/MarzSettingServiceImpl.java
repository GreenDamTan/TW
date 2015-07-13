package com.moemao.tgks.mar.marzsetting.service.impl;

import java.util.List;

import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.mar.marzsetting.dao.MarzSettingDao;
import com.moemao.tgks.mar.marzsetting.entity.MarzSettingEvt;
import com.moemao.tgks.mar.marzsetting.entity.MarzSettingReq;
import com.moemao.tgks.mar.marzsetting.service.MarzSettingService;
import com.moemao.tgks.mar.tool.MarUtil;

public class MarzSettingServiceImpl implements MarzSettingService
{
/**
 * ﻿MarzSettingDao
 */
private MarzSettingDao mar_marzSettingDao;

public List<MarzSettingEvt> queryMarzSetting(MarzSettingReq marzSettingReq)
{
if (CommonUtil.isEmpty(marzSettingReq.getSortSql()))
{
marzSettingReq.setSortSql(" t.ID DESC");
}
return mar_marzSettingDao.mar_queryMarzSetting(marzSettingReq);
}

public MarzSettingEvt queryMarzSettingById(String id)
{
MarzSettingReq marzSettingReq = new MarzSettingReq();
marzSettingReq.setId(id);
MarzSettingEvt marzSettingEvt = null;
List<MarzSettingEvt> marzSettingList = mar_marzSettingDao.mar_queryMarzSetting(marzSettingReq);
if (!CommonUtil.isEmpty(marzSettingList))
{
marzSettingEvt = marzSettingList.get(0);
}
return marzSettingEvt;
}

public int addMarzSetting(MarzSettingEvt marzSettingEvt)
{
marzSettingEvt.setId(MarUtil.createUniqueID());
return mar_marzSettingDao.mar_addMarzSetting(marzSettingEvt);
}

public int updateMarzSetting(MarzSettingEvt marzSettingEvt)
{
return mar_marzSettingDao.mar_updateMarzSetting(marzSettingEvt);
}

public int deleteMarzSetting(List<String> ids)
{
return mar_marzSettingDao.mar_deleteMarzSetting(ids);
}

public int deleteMarzSettingByTgksId(String id)
{
    return mar_marzSettingDao.mar_deleteMarzSettingByTgksId(id);
}

/**
 * @return 返回 mar_marzSettingDao
 */
public MarzSettingDao getMar_marzSettingDao()
{
    return mar_marzSettingDao;
}

/**
 * @param 对mar_marzSettingDao进行赋值
 */
public void setMar_marzSettingDao(MarzSettingDao mar_marzSettingDao)
{
    this.mar_marzSettingDao = mar_marzSettingDao;
}

}