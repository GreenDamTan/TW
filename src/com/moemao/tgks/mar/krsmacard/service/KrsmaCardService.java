package com.moemao.tgks.mar.krsmacard.service;

import java.util.List;

import com.moemao.tgks.mar.krsmacard.entity.KrsmaCardEvt;
import com.moemao.tgks.mar.krsmacard.entity.KrsmaCardReq;

public interface KrsmaCardService
{
public List<KrsmaCardEvt> queryKrsmaCard(KrsmaCardReq krsmaCardReq);

public KrsmaCardEvt queryKrsmaCardById(String id);

public KrsmaCardEvt queryKrsmaCardByCardId(String cardId);

public int addKrsmaCard(KrsmaCardEvt krsmaCardEvt);

public int updateKrsmaCard(KrsmaCardEvt krsmaCardEvt);

public int deleteKrsmaCard(List<String> ids);

}