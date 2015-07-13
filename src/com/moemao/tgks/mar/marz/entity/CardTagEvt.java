package com.moemao.tgks.mar.marz.entity;

import net.sf.json.JSONObject;

public class CardTagEvt extends CardEvt
{
    public CardTagEvt(JSONObject cardJSON)
    {
        this.setUniqid(cardJSON.getString("uniqid"));
        this.setCardid(cardJSON.getString("cardid"));
    }
}
