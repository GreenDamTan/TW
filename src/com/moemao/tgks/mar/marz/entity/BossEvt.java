package com.moemao.tgks.mar.marz.entity;

import net.sf.json.JSONObject;

import com.moemao.tgks.mar.marzmap.entity.MarzMapEvt;

public class BossEvt extends MarzMapEvt
{
    private String is_only_my_deck;
    private String arthur_limit;
    private String difficulty;
    private String is_continue;
    private String bg_num;
    /**
     * 副本状态 0 未战斗；1 未通过；2 已通过
     */
    private String state;
    private String hint;
    private String reward_cardids;
    private String is_model;
    private String user_buff_id;
    private String unlock_expire_time;
    private String enemy_partyid;
    
    public BossEvt()
    {
        
    }
    
    public BossEvt(JSONObject json)
    {
        this.setBossId(json.getString("bossid"));
        //this.setIs_only_my_deck(json.getString("is_only_my_deck"));
        //this.setArthur_limit(json.getString("arthur_limit"));
        this.setDifficulty(json.getString("difficulty"));
        this.setBpCost(json.getInt("bp_use"));
        this.setIs_continue(json.getString("is_continue"));
        //this.setBg_num(json.getString("bg_num"));
        //this.setPictid(json.getString("pictid"));
        this.setState(json.getString("state"));
        this.setHint(json.getString("hint"));
        this.setReward_cardids(json.getString("reward_cardids"));
        this.setIs_model(json.getString("is_model"));
        //this.setUser_buff_id(json.getString("user_buff_id")); // 只有key副本有这个字段
        //this.setUnlock_expire_time(json.getString("unlock_expire_time"));
        //this.setEnemy_partyid(json.getString("enemy_partyid"));
    }
    
    public String getIs_only_my_deck()
    {
        return is_only_my_deck;
    }
    public void setIs_only_my_deck(String is_only_my_deck)
    {
        this.is_only_my_deck = is_only_my_deck;
    }
    public String getArthur_limit()
    {
        return arthur_limit;
    }
    public void setArthur_limit(String arthur_limit)
    {
        this.arthur_limit = arthur_limit;
    }
    public String getDifficulty()
    {
        return difficulty;
    }
    public void setDifficulty(String difficulty)
    {
        this.difficulty = difficulty;
    }
    public String getIs_continue()
    {
        return is_continue;
    }
    public void setIs_continue(String is_continue)
    {
        this.is_continue = is_continue;
    }
    public String getBg_num()
    {
        return bg_num;
    }
    public void setBg_num(String bg_num)
    {
        this.bg_num = bg_num;
    }
    public String getState()
    {
        return state;
    }
    public void setState(String state)
    {
        this.state = state;
    }
    public String getHint()
    {
        return hint;
    }
    public void setHint(String hint)
    {
        this.hint = hint;
    }
    public String getReward_cardids()
    {
        return reward_cardids;
    }
    public void setReward_cardids(String reward_cardids)
    {
        this.reward_cardids = reward_cardids;
    }
    public String getIs_model()
    {
        return is_model;
    }
    public void setIs_model(String is_model)
    {
        this.is_model = is_model;
    }
    public String getUser_buff_id()
    {
        return user_buff_id;
    }
    public void setUser_buff_id(String user_buff_id)
    {
        this.user_buff_id = user_buff_id;
    }
    public String getUnlock_expire_time()
    {
        return unlock_expire_time;
    }
    public void setUnlock_expire_time(String unlock_expire_time)
    {
        this.unlock_expire_time = unlock_expire_time;
    }
    public String getEnemy_partyid()
    {
        return enemy_partyid;
    }
    public void setEnemy_partyid(String enemy_partyid)
    {
        this.enemy_partyid = enemy_partyid;
    }
}
