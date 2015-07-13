package com.moemao.tgks.mar.passwordcard.entity;

import java.util.Date;

public class PasswordCardEvt
{
    /**
     * 表唯一主键
     */
    private String id;
    
    /**
     * 卡密
     */
    private String password;
    
    /**
     * 状态
     */
    private String status;
    
    /**
     * 招待ID
     */
    private String inviteCode;
    
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
        return String
                .format("id:%S\npassword:%S\nstatus:%S\ninviteCode:%S\nusedTime:%S\ncreateTime:%S\n",
                        id, password, status, inviteCode, usedTime, createTime);
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
     * @return 返回 inviteCode
     */
    public String getInviteCode()
    {
        return inviteCode;
    }
    
    /**
     * @param 对inviteCode进行赋值
     */
    public void setInviteCode(String inviteCode)
    {
        this.inviteCode = inviteCode;
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