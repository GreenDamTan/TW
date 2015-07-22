package com.moemao.tgks.mar.marzitem.service.impl;

import java.util.List;

import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.mar.marzitem.dao.MarzItemDao;
import com.moemao.tgks.mar.marzitem.entity.MarzItemEvt;
import com.moemao.tgks.mar.marzitem.entity.MarzItemReq;
import com.moemao.tgks.mar.marzitem.service.MarzItemService;
import com.moemao.tgks.mar.tool.MarUtil;

public class MarzItemServiceImpl implements MarzItemService
{
/**
 * ﻿MarzItemDao
 */
private MarzItemDao mar_marzItemDao;

public List<MarzItemEvt> queryMarzItem(MarzItemReq marzItemReq)
{
if (CommonUtil.isEmpty(marzItemReq.getSortSql()))
{
marzItemReq.setSortSql(" t.ITEMID DESC");
}
return mar_marzItemDao.mar_queryMarzItem(marzItemReq);
}

public MarzItemEvt queryMarzItemById(String id)
{
MarzItemReq marzItemReq = new MarzItemReq();
marzItemReq.setId(id);
MarzItemEvt marzItemEvt = null;
List<MarzItemEvt> marzItemList = mar_marzItemDao.mar_queryMarzItem(marzItemReq);
if (!CommonUtil.isEmpty(marzItemList))
{
marzItemEvt = marzItemList.get(0);
}
return marzItemEvt;
}

public int addMarzItem(MarzItemEvt marzItemEvt)
{
marzItemEvt.setId(MarUtil.createUniqueID());
return mar_marzItemDao.mar_addMarzItem(marzItemEvt);
}

public int updateMarzItem(MarzItemEvt marzItemEvt)
{
return mar_marzItemDao.mar_updateMarzItem(marzItemEvt);
}

public int deleteMarzItem(List<String> ids)
{
return mar_marzItemDao.mar_deleteMarzItem(ids);
}

/**
 * @return 返回 mar_marzItemDao
 */
public MarzItemDao getMar_marzItemDao()
{
    return mar_marzItemDao;
}

/**
 * @param 对mar_marzItemDao进行赋值
 */
public void setMar_marzItemDao(MarzItemDao mar_marzItemDao)
{
    this.mar_marzItemDao = mar_marzItemDao;
}

}