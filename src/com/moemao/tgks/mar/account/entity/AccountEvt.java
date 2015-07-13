package com.moemao.tgks.mar.account.entity;

import java.util.Date;
import java.util.List;

public class AccountEvt
{
    /**
     * 表唯一主键
     */
    private String id;
    
    /**
     * UUID（登录用）
     */
    private String uuid;
    
    private String hashToken;
    
    private String gachaHash;
    
    /**
     * 账号加密accountKey
     */
    private String accountKey;
    
    /**
     * 状态（0 新建；1 执行中；2 已完成；3 已售出）
     */
    private String status;
    
    /**
     * 招待ID
     */
    private String inviteCode;
    
    /**
     * 标题
     */
    private String title;
    
    /**
     * UR数量 佣兵
     */
    private Integer urNumA;
    
    /**
     * UR数量 富豪
     */
    private Integer urNumB;
    
    /**
     * UR数量 盗贼
     */
    private Integer urNumC;
    
    /**
     * UR数量 歌姬
     */
    private Integer urNumD;
    
    /**
     * 卡片ID（只包含UR SR）
     */
    private String cardIds;
    
    /**
     * 水晶数量
     */
    private Integer crystal;
    
    /**
     * 价格
     */
    private Integer price;
    
    /**
     * 创建时间
     */
    private Date createTime;
    
    /**
     * 备注
     */
    private String remark;
    
    private List<String> iconList;
    
    private String sessionId;
    
    @Override
    public String toString()
    {
    return String.format("id:%S\nuuid:%S\nkey:%S\nstatus:%S\ninviteCode:%S\ntitle:%S\nurNumA:%S\nurNumB:%S\nurNumC:%S\nurNumD:%S\ncardIds:%S\ncrystal:%S\ncreateTime:%S\nremark:%S\n", id, uuid, accountKey, status, inviteCode, title, urNumA, urNumB, urNumC, urNumD, cardIds, crystal, createTime, remark);
    }
    
    public String getId()
    {
        return id;
    }
    
    public void setId(String id)
    {
        this.id = id;
    }
    
    public String getUuid()
    {
        return uuid;
    }
    
    public void setUuid(String uuid)
    {
        this.uuid = uuid;
    }
    
    public String getHashToken()
    {
        return hashToken;
    }

    public void setHashToken(String hashToken)
    {
        this.hashToken = hashToken;
    }

    public String getGachaHash()
    {
        return gachaHash;
    }

    public void setGachaHash(String gachaHash)
    {
        this.gachaHash = gachaHash;
    }

    public String getAccountKey()
    {
        return accountKey;
    }
    
    public void setAccountKey(String accountKey)
    {
        this.accountKey = accountKey;
    }
    
    public String getStatus()
    {
        return status;
    }
    
    public void setStatus(String status)
    {
        this.status = status;
    }
    
    public String getInviteCode()
    {
        return inviteCode;
    }
    
    public void setInviteCode(String inviteCode)
    {
        this.inviteCode = inviteCode;
    }
    
    public String getTitle()
    {
        return title;
    }
    
    public void setTitle(String title)
    {
        this.title = title;
    }
    
    public Integer getUrNumA()
    {
        return urNumA;
    }
    
    public void setUrNumA(Integer urNumA)
    {
        this.urNumA = urNumA;
    }
    
    public Integer getUrNumB()
    {
        return urNumB;
    }
    
    public void setUrNumB(Integer urNumB)
    {
        this.urNumB = urNumB;
    }
    
    public Integer getUrNumC()
    {
        return urNumC;
    }
    
    public void setUrNumC(Integer urNumC)
    {
        this.urNumC = urNumC;
    }
    
    public Integer getUrNumD()
    {
        return urNumD;
    }
    
    public void setUrNumD(Integer urNumD)
    {
        this.urNumD = urNumD;
    }
    
    public String getCardIds()
    {
        return cardIds;
    }
    
    public void setCardIds(String cardIds)
    {
        this.cardIds = cardIds;
    }
    
    public Integer getCrystal()
    {
        return crystal;
    }
    
    public void setCrystal(Integer crystal)
    {
        this.crystal = crystal;
    }
    
    public Integer getPrice()
    {
        return price;
    }
    
    public void setPrice(Integer price)
    {
        this.price = price;
    }
    
    public Date getCreateTime()
    {
        return createTime;
    }
    
    public void setCreateTime(Date createTime)
    {
        this.createTime = createTime;
    }
    
    public String getRemark()
    {
        return remark;
    }
    
    public void setRemark(String remark)
    {
        this.remark = remark;
    }

    public List<String> getIconList()
    {
        return iconList;
    }

    public void setIconList(List<String> iconList)
    {
        this.iconList = iconList;
    }

    public String getSessionId()
    {
        return sessionId;
    }

    public void setSessionId(String sessionId)
    {
        this.sessionId = sessionId;
    }
}