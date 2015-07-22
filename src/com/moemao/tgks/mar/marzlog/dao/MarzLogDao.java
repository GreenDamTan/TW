package com.moemao.tgks.mar.marzlog.dao;

import java.util.List;
import org.springframework.dao.DataAccessException;
import com.moemao.tgks.common.core.dao.TGKSDao;
import com.moemao.tgks.mar.marzlog.entity.MarzLogEvt;
import com.moemao.tgks.mar.marzlog.entity.MarzLogReq;

public interface MarzLogDao extends TGKSDao
{
public List<MarzLogEvt> mar_queryMarzLog(MarzLogReq marzLogReq) throws DataAccessException;

public int mar_addMarzLog(MarzLogEvt marzLogEvt) throws DataAccessException;

public int mar_updateMarzLog(MarzLogEvt marzLogEvt) throws DataAccessException;

public int mar_deleteMarzLog(List<String> list) throws DataAccessException;

public int mar_resetMarzLog() throws DataAccessException;
}