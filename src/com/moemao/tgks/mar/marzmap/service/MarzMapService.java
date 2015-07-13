package com.moemao.tgks.mar.marzmap.service;

import java.util.List;

import com.moemao.tgks.mar.marzmap.entity.MarzMapEvt;
import com.moemao.tgks.mar.marzmap.entity.MarzMapReq;

public interface MarzMapService
{
public List<MarzMapEvt> queryMarzMap(MarzMapReq marzMapReq);

public MarzMapEvt queryMarzMapById(String id);

public int addMarzMap(MarzMapEvt marzMapEvt);

public int updateMarzMap(MarzMapEvt marzMapEvt);

public int deleteMarzMap(List<String> ids);

}