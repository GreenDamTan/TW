package com.moemao.tgks.mar.marzsetting.service;

import java.util.List;

import com.moemao.tgks.mar.marzsetting.entity.MarzSettingEvt;
import com.moemao.tgks.mar.marzsetting.entity.MarzSettingReq;

public interface MarzSettingService
{
public List<MarzSettingEvt> queryMarzSetting(MarzSettingReq marzSettingReq);

public MarzSettingEvt queryMarzSettingById(String id);

public int addMarzSetting(MarzSettingEvt marzSettingEvt);

public int updateMarzSetting(MarzSettingEvt marzSettingEvt);

public int deleteMarzSetting(List<String> ids);

public int deleteMarzSettingByTgksId(String id);

}