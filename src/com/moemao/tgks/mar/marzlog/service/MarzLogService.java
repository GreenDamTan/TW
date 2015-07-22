package com.moemao.tgks.mar.marzlog.service;

import java.util.List;

import com.moemao.tgks.mar.marzaccount.entity.MarzAccountEvt;
import com.moemao.tgks.mar.marzlog.entity.MarzLogEvt;
import com.moemao.tgks.mar.marzlog.entity.MarzLogReq;

public interface MarzLogService
{
public List<MarzLogEvt> queryMarzLog(MarzLogReq marzLogReq);

public MarzLogEvt queryMarzLogById(String id);

public int addMarzLog(MarzLogEvt marzLogEvt);

public int marzLog(MarzAccountEvt account, String type, String info);

public int updateMarzLog(MarzLogEvt marzLogEvt);

public int deleteMarzLog(List<String> ids);

public int resetMarzLog();

}