package com.moemao.tgks.mar.account.service.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.mar.account.dao.AccountDao;
import com.moemao.tgks.mar.account.entity.AccountEvt;
import com.moemao.tgks.mar.account.entity.AccountReq;
import com.moemao.tgks.mar.account.service.AccountService;
import com.moemao.tgks.mar.execute.KrsmaRequest;
import com.moemao.tgks.mar.invite.service.InviteService;
import com.moemao.tgks.mar.krsmacard.entity.KrsmaCardEvt;
import com.moemao.tgks.mar.krsmacard.entity.KrsmaCardReq;
import com.moemao.tgks.mar.krsmacard.service.KrsmaCardService;
import com.moemao.tgks.mar.tool.MarConstant;
import com.moemao.tgks.mar.tool.MarUtil;

public class AccountServiceImpl implements AccountService
{
    private InviteService mar_inviteService;
    
    private KrsmaCardService mar_krsmaCardService;
    
    /**
     * ﻿AccountDao
     */
    private AccountDao mar_accountDao;
    
    private KrsmaRequest request = KrsmaRequest.getInstance();
    
    public List<AccountEvt> queryAccount(AccountReq accountReq)
    {
    if (CommonUtil.isEmpty(accountReq.getSortSql()))
    {
    accountReq.setSortSql(" t.ID DESC");
    }
    return mar_accountDao.mar_queryAccount(accountReq);
    }
    
    public AccountEvt queryAccountById(String id)
    {
    AccountReq accountReq = new AccountReq();
    accountReq.setId(id);
    AccountEvt accountEvt = null;
    List<AccountEvt> accountList = mar_accountDao.mar_queryAccount(accountReq);
    if (!CommonUtil.isEmpty(accountList))
    {
    accountEvt = accountList.get(0);
    }
    return accountEvt;
    }
    
    public List<AccountEvt> queryAccountByIds(List<String> ids)
    {
        return mar_accountDao.mar_queryAccountByIds(ids);
    }
    
    public int addAccount(AccountEvt accountEvt)
    {
        accountEvt.setId(MarUtil.createUniqueID());
        accountEvt.setStatus(MarConstant.ACCOUNT_STATUS_0);
        accountEvt.setCrystal(0);
        accountEvt.setPrice(0);
        accountEvt.setUrNumA(0);
        accountEvt.setUrNumB(0);
        accountEvt.setUrNumC(0);
        accountEvt.setUrNumD(0);
        return mar_accountDao.mar_addAccount(accountEvt);
    }
    
    public int updateAccount(AccountEvt accountEvt)
    {
    return mar_accountDao.mar_updateAccount(accountEvt);
    }
    
    public int deleteAccount(List<String> ids)
    {
    return mar_accountDao.mar_deleteAccount(ids);
    }
    
    public String login(AccountEvt accountEvt)
    {
        String[] result = new String[2];
        String sid = "";
        
        // login 登录 并获取sessionId
        try
        {
            result[0] = request.login2(accountEvt.getUuid(), accountEvt.getHashToken());
        }
        catch (Exception e)
        {
            return "";
        }
        JSONObject json= JSONObject.fromObject(result[0]);
        sid = json.getString("sess_key").replace("=", "");
        
        // connect
        try
        {
            result = request.connect(sid);
            sid = result[0];
        }
        catch (Exception e)
        {
            return "";
        }
        
        return sid;
    }
    
    /**
     * 执行刷初始的调用方法
     */
    public void initialAccount(List<String> ids)
    {
        // 入参已经获得了需要跑初始流程的账号ID 先把账号全部查询出来
        List<AccountEvt> accountList = mar_accountDao.mar_queryAccountByIds(ids);
        
        this.process(accountList);
        
        System.out.println(MarConstant.LOG_SYSTEM_INFO + "all process complete!");
    }
    
    /**
     * 
     * @Title: process
     * @Description: 单个账号走刷初始的流程
     * @param accountEvt
     * @return void 返回类型
     * @throws
     */
    public void process(List<AccountEvt> accountList)
    {
        String[] result = new String[2];
        String sid;
        JSONObject json= null;
        
        List<String> tempSidList = new ArrayList<String>();
        
        // 刷初始的几个配置变量 后续可以改为数据库维护
        String name = MarConstant.INITIAL_NAME;
        String chara = MarConstant.INITIAL_CHARA;
        String gachaIdTen = MarConstant.GACHA_ID_TEN;
        String payType = MarConstant.GACHA_PAYTYPE;
        

        // 刷完10个招待后返回的小号招待ID 给自己填的
        String inviteCode = "";
        List<String> srList = new ArrayList<String>();
        List<String> urList = new ArrayList<String>();
        
        
        // 需要更新到Account中的信息 自身的招待ID
        String inviteId = "";
        // urNumA
        int urNumA = 0;
        // urNumB
        int urNumB = 0;
        // urNumC
        int urNumC = 0;
        // urNumD
        int urNumD = 0;
        // 标题
        String title = "";
        // 卡片ids 先UR后SR 存数据库时使用CommonUtil.listToString()
        List<String> cardList = new ArrayList<String>();
        // 水晶数量
        int crystal = 0;
        
        // 1、把所有账号查询出来 执行login connect
        for (AccountEvt accountEvt : accountList)
        {
            try
            {
                sid = this.login(accountEvt);
                accountEvt.setSessionId(sid);
            }
            catch (Exception e)
            {
                continue;
            }
        }
        
        // 2、创建 nx10 的小号
        for (int i = 0; i < accountList.size() * 9; i++)
        {
            try
            {
                result[0] = request.regist();
                
                // 从regist的result中解析出sessonId
                json= JSONObject.fromObject(result[0]);
                sid = json.getString("sess_key").replace("=", "");
                
                // connect
                tempSidList.add(request.connect(sid)[0]);
            }
            catch (Exception e)
            {
                continue;
            }
        }
        
        try
        {
            // 当前版本服务器改为必须等待1分钟才可起名字
            Thread.sleep(5000);
        }
        catch (Exception e)
        {
            
        }
        
        // 3、所有账号执行userCreate homeShow
        for (AccountEvt accountEvt : accountList)
        {
            try
            {
                // userCreate 起名字
                result = request.userCreate(accountEvt.getSessionId(), name, chara);
                sid = result[0];
                
                // homeShow 主页
                result = request.homeShow(sid);
                sid = result[0];
                result[1] = ("{\"user\"" + result[1].split("user\"")[1]);
                result[1] = result[1].substring(0, result[1].indexOf(",\"premium_service_grade")) + "}}";
                if (result[1].contains("�?"))
                {
                    result[1] = result[1].replace("�?", "\"");
                }
                json = JSONObject.fromObject(result[1]);
                crystal = json.getJSONObject("user").getInt("coin_free");
                inviteId = json.getJSONObject("user").getString("inviteid");

                accountEvt.setCrystal(crystal);
                // 先保存账号的ID
                accountEvt.setInviteCode(inviteId);
                this.updateAccount(accountEvt);
                
                // 最后一个inviteId留着循环使用
                inviteCode = inviteId;
            }
            catch (Exception e)
            {
                continue;
            }
        }
        
        
        int index = 0;
        // 4、for循环给每个list中的session执行homeshow获取inviteid填入招待ID
        for (AccountEvt accountEvt : accountList)
        {
            // 招待小号的userCreate homeShow
            for (int i=0; i<9; i++)
            {                
                try
                {
                    result = request.userCreate(tempSidList.get(index), name, chara);
                    sid = result[0];
                    index++;
                    
                    result = request.homeShow(sid);
                    sid = result[0];
                    request.inviteCodeEnter(sid, accountEvt.getInviteCode());
                }
                catch (Exception e)
                {
                    continue;
                }                
            }
            
            try
            {
                // 自己填别人的inviteId 第一个人填的是末尾的人的ID
                request.inviteCodeEnter(accountEvt.getSessionId(), inviteCode);
                inviteCode = accountEvt.getInviteCode();
            }
            catch (Exception e)
            {
                continue;
            }
        }

        // 查询数据库卡组信息
        List<KrsmaCardEvt> krsmaCardList = this.mar_krsmaCardService.queryKrsmaCard(new KrsmaCardReq());
        
        // 5、list中的sessionId拿出来抽卡 打第一关副本
        for (AccountEvt accountEvt : accountList)
        {
            srList = new ArrayList<String>();
            urList = new ArrayList<String>();
            cardList = new ArrayList<String>();
            urNumA = 0;
            urNumB = 0;
            urNumC = 0;
            urNumD = 0;
            title = "";
            
            try
            {
                sid = this.login(accountEvt);
                
                // presentBoxMultiRecv 领礼物箱 最好领2次
                result = request.presentBoxMultiRecv(sid);
                sid = result[0];
                //result = request.presentBoxMultiRecv(sid);
                //sid = result[0];
                
                // gachaPlayTen 新人的10连首抽
                result = request.gachaPlay(sid, gachaIdTen, payType, accountEvt.getGachaHash());
                sid = result[0];
                Thread.sleep(MarConstant.SLEEP_TIME_GACHA);
                // 抽取当前活动的11连 2次
                sid = this.doGacha(sid, 50, accountEvt.getGachaHash());
                
                // cardShow 检索卡组信息
                try
                {
                    result = request.cardShow(sid);
                    sid = result[0];
                }
                catch (Exception e)
                {
                    continue;
                }
                result[1] = ("{\"cards\"" + result[1].split("cards\"")[1]);
                json = JSONObject.fromObject(result[1]);
                JSONArray cards = json.getJSONArray("cards");
                @SuppressWarnings("unchecked")
                List<JSONObject> jsonList = (List<JSONObject>) JSONArray.toCollection(cards, JSONObject.class);
                
                try
                {
                    // 如果卡组大于80张，则调用卖卡
                    if (jsonList.size() > 80)
                    {
                        sid = this.sellCard(sid);
                    }
                }
                catch (Exception e)
                {
                    
                }
                
                // 收集SR以及UR信息
                for (JSONObject obj : jsonList)
                {
                    if (obj.getString("lv_max").equals("40") && !srList.contains(obj.getString("cardid")))
                    {
                        srList.add(obj.getString("cardid"));
                    }
                    else if (obj.getString("lv_max").equals("50") && !urList.contains(obj.getString("cardid")))
                    {
                        urList.add(obj.getString("cardid"));
                    }
                }
                
                // 处理卡组信息 UR
                for (String id : urList)
                {
                    for (KrsmaCardEvt ur : krsmaCardList)
                    {
                        if (id.equals(ur.getCardId()))
                        {
                            // 查询到UR 加入ID
                            cardList.add(id);
                            
                            // 判断该UR是什么职业 相应URNUM+1
                            if (ur.getType().equals(MarConstant.KRSMACARD_TYPE_1))
                            {
                                urNumA++;
                            }
                            else if (ur.getType().equals(MarConstant.KRSMACARD_TYPE_2))
                            {
                                urNumB++;
                            }
                            else if (ur.getType().equals(MarConstant.KRSMACARD_TYPE_3))
                            {
                                urNumC++;
                            }
                            else if (ur.getType().equals(MarConstant.KRSMACARD_TYPE_4))
                            {
                                urNumD++;
                            }
                            
                            // 处理title
                            title += ur.getName() + " ";
                        }
                    }
                }
                // 处理卡组信息 SR
                for (String id : srList)
                {
                    for (KrsmaCardEvt sr : krsmaCardList)
                    {
                        if (id.equals(sr.getCardId()))
                        {
                            cardList.add(id);
                        }
                    }
                }
                
                // 战斗信息
                this.teamBattleSolo(sid, MarConstant.BATTLESOLOSTART_FIRST, MarConstant.BATTLESOLOEND_3);
                
                // 更新account信息
                accountEvt.setStatus(MarConstant.ACCOUNT_STATUS_2);
                accountEvt.setTitle(title.trim()); // 处理前后的空格
                accountEvt.setUrNumA(urNumA);
                accountEvt.setUrNumB(urNumB);
                accountEvt.setUrNumC(urNumC);
                accountEvt.setUrNumD(urNumD);
                if (null != cardList && cardList.size() > 0)
                {
                    accountEvt.setCardIds(CommonUtil.listToString(cardList));
                }
                this.updateAccount(accountEvt);
            }
            catch (Exception e)
            {
                accountEvt.setStatus(MarConstant.ACCOUNT_STATUS_0);
                this.updateAccount(accountEvt);
                continue;
            }
        }
    }
    
    /**
     * 
     * @Title: checkCardAccount
     * @Description: 更新卡组信息
     * @param ids
     * @return void 返回类型
     * @throws
     */
    public void checkCardAccount(List<String> ids)
    {
        List<AccountEvt> list = mar_accountDao.mar_queryAccountByIds(ids);
        
        // 遍历查询出的账号 对每个账号执行过checkCard
        for (AccountEvt accountEvt : list)
        {
            if (!MarConstant.ACCOUNT_STATUS_3.equals(accountEvt.getStatus()))
            {
                this.checkCard(accountEvt);
                System.out.println(MarConstant.LOG_SYSTEM_INFO + "已完成第" + (list.indexOf(accountEvt) + 1) + "个任务！共" + list.size() + "个！");
            }
        }
    }
    
    /**
     * 全部更新
     */
    public void allCheckCardAccount()
    {
        AccountReq accountReq = new AccountReq();
        accountReq.setStatus(MarConstant.ACCOUNT_STATUS_2);
        
        List<AccountEvt> list = mar_accountDao.mar_queryAccount(accountReq);
        
        // 遍历查询出的账号 对每个账号执行过checkCard
        for (AccountEvt accountEvt : list)
        {
            if (!CommonUtil.isEmpty(accountEvt.getHashToken()))
            {
                this.checkCard(accountEvt);
            }
            
            System.out.println(MarConstant.LOG_SYSTEM_INFO + "已完成第" + (list.indexOf(accountEvt) + 1) + "个任务！共" + list.size() + "个！");
        }
    }
    
    public void checkCard(AccountEvt accountEvt)
    {
        if (CommonUtil.isEmpty(accountEvt.getHashToken()))
        {
            return;
        }
        
        String[] result = new String[2];
        String sid;
        JSONObject json= null;
        List<String> srList = new ArrayList<String>();
        List<String> urList = new ArrayList<String>();
        int urNumA = 0;
        int urNumB = 0;
        int urNumC = 0;
        int urNumD = 0;
        // 标题
        String title = "";
        // 卡片ids 先UR后SR 存数据库时使用CommonUtil.listToString()
        List<String> list = new ArrayList<String>();
        int crystal = 0;
        String inviteCode = "";
        
        String fusionBaseId = "";
        String fusionAddId = "";
        List<String> cardDeckSetCardTypeList = new ArrayList<String>();
        List<String> cardDeckSetCardIdList = new ArrayList<String>();
        
        try
        {
            sid = this.login(accountEvt);
        }
        catch (Exception e)
        {
            return;
        }
        
        // presentBoxMultiRecv 领礼物箱 最好领2次
        try
        {
            result = request.presentBoxMultiRecv(sid);
            sid = result[0];
        }
        catch (Exception e)
        {
            System.out.println("这个号一看就是战斗没过");
            this.teamBattleSolo(sid, MarConstant.BATTLESOLOSTART_FIRST, MarConstant.BATTLESOLOEND_3);
        }
        
        // homeShow 主页
        try
        {
            result = request.homeShow(sid);
            sid = result[0];
        }
        catch (Exception e)
        {
            return;
        }
        result[1] = ("{\"user\"" + result[1].split("user\"")[1]);
        result[1] = result[1].substring(0, result[1].indexOf(",\"premium_service_grade")) + "}}";
        if (result[1].contains("�?"))
        {
            result[1] = result[1].replace("�?", "\"");
        }
        json = JSONObject.fromObject(result[1]);
        crystal = json.getJSONObject("user").getInt("coin_free");
        inviteCode = json.getJSONObject("user").getString("inviteid");
        
        // 判断是否要抽卡
        if (crystal >= 15 && !CommonUtil.isEmpty(accountEvt.getGachaHash()))
        {
            sid = this.doGacha(sid, crystal, accountEvt.getGachaHash());
        }
        
        // cardShow 检索卡组信息
        try
        {
            result = request.cardShow(sid);
            sid = result[0];
        }
        catch (Exception e)
        {
            return;
        }
        result[1] = ("{\"cards\"" + result[1].split("cards\"")[1]);
        json = JSONObject.fromObject(result[1]);
        JSONArray cards = json.getJSONArray("cards");
        @SuppressWarnings("unchecked")
        List<JSONObject> jsonList = (List<JSONObject>) JSONArray.toCollection(cards, JSONObject.class);
        
        // 收集SR以及UR信息
        for (JSONObject obj : jsonList)
        {
            if (cardDeckSetCardIdList.size() < 10 && !cardDeckSetCardTypeList.contains(obj.getString("cardid")))
            {
                cardDeckSetCardIdList.add(obj.getString("uniqid"));
                cardDeckSetCardTypeList.add(obj.getString("cardid"));
            }
            
            if (obj.getString("lv_max").equals("50") && !urList.contains(obj.getString("cardid")))
            {
                urList.add(obj.getString("cardid"));
                
                // 卡片合成base
                if (CommonUtil.isEmpty(fusionBaseId))
                {
                    fusionBaseId = obj.getString("uniqid");
                }
            }
            else if (obj.getString("lv_max").equals("40") && !srList.contains(obj.getString("cardid")))
            {
                srList.add(obj.getString("cardid"));
                
                // 卡片合成base
                if (CommonUtil.isEmpty(fusionBaseId))
                {
                    fusionBaseId = obj.getString("uniqid");
                }
            }
            else
            {
                // 卡片合成add
                if (CommonUtil.isEmpty(fusionAddId) && !cardDeckSetCardIdList.contains(obj.getString("uniqid")))
                {
                    fusionAddId = obj.getString("uniqid");
                }
            }
        }
        
        // 卡片合成
        if (!CommonUtil.isEmpty(fusionBaseId) && !CommonUtil.isEmpty(fusionAddId))
        {
            try
            {
                sid = request.cardFusion(sid, fusionBaseId, fusionAddId)[0];
            }
            catch (Exception e)
            {
                
            }
        }
        
        // 卡组配置
        if (!CommonUtil.isEmpty(cardDeckSetCardIdList))
        {
            try
            {
                sid = request.cardDeckSet(sid, null, null, null, null, CommonUtil.listToString(cardDeckSetCardIdList))[0];
            }
            catch (Exception e)
            {
                
            }
        }
        
        try
        {
            // 如果卡组大于80张，则调用卖卡
            if (jsonList.size() > 80)
            {
                sid = this.sellCard(sid);
            }
        }
        catch (Exception e)
        {
            
        }
        
        // 查询数据库卡组信息
        List<KrsmaCardEvt> krsmaCardList = this.mar_krsmaCardService.queryKrsmaCard(new KrsmaCardReq());
        // 处理卡组信息 UR
        for (String id : urList)
        {
            for (KrsmaCardEvt ur : krsmaCardList)
            {
                if (id.equals(ur.getCardId()))
                {
                    // 查询到UR 加入ID
                    list.add(id);
                    
                    // 判断该UR是什么职业 相应URNUM+1
                    if (ur.getType().equals(MarConstant.KRSMACARD_TYPE_1))
                    {
                        urNumA++;
                    }
                    else if (ur.getType().equals(MarConstant.KRSMACARD_TYPE_2))
                    {
                        urNumB++;
                    }
                    else if (ur.getType().equals(MarConstant.KRSMACARD_TYPE_3))
                    {
                        urNumC++;
                    }
                    else if (ur.getType().equals(MarConstant.KRSMACARD_TYPE_4))
                    {
                        urNumD++;
                    }
                    
                    // 处理title
                    title += ur.getName() + " ";
                }
            }
        }
        // 处理卡组信息 SR
        for (String id : srList)
        {
            for (KrsmaCardEvt sr : krsmaCardList)
            {
                if (id.equals(sr.getCardId()))
                {
                    list.add(id);
                }
            }
        }

        accountEvt.setInviteCode(inviteCode);
        accountEvt.setTitle(title.trim()); // 处理前后的空格
        accountEvt.setStatus(MarConstant.ACCOUNT_STATUS_2);
        accountEvt.setUrNumA(urNumA);
        accountEvt.setUrNumB(urNumB);
        accountEvt.setUrNumC(urNumC);
        accountEvt.setUrNumD(urNumD);
        if (null != list && list.size() > 0)
        {
            accountEvt.setCardIds(CommonUtil.listToString(list));
        }
        accountEvt.setCrystal(crystal);
        this.updateAccount(accountEvt);
    }
    
    /**
     * 抽卡
     */
    public void gachaAccount(List<String> ids)
    {
        List<AccountEvt> list = mar_accountDao.mar_queryAccountByIds(ids);
        
        // 遍历查询出的账号 对每个账号执行过checkCard
        for (AccountEvt accountEvt : list)
        {
            if (!MarConstant.ACCOUNT_STATUS_3.equals(accountEvt.getStatus()))
            {
                this.gacha(accountEvt);
                System.out.println(MarConstant.LOG_SYSTEM_INFO + "已完成第" + (list.indexOf(accountEvt) + 1) + "个任务！共" + list.size() + "个！");
            }
        }
    }
    
    /**
     * 全部抽卡
     */
    public void allGachaAccount()
    {
        AccountReq accountReq = new AccountReq();
        accountReq.setStatus(MarConstant.ACCOUNT_STATUS_2);
        accountReq.setCrystal(15);
        
        List<AccountEvt> list = mar_accountDao.mar_queryAccount(accountReq);
        
        // 遍历查询出的账号 对每个账号执行过checkCard
        for (AccountEvt accountEvt : list)
        {
            this.gacha(accountEvt);
            System.out.println(MarConstant.LOG_SYSTEM_INFO + "已完成第" + (list.indexOf(accountEvt) + 1) + "个任务！共" + list.size() + "个！");
        }
    }
    
    /**
     * 
     * @Title: gacha
     * @Description: 抽卡具体方法
     * @param accountEvt
     * @return void 返回类型
     * @throws
     */
    public void gacha(AccountEvt accountEvt)
    {
        if (CommonUtil.isEmpty(accountEvt.getGachaHash()))
        {
            return;
        }
        
        String sid;
        int coin = accountEvt.getCrystal();
        String gachaHash = accountEvt.getGachaHash();
        
        try
        {
            sid = this.login(accountEvt);
        }
        catch (Exception e)
        {
            return;
        }
        
        try
        {
            this.doGacha(sid, coin, gachaHash);
        }
        catch (Exception e)
        {
            return;
        }
        
    }
    
    public String doGacha(String sid, int coin, String gachaHash)
    {
        String[] result;
        
        try
        {
            result = request.gachaShow(sid);
            sid = result[0];
            
            result[1] = ("{\"gacha_list\"" + result[1].split("gacha_list\"")[1]);
            
            // 处理几个容易出现错误的节点
            result[1] = MarUtil.dealJSON(result[1], "gacha_name", "buymsg");
            result[1] = MarUtil.dealJSON(result[1], "buymsg", "order_num");
            
            JSONObject json = JSONObject.fromObject(result[1]);
            JSONArray gacha_list = json.getJSONArray("gacha_list");
            @SuppressWarnings("unchecked")
            List<JSONObject> jsonList = (List<JSONObject>) JSONArray.toCollection(gacha_list, JSONObject.class);
            
            for (JSONObject obj : jsonList)
            {
                /*
                if (obj.getInt("price") == 10)
                {
                    // gachaPlayTen 当前优惠活动抽取 10
                    result = request.gachaPlay(sid, obj.getString("gachaid"), obj.getString("pay_type"), gachaHash);
                    sid = result[0];
                    Thread.sleep(MarConstant.SLEEP_TIME_GACHA);
                    continue;
                }
                */
                // 如果抽奖存档15石头
                if (obj.getInt("price") == 15)
                {
                    try
                    {
                        // 先出售卡片
                        sid = this.sellCard(sid);
                        sid = this.sellCard(sid);
                    }
                    catch (Exception e)
                    {
                        this.teamBattleSolo(sid, MarConstant.BATTLESOLOSTART_FIRST, MarConstant.BATTLESOLOEND_3);
                    }
                    
                    
                    
                    if (coin >= 15)
                    {
                        // gachaPlayEleven 当前优惠活动抽取 15
                        result = request.gachaPlay(sid, obj.getString("gachaid"), obj.getString("pay_type"), gachaHash);
                        sid = result[0];
                        Thread.sleep(MarConstant.SLEEP_TIME_GACHA);
                        
                        if (coin >= 40)
                        {
                            result = request.gachaPlay(sid, obj.getString("gachaid"), obj.getString("pay_type"), gachaHash);
                            sid = result[0];
                        }
                    }
                    
                    break;
                }
                else if (obj.getInt("price") == 25)
                {
                    sid = this.sellCard(sid);
                    if (coin >= 25)
                    {
                        result = request.gachaPlay(sid, obj.getString("gachaid"), obj.getString("pay_type"), gachaHash);
                        sid = result[0];
                    }
                    break;
                }
            }
        }
        catch (Exception e)
        {
            
        }
        
        return sid;
    }
    
    public String sellCard(String sid) throws Exception
    {
        List<String> uniqiIds = new ArrayList<String>();
        // cardShow 检索卡组信息
        String[] result = request.cardShow(sid);
        sid = result[0];
        result[1] = ("{\"cards\"" + result[1].split("cards\"")[1]);
        JSONObject json = JSONObject.fromObject(result[1]);
        JSONArray cards = json.getJSONArray("cards");
        @SuppressWarnings("unchecked")
        List<JSONObject> jsonList = (List<JSONObject>) JSONArray.toCollection(cards, JSONObject.class);
        
        // 需要卖掉的卡
        for (JSONObject obj : jsonList)
        {
            if (obj.getInt("lv_max") < 30)
            {
                uniqiIds.add(obj.getString("uniqid"));
                if (uniqiIds.size() == 10)
                {
                    break;
                }
            }
        }
        // 如果2星卡卖光了 开始卖3星
        if (uniqiIds.size() < 10)
        {
            for (JSONObject obj : jsonList)
            {
                if (obj.getInt("lv_max") < 40)
                {
                    uniqiIds.add(obj.getString("uniqid"));
                    if (uniqiIds.size() == 10)
                    {
                        break;
                    }
                }
            }
        }
        
        if (jsonList.size() > 60 && uniqiIds != null && uniqiIds.size() > 1)
        {
            // 出售卡片
            result = request.cardSell(sid, CommonUtil.listToString(uniqiIds).replace(" ", ""));
            sid = result[0];
        }
        return sid;
    }
    
    public void teamBattleSolo(String sid, String battleSoloStart, String battleSoloEnd)
    {
        try
        {
            String[] result = request.teamBattleSoloShow(sid);
            sid = result[0];
            result[1] = ("{\"normal_groups\"" + result[1].split("normal_groups\"")[1]);
            JSONObject json = JSONObject.fromObject(result[1]);
            JSONArray arthers = json.getJSONArray("arthurs");
            @SuppressWarnings("unchecked")
            List<JSONObject> jsonList = (List<JSONObject>) JSONArray.toCollection(arthers, JSONObject.class);
            JSONArray users;
            String userA = "";
            String userB = "";
            String userD = "";
            for (JSONObject obj : jsonList)
            {
                if (MarConstant.KRSMACARD_TYPE_1.equals(obj.getString("arthur_type")))
                {
                    users = obj.getJSONArray("partners");
                    @SuppressWarnings("unchecked")
                    List<JSONObject> userList = (List<JSONObject>) JSONArray.toCollection(users, JSONObject.class);
                    userA = userList.get(0).getString("userid");
                }
                else if (MarConstant.KRSMACARD_TYPE_2.equals(obj.getString("arthur_type")))
                {
                    users = obj.getJSONArray("partners");
                    @SuppressWarnings("unchecked")
                    List<JSONObject> userList = (List<JSONObject>) JSONArray.toCollection(users, JSONObject.class);
                    userB = userList.get(0).getString("userid");
                }
                else if (MarConstant.KRSMACARD_TYPE_4.equals(obj.getString("arthur_type")))
                {
                    users = obj.getJSONArray("partners");
                    @SuppressWarnings("unchecked")
                    List<JSONObject> userList = (List<JSONObject>) JSONArray.toCollection(users, JSONObject.class);
                    userD = userList.get(0).getString("userid");
                }
            }
            
            result = request.teamBattleSoloStart(sid, battleSoloStart, userA, userB, userD);
            sid = result[0];
            Thread.sleep(MarConstant.SLEEP_TIME_BATTLE);
            
            request.teamBattleSoloEnd(sid, battleSoloEnd);
        }
        catch (Exception e)
        {
            return;
        }
    }
    
    public void forInviteAccount(List<String> ids)
    {
        // 现在不论多少一次全部查询出来执行
        AccountReq accountReq = new AccountReq();
        accountReq.setStatus(MarConstant.ACCOUNT_STATUS_0);
        List<AccountEvt> accountList = mar_accountDao.mar_queryAccount(accountReq);
        
        // 每次执行20个
        List<AccountEvt> tempList = new ArrayList<AccountEvt>();
        for (int i = 0; i < accountList.size(); i++)
        {
            tempList.add(accountList.get(i));
            
            if (i > 0 && i % 20 ==0)
            {
                // 每20个满了就执行一次
                this.forInvite(tempList);
                System.out.println(MarConstant.LOG_SYSTEM_INFO + "已经执行完 " + (i+1) + " 个！共 " + accountList.size() + " 个！");
                tempList = new ArrayList<AccountEvt>();
            }
        }
        
        // 最后一批如果不满50个，那么需要执行最后一次
        if (tempList.size() > 0)
        {
            this.forInvite(tempList);
        }
        
        System.out.println(MarConstant.LOG_SYSTEM_INFO + "全部招待账号已经准备完成！共 " + accountList.size() + " 个！");
    }
    
    private void forInvite(List<AccountEvt> list)
    {
        HashSet<AccountEvt> faildSet = new HashSet<AccountEvt>();
        String[] result = new String[2];
        String sid;
        
        // 刷初始的几个配置变量 后续可以改为数据库维护
        String name = MarConstant.INITIAL_NAME;
        String chara = MarConstant.INITIAL_CHARA;

        // 1、把所有账号查询出来 执行login connect
        for (AccountEvt accountEvt : list)
        {
            try
            {
                sid = this.login(accountEvt);
                accountEvt.setSessionId(sid);
                Thread.sleep(500);
            }
            catch (Exception e)
            {
                faildSet.add(accountEvt);
                continue;
            }
        }

        try
        {
            // 当前版本服务器改为必须等待1分钟才可起名字
            Thread.sleep(3000);
        }
        catch (Exception e)
        {
            
        }
    
        // 3、所有账号执行userCreate homeShow
        for (AccountEvt accountEvt : list)
        {
            try
            {
                // userCreate 起名字
                result = request.userCreate(accountEvt.getSessionId(), name, chara);
                sid = result[0];
                
                accountEvt.setSessionId(sid);
                Thread.sleep(500);
            }
            catch (Exception e)
            {
                // 起名字失败重新登录直接走战斗
                sid = this.login(accountEvt);
                accountEvt.setSessionId(sid);
                continue;
            }
        }
                
        // 4、IOS1.1.1必须战斗后才能刷招待
        for (AccountEvt accountEvt : list)
        {
            try
            {
                // homeShow 主页
                result = request.homeShow(accountEvt.getSessionId());
                sid = result[0];
                
                // 1.5 IOSv1.1.1更新完必须打完第一仗
                this.teamBattleSoloStart(sid, MarConstant.BATTLESOLOSTART_FIRST);
                accountEvt.setSessionId(sid);
                Thread.sleep(500);
            }
            catch (Exception e)
            {
                faildSet.add(accountEvt);
                continue;
            }
        }
        
        for (AccountEvt accountEvt : list)
        {
            try
            {
                sid = accountEvt.getSessionId();
                this.teamBattleSoloEnd(sid, MarConstant.BATTLESOLOEND_3);
                
                accountEvt.setStatus(MarConstant.ACCOUNT_STATUS_4);
                this.updateAccount(accountEvt);
                Thread.sleep(500);
            }
            catch (Exception e)
            {
                accountEvt.setStatus(MarConstant.ACCOUNT_STATUS_0);
                this.updateAccount(accountEvt);
                continue;
            }
        }
        
        // 重置失败了的初始账号
        Iterator<AccountEvt> it = faildSet.iterator();
        while (it.hasNext())
        {
            AccountEvt accountEvt = it.next();
            accountEvt.setStatus(MarConstant.ACCOUNT_STATUS_0);
            this.updateAccount(accountEvt);
        }
    }
    
    public void teamBattleSoloStart(String sid, String battleSoloStart)
    {
        KrsmaRequest request = KrsmaRequest.getInstance();
        try
        {
            String[] result = request.teamBattleSoloShow(sid);
            sid = result[0];
            result[1] = ("{\"normal_groups\"" + result[1].split("normal_groups\"")[1]);
            JSONObject json = JSONObject.fromObject(result[1]);
            JSONArray arthers = json.getJSONArray("arthurs");
            @SuppressWarnings("unchecked")
            List<JSONObject> jsonList = (List<JSONObject>) JSONArray.toCollection(arthers, JSONObject.class);
            JSONArray users;
            String userA = "";
            String userB = "";
            String userD = "";
            for (JSONObject obj : jsonList)
            {
                if (MarConstant.KRSMACARD_TYPE_1.equals(obj.getString("arthur_type")))
                {
                    users = obj.getJSONArray("partners");
                    @SuppressWarnings("unchecked")
                    List<JSONObject> userList = (List<JSONObject>) JSONArray.toCollection(users, JSONObject.class);
                    userA = userList.get(0).getString("userid");
                }
                else if (MarConstant.KRSMACARD_TYPE_2.equals(obj.getString("arthur_type")))
                {
                    users = obj.getJSONArray("partners");
                    @SuppressWarnings("unchecked")
                    List<JSONObject> userList = (List<JSONObject>) JSONArray.toCollection(users, JSONObject.class);
                    userB = userList.get(0).getString("userid");
                }
                else if (MarConstant.KRSMACARD_TYPE_4.equals(obj.getString("arthur_type")))
                {
                    users = obj.getJSONArray("partners");
                    @SuppressWarnings("unchecked")
                    List<JSONObject> userList = (List<JSONObject>) JSONArray.toCollection(users, JSONObject.class);
                    userD = userList.get(0).getString("userid");
                }
            }
            
            result = request.teamBattleSoloStart(sid, battleSoloStart, userA, userB, userD);
            sid = result[0];
            //Thread.sleep(MarConstant.SLEEP_TIME_BATTLE);
            
            //request.teamBattleSoloEnd(sid, battleSoloEnd);
        }
        catch (Exception e)
        {
            return;
        }
    }
    
    public void teamBattleSoloEnd(String sid, String battleSoloEnd)
    {
        KrsmaRequest request = KrsmaRequest.getInstance();
        try
        {
            request.teamBattleSoloEnd(sid, battleSoloEnd);
        }
        catch (Exception e)
        {
            return;
        }
    }
    
    /**
     * @return 返回 mar_accountDao
     */
    public AccountDao getMar_accountDao()
    {
        return mar_accountDao;
    }
    
    /**
     * @param 对mar_accountDao进行赋值
     */
    public void setMar_accountDao(AccountDao mar_accountDao)
    {
        this.mar_accountDao = mar_accountDao;
    }

    public InviteService getMar_inviteService()
    {
        return mar_inviteService;
    }

    public void setMar_inviteService(InviteService mar_inviteService)
    {
        this.mar_inviteService = mar_inviteService;
    }

    public KrsmaCardService getMar_krsmaCardService()
    {
        return mar_krsmaCardService;
    }

    public void setMar_krsmaCardService(KrsmaCardService mar_krsmaCardService)
    {
        this.mar_krsmaCardService = mar_krsmaCardService;
    }
    
    public static void main(String[] args)
    {
        //System.out.println("0123456789".substring(0, 9));
        String result = "1Cjk/meOzs/gq8Rz9j/DBB7ADdDKE={\"res_code\":0,\"res_str\":\"OK\"}{\"user\":{\"userid\":12960326,\"name\":\"Asuna\",\"first_arthur_type\":3,\"arthur_rank\":1,\"lv\":1,\"exp\":0,\"now_lv_exp\":0,\"next_lv_exp\":20,\"fame\":0,\"leader_card_uniqid\":0,\"leader_cardid\":0,\"comment\":\"よろしくおねがいしま??,\"ap\":3,\"ap_max\":3,\"ap_next_sec\":6245,\"ap_heal_sec\":7200,\"bp\":20,\"bp_max\":20,\"bp_next_sec\":125,\"bp_heal_sec\":180,\"card_max_extend\":0,\"card_num\":10,\"card_max\":100,\"friend_max\":20,\"friend_max_extend\":0,\"gold\":5000,\"fp\":2010,\"coin\":0,\"coin_free\":0,\"enter_state\":0,\"navi_type\":0,\"inviteid\":\"020016822\",\"premium_service_grade\":0,\"jobs\":[{\"hp\":0,\"atkp\":0,\"intp\":0,\"mndp\":0},{\"hp\":830,\"atkp\":150,\"intp\":20,\"mndp\":60},{\"hp\":1440,\"atkp\":100,\"intp\":20,\"mndp\":10},{\"hp\":650,\"atkp\":30,\"intp\":150,\"mndp\":80},{\"hp\":680,\"atkp\":20,\"intp\":100,\"mndp\":150}]},\"quests\":[{\"now_quest\":[{\"questid\":13,\"reward\":[{\"type\":8,\"num\":1,\"reward_typeid\":2000}],\"feature_flag\":64487488,\"title\":\"クエスト『初めの????』を<br>クリアす??,\"description\":\"クエスト『初めの????』を<br>クリアす??,\"receive_comment\":[\"<color red>クエスト</color>から<color red>ひとりでクエスト</color>を選択し??br>指定のクエストのクリアを目指してください??]}]}],\"banners\":[{\"home_banner_type\":0,\"image_url\":\"http://www.cache.kairisei-ma.jp/top/2014040714/app_banners/141209_windgacha_ba.png\",\"open_url\":\"http://stg.www.kairisei-ma.jp/information/2014/12/gacha-wind.html\"},{\"home_banner_type\":0,\"image_url\":\"http://www.cache.kairisei-ma.jp/top/2014040714/app_banners/ba_gacha_20141210.png\",\"open_url\":\"http://www.kairisei-ma.jp/information/2014/11/gacha3.html\"},{\"home_banner_type\":0,\"image_url\":\"http://www.cache.kairisei-ma.jp/top/2014040714/app_banners/141202_3d_choudokyu_ba.png\",\"open_url\":\"http://www.kairisei-ma.jp/information/2014/12/12.html\"},{\"home_banner_type\":0,\"image_url\":\"http://www.cache.kairisei-ma.jp/top/2014040714/app_banners/ba_info_navi.png\",\"open_url\":\"http://www.kairisei-ma.jp/information/2014/11/post.html\"},{\"home_banner_type\":4,\"image_url\":\"http://www.cache.kairisei-ma.jp/top/2014040714/app_banners/ba_info_fri.png\",\"open_url\":\"teambattleone:200005\"},{\"home_banner_type\":4,\"image_url\":\"http://www.cache.kairisei-ma.jp/top/2014040714/app_banners/ba_info_20141101.png\",\"open_url\":\"teambattleone:400020\"},{\"home_banner_type\":4,\"image_url\":\"http://www.cache.kairisei-ma.jp/top/2014040714/app_banners/ba_info_20141203.png\",\"open_url\":\"teambattleone:400080\"}],\"server_time\":1418372745}";
        //System.out.println(("{\"user\"" + result.split("user\"")[1]).replace("????", "xxxx").replace("??,", "\",").replace("??]", "\"]"));
        result = ("{\"user\"" + result.split("user\"")[1]);
        result = result.substring(0, result.indexOf(",\"premium_service_grade")) + "}}";
        if (result.contains("?"))
        {
            result = result.replace("??,", "\",");
        }
        System.out.println(result);
        JSONObject  json = JSONObject.fromObject(result);
        int crystal = json.getJSONObject("user").getInt("coin_free");
        System.out.println(crystal);
    }
}