package com.moemao.tgks.mar.marzitem.service;

import java.util.List;

import com.moemao.tgks.mar.marzitem.entity.MarzItemEvt;
import com.moemao.tgks.mar.marzitem.entity.MarzItemReq;

public interface MarzItemService
{
public List<MarzItemEvt> queryMarzItem(MarzItemReq marzItemReq);

public MarzItemEvt queryMarzItemById(String id);

public int addMarzItem(MarzItemEvt marzItemEvt);

public int updateMarzItem(MarzItemEvt marzItemEvt);

public int deleteMarzItem(List<String> ids);

}