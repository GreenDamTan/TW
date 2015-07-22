package com.moemao.tgks.mar.marzsetting.action;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.moemao.tgks.common.core.action.TGKSAction;
import com.moemao.tgks.common.tool.CommonConstant;
import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.common.tool.StringUtil;
import com.moemao.tgks.mar.krsmacard.entity.KrsmaCardEvt;
import com.moemao.tgks.mar.krsmacard.entity.KrsmaCardReq;
import com.moemao.tgks.mar.krsmacard.service.KrsmaCardService;
import com.moemao.tgks.mar.marz.entity.CoinGachaEvt;
import com.moemao.tgks.mar.marz.tool.MarzConstant;
import com.moemao.tgks.mar.marz.tool.MarzUtil;
import com.moemao.tgks.mar.marzaccount.entity.MarzAccountEvt;
import com.moemao.tgks.mar.marzaccount.entity.MarzAccountReq;
import com.moemao.tgks.mar.marzaccount.service.MarzAccountService;
import com.moemao.tgks.mar.marzitem.entity.MarzItemEvt;
import com.moemao.tgks.mar.marzitem.entity.MarzItemReq;
import com.moemao.tgks.mar.marzitem.service.MarzItemService;
import com.moemao.tgks.mar.marzmap.entity.MarzMapEvt;
import com.moemao.tgks.mar.marzmap.entity.MarzMapReq;
import com.moemao.tgks.mar.marzmap.service.MarzMapService;
import com.moemao.tgks.mar.marzsetting.entity.MarzSettingEvt;
import com.moemao.tgks.mar.marzsetting.entity.MarzSettingReq;
import com.moemao.tgks.mar.marzsetting.service.MarzSettingService;
import com.moemao.tgks.mar.tool.MarConstant;

/**
 * 
 * 项目名称：TGKS_MAR
 * 类名称：MarzSettingAction
 * 类描述：需要新增一个设置的话，首先在MarzConstant.java中新增一个常量，然后在Evt中新增该字段
 *              MarzSettingAction.java中save方法下方加入新设置相关保存方法
 *              最后再Task类中添加该设置的处理语句
 * 创建人：Administrator
 * 创建时间：2015-5-26 上午12:05:11
 * 修改人：Administrator
 * 修改时间：2015-5-26 上午12:05:11
 * 修改备注：
 * @version
 *
 */
public class MarzSettingAction extends TGKSAction
{

    /** 
     * @Fields serialVersionUID
     */ 
    private static final long serialVersionUID = 4112798397731281034L;

    private static Log logger = LogFactory.getLog(MarzSettingAction.class);
    
    /**
     * ﻿MarzSetting业务接口
     */
    private MarzSettingService mar_marzSettingService;

    private MarzAccountService mar_marzAccountService;
    
    private MarzMapService mar_marzMapService;
    
    private MarzItemService mar_marzItemService;
    
    private KrsmaCardService mar_krsmaCardService;
    
    /**
     * 查询结果集
     */
    private List<MarzSettingEvt> list;
    
    // 设置页面展示
    List<MarzMapEvt> allMapList;
    List<MarzMapEvt> noWasteMapList;
    
    // 设置页面展示
    List<KrsmaCardEvt> sellCardList;
    List<KrsmaCardEvt> fameCardList;
    
    // 设置页面下拉框
    List<CoinGachaEvt> allCoinGachaList = new ArrayList<CoinGachaEvt>();
    List<MarzItemEvt> allBPRecoverList = new ArrayList<MarzItemEvt>();
    
    // 设置页面展示
    MarzAccountEvt account;
    
    /**
     * ﻿MarzSettingEvt对象
     */
    private MarzSettingEvt marzSettingEvt = new MarzSettingEvt();
    
    /**
     * ﻿MarzSetting查询条件封装对象（自动生成代码后需要new对象）
     */
    private MarzSettingReq marzSettingReq = new MarzSettingReq();
    
    public String marzSettingManager()
    {
    return SUCCESS;
    }
    
    public String queryMarzSetting()
    {
    list = mar_marzSettingService.queryMarzSetting(marzSettingReq);
    return SUCCESS;
    }
    
    public String editMarzSettingPage()
    {
    String id = this.getRequest().getParameter("id");
    if (!CommonUtil.isEmpty(id))
    {
    marzSettingEvt = mar_marzSettingService.queryMarzSettingById(id);
    }
    return SUCCESS;
    }
    
    public String editMarzSetting()
    {
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "MarzSettingAction.updateMarzSetting");
    int result = 0;
    if (CommonUtil.isEmpty(marzSettingEvt.getId()))
    {
    result = mar_marzSettingService.addMarzSetting(marzSettingEvt);
    CommonUtil.systemLog("mar/editMarzSetting.action", CommonConstant.SYSTEMLOG_TYPE_1, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("新增marzSettingEvt\n%S", marzSettingEvt.toString()));
    }
    else
    {
    result = mar_marzSettingService.updateMarzSetting(marzSettingEvt);
    CommonUtil.systemLog("mar/editMarzSetting.action", CommonConstant.SYSTEMLOG_TYPE_2, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("修改marzSettingEvt\n%S", marzSettingEvt.toString()));
    }
    CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_EXECUTE_NUMS, StringUtil.toBeString(result));
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "MarzSettingAction.updateMarzSetting");
    return SUCCESS;
    }
    
    public String deleteMarzSetting()
    {
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "MarzSettingAction.deleteMarzSetting");
    String ids = this.getRequest().getParameter("ids");
    int result = mar_marzSettingService.deleteMarzSetting(CommonUtil.stringToList(ids));
    CommonUtil.systemLog("mar/deleteMarzSetting.action", CommonConstant.SYSTEMLOG_TYPE_3, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("删除marzSettingEvt\nID:%S", ids));
    CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_EXECUTE_NUMS, StringUtil.toBeString(result));
    CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "MarzSettingAction.deleteMarzSetting");
    return SUCCESS;
    }
    
    public String settingPage()
    {
        String tgksId = CommonUtil.getUserInfoBySession().getUsername();
        marzSettingEvt = new MarzSettingEvt();
        marzSettingEvt.setTgksId(tgksId);
        marzSettingReq = new MarzSettingReq();
        marzSettingReq.setTgksId(tgksId);
        
        list = this.mar_marzSettingService.queryMarzSetting(marzSettingReq);
        
        if (!CommonUtil.isEmpty(list))
        {
            for (MarzSettingEvt setting : list)
            {
                if (MarzConstant.VALIDATE_SETTING_EXPLORE == Integer.parseInt(setting.getName()))
                {
                    marzSettingEvt.setExplore(setting.getValue());
                }
                else if (MarzConstant.VALIDATE_SETTING_CARDSELL == Integer.parseInt(setting.getName()))
                {
                    marzSettingEvt.setCardSell(setting.getValue());
                }
                else if (MarzConstant.VALIDATE_SETTING_CARDSELL_COMMON == Integer.parseInt(setting.getName()))
                {
                    marzSettingEvt.setCardSellCommon(setting.getValue());
                }
                else if (MarzConstant.VALIDATE_SETTING_CHIARIFUSION == Integer.parseInt(setting.getName()))
                {
                    marzSettingEvt.setCardFusion(setting.getValue());
                }
                else if (MarzConstant.VALIDATE_SETTING_BATTLE == Integer.parseInt(setting.getName()))
                {
                    marzSettingEvt.setBattle(setting.getValue());
                }
                else if (MarzConstant.VALIDATE_SETTING_BATTLE_NOWASTE == Integer.parseInt(setting.getName()))
                {
                    marzSettingEvt.setBattleNowaste(setting.getValue());
                }
                else if (MarzConstant.VALIDATE_SETTING_BATTLE_NOWASTE_BOSSID == Integer.parseInt(setting.getName()))
                {
                    marzSettingEvt.setBattleNowasteBossId(setting.getValue());
                }
                else if (MarzConstant.VALIDATE_SETTING_BATTLE_GET_STONE == Integer.parseInt(setting.getName()))
                {
                    marzSettingEvt.setBattleGetStone(setting.getValue());
                }
                else if (MarzConstant.VALIDATE_SETTING_PVP == Integer.parseInt(setting.getName()))
                {
                    marzSettingEvt.setPvp(setting.getValue());
                }
                else if (MarzConstant.VALIDATE_SETTING_FAMEFUSION == Integer.parseInt(setting.getName()))
                {
                    marzSettingEvt.setFameFusion(setting.getValue());
                }
                else if (MarzConstant.VALIDATE_SETTING_COINGACHA == Integer.parseInt(setting.getName()))
                {
                    marzSettingEvt.setCoinGacha(setting.getValue());
                }
                else if (MarzConstant.VALIDATE_SETTING_COINGACHA_GACHAID == Integer.parseInt(setting.getName()))
                {
                    marzSettingEvt.setCoinGachaGachaId(setting.getValue());
                }
                else if (MarzConstant.VALIDATE_SETTING_AUTOUSEBPPOTION == Integer.parseInt(setting.getName()))
                {
                    marzSettingEvt.setAutoUseBPPotion(setting.getValue());
                }
                else if (MarzConstant.VALIDATE_SETTING_AUTOUSEBPPOTION_BPLIMIT == Integer.parseInt(setting.getName()))
                {
                    marzSettingEvt.setAutoUseBPPotionBPLimit(setting.getValue());
                }
                else if (MarzConstant.VALIDATE_SETTING_AUTOUSEBPPOTION_ITEMID == Integer.parseInt(setting.getName()))
                {
                    marzSettingEvt.setAutoUseBPPotionItemId(setting.getValue());
                }
                else if (MarzConstant.VALIDATE_SETTING_AUTOBUYBPPOTION == Integer.parseInt(setting.getName()))
                {
                    marzSettingEvt.setAutoBuyBPPotion(setting.getValue());
                }
                else if (MarzConstant.VALIDATE_SETTING_CARDSELL_EVO == Integer.parseInt(setting.getName()))
                {
                    marzSettingEvt.setCardSellEvo(setting.getValue());
                }
                else if (MarzConstant.VALIDATE_SETTING_CARDSELL_EVONUM == Integer.parseInt(setting.getName()))
                {
                    marzSettingEvt.setCardSellEvoNum(setting.getValue());
                }
                else if (MarzConstant.VALIDATE_SETTING_BATTLE_LEVEL_UP == Integer.parseInt(setting.getName()))
                {
                    marzSettingEvt.setBattleLevelUp(setting.getValue());
                }
            }
        }
        
        // 查询当前的战斗地图
        allMapList = this.mar_marzMapService.queryMarzMap(new MarzMapReq());
        noWasteMapList = new ArrayList<MarzMapEvt>();
        MarzAccountReq marzAccountReq = new MarzAccountReq();
        marzAccountReq.setTgksId(tgksId);
        account = this.mar_marzAccountService.queryMarzAccount(marzAccountReq).get(0);
        for (MarzMapEvt map : allMapList)
        {
            if (!CommonUtil.isEmpty(account.getBossIds()))
            {
                if (account.getBossIds().contains(map.getBossId()))
                {
                    map.setCheck("1");
                }
            }
            
            if (Integer.parseInt(account.getVip()) < Integer.parseInt(map.getVip()))
            {
                map.setShow("0");
            }
            else
            {
                map.setShow("1");
            }
            
            // 给不浪费BP使用
            if (!map.getBossName().contains("[鍵]"))
            {
                noWasteMapList.add(map);
            }
        }
        
        // 查询当前配置的售卡片ID
        KrsmaCardReq krsmaCardReq = new KrsmaCardReq();
        krsmaCardReq.setSellFlag(MarConstant.KRSMACARD_SELLFLAG_1);
        krsmaCardReq.setSortSql(" t.cardid DESC");
        sellCardList = this.mar_krsmaCardService.queryKrsmaCard(krsmaCardReq);
        for (KrsmaCardEvt sellCard : sellCardList)
        {
            if (!CommonUtil.isEmpty(account.getSellCardIds()))
            {
                if (account.getSellCardIds().contains(sellCard.getCardId()))
                {
                    sellCard.setCheck("1");
                }
            }
        }
        
        // 查询当前配置的名声合成卡片ID
        krsmaCardReq = new KrsmaCardReq();
        krsmaCardReq.setFameFlag(MarConstant.KRSMACARD_FAMEFLAG_1);
        fameCardList = this.mar_krsmaCardService.queryKrsmaCard(krsmaCardReq);
        for (KrsmaCardEvt fameCard : fameCardList)
        {
            if (!CommonUtil.isEmpty(account.getFameCardIds()))
            {
                if (account.getFameCardIds().contains(fameCard.getCardId()))
                {
                    fameCard.setCheck("1");
                }
            }
        }
        
        // 查询自动抽硬币的列表
        MarzItemReq marzItemReq = new MarzItemReq();
        marzItemReq.setStatus(MarzConstant.MARZITEM_STATUS_1);
        List<MarzItemEvt> marzItemList = this.mar_marzItemService.queryMarzItem(marzItemReq);
        
        if (!CommonUtil.isEmpty(marzItemList))
        {
            this.allCoinGachaList.clear();
            this.allBPRecoverList.clear();
            
            for (MarzItemEvt item : marzItemList)
            {
            	if (MarzConstant.MARZITEM_TYPE_1.equals(item.getType()))
            	{
            		this.allBPRecoverList.add(item);
            	}
            	else if (MarzConstant.MARZITEM_TYPE_3.equals(item.getType()))
            	{
	                List<String> list = MarzUtil.stringToList(item.getParam());
	                
	                for (String param : list)
	                {
	                    String gachaInfo[] = param.split(MarConstant.KRSMA_SPLIT);
	                    String gachaName = gachaInfo[0];
	                    String itemId = gachaInfo[1];
	                    int costNum = Integer.parseInt(gachaInfo[2]);
	                    String gachaId = gachaInfo[3];
	                    String payType = gachaInfo[4];
	                    
	                    CoinGachaEvt coinGachaEvt = new CoinGachaEvt();
	                    coinGachaEvt.setGachaName(gachaName);
	                    coinGachaEvt.setGachaId(gachaId);
	                    coinGachaEvt.setItemId(itemId);
	                    coinGachaEvt.setCostNum(costNum);
	                    coinGachaEvt.setPayType(payType);
	                    coinGachaEvt.setParam(param);
	                    this.allCoinGachaList.add(coinGachaEvt);
	                }
                }
            }
        }
        
        return SUCCESS;
    }
    
    public String saveSetting()
    {
        String tgksId = CommonUtil.getUserInfoBySession().getUsername();
        
        // 先删除原来的设定
        this.mar_marzSettingService.deleteMarzSettingByTgksId(tgksId);
        
        MarzAccountReq marzAccountReq = new MarzAccountReq();
        marzAccountReq.setTgksId(tgksId);
        account = this.mar_marzAccountService.queryMarzAccount(marzAccountReq).get(0);
        
        // 保存战斗地图ID
        if (null == marzSettingEvt.getBossIds())
        {
            account.setBossIds("");
        }
        else
        {
            account.setBossIds(marzSettingEvt.getBossIds().replace(" ", ""));
        }
        
        // 保存自动售卡ID
        if (null == marzSettingEvt.getSellCardIds())
        {
            account.setSellCardIds("");
        }
        else
        {
            account.setSellCardIds(marzSettingEvt.getSellCardIds().replace(" ", ""));
        }
        
        // 保存自动名声合成ID
        if (null == marzSettingEvt.getFameCardIds())
        {
            account.setFameCardIds("");
        }
        else
        {
            account.setFameCardIds(marzSettingEvt.getFameCardIds().replace(" ", ""));
        }
        
        // 保存基本信息表中的ID信息
        this.mar_marzAccountService.updateMarzAccount(account);
        
        // 开始保存新设定
        // 跑图
        MarzSettingEvt setting = new MarzSettingEvt();
        setting.setTgksId(tgksId);
        setting.setType(MarzConstant.MARZSETTING_TYPE_0);
        setting.setName(String.valueOf(MarzConstant.VALIDATE_SETTING_EXPLORE));
        setting.setValue(marzSettingEvt.getExplore());
        this.mar_marzSettingService.addMarzSetting(setting);
        
        // 卖卡
        setting = new MarzSettingEvt();
        setting.setTgksId(tgksId);
        setting.setType(MarzConstant.MARZSETTING_TYPE_0);
        setting.setName(String.valueOf(MarzConstant.VALIDATE_SETTING_CARDSELL));
        setting.setValue(marzSettingEvt.getCardSell());
        this.mar_marzSettingService.addMarzSetting(setting);
        
        // 卖卡 普通卡
        setting = new MarzSettingEvt();
        setting.setTgksId(tgksId);
        setting.setType(MarzConstant.MARZSETTING_TYPE_0);
        setting.setName(String.valueOf(MarzConstant.VALIDATE_SETTING_CARDSELL_COMMON));
        setting.setValue(marzSettingEvt.getCardSellCommon());
        this.mar_marzSettingService.addMarzSetting(setting);
        
        // 喂狗粮
        setting = new MarzSettingEvt();
        setting.setTgksId(tgksId);
        setting.setType(MarzConstant.MARZSETTING_TYPE_0);
        setting.setName(String.valueOf(MarzConstant.VALIDATE_SETTING_CHIARIFUSION));
        setting.setValue(marzSettingEvt.getCardFusion());
        this.mar_marzSettingService.addMarzSetting(setting);
        
        // 战斗
        setting = new MarzSettingEvt();
        setting.setTgksId(tgksId);
        setting.setType(MarzConstant.MARZSETTING_TYPE_0);
        setting.setName(String.valueOf(MarzConstant.VALIDATE_SETTING_BATTLE));
        setting.setValue(marzSettingEvt.getBattle());
        this.mar_marzSettingService.addMarzSetting(setting);
        
        // 战斗 不浪费BP
        setting = new MarzSettingEvt();
        setting.setTgksId(tgksId);
        setting.setType(MarzConstant.MARZSETTING_TYPE_0);
        setting.setName(String.valueOf(MarzConstant.VALIDATE_SETTING_BATTLE_NOWASTE));
        setting.setValue(marzSettingEvt.getBattleNowaste());
        this.mar_marzSettingService.addMarzSetting(setting);
        
        // 战斗 不浪费BP地图ID
        setting = new MarzSettingEvt();
        setting.setTgksId(tgksId);
        setting.setType(MarzConstant.MARZSETTING_TYPE_1);
        setting.setName(String.valueOf(MarzConstant.VALIDATE_SETTING_BATTLE_NOWASTE_BOSSID));
        setting.setValue(marzSettingEvt.getBattleNowasteBossId());
        this.mar_marzSettingService.addMarzSetting(setting);
        
        // 战斗 优先拿石
        setting = new MarzSettingEvt();setting.setTgksId(tgksId);
        setting.setTgksId(tgksId);
        setting.setType(MarzConstant.MARZSETTING_TYPE_0);
        setting.setName(String.valueOf(MarzConstant.VALIDATE_SETTING_BATTLE_GET_STONE));
        setting.setValue(marzSettingEvt.getBattleGetStone());
        this.mar_marzSettingService.addMarzSetting(setting);
        
        // 竞技场 PVP
        setting = new MarzSettingEvt();setting.setTgksId(tgksId);
        setting.setTgksId(tgksId);
        setting.setType(MarzConstant.MARZSETTING_TYPE_0);
        setting.setName(String.valueOf(MarzConstant.VALIDATE_SETTING_PVP));
        setting.setValue(marzSettingEvt.getPvp());
        this.mar_marzSettingService.addMarzSetting(setting);
        
        // 名声合成
        setting = new MarzSettingEvt();
        setting.setTgksId(tgksId);
        setting.setType(MarzConstant.MARZSETTING_TYPE_0);
        setting.setName(String.valueOf(MarzConstant.VALIDATE_SETTING_FAMEFUSION));
        setting.setValue(marzSettingEvt.getFameFusion());
        this.mar_marzSettingService.addMarzSetting(setting);
        
        // 自动抽硬币
        setting = new MarzSettingEvt();
        setting.setTgksId(tgksId);
        setting.setType(MarzConstant.MARZSETTING_TYPE_0);
        setting.setName(String.valueOf(MarzConstant.VALIDATE_SETTING_COINGACHA));
        setting.setValue(marzSettingEvt.getCoinGacha());
        this.mar_marzSettingService.addMarzSetting(setting);
        
        // 自动抽硬币的ID
        setting = new MarzSettingEvt();
        setting.setTgksId(tgksId);
        setting.setType(MarzConstant.MARZSETTING_TYPE_1);
        setting.setName(String.valueOf(MarzConstant.VALIDATE_SETTING_COINGACHA_GACHAID));
        setting.setValue(marzSettingEvt.getCoinGachaGachaId());
        this.mar_marzSettingService.addMarzSetting(setting);
        
        // 自动喝BP药水
        setting = new MarzSettingEvt();
        setting.setTgksId(tgksId);
        setting.setType(MarzConstant.MARZSETTING_TYPE_0);
        setting.setName(String.valueOf(MarzConstant.VALIDATE_SETTING_AUTOUSEBPPOTION));
        setting.setValue(marzSettingEvt.getAutoUseBPPotion());
        this.mar_marzSettingService.addMarzSetting(setting);
        
        // 自动喝BP药水 BP下限
        setting = new MarzSettingEvt();
        setting.setTgksId(tgksId);
        setting.setType(MarzConstant.MARZSETTING_TYPE_1);
        setting.setName(String.valueOf(MarzConstant.VALIDATE_SETTING_AUTOUSEBPPOTION_BPLIMIT));
        setting.setValue(marzSettingEvt.getAutoUseBPPotionBPLimit());
        this.mar_marzSettingService.addMarzSetting(setting);
        
        // 自动喝BP药水 药水类型
        setting = new MarzSettingEvt();
        setting.setTgksId(tgksId);
        setting.setType(MarzConstant.MARZSETTING_TYPE_1);
        setting.setName(String.valueOf(MarzConstant.VALIDATE_SETTING_AUTOUSEBPPOTION_ITEMID));
        setting.setValue(marzSettingEvt.getAutoUseBPPotionItemId());
        this.mar_marzSettingService.addMarzSetting(setting);
        
        // 自动买BP药水
        setting = new MarzSettingEvt();
        setting.setTgksId(tgksId);
        setting.setType(MarzConstant.MARZSETTING_TYPE_0);
        setting.setName(String.valueOf(MarzConstant.VALIDATE_SETTING_AUTOBUYBPPOTION));
        setting.setValue(marzSettingEvt.getAutoBuyBPPotion());
        this.mar_marzSettingService.addMarzSetting(setting);
        
        // 出售进化素材
        setting = new MarzSettingEvt();
        setting.setTgksId(tgksId);
        setting.setType(MarzConstant.MARZSETTING_TYPE_0);
        setting.setName(String.valueOf(MarzConstant.VALIDATE_SETTING_CARDSELL_EVO));
        setting.setValue(marzSettingEvt.getCardSellEvo());
        this.mar_marzSettingService.addMarzSetting(setting);
        
        // 进化素材保留数量
        setting = new MarzSettingEvt();
        setting.setTgksId(tgksId);
        setting.setType(MarzConstant.MARZSETTING_TYPE_1);
        setting.setName(String.valueOf(MarzConstant.VALIDATE_SETTING_CARDSELL_EVONUM));
        setting.setValue(marzSettingEvt.getCardSellEvoNum());
        this.mar_marzSettingService.addMarzSetting(setting);
        
        // 练级模式
        setting = new MarzSettingEvt();
        setting.setTgksId(tgksId);
        setting.setType(MarzConstant.MARZSETTING_TYPE_0);
        setting.setName(String.valueOf(MarzConstant.VALIDATE_SETTING_BATTLE_LEVEL_UP));
        setting.setValue(marzSettingEvt.getBattleLevelUp());
        this.mar_marzSettingService.addMarzSetting(setting);
        
        return SUCCESS;
    }
    
    /**
     * @return 返回 mar_marzSettingService
     */
    public MarzSettingService getMar_marzSettingService()
    {
        return mar_marzSettingService;
    }
    
    /**
     * @param 对mar_marzSettingService进行赋值
     */
    public void setMar_marzSettingService(MarzSettingService mar_marzSettingService)
    {
        this.mar_marzSettingService = mar_marzSettingService;
    }
    
    /**
     * @return 返回 list
     */
    public List<MarzSettingEvt> getList()
    {
        return list;
    }
    
    /**
     * @param 对list进行赋值
     */
    public void setList(List<MarzSettingEvt> list)
    {
        this.list = list;
    }
    
    /**
     * @return 返回 marzSettingEvt
     */
    public MarzSettingEvt getMarzSettingEvt()
    {
        return marzSettingEvt;
    }
    
    /**
     * @param 对marzSettingEvt进行赋值
     */
    public void setMarzSettingEvt(MarzSettingEvt marzSettingEvt)
    {
        this.marzSettingEvt = marzSettingEvt;
    }
    
    /**
     * @return 返回 marzSettingReq
     */
    public MarzSettingReq getMarzSettingReq()
    {
        return marzSettingReq;
    }
    
    /**
     * @param 对marzSettingReq进行赋值
     */
    public void setMarzSettingReq(MarzSettingReq marzSettingReq)
    {
        this.marzSettingReq = marzSettingReq;
    }

    public MarzAccountService getMar_marzAccountService()
    {
        return mar_marzAccountService;
    }

    public void setMar_marzAccountService(MarzAccountService mar_marzAccountService)
    {
        this.mar_marzAccountService = mar_marzAccountService;
    }

    public MarzMapService getMar_marzMapService()
    {
        return mar_marzMapService;
    }

    public void setMar_marzMapService(MarzMapService mar_marzMapService)
    {
        this.mar_marzMapService = mar_marzMapService;
    }

    public KrsmaCardService getMar_krsmaCardService()
    {
        return mar_krsmaCardService;
    }

    public void setMar_krsmaCardService(KrsmaCardService mar_krsmaCardService)
    {
        this.mar_krsmaCardService = mar_krsmaCardService;
    }

    public MarzItemService getMar_marzItemService()
    {
        return mar_marzItemService;
    }

    public void setMar_marzItemService(MarzItemService mar_marzItemService)
    {
        this.mar_marzItemService = mar_marzItemService;
    }

    public List<MarzMapEvt> getAllMapList()
    {
        return allMapList;
    }

    public void setAllMapList(List<MarzMapEvt> allMapList)
    {
        this.allMapList = allMapList;
    }

    public List<KrsmaCardEvt> getSellCardList()
    {
        return sellCardList;
    }

    public void setSellCardList(List<KrsmaCardEvt> sellCardList)
    {
        this.sellCardList = sellCardList;
    }
    
    public List<KrsmaCardEvt> getFameCardList()
    {
        return fameCardList;
    }

    public void setFameCardList(List<KrsmaCardEvt> fameCardList)
    {
        this.fameCardList = fameCardList;
    }
    
    public List<CoinGachaEvt> getAllCoinGachaList()
    {
        return allCoinGachaList;
    }

    public void setAllCoinGachaList(List<CoinGachaEvt> allCoinGachaList)
    {
        this.allCoinGachaList = allCoinGachaList;
    }

    public List<MarzItemEvt> getAllBPRecoverList()
    {
    	return allBPRecoverList;
    }

	public void setAllBPRecoverList(List<MarzItemEvt> allBPRecoverList)
    {
    	this.allBPRecoverList = allBPRecoverList;
    }

	public MarzAccountEvt getAccount()
    {
        return account;
    }

    public void setAccount(MarzAccountEvt account)
    {
        this.account = account;
    }

    public List<MarzMapEvt> getNoWasteMapList()
    {
        return noWasteMapList;
    }

    public void setNoWasteMapList(List<MarzMapEvt> noWasteMapList)
    {
        this.noWasteMapList = noWasteMapList;
    }
}