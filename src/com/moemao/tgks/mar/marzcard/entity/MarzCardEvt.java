package com.moemao.tgks.mar.marzcard.entity;

import java.util.Date;

public class MarzCardEvt
{
/**
 * 表唯一主键
 */
private String id;

/**
 * 密码
 */
private String password;

/**
 * 类型（0 试用1天；1 周卡；2 月卡；3 季卡）
 */
private String type;

/**
 * 状态（0 未使用；1 已使用）
 */
private String status;

/**
 * 使用时间
 */
private Date usedTime;

/**
 * 创建时间
 */
private Date createTime;

@Override
public String toString()
{
return String.format("id:%S\npassword:%S\ntype:%S\nstatus:%S\nusedTime:%S\ncreateTime:%S\n", id, password, type, status, usedTime, createTime);
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
 * @return 返回 password
 */
public String getPassword()
{
    return password;
}

/**
 * @param 对password进行赋值
 */
public void setPassword(String password)
{
    this.password = password;
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
 * @return 返回 usedTime
 */
public Date getUsedTime()
{
    return usedTime;
}

/**
 * @param 对usedTime进行赋值
 */
public void setUsedTime(Date usedTime)
{
    this.usedTime = usedTime;
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