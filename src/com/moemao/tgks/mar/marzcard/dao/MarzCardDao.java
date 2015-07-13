package com.moemao.tgks.mar.marzcard.dao;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.moemao.tgks.common.core.dao.TGKSDao;
import com.moemao.tgks.mar.marzcard.entity.MarzCardEvt;
import com.moemao.tgks.mar.marzcard.entity.MarzCardReq;

public interface MarzCardDao extends TGKSDao
{
public List<MarzCardEvt> mar_queryMarzCard(MarzCardReq marzCardReq) throws DataAccessException;

public List<MarzCardEvt> mar_queryMarzCardByIds(List<String> list) throws DataAccessException;

public int mar_addMarzCard(MarzCardEvt marzCardEvt) throws DataAccessException;

public int mar_updateMarzCard(MarzCardEvt marzCardEvt) throws DataAccessException;

public int mar_deleteMarzCard(List<String> list) throws DataAccessException;
}