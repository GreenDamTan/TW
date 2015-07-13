package com.moemao.tgks.mar.marzaccount.dao;

import java.util.List;
import org.springframework.dao.DataAccessException;
import com.moemao.tgks.common.core.dao.TGKSDao;
import com.moemao.tgks.mar.marzaccount.entity.MarzAccountEvt;
import com.moemao.tgks.mar.marzaccount.entity.MarzAccountReq;

public interface MarzAccountDao extends TGKSDao
{
public List<MarzAccountEvt> mar_queryMarzAccount(MarzAccountReq marzAccountReq) throws DataAccessException;

public int mar_addMarzAccount(MarzAccountEvt marzAccountEvt) throws DataAccessException;

public int mar_updateMarzAccount(MarzAccountEvt marzAccountEvt) throws DataAccessException;

public int mar_deleteMarzAccount(List<String> list) throws DataAccessException;

public List<MarzAccountEvt> mar_queryMarzAccountByIds(List<String> list) throws DataAccessException;
}