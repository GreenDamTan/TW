package com.moemao.tgks.mar.marzaccount.service.impl;

import java.util.Date;
import java.util.List;

import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.mar.marz.tool.MarzConstant;
import com.moemao.tgks.mar.marzaccount.dao.MarzAccountDao;
import com.moemao.tgks.mar.marzaccount.entity.MarzAccountEvt;
import com.moemao.tgks.mar.marzaccount.entity.MarzAccountReq;
import com.moemao.tgks.mar.marzaccount.service.MarzAccountService;
import com.moemao.tgks.mar.tool.MarUtil;

public class MarzAccountServiceImpl implements MarzAccountService
{
    /**
     * ﻿MarzAccountDao
     */
    private MarzAccountDao mar_marzAccountDao;
    
    public List<MarzAccountEvt> queryMarzAccount(MarzAccountReq marzAccountReq)
    {
        if (CommonUtil.isEmpty(marzAccountReq.getSortSql()))
        {
        marzAccountReq.setSortSql(" t.ID DESC");
        }
        return mar_marzAccountDao.mar_queryMarzAccount(marzAccountReq);
    }
    
    public List<MarzAccountEvt> queryMarzAccountOnline()
    {
        MarzAccountReq marzAccountReq = new MarzAccountReq();
        marzAccountReq.setStatus(MarzConstant.MARZ_ACCOUNT_STATUS_1);
        marzAccountReq.setEndTime(new Date());
        marzAccountReq.setSortSql(" t.ID");
        return mar_marzAccountDao.mar_queryMarzAccount(marzAccountReq);
    }
    
    public MarzAccountEvt queryMarzAccountById(String id)
    {
        MarzAccountReq marzAccountReq = new MarzAccountReq();
        marzAccountReq.setId(id);
        MarzAccountEvt marzAccountEvt = null;
        List<MarzAccountEvt> marzAccountList = mar_marzAccountDao.mar_queryMarzAccount(marzAccountReq);
        if (!CommonUtil.isEmpty(marzAccountList))
        {
        marzAccountEvt = marzAccountList.get(0);
        }
        return marzAccountEvt;
    }
    
    public List<MarzAccountEvt> queryMarzAccountByIds(List<String> ids)
    {
        return mar_marzAccountDao.mar_queryMarzAccountByIds(ids);
    }
    
    public int addMarzAccount(MarzAccountEvt marzAccountEvt)
    {
        marzAccountEvt.setId(MarUtil.createUniqueID());
        marzAccountEvt.setEndTime(new Date());
        return mar_marzAccountDao.mar_addMarzAccount(marzAccountEvt);
    }
    
    public int updateMarzAccount(MarzAccountEvt marzAccountEvt)
    {
        return mar_marzAccountDao.mar_updateMarzAccount(marzAccountEvt);
    }
    
    public int deleteMarzAccount(List<String> ids)
    {
        return mar_marzAccountDao.mar_deleteMarzAccount(ids);
    }
    
    /**
     * @return 返回 mar_marzAccountDao
     */
    public MarzAccountDao getMar_marzAccountDao()
    {
        return mar_marzAccountDao;
    }
    
    /**
     * @param 对mar_marzAccountDao进行赋值
     */
    public void setMar_marzAccountDao(MarzAccountDao mar_marzAccountDao)
    {
        this.mar_marzAccountDao = mar_marzAccountDao;
    }

}