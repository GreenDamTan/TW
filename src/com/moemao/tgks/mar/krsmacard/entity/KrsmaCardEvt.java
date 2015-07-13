package com.moemao.tgks.mar.krsmacard.entity;

public class KrsmaCardEvt
{
/**
 * 表唯一主键
 */
private String id;

/**
 * 卡牌ID
 */
private String cardId;

/**
 * 名字
 */
private String name;

/**
 * 昵称
 */
private String nickName;

/**
 * 职业（1 佣兵；2 富豪；3 盗贼；4 歌姬）
 */
private String type;

/**
 * 稀有度
 */
private String rarity;

/**
 * 卡图URL
 */
private String imageUrl;

/**
 * 图标URL
 */
private String iconUrl;

/**
 * 进化后卡牌ID
 */
private String evoCardId;

/**
 * 卖出Flag
 */
private String sellFlag;

/**
 * 名声合成Flag
 */
private String fameFlag;

private String check;

@Override
public String toString()
{
return String.format("id:%S\ncardId:%S\nname:%S\nnickName:%S\ntype:%S\nrarity:%S\nimageUrl:%S\niconUrl:%S\n", id, cardId, name, nickName, type, rarity, imageUrl, iconUrl);
}

public String getEvoCardId()
{
    return evoCardId;
}

public void setEvoCardId(String evoCardId)
{
    this.evoCardId = evoCardId;
}

public String getSellFlag()
{
    return sellFlag;
}

public void setSellFlag(String sellFlag)
{
    this.sellFlag = sellFlag;
}

public String getFameFlag()
{
    return fameFlag;
}

public void setFameFlag(String fameFlag)
{
    this.fameFlag = fameFlag;
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
 * @return 返回 cardId
 */
public String getCardId()
{
    return cardId;
}

/**
 * @param 对cardId进行赋值
 */
public void setCardId(String cardId)
{
    this.cardId = cardId;
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
 * @return 返回 nickName
 */
public String getNickName()
{
    return nickName;
}

/**
 * @param 对nickName进行赋值
 */
public void setNickName(String nickName)
{
    this.nickName = nickName;
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
 * @return 返回 rarity
 */
public String getRarity()
{
    return rarity;
}

/**
 * @param 对rarity进行赋值
 */
public void setRarity(String rarity)
{
    this.rarity = rarity;
}

/**
 * @return 返回 imageUrl
 */
public String getImageUrl()
{
    return imageUrl;
}

/**
 * @param 对imageUrl进行赋值
 */
public void setImageUrl(String imageUrl)
{
    this.imageUrl = imageUrl;
}

/**
 * @return 返回 iconUrl
 */
public String getIconUrl()
{
    return iconUrl;
}

/**
 * @param 对iconUrl进行赋值
 */
public void setIconUrl(String iconUrl)
{
    this.iconUrl = iconUrl;
}

public String getCheck()
{
    return check;
}

public void setCheck(String check)
{
    this.check = check;
}

}