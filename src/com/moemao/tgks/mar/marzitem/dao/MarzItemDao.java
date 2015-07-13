package com.moemao.tgks.mar.marzitem.dao;

import java.util.List;
import org.springframework.dao.DataAccessException;
import com.moemao.tgks.common.core.dao.TGKSDao;
import com.moemao.tgks.mar.marzitem.entity.MarzItemEvt;
import com.moemao.tgks.mar.marzitem.entity.MarzItemReq;

public interface MarzItemDao extends TGKSDao
{
public List<MarzItemEvt> mar_queryMarzItem(MarzItemReq marzItemReq) throws DataAccessException;

public int mar_addMarzItem(MarzItemEvt marzItemEvt) throws DataAccessException;

public int mar_updateMarzItem(MarzItemEvt marzItemEvt) throws DataAccessException;

public int mar_deleteMarzItem(List<String> list) throws DataAccessException;
}