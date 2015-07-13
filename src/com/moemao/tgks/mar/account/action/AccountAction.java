package com.moemao.tgks.mar.account.action;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import net.sf.json.JSONObject;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.moemao.tgks.common.core.action.TGKSAction;
import com.moemao.tgks.common.tool.CommonConstant;
import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.common.tool.StringUtil;
import com.moemao.tgks.mar.account.entity.AccountEvt;
import com.moemao.tgks.mar.account.entity.AccountReq;
import com.moemao.tgks.mar.account.service.AccountService;
import com.moemao.tgks.mar.krsmacard.entity.KrsmaCardEvt;
import com.moemao.tgks.mar.krsmacard.entity.KrsmaCardReq;
import com.moemao.tgks.mar.krsmacard.service.KrsmaCardService;

public class AccountAction extends TGKSAction
{

    /** 
     * @Fields serialVersionUID
     */ 
    private static final long serialVersionUID = -4600107108074187231L;

    private static Log logger = LogFactory.getLog(AccountAction.class);
    
    /**
     * ﻿Account业务接口
     */
    private AccountService mar_accountService;
    
    /**
     * ﻿KrsmaCard业务接口
     */
    private KrsmaCardService mar_krsmaCardService;
    
    /**
     * 查询结果集
     */
    private List<AccountEvt> list;
    
    /**
     * ﻿AccountEvt对象
     */
    private AccountEvt accountEvt;
    
    /**
     * ﻿Account查询条件封装对象（自动生成代码后需要new对象）
     */
    private AccountReq accountReq = new AccountReq();
    
    private String uuidExport = "";
    
    private File upload;
    
    public String accountManager()
    {
    return SUCCESS;
    }
    
    public String queryAccount()
    {
        list = mar_accountService.queryAccount(accountReq);
        
        // 查询所有UR SR
        List<KrsmaCardEvt> cardURList = mar_krsmaCardService.queryKrsmaCard(new KrsmaCardReq());
        
        List<String> iconIds;
        List<String> iconList;
        
        for (AccountEvt account : list)
        {
            if (!CommonUtil.isEmpty(account.getCardIds()))
            {
                iconIds = CommonUtil.stringToList(account.getCardIds());
                iconList = new ArrayList<String>();
                for (String id : iconIds)
                {
                    for (KrsmaCardEvt card : cardURList)
                    {
                        if (id.equals(card.getCardId()))
                        {
                            iconList.add(card.getIconUrl());
                            break;
                        }
                    }
                }
                
                account.setIconList(iconList);
            }
        }
        
        return SUCCESS;
    }
    
    public String queryAccountTB_login()
    {
        list = mar_accountService.queryAccount(accountReq);
        
        // 查询所有UR SR
        List<KrsmaCardEvt> cardURList = mar_krsmaCardService.queryKrsmaCard(new KrsmaCardReq());
        
        List<String> iconIds;
        List<String> iconList;
        List<AccountEvt> removeList = new ArrayList<AccountEvt>();
        
        for (AccountEvt account : list)
        {
            if (account.getUrNumA() < 2 && account.getUrNumB() < 2 && account.getUrNumC() < 2 && account.getUrNumD() < 2 )
            {
                removeList.add(account);
                continue;
            }
            
            iconIds = CommonUtil.stringToList(account.getCardIds());
            iconList = new ArrayList<String>();
            for (String id : iconIds)
            {
                for (KrsmaCardEvt card : cardURList)
                {
                    if (id.equals(card.getCardId()))
                    {
                        iconList.add(card.getIconUrl());
                        break;
                    }
                }
            }
            
            account.setIconList(iconList);
        }
        
        this.list.removeAll(removeList);
        
        return SUCCESS;
    }
    
    public String editAccountPage()
    {
    String id = this.getRequest().getParameter("id");
    if (!CommonUtil.isEmpty(id))
    {
    accountEvt = mar_accountService.queryAccountById(id);
    }
    return SUCCESS;
    }
    
    public String editAccount()
    {
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "AccountAction.updateAccount");
    int result = 0;
    if (CommonUtil.isEmpty(accountEvt.getId()))
    {
    result = mar_accountService.addAccount(accountEvt);
    CommonUtil.systemLog("mar/editAccount.action", CommonConstant.SYSTEMLOG_TYPE_1, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("新增accountEvt\n%S", accountEvt.toString()));
    }
    else
    {
    result = mar_accountService.updateAccount(accountEvt);
    CommonUtil.systemLog("mar/editAccount.action", CommonConstant.SYSTEMLOG_TYPE_2, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("修改accountEvt\n%S", accountEvt.toString()));
    }
    CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_EXECUTE_NUMS, StringUtil.toBeString(result));
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "AccountAction.updateAccount");
    return SUCCESS;
    }
    
    public String deleteAccount()
    {
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "AccountAction.deleteAccount");
    String ids = this.getRequest().getParameter("ids");
    int result = mar_accountService.deleteAccount(CommonUtil.stringToList(ids));
    CommonUtil.systemLog("mar/deleteAccount.action", CommonConstant.SYSTEMLOG_TYPE_3, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("删除accountEvt\nID:%S", ids));
    CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_EXECUTE_NUMS, StringUtil.toBeString(result));
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "AccountAction.deleteAccount");
    return SUCCESS;
    }
    
    /**
     * 
     * @Title: initialAccount
     * @Description: 刷初始
     * @return
     * @return String 返回类型
     * @throws
     */
    public String initialAccount()
    {
        String ids = this.getRequest().getParameter("ids");
        mar_accountService.initialAccount(CommonUtil.stringToList(ids));
        return SUCCESS;
    }
    
    public String checkCardAccount()
    {
        String ids = this.getRequest().getParameter("ids");
        mar_accountService.checkCardAccount(CommonUtil.stringToList(ids));
        return SUCCESS;
    }
    
    public String gachaAccount()
    {
        String ids = this.getRequest().getParameter("ids");
        mar_accountService.gachaAccount(CommonUtil.stringToList(ids));
        return SUCCESS;
    }
    
    public String allCheckCardAccount()
    {
        mar_accountService.allCheckCardAccount();
        return SUCCESS;
    }
    
    public String allGachaAccount()
    {
        mar_accountService.allGachaAccount();
        return SUCCESS;
    }
    
    public String exportAccountUuid()
    {
        String ids = this.getRequest().getParameter("ids");
        list = mar_accountService.queryAccountByIds(CommonUtil.stringToList(ids));
        for (AccountEvt evt : list)
        {
            if (null != evt && evt.getUuid() != null && evt.getUuid() != "")
            {
                uuidExport += evt.getAccountKey() + "\n";
            }
        }
        return SUCCESS;
    }
    
    public String forInviteAccount()
    {
        //String ids = this.getRequest().getParameter("ids");
        //mar_accountService.forInviteAccount(CommonUtil.stringToList(ids));
        mar_accountService.forInviteAccount(new ArrayList<String>());
        return SUCCESS;
    }
    
    public String uploadAccount()
    {
        String lineTXT = null;
        String encoding = "UTF-8";
        JSONObject json = null;
        AccountEvt account;
        
        try
        {
            InputStreamReader read = new InputStreamReader(new FileInputStream(upload), encoding);
            BufferedReader bufferedReader = new BufferedReader(read);
            while ((lineTXT = bufferedReader.readLine()) != null)
            {
                if (lineTXT.contains("uuid"))
                {
                    json = JSONObject.fromObject(lineTXT);
                    
                    accountReq = new AccountReq();
                    accountReq.setUuid(json.getString("uuid"));
                    list = this.mar_accountService.queryAccount(accountReq);
                    
                    // 如果UUID已经存在，那更新这个账号的hash
                    if (!CommonUtil.isEmpty(list))
                    {
                        account = list.get(0);
                        account.setHashToken(json.getString("hash_token"));
                        this.mar_accountService.updateAccount(account);
                        continue;
                    }
                    
                    account = new AccountEvt();
                    account.setUuid(json.getString("uuid"));
                    account.setHashToken(json.getString("hash_token"));
                    account.setAccountKey("xx");
                    this.mar_accountService.addAccount(account);
                }
            }
            
            bufferedReader.close();
            read.close();
        }
        catch (Exception e)
        {
            
        }
        
        return SUCCESS;
    }
    
    /**
     * @return 返回 mar_accountService
     */
    public AccountService getMar_accountService()
    {
        return mar_accountService;
    }
    
    /**
     * @param 对mar_accountService进行赋值
     */
    public void setMar_accountService(AccountService mar_accountService)
    {
        this.mar_accountService = mar_accountService;
    }
    
    /**
     * @return 返回 list
     */
    public List<AccountEvt> getList()
    {
        return list;
    }
    
    /**
     * @param 对list进行赋值
     */
    public void setList(List<AccountEvt> list)
    {
        this.list = list;
    }
    
    /**
     * @return 返回 accountEvt
     */
    public AccountEvt getAccountEvt()
    {
        return accountEvt;
    }
    
    /**
     * @param 对accountEvt进行赋值
     */
    public void setAccountEvt(AccountEvt accountEvt)
    {
        this.accountEvt = accountEvt;
    }
    
    /**
     * @return 返回 accountReq
     */
    public AccountReq getAccountReq()
    {
        return accountReq;
    }
    
    /**
     * @param 对accountReq进行赋值
     */
    public void setAccountReq(AccountReq accountReq)
    {
        this.accountReq = accountReq;
    }

    public String getUuidExport()
    {
        return uuidExport;
    }

    public void setUuidExport(String uuidExport)
    {
        this.uuidExport = uuidExport;
    }

    public KrsmaCardService getMar_krsmaCardService()
    {
        return mar_krsmaCardService;
    }

    public void setMar_krsmaCardService(KrsmaCardService mar_krsmaCardService)
    {
        this.mar_krsmaCardService = mar_krsmaCardService;
    }

    public File getUpload()
    {
        return upload;
    }

    public void setUpload(File upload)
    {
        this.upload = upload;
    }

}