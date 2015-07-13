package com.moemao.tgks.mar.marzmap.dao;

import java.util.List;
import org.springframework.dao.DataAccessException;
import com.moemao.tgks.common.core.dao.TGKSDao;
import com.moemao.tgks.mar.marzmap.entity.MarzMapEvt;
import com.moemao.tgks.mar.marzmap.entity.MarzMapReq;

public interface MarzMapDao extends TGKSDao
{
public List<MarzMapEvt> mar_queryMarzMap(MarzMapReq marzMapReq) throws DataAccessException;

public int mar_addMarzMap(MarzMapEvt marzMapEvt) throws DataAccessException;

public int mar_updateMarzMap(MarzMapEvt marzMapEvt) throws DataAccessException;

public int mar_deleteMarzMap(List<String> list) throws DataAccessException;
}