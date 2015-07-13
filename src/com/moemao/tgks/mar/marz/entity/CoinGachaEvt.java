package com.moemao.tgks.mar.marz.entity;

public class CoinGachaEvt extends GachaEvt
{
    private String itemId;
    private int costNum;
    
    // 表中保存的参数值
    private String param;
    
    public String getItemId()
    {
        return itemId;
    }
    
    public void setItemId(String itemId)
    {
        this.itemId = itemId;
    }
    
    public int getCostNum()
    {
        return costNum;
    }
    
    public void setCostNum(int costNum)
    {
        this.costNum = costNum;
    }
    
    public String getParam()
    {
        return param;
    }
    
    public void setParam(String param)
    {
        this.param = param;
    }
}
