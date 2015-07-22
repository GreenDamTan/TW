package com.moemao.tgks.mar.marzmap.entity;

import com.moemao.tgks.mar.marz.entity.BossEvt;

public class MarzMapEvt
{
/**
 * 表唯一主键
 */
private String id;

/**
 * 战斗地图的BOSSID
 */
private String bossId;

/**
 * BOSS名称难度
 */
private String bossName;

/**
 * 地图头像
 */
private String pictid;

/**
 * VIP等级
 */
private String vip;

/**
 * BP消耗
 */
private Integer bpCost;

/**
 * 敌人回合数
 */
private Integer process;

/**
 * 攻击弱点数
 */
private Integer target;

/**
 * 钥匙类型
 */
private String openKeyType;

/**
 * 敌人数量
 */
private Integer enemy;

/**
 * 排序
 */
private String sort;

/**
 * 设置页面是否被选中
 */
private String check;

/**
 * 设置页面是否显示选择框
 */
private String show;

public MarzMapEvt()
{
    
}

public MarzMapEvt(BossEvt bossEvt)
{
    this.setBossId(bossEvt.getBossId());
    this.setBossName(bossEvt.getBossName());
    this.setPictid(bossEvt.getPictid());
    this.setVip(bossEvt.getVip());
    this.setBpCost(bossEvt.getBpCost());
    this.setProcess(bossEvt.getProcess());
    this.setTarget(bossEvt.getTarget());
    this.setOpenKeyType(bossEvt.getOpenKeyType());
    this.setEnemy(bossEvt.getEnemy());
    this.setSort(bossEvt.getSort());
}

@Override
public String toString()
{
return String.format("id:%S\nbossId:%S\nbossName:%S\nbpCost:%S\n", id, bossId, bossName, bpCost);
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
 * @return 返回 bossId
 */
public String getBossId()
{
    return bossId;
}

/**
 * @param 对bossId进行赋值
 */
public void setBossId(String bossId)
{
    this.bossId = bossId;
}

/**
 * @return 返回 bossName
 */
public String getBossName()
{
    return bossName;
}

/**
 * @param 对bossName进行赋值
 */
public void setBossName(String bossName)
{
    this.bossName = bossName;
}

public String getPictid()
{
    return pictid;
}

public void setPictid(String pictid)
{
    this.pictid = pictid;
}

/**
 * @return 返回 bpCost
 */
public Integer getBpCost()
{
    return bpCost;
}

/**
 * @param 对bpCost进行赋值
 */
public void setBpCost(Integer bpCost)
{
    this.bpCost = bpCost;
}

public Integer getProcess()
{
    return process;
}

public void setProcess(Integer process)
{
    this.process = process;
}

public String getOpenKeyType()
{
    return openKeyType;
}

public void setOpenKeyType(String openKeyType)
{
    this.openKeyType = openKeyType;
}

public Integer getTarget()
{
    return target;
}

public void setTarget(Integer target)
{
    this.target = target;
}

public Integer getEnemy()
{
    return enemy;
}

public void setEnemy(Integer enemy)
{
    this.enemy = enemy;
}

public String getSort()
{
    return sort;
}

public void setSort(String sort)
{
    this.sort = sort;
}

public String getVip()
{
    return vip;
}

public void setVip(String vip)
{
    this.vip = vip;
}

public String getCheck()
{
    return check;
}

public void setCheck(String check)
{
    this.check = check;
}

public String getShow()
{
    return show;
}

public void setShow(String show)
{
    this.show = show;
}

}
