package com.moemao.tgks.mar.marzitem.entity;

public class MarzItemEvt
{
/**
 * 表唯一主键
 */
private String id;

/**
 * 物品ID
 */
private String itemId;

/**
 * 名称
 */
private String name;

/**
 * 类型（1 药水；2 钥匙；3 硬币）
 */
private String type;

/**
 * 状态（0 已失效；1 生效中）
 */
private String status;

/**
 * 参数（多个参数时用|分割）
 */
private String param;

@Override
public String toString()
{
return String.format("id:%S\nitemId:%S\nname:%S\ntype:%S\nparam:%S\n", id, itemId, name, type, param);
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
 * @return 返回 itemId
 */
public String getItemId()
{
    return itemId;
}

/**
 * @param 对itemId进行赋值
 */
public void setItemId(String itemId)
{
    this.itemId = itemId;
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

public String getStatus()
{
    return status;
}

public void setStatus(String status)
{
    this.status = status;
}

/**
 * @return 返回 param
 */
public String getParam()
{
    return param;
}

/**
 * @param 对param进行赋值
 */
public void setParam(String param)
{
    this.param = param;
}

}