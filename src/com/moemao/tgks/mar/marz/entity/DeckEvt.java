package com.moemao.tgks.mar.marz.entity;

import net.sf.json.JSONObject;

/**
 * 
 * 项目名称：TGKS_MAR
 * 类名称：DeckEvt
 * 类描述：卡组信息类 由于card接口修改了现在已经改成数字了
 *              暂时只取用得到的几个参数信息
 * 创建人：Ken
 * 创建时间：2015-5-30 上午1:11:50
 * 修改人：
 * 修改时间：
 * 修改备注：
 * @version
 *
 */
public class DeckEvt
{
    private String arthur_type; // 0
    private String idx; // 1
    private String job_type; // 2
    private String leader_card_idx; // 3
    private String card_uniqid; // 4
    private String name; // 5
    private String is_active; // 6
    private String is_rental; // 7
    private String deck_rank; // 8
    
    public DeckEvt()
    {
        
    }
    
    /**
     * 目前只需要卡组序号 职业 卡片信息
     * @param deckJSON
     */
    public DeckEvt(JSONObject deckJSON)
    {
        this.setArthur_type(deckJSON.getString("0"));
        this.setIdx(deckJSON.getString("1"));
        this.setJob_type(deckJSON.getString("2"));
        this.setCard_uniqid(deckJSON.getString("4"));
    }

    public String getArthur_type()
    {
        return arthur_type;
    }

    public void setArthur_type(String arthur_type)
    {
        this.arthur_type = arthur_type;
    }

    public String getIdx()
    {
        return idx;
    }

    public void setIdx(String idx)
    {
        this.idx = idx;
    }

    public String getJob_type()
    {
        return job_type;
    }

    public void setJob_type(String job_type)
    {
        this.job_type = job_type;
    }

    public String getLeader_card_idx()
    {
        return leader_card_idx;
    }

    public void setLeader_card_idx(String leader_card_idx)
    {
        this.leader_card_idx = leader_card_idx;
    }

    public String getCard_uniqid()
    {
        return card_uniqid;
    }

    public void setCard_uniqid(String card_uniqid)
    {
        this.card_uniqid = card_uniqid;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getIs_active()
    {
        return is_active;
    }

    public void setIs_active(String is_active)
    {
        this.is_active = is_active;
    }

    public String getIs_rental()
    {
        return is_rental;
    }

    public void setIs_rental(String is_rental)
    {
        this.is_rental = is_rental;
    }

    public String getDeck_rank()
    {
        return deck_rank;
    }

    public void setDeck_rank(String deck_rank)
    {
        this.deck_rank = deck_rank;
    }
}
