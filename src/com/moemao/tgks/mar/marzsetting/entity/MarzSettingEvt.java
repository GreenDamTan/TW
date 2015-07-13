package com.moemao.tgks.mar.marzsetting.entity;

public class MarzSettingEvt
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
 * 类型（0 开关；1 参数）
 */
private String type;

/**
 * 参数名
 */
private String name;

/**
 * 参数值
 */
private String value;

private String explore;

private String cardSell;

private String cardSellCommon;

private String cardFusion;

private String battle;

private String battleNowaste;

private String battleNowasteBossId;

private String battleGetStone;

private String pvp;

private String fameFusion;

private String coinGacha;

private String coinGachaGachaId;

private String autoUseBPPotionBPLimit;

private String autoUseBPPotionItemId;

private String autoUseBPPotion;

private String autoBuyBPPotion;

private String cardSellEvo;

private String cardSellEvoNum;

private String battleLevelUp;


private String bossIds;

private String sellCardIds;

private String fameCardIds;

@Override
public String toString()
{
return String.format("id:%S\ntgksId:%S\ntype:%S\nname:%S\nvalue:%S\n", id, tgksId, type, name, value);
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
 * @return 返回 value
 */
public String getValue()
{
    return value;
}

/**
 * @param 对value进行赋值
 */
public void setValue(String value)
{
    this.value = value;
}

public String getExplore()
{
    return explore;
}

public void setExplore(String explore)
{
    this.explore = explore;
}

public String getCardSell()
{
    return cardSell;
}

public void setCardSell(String cardSell)
{
    this.cardSell = cardSell;
}

public String getCardSellCommon()
{
    return cardSellCommon;
}

public void setCardSellCommon(String cardSellCommon)
{
    this.cardSellCommon = cardSellCommon;
}

public String getCardFusion()
{
    return cardFusion;
}

public void setCardFusion(String cardFusion)
{
    this.cardFusion = cardFusion;
}

public String getFameFusion()
{
    return fameFusion;
}

public void setFameFusion(String fameFusion)
{
    this.fameFusion = fameFusion;
}

public String getBattle()
{
    return battle;
}

public void setBattle(String battle)
{
    this.battle = battle;
}

public String getBattleNowaste()
{
    return battleNowaste;
}

public void setBattleNowaste(String battleNowaste)
{
    this.battleNowaste = battleNowaste;
}

public String getBattleNowasteBossId()
{
    return battleNowasteBossId;
}

public void setBattleNowasteBossId(String battleNowasteBossId)
{
    this.battleNowasteBossId = battleNowasteBossId;
}

public String getBattleGetStone()
{
    return battleGetStone;
}

public void setBattleGetStone(String battleGetStone)
{
    this.battleGetStone = battleGetStone;
}

public String getPvp()
{
    return pvp;
}

public void setPvp(String pvp)
{
    this.pvp = pvp;
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

public String getAutoUseBPPotion()
{
    return autoUseBPPotion;
}

public void setAutoUseBPPotion(String autoUseBPPotion)
{
    this.autoUseBPPotion = autoUseBPPotion;
}

public String getAutoUseBPPotionBPLimit()
{
    return autoUseBPPotionBPLimit;
}

public void setAutoUseBPPotionBPLimit(String autoUseBPPotionBPLimit)
{
    this.autoUseBPPotionBPLimit = autoUseBPPotionBPLimit;
}

public String getAutoUseBPPotionItemId()
{
    return autoUseBPPotionItemId;
}

public void setAutoUseBPPotionItemId(String autoUseBPPotionItemId)
{
    this.autoUseBPPotionItemId = autoUseBPPotionItemId;
}

public String getAutoBuyBPPotion()
{
    return autoBuyBPPotion;
}

public void setAutoBuyBPPotion(String autoBuyBPPotion)
{
    this.autoBuyBPPotion = autoBuyBPPotion;
}

public String getCoinGacha()
{
    return coinGacha;
}

public void setCoinGacha(String coinGacha)
{
    this.coinGacha = coinGacha;
}

public String getCoinGachaGachaId()
{
    return coinGachaGachaId;
}

public void setCoinGachaGachaId(String coinGachaGachaId)
{
    this.coinGachaGachaId = coinGachaGachaId;
}

public String getCardSellEvo()
{
	return cardSellEvo;
}

public void setCardSellEvo(String cardSellEvo)
{
	this.cardSellEvo = cardSellEvo;
}

public String getCardSellEvoNum()
{
	return cardSellEvoNum;
}

public void setCardSellEvoNum(String cardSellEvoNum)
{
	this.cardSellEvoNum = cardSellEvoNum;
}

public String getBattleLevelUp()
{
    return battleLevelUp;
}

public void setBattleLevelUp(String battleLevelUp)
{
    this.battleLevelUp = battleLevelUp;
}

}