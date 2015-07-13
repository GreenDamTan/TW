package com.moemao.tgks.mar.account.service;

import java.util.List;

import com.moemao.tgks.mar.account.entity.AccountEvt;
import com.moemao.tgks.mar.account.entity.AccountReq;

public interface AccountService
{
public List<AccountEvt> queryAccount(AccountReq accountReq);

public AccountEvt queryAccountById(String id);

public List<AccountEvt> queryAccountByIds(List<String> ids);

public int addAccount(AccountEvt accountEvt);

public int updateAccount(AccountEvt accountEvt);

public int deleteAccount(List<String> ids);

public void initialAccount(List<String> ids);

public void checkCardAccount(List<String> ids);

public void gachaAccount(List<String> ids);

public void forInviteAccount(List<String> ids);

public void allCheckCardAccount();

public void allGachaAccount();

}