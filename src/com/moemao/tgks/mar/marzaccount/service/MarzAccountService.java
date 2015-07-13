package com.moemao.tgks.mar.marzaccount.service;

import java.util.List;

import com.moemao.tgks.mar.marzaccount.entity.MarzAccountEvt;
import com.moemao.tgks.mar.marzaccount.entity.MarzAccountReq;

public interface MarzAccountService
{
public List<MarzAccountEvt> queryMarzAccount(MarzAccountReq marzAccountReq);

public List<MarzAccountEvt> queryMarzAccountOnline();

public List<MarzAccountEvt> queryMarzAccountByIds(List<String> ids);

public MarzAccountEvt queryMarzAccountById(String id);

public int addMarzAccount(MarzAccountEvt marzAccountEvt);

public int updateMarzAccount(MarzAccountEvt marzAccountEvt);

public int deleteMarzAccount(List<String> ids);

}