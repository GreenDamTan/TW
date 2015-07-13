package com.moemao.tgks.mar.marzcard.service.impl;

import java.util.List;

import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.mar.marzcard.dao.MarzCardDao;
import com.moemao.tgks.mar.marzcard.entity.MarzCardEvt;
import com.moemao.tgks.mar.marzcard.entity.MarzCardReq;
import com.moemao.tgks.mar.marzcard.service.MarzCardService;
import com.moemao.tgks.mar.tool.MarUtil;

public class MarzCardServiceImpl implements MarzCardService
{
/**
 * ﻿MarzCardDao
 */
private MarzCardDao mar_marzCardDao;

public List<MarzCardEvt> queryMarzCard(MarzCardReq marzCardReq)
{
if (CommonUtil.isEmpty(marzCardReq.getSortSql()))
{
marzCardReq.setSortSql(" t.ID DESC");
}
return mar_marzCardDao.mar_queryMarzCard(marzCardReq);
}

public MarzCardEvt queryMarzCardById(String id)
{
MarzCardReq marzCardReq = new MarzCardReq();
marzCardReq.setId(id);
MarzCardEvt marzCardEvt = null;
List<MarzCardEvt> marzCardList = mar_marzCardDao.mar_queryMarzCard(marzCardReq);
if (!CommonUtil.isEmpty(marzCardList))
{
marzCardEvt = marzCardList.get(0);
}
return marzCardEvt;
}

public List<MarzCardEvt> queryMarzCardByIds(List<String> ids)
{
    return mar_marzCardDao.mar_queryMarzCardByIds(ids);
}

public int addMarzCard(MarzCardEvt marzCardEvt)
{
marzCardEvt.setId(MarUtil.createUniqueID());
return mar_marzCardDao.mar_addMarzCard(marzCardEvt);
}

public int updateMarzCard(MarzCardEvt marzCardEvt)
{
return mar_marzCardDao.mar_updateMarzCard(marzCardEvt);
}

public int deleteMarzCard(List<String> ids)
{
return mar_marzCardDao.mar_deleteMarzCard(ids);
}

/**
 * @return 返回 mar_marzCardDao
 */
public MarzCardDao getMar_marzCardDao()
{
    return mar_marzCardDao;
}

/**
 * @param 对mar_marzCardDao进行赋值
 */
public void setMar_marzCardDao(MarzCardDao mar_marzCardDao)
{
    this.mar_marzCardDao = mar_marzCardDao;
}

}