package com.moemao.tgks.mar.marzaccount.entity;

import java.util.Date;
import java.util.List;

import com.moemao.tgks.mar.marz.entity.ItemEvt;

public class MarzAccountEvt
{
/**
 * 表唯一主键
 */
private String id;

/**
 * tgks账号ID
 */
private String tgksId;

/**
 * UUID
 */
private String uuid;

/**
 * hashToken
 */
private String hashToken;

/**
 * accountKey
 */
private String accountKey;

/**
 * gachaHash
 */
private String gachaHash;

/**
 * 类型（0 IOS；1 Android）
 */
private String type;

/**
 * 状态（0 离线；1 在线）
 */
private String status;

/**
 * SessionId
 */
private String sessionId;

/**
 * VIP等级（0 试用；1 普通；2 白金；3 钻石）
 */
private String vip;

/**
 * 角色名
 */
private String name;

/**
 * USER ID
 */
private String userId;

/**
 * 等级
 */
private Integer lv;

/**
 * AP
 */
private Integer ap;

/**
 * AP上限
 */
private Integer apMax;

/**
 * BP
 */
private Integer bp;

/**
 * BP上限
 */
private Integer bpMax;

/**
 * 卡片数量
 */
private Integer cardNum;

/**
 * 卡片数量上限
 */
private Integer cardMax;

/**
 * 金钱
 */
private Integer gold;

/**
 * 友情点
 */
private Integer fp;

/**
 * 水晶数量
 */
private Integer coin;

/**
 * 道具
 */
private List<ItemEvt> itemList;

/**
 * 道具信息
 */
private String itemInfo;

/**
 * 挂机地图
 */
private String bossIds;

/**
 * 出售卡片列表
 */
private String sellCardIds;

/**
 * 名声合成卡片列表
 */
private String fameCardIds;

private Date endTime;

private Date createTime;

/**
 * 备注
 */
private String remark;

@Override
public String toString()
{
return String.format("id:%S\ntgksId:%S\nuuid:%S\nhashToken:%S\naccountKey:%S\ngachaHash:%S\ntype:%S\nstatus:%S\nsessionId:%S\nvip:%S\nname:%S\nuserId:%S\nlv:%S\nap:%S\napMax:%S\nbp:%S\nbpMax:%S\ncardNum:%S\ncardMax:%S\ngold:%S\nfp:%S\ncoin:%S\n", id, tgksId, uuid, hashToken, accountKey, gachaHash, type, status, sessionId, vip, name, userId, lv, ap, apMax, bp, bpMax, cardNum, cardMax, gold, fp, coin);
}

/**
 * @return 返回 id
 */
public String getId()
{
    return id;
}

/**
 * @param 对id进行赋值
 */
public void setId(String id)
{
    this.id = id;
}

/**
 * @return 返回 tgksId
 */
public String getTgksId()
{
    return tgksId;
}

/**
 * @param 对tgksId进行赋值
 */
public void setTgksId(String tgksId)
{
    this.tgksId = tgksId;
}


public String getUuid()
{
    return uuid;
}

public void setUuid(String uuid)
{
    this.uuid = uuid;
}

public String getHashToken()
{
    return hashToken;
}

public void setHashToken(String hashToken)
{
    this.hashToken = hashToken;
}

public String getAccountKey()
{
    return accountKey;
}

public void setAccountKey(String accountKey)
{
    this.accountKey = accountKey;
}

public String getGachaHash()
{
    return gachaHash;
}

public void setGachaHash(String gachaHash)
{
    this.gachaHash = gachaHash;
}

public String getItemInfo()
{
    return itemInfo;
}

public void setItemInfo(String itemInfo)
{
    this.itemInfo = itemInfo;
}

/**
 * @return 返回 type
 */
public String getType()
{
    return type;
}

/**
 * @param 对type进行赋值
 */
public void setType(String type)
{
    this.type = type;
}

/**
 * @return 返回 status
 */
public String getStatus()
{
    return status;
}

/**
 * @param 对status进行赋值
 */
public void setStatus(String status)
{
    this.status = status;
}

/**
 * @return 返回 sessionId
 */
public String getSessionId()
{
    return sessionId;
}

/**
 * @param 对sessionId进行赋值
 */
public void setSessionId(String sessionId)
{
    this.sessionId = sessionId;
}

/**
 * @return 返回 vip
 */
public String getVip()
{
    return vip;
}

/**
 * @param 对vip进行赋值
 */
public void setVip(String vip)
{
    this.vip = vip;
}

/**
 * @return 返回 name
 */
public String getName()
{
    return name;
}

/**
 * @param 对name进行赋值
 */
public void setName(String name)
{
    this.name = name;
}

/**
 * @return 返回 userId
 */
public String getUserId()
{
    return userId;
}

/**
 * @param 对userId进行赋值
 */
public void setUserId(String userId)
{
    this.userId = userId;
}

/**
 * @return 返回 lv
 */
public Integer getLv()
{
    return lv;
}

/**
 * @param 对lv进行赋值
 */
public void setLv(Integer lv)
{
    this.lv = lv;
}

/**
 * @return 返回 ap
 */
public Integer getAp()
{
    return ap;
}

/**
 * @param 对ap进行赋值
 */
public void setAp(Integer ap)
{
    this.ap = ap;
}

/**
 * @return 返回 apMax
 */
public Integer getApMax()
{
    return apMax;
}

/**
 * @param 对apMax进行赋值
 */
public void setApMax(Integer apMax)
{
    this.apMax = apMax;
}

/**
 * @return 返回 bp
 */
public Integer getBp()
{
    return bp;
}

/**
 * @param 对bp进行赋值
 */
public void setBp(Integer bp)
{
    this.bp = bp;
}

/**
 * @return 返回 bpMax
 */
public Integer getBpMax()
{
    return bpMax;
}

/**
 * @param 对bpMax进行赋值
 */
public void setBpMax(Integer bpMax)
{
    this.bpMax = bpMax;
}

/**
 * @return 返回 cardNum
 */
public Integer getCardNum()
{
    return cardNum;
}

/**
 * @param 对cardNum进行赋值
 */
public void setCardNum(Integer cardNum)
{
    this.cardNum = cardNum;
}

/**
 * @return 返回 cardMax
 */
public Integer getCardMax()
{
    return cardMax;
}

/**
 * @param 对cardMax进行赋值
 */
public void setCardMax(Integer cardMax)
{
    this.cardMax = cardMax;
}

/**
 * @return 返回 gold
 */
public Integer getGold()
{
    return gold;
}

/**
 * @param 对gold进行赋值
 */
public void setGold(Integer gold)
{
    this.gold = gold;
}

/**
 * @return 返回 fp
 */
public Integer getFp()
{
    return fp;
}

/**
 * @param 对fp进行赋值
 */
public void setFp(Integer fp)
{
    this.fp = fp;
}

/**
 * @return 返回 coin
 */
public Integer getCoin()
{
    return coin;
}

/**
 * @param 对coin进行赋值
 */
public void setCoin(Integer coin)
{
    this.coin = coin;
}

public String getBossIds()
{
    return bossIds;
}

public void setBossIds(String bossIds)
{
    this.bossIds = bossIds;
}

public String getSellCardIds()
{
    return sellCardIds;
}

public void setSellCardIds(String sellCardIds)
{
    this.sellCardIds = sellCardIds;
}

public String getFameCardIds()
{
    return fameCardIds;
}

public void setFameCardIds(String fameCardIds)
{
    this.fameCardIds = fameCardIds;
}

public String getRemark()
{
    return remark;
}

public void setRemark(String remark)
{
    this.remark = remark;
}

public Date getEndTime()
{
    return endTime;
}

public void setEndTime(Date endTime)
{
    this.endTime = endTime;
}

public Date getCreateTime()
{
    return createTime;
}

public void setCreateTime(Date createTime)
{
    this.createTime = createTime;
}

public List<ItemEvt> getItemList()
{
    return itemList;
}

public void setItemList(List<ItemEvt> itemList)
{
    this.itemList = itemList;
}

}