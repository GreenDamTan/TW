package com.moemao.tgks.mar.account.dao;

import java.util.List;
import org.springframework.dao.DataAccessException;
import com.moemao.tgks.common.core.dao.TGKSDao;
import com.moemao.tgks.mar.account.entity.AccountEvt;
import com.moemao.tgks.mar.account.entity.AccountReq;

public interface AccountDao extends TGKSDao
{
public List<AccountEvt> mar_queryAccount(AccountReq accountReq) throws DataAccessException;

public int mar_addAccount(AccountEvt accountEvt) throws DataAccessException;

public int mar_updateAccount(AccountEvt accountEvt) throws DataAccessException;

public int mar_deleteAccount(List<String> list) throws DataAccessException;

public List<AccountEvt> mar_queryAccountByIds(List<String> list) throws DataAccessException;
}