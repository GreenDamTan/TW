package com.moemao.tgks.mar.passwordcard.dao;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.moemao.tgks.common.core.dao.TGKSDao;
import com.moemao.tgks.mar.passwordcard.entity.PasswordCardEvt;
import com.moemao.tgks.mar.passwordcard.entity.PasswordCardReq;


public interface PasswordCardDao extends TGKSDao
{
public List<PasswordCardEvt> mar_queryPasswordCard(PasswordCardReq passwordCardReq) throws DataAccessException;

public int mar_addPasswordCard(PasswordCardEvt passwordCardEvt) throws DataAccessException;

public List<PasswordCardEvt> mar_queryPasswordCardByIds(List<String> list) throws DataAccessException;

public int mar_updatePasswordCard(PasswordCardEvt passwordCardEvt) throws DataAccessException;

public int mar_deletePasswordCard(List<String> list) throws DataAccessException;
}