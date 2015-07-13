package com.moemao.tgks.mar.marzcard.service;

import java.util.List;

import com.moemao.tgks.mar.marzcard.entity.MarzCardEvt;
import com.moemao.tgks.mar.marzcard.entity.MarzCardReq;

public interface MarzCardService
{
public List<MarzCardEvt> queryMarzCard(MarzCardReq marzCardReq);

public MarzCardEvt queryMarzCardById(String id);

public List<MarzCardEvt> queryMarzCardByIds(List<String> ids);

public int addMarzCard(MarzCardEvt marzCardEvt);

public int updateMarzCard(MarzCardEvt marzCardEvt);

public int deleteMarzCard(List<String> ids);

}