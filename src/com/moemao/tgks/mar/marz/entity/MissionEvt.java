package com.moemao.tgks.mar.marz.entity;

import net.sf.json.JSONObject;

/**
 * 
 * 项目名称：TGKS_MAR
 * 类名称：MissionEvt
 * 类描述：构造函数入参传入单个任务的JSON对象可以直接初始化
 * 创建人：Ken
 * 创建时间：2015-5-30 上午1:02:12
 * 修改人：
 * 修改时间：
 * 修改备注：
 * @version
 *
 */
public class MissionEvt
{
    private String missionid;
    private String tab_type;
    private String view_prio;
    private String title;
    private String description;
    private String rewards;
    private String state; // 0 未完成；1 完成为领取；2 完成已领取
    private String progress_show_type;
    private String progress_now;
    private String progress_max;
    private String clear_limit_time;
    private String open_url;
    
    public MissionEvt()
    {
        
    }
    
    public MissionEvt(JSONObject missionJSON)
    {
        this.setMissionid(missionJSON.getString("missionid"));
        this.setTab_type(missionJSON.getString("tab_type"));
        this.setView_prio(missionJSON.getString("view_prio"));
        this.setTitle(missionJSON.getString("title"));
        this.setDescription(missionJSON.getString("description"));
        this.setRewards(missionJSON.getString("rewards"));
        this.setState(missionJSON.getString("state"));
        this.setProgress_show_type(missionJSON.getString("progress_show_type"));
        this.setProgress_now(missionJSON.getString("progress_now"));
        this.setProgress_max(missionJSON.getString("progress_max"));
        this.setClear_limit_time(missionJSON.getString("clear_limit_time"));
        this.setOpen_url(missionJSON.getString("open_url"));
    }

    public String getMissionid()
    {
        return missionid;
    }

    public void setMissionid(String missionid)
    {
        this.missionid = missionid;
    }

    public String getTab_type()
    {
        return tab_type;
    }

    public void setTab_type(String tab_type)
    {
        this.tab_type = tab_type;
    }

    public String getView_prio()
    {
        return view_prio;
    }

    public void setView_prio(String view_prio)
    {
        this.view_prio = view_prio;
    }

    public String getTitle()
    {
        return title;
    }

    public void setTitle(String title)
    {
        this.title = title;
    }

    public String getDescription()
    {
        return description;
    }

    public void setDescription(String description)
    {
        this.description = description;
    }

    public String getRewards()
    {
        return rewards;
    }

    public void setRewards(String rewards)
    {
        this.rewards = rewards;
    }

    public String getState()
    {
        return state;
    }

    public void setState(String state)
    {
        this.state = state;
    }

    public String getProgress_show_type()
    {
        return progress_show_type;
    }

    public void setProgress_show_type(String progress_show_type)
    {
        this.progress_show_type = progress_show_type;
    }

    public String getProgress_now()
    {
        return progress_now;
    }

    public void setProgress_now(String progress_now)
    {
        this.progress_now = progress_now;
    }

    public String getProgress_max()
    {
        return progress_max;
    }

    public void setProgress_max(String progress_max)
    {
        this.progress_max = progress_max;
    }

    public String getClear_limit_time()
    {
        return clear_limit_time;
    }

    public void setClear_limit_time(String clear_limit_time)
    {
        this.clear_limit_time = clear_limit_time;
    }

    public String getOpen_url()
    {
        return open_url;
    }

    public void setOpen_url(String open_url)
    {
        this.open_url = open_url;
    }
}
