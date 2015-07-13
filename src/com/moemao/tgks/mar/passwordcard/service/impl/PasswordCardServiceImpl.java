package com.moemao.tgks.mar.passwordcard.service.impl;

import java.util.List;

import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.mar.passwordcard.dao.PasswordCardDao;
import com.moemao.tgks.mar.passwordcard.entity.PasswordCardEvt;
import com.moemao.tgks.mar.passwordcard.entity.PasswordCardReq;
import com.moemao.tgks.mar.passwordcard.service.PasswordCardService;
import com.moemao.tgks.mar.tool.MarUtil;

public class PasswordCardServiceImpl implements PasswordCardService
{
    /**
     * ﻿PasswordCardDao
     */
    private PasswordCardDao mar_passwordCardDao;
    
    public List<PasswordCardEvt> queryPasswordCard(
            PasswordCardReq passwordCardReq)
    {
        if (CommonUtil.isEmpty(passwordCardReq.getSortSql()))
        {
            passwordCardReq.setSortSql(" t.ID DESC");
        }
        return mar_passwordCardDao.mar_queryPasswordCard(passwordCardReq);
    }
    
    public PasswordCardEvt queryPasswordCardById(String id)
    {
        PasswordCardReq passwordCardReq = new PasswordCardReq();
        passwordCardReq.setId(id);
        PasswordCardEvt passwordCardEvt = null;
        List<PasswordCardEvt> passwordCardList = mar_passwordCardDao
                .mar_queryPasswordCard(passwordCardReq);
        if (!CommonUtil.isEmpty(passwordCardList))
        {
            passwordCardEvt = passwordCardList.get(0);
        }
        return passwordCardEvt;
    }
    
    public List<PasswordCardEvt> queryPasswordCardByIds(List<String> ids)
    {
        return mar_passwordCardDao.mar_queryPasswordCardByIds(ids);
    }
    
    public int addPasswordCard(PasswordCardEvt passwordCardEvt)
    {
        passwordCardEvt.setId(MarUtil.createUniqueID());
        return mar_passwordCardDao.mar_addPasswordCard(passwordCardEvt);
    }
    
    public int updatePasswordCard(PasswordCardEvt passwordCardEvt)
    {
        return mar_passwordCardDao.mar_updatePasswordCard(passwordCardEvt);
    }
    
    public int deletePasswordCard(List<String> ids)
    {
        return mar_passwordCardDao.mar_deletePasswordCard(ids);
    }
    
    /**
     * @return 返回 mar_passwordCardDao
     */
    public PasswordCardDao getMar_passwordCardDao()
    {
        return mar_passwordCardDao;
    }
    
    /**
     * @param 对mar_passwordCardDao进行赋值
     */
    public void setMar_passwordCardDao(PasswordCardDao mar_passwordCardDao)
    {
        this.mar_passwordCardDao = mar_passwordCardDao;
    }
    
}