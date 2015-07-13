package com.moemao.tgks.mar.marz.entity;

import net.sf.json.JSONObject;

import com.moemao.tgks.mar.marzitem.entity.MarzItemEvt;

public class ItemEvt extends MarzItemEvt
{
    private int num;
    
    public ItemEvt(JSONObject json)
    {
        this.setItemId(json.getString("itemid"));
        this.setNum(json.getInt("num"));
    }

    public int getNum()
    {
        return num;
    }

    public void setNum(int num)
    {
        this.num = num;
    }
}
