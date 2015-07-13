package com.moemao.tgks.mar.marzlog.entity;

import java.util.Date;

public class MarzLogEvt
{
/**
 * 表唯一主键
 */
private String id;

/**
 * 账号ID
 */
private String tgksId;

/**
 * 类型（0 系统；1 战斗；2 探索；3 道具使用；4 合成；5 出售）
 */
private String type;

/**
 * 详细信息
 */
private String info;

/**
 * 创建时间
 */
private Date createTime;

@Override
public String toString()
{
return String.format("id:%S\naccountId:%S\ntype:%S\ninfo:%S\ncreateTime:%S\n", id, tgksId, type, info, createTime);
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

public String getTgksId()
{
    return tgksId;
}

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
 * @return 返回 info
 */
public String getInfo()
{
    return info;
}

/**
 * @param 对info进行赋值
 */
public void setInfo(String info)
{
    this.info = info;
}

/**
 * @return 返回 createTime
 */
public Date getCreateTime()
{
    return createTime;
}

/**
 * @param 对createTime进行赋值
 */
public void setCreateTime(Date createTime)
{
    this.createTime = createTime;
}

}