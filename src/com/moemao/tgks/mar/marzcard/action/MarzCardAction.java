package com.moemao.tgks.mar.marzcard.action;

import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.UUID;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.moemao.tgks.common.core.action.TGKSAction;
import com.moemao.tgks.common.tool.CommonConstant;
import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.common.tool.StringUtil;
import com.moemao.tgks.mar.marz.tool.MarzConstant;
import com.moemao.tgks.mar.marzaccount.entity.MarzAccountEvt;
import com.moemao.tgks.mar.marzaccount.entity.MarzAccountReq;
import com.moemao.tgks.mar.marzaccount.service.MarzAccountService;
import com.moemao.tgks.mar.marzcard.entity.MarzCardEvt;
import com.moemao.tgks.mar.marzcard.entity.MarzCardReq;
import com.moemao.tgks.mar.marzcard.service.MarzCardService;
import com.moemao.tgks.mar.marzlog.service.MarzLogService;

public class MarzCardAction extends TGKSAction
{

    /** 
     * @Fields serialVersionUID
     */ 
    private static final long serialVersionUID = 4801506369257113522L;

    private static Log logger = LogFactory.getLog(MarzCardAction.class);
    
    /**
     * ﻿MarzCard业务接口
     */
    private MarzCardService mar_marzCardService;
    
    private MarzAccountService mar_marzAccountService;
    
    private MarzLogService mar_marzLogService;
    
    /**
     * 查询结果集
     */
    private List<MarzCardEvt> list;
    
    /**
     * ﻿MarzCardEvt对象
     */
    private MarzCardEvt marzCardEvt;
    
    /**
     * ﻿MarzCard查询条件封装对象（自动生成代码后需要new对象）
     */
    private MarzCardReq marzCardReq = new MarzCardReq();
    
    private String marzCardExport;
    
    public String marzCardManager()
    {
    return SUCCESS;
    }
    
    public String queryMarzCard()
    {
    list = mar_marzCardService.queryMarzCard(marzCardReq);
    return SUCCESS;
    }
    
    public String editMarzCardPage()
    {
    String id = this.getRequest().getParameter("id");
    if (!CommonUtil.isEmpty(id))
    {
    marzCardEvt = mar_marzCardService.queryMarzCardById(id);
    }
    return SUCCESS;
    }
    
    public String editMarzCard()
    {
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "MarzCardAction.updateMarzCard");
    int result = 0;
    if (CommonUtil.isEmpty(marzCardEvt.getId()))
    {
    result = mar_marzCardService.addMarzCard(marzCardEvt);
    CommonUtil.systemLog("mar/editMarzCard.action", CommonConstant.SYSTEMLOG_TYPE_1, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("新增marzCardEvt\n%S", marzCardEvt.toString()));
    }
    else
    {
    result = mar_marzCardService.updateMarzCard(marzCardEvt);
    CommonUtil.systemLog("mar/editMarzCard.action", CommonConstant.SYSTEMLOG_TYPE_2, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("修改marzCardEvt\n%S", marzCardEvt.toString()));
    }
    CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_EXECUTE_NUMS, StringUtil.toBeString(result));
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "MarzCardAction.updateMarzCard");
    return SUCCESS;
    }
    
    public String deleteMarzCard()
    {
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "MarzCardAction.deleteMarzCard");
    String ids = this.getRequest().getParameter("ids");
    int result = mar_marzCardService.deleteMarzCard(CommonUtil.stringToList(ids));
    CommonUtil.systemLog("mar/deleteMarzCard.action", CommonConstant.SYSTEMLOG_TYPE_3, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("删除marzCardEvt\nID:%S", ids));
    CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_EXECUTE_NUMS, StringUtil.toBeString(result));
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "MarzCardAction.deleteMarzCard");
    return SUCCESS;
    }
    
    public String renewMarzCard()
    {
        String ids = this.getRequest().getParameter("ids");
        if (!CommonUtil.isEmpty(ids))
        {
            list = mar_marzCardService.queryMarzCardByIds(CommonUtil.stringToList(ids));
            
            for (MarzCardEvt marzCardEvt : list)
            {
                marzCardEvt.setStatus(MarzConstant.MARZCARD_STATUS_0);
                marzCardEvt.setUsedTime(null);
                mar_marzCardService.updateMarzCard(marzCardEvt);
            }
        }
        return SUCCESS;
    }
    
    /**
     * 
     * @Title: createMarzCard
     * @Description: 创建一批卡密
     * @return
     * @return String 返回类型
     * @throws
     */
    public String createMarzCard()
    {
        String type = this.getRequest().getParameter("type");
        int num = 10;
        
        for (int i = 0; i < num; i++)
        {
            marzCardEvt = new MarzCardEvt();
            marzCardEvt.setStatus(MarzConstant.MARZCARD_STATUS_0);
            marzCardEvt.setType(type);
            marzCardEvt.setPassword(UUID.randomUUID().toString().replace("-", ""));
            
            this.mar_marzCardService.addMarzCard(marzCardEvt);
        }
        
        return SUCCESS;
    }
    
    public String exportMarzCard()
    {
        CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "MarzCardAction.exportMarzCard");
        marzCardExport = "";
        String ids = this.getRequest().getParameter("ids");
        list = mar_marzCardService.queryMarzCardByIds(CommonUtil.stringToList(ids));
        for (MarzCardEvt marzCardEvt : list)
        {
            if (null != marzCardEvt && marzCardEvt.getPassword() != null && marzCardEvt.getPassword() != "")
            {
                marzCardExport += marzCardEvt.getPassword() + "\n";
            }
        }
        CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_EXECUTE_NUMS, StringUtil.toBeString(list.size()));
        CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "MarzCardAction.exportMarzCard");
        return SUCCESS;
    }
    
    public String marzCardUsePage()
    {
        return SUCCESS;
    }
    
    public String marzCardUse()
    {
        String password = this.getRequest().getParameter("password");
        marzCardReq = new MarzCardReq();
        marzCardReq.setPassword(password);
        
        list = this.mar_marzCardService.queryMarzCard(marzCardReq);
        
        if (CommonUtil.isEmpty(list) || list.size() == 0)
        {
            return ERROR;
        }
        
        marzCardEvt = list.get(0);
        
        if (MarzConstant.MARZCARD_STATUS_0.equals(marzCardEvt.getStatus()))
        {
            // 先更新点卡状态为已使用
            marzCardEvt.setStatus(MarzConstant.MARZCARD_STATUS_1);
            this.mar_marzCardService.updateMarzCard(marzCardEvt);
            
            // 开始为账号充值时间
            MarzAccountReq marzAccountReq = new MarzAccountReq();
            marzAccountReq.setTgksId(CommonUtil.getUserInfoBySession().getUsername());
            List<MarzAccountEvt> accountList = this.mar_marzAccountService.queryMarzAccount(marzAccountReq);
            if (CommonUtil.isEmpty(accountList) || accountList.size() == 0)
            {
                // 不存在账号 退回点卡状态
                marzCardEvt.setStatus(MarzConstant.MARZCARD_STATUS_0);
                this.mar_marzCardService.updateMarzCard(marzCardEvt);
            }
            else
            {
                // 点卡类型
                int cardType = 5;
                // 增加数量
                int plusNum = +1;
                String cardTypeStr = "日卡";
                
                if (MarzConstant.MARZCARD_TYPE_0.equals(marzCardEvt.getType()))
                {
                    // 日卡
                    cardType = 5;
                    plusNum = +1;
                    cardTypeStr = "日卡";
                }
                else if (MarzConstant.MARZCARD_TYPE_1.equals(marzCardEvt.getType()))
                {
                    // 周卡
                    cardType = 3;
                    plusNum = +1;
                    cardTypeStr = "周卡";
                }
                else if (MarzConstant.MARZCARD_TYPE_2.equals(marzCardEvt.getType()))
                {
                    // 月卡
                    cardType = 2;
                    plusNum = +1;
                    cardTypeStr = "月卡";
                }
                else if (MarzConstant.MARZCARD_TYPE_3.equals(marzCardEvt.getType()))
                {
                    // 季卡
                    cardType = 2;
                    plusNum = +3;
                    cardTypeStr = "季卡";
                }
                
                MarzAccountEvt account = accountList.get(0);
                GregorianCalendar gc=new GregorianCalendar();
                
                // 账号已过期
                if (new Date().after(account.getEndTime()))
                {
                    gc.setTime(new Date());
                    gc.add(cardType, plusNum);
                }
                // 账号未过期
                else
                {
                    gc.setTime(account.getEndTime());
                    gc.add(cardType, plusNum);
                }
                account.setEndTime(gc.getTime());
                this.mar_marzAccountService.updateMarzAccount(account);
                
                // 保存日志 充值记录 type=9
                this.mar_marzLogService.marzLog(account, MarzConstant.MARZ_LOG_TYPE_9, "充值成功 类型：" + cardTypeStr + " 卡号：" + marzCardEvt.getPassword());
            }
        }
        else
        {
            return ERROR;
        }
        
        return SUCCESS;
    }
    
    /**
     * @return 返回 mar_marzCardService
     */
    public MarzCardService getMar_marzCardService()
    {
        return mar_marzCardService;
    }
    
    /**
     * @param 对mar_marzCardService进行赋值
     */
    public void setMar_marzCardService(MarzCardService mar_marzCardService)
    {
        this.mar_marzCardService = mar_marzCardService;
    }
    
    /**
     * @return 返回 list
     */
    public List<MarzCardEvt> getList()
    {
        return list;
    }
    
    /**
     * @param 对list进行赋值
     */
    public void setList(List<MarzCardEvt> list)
    {
        this.list = list;
    }
    
    /**
     * @return 返回 marzCardEvt
     */
    public MarzCardEvt getMarzCardEvt()
    {
        return marzCardEvt;
    }
    
    /**
     * @param 对marzCardEvt进行赋值
     */
    public void setMarzCardEvt(MarzCardEvt marzCardEvt)
    {
        this.marzCardEvt = marzCardEvt;
    }
    
    /**
     * @return 返回 marzCardReq
     */
    public MarzCardReq getMarzCardReq()
    {
        return marzCardReq;
    }
    
    /**
     * @param 对marzCardReq进行赋值
     */
    public void setMarzCardReq(MarzCardReq marzCardReq)
    {
        this.marzCardReq = marzCardReq;
    }
    
    public String getMarzCardExport()
    {
        return marzCardExport;
    }
    
    public void setMarzCardExport(String marzCardExport)
    {
        this.marzCardExport = marzCardExport;
    }
    
    public MarzAccountService getMar_marzAccountService()
    {
        return mar_marzAccountService;
    }
    
    public void setMar_marzAccountService(MarzAccountService mar_marzAccountService)
    {
        this.mar_marzAccountService = mar_marzAccountService;
    }
    
    public MarzLogService getMar_marzLogService()
    {
        return mar_marzLogService;
    }

    public void setMar_marzLogService(MarzLogService mar_marzLogService)
    {
        this.mar_marzLogService = mar_marzLogService;
    }

    public static void main(String[] args)
    {
        int cardType = 5;
        int plusNum = 1;
        GregorianCalendar gc=new GregorianCalendar();
        gc.setTime(new Date());
        gc.add(cardType, plusNum);
        System.out.println(gc.getTime());
    }
}