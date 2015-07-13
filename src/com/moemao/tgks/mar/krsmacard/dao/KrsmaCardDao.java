package com.moemao.tgks.mar.krsmacard.dao;

import java.util.List;
import org.springframework.dao.DataAccessException;
import com.moemao.tgks.common.core.dao.TGKSDao;
import com.moemao.tgks.mar.krsmacard.entity.KrsmaCardEvt;
import com.moemao.tgks.mar.krsmacard.entity.KrsmaCardReq;

public interface KrsmaCardDao extends TGKSDao
{
public List<KrsmaCardEvt> mar_queryKrsmaCard(KrsmaCardReq krsmaCardReq) throws DataAccessException;

public int mar_addKrsmaCard(KrsmaCardEvt krsmaCardEvt) throws DataAccessException;

public int mar_updateKrsmaCard(KrsmaCardEvt krsmaCardEvt) throws DataAccessException;

public int mar_deleteKrsmaCard(List<String> list) throws DataAccessException;
}