package com.moemao.tgks.mar.krsmacard.service.impl;

import java.util.List;

import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.mar.krsmacard.dao.KrsmaCardDao;
import com.moemao.tgks.mar.krsmacard.entity.KrsmaCardEvt;
import com.moemao.tgks.mar.krsmacard.entity.KrsmaCardReq;
import com.moemao.tgks.mar.krsmacard.service.KrsmaCardService;
import com.moemao.tgks.mar.tool.MarUtil;

public class KrsmaCardServiceImpl implements KrsmaCardService
{
/**
 * ﻿KrsmaCardDao
 */
private KrsmaCardDao mar_krsmaCardDao;

public List<KrsmaCardEvt> queryKrsmaCard(KrsmaCardReq krsmaCardReq)
{
if (CommonUtil.isEmpty(krsmaCardReq.getSortSql()))
{
krsmaCardReq.setSortSql(" t.CARDID DESC");
}
return mar_krsmaCardDao.mar_queryKrsmaCard(krsmaCardReq);
}

public KrsmaCardEvt queryKrsmaCardById(String id)
{
KrsmaCardReq krsmaCardReq = new KrsmaCardReq();
krsmaCardReq.setId(id);
KrsmaCardEvt krsmaCardEvt = null;
List<KrsmaCardEvt> krsmaCardList = mar_krsmaCardDao.mar_queryKrsmaCard(krsmaCardReq);
if (!CommonUtil.isEmpty(krsmaCardList))
{
krsmaCardEvt = krsmaCardList.get(0);
}
return krsmaCardEvt;
}

public KrsmaCardEvt queryKrsmaCardByCardId(String cardId)
{
KrsmaCardReq krsmaCardReq = new KrsmaCardReq();
krsmaCardReq.setCardId(cardId);
KrsmaCardEvt krsmaCardEvt = null;
List<KrsmaCardEvt> krsmaCardList = mar_krsmaCardDao.mar_queryKrsmaCard(krsmaCardReq);
if (!CommonUtil.isEmpty(krsmaCardList))
{
krsmaCardEvt = krsmaCardList.get(0);
}
return krsmaCardEvt;
}

public int addKrsmaCard(KrsmaCardEvt krsmaCardEvt)
{
krsmaCardEvt.setId(MarUtil.createUniqueID());
return mar_krsmaCardDao.mar_addKrsmaCard(krsmaCardEvt);
}

public int updateKrsmaCard(KrsmaCardEvt krsmaCardEvt)
{
return mar_krsmaCardDao.mar_updateKrsmaCard(krsmaCardEvt);
}

public int deleteKrsmaCard(List<String> ids)
{
return mar_krsmaCardDao.mar_deleteKrsmaCard(ids);
}

/**
 * @return 返回 mar_krsmaCardDao
 */
public KrsmaCardDao getMar_krsmaCardDao()
{
    return mar_krsmaCardDao;
}

/**
 * @param 对mar_krsmaCardDao进行赋值
 */
public void setMar_krsmaCardDao(KrsmaCardDao mar_krsmaCardDao)
{
    this.mar_krsmaCardDao = mar_krsmaCardDao;
}

@Override
public int onSellKrsmaCard(List<String> ids)
{
    return mar_krsmaCardDao.mar_onSellKrsmaCard(ids);
}

@Override
public int offSellKrsmaCard(List<String> ids)
{
    return mar_krsmaCardDao.mar_offSellKrsmaCard(ids);
}

@Override
public int onFameKrsmaCard(List<String> ids)
{
    return mar_krsmaCardDao.mar_onFameKrsmaCard(ids);
}

@Override
public int offFameKrsmaCard(List<String> ids)
{
    return mar_krsmaCardDao.mar_offFameKrsmaCard(ids);
}

}
