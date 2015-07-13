package com.moemao.tgks.mar.marzsetting.dao;

import java.util.List;
import org.springframework.dao.DataAccessException;
import com.moemao.tgks.common.core.dao.TGKSDao;
import com.moemao.tgks.mar.marzsetting.entity.MarzSettingEvt;
import com.moemao.tgks.mar.marzsetting.entity.MarzSettingReq;

public interface MarzSettingDao extends TGKSDao
{
public List<MarzSettingEvt> mar_queryMarzSetting(MarzSettingReq marzSettingReq) throws DataAccessException;

public int mar_addMarzSetting(MarzSettingEvt marzSettingEvt) throws DataAccessException;

public int mar_updateMarzSetting(MarzSettingEvt marzSettingEvt) throws DataAccessException;

public int mar_deleteMarzSetting(List<String> list) throws DataAccessException;

public int mar_deleteMarzSettingByTgksId(String id) throws DataAccessException;
}