package com.moemao.tgks.mar.marzmap.service.impl;

import java.util.List;

import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.mar.marzmap.dao.MarzMapDao;
import com.moemao.tgks.mar.marzmap.entity.MarzMapEvt;
import com.moemao.tgks.mar.marzmap.entity.MarzMapReq;
import com.moemao.tgks.mar.marzmap.service.MarzMapService;
import com.moemao.tgks.mar.tool.MarUtil;

public class MarzMapServiceImpl implements MarzMapService
{
/**
 * ﻿MarzMapDao
 */
private MarzMapDao mar_marzMapDao;

public List<MarzMapEvt> queryMarzMap(MarzMapReq marzMapReq)
{
if (CommonUtil.isEmpty(marzMapReq.getSortSql()))
{
marzMapReq.setSortSql(" t.ID");
}
return mar_marzMapDao.mar_queryMarzMap(marzMapReq);
}

public MarzMapEvt queryMarzMapById(String id)
{
MarzMapReq marzMapReq = new MarzMapReq();
marzMapReq.setId(id);
MarzMapEvt marzMapEvt = null;
List<MarzMapEvt> marzMapList = mar_marzMapDao.mar_queryMarzMap(marzMapReq);
if (!CommonUtil.isEmpty(marzMapList))
{
marzMapEvt = marzMapList.get(0);
}
return marzMapEvt;
}

public int addMarzMap(MarzMapEvt marzMapEvt)
{
marzMapEvt.setId(MarUtil.createUniqueID());
return mar_marzMapDao.mar_addMarzMap(marzMapEvt);
}

public int updateMarzMap(MarzMapEvt marzMapEvt)
{
return mar_marzMapDao.mar_updateMarzMap(marzMapEvt);
}

public int deleteMarzMap(List<String> ids)
{
return mar_marzMapDao.mar_deleteMarzMap(ids);
}

/**
 * @return 返回 mar_marzMapDao
 */
public MarzMapDao getMar_marzMapDao()
{
    return mar_marzMapDao;
}

/**
 * @param 对mar_marzMapDao进行赋值
 */
public void setMar_marzMapDao(MarzMapDao mar_marzMapDao)
{
    this.mar_marzMapDao = mar_marzMapDao;
}

}