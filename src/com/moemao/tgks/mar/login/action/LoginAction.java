package com.moemao.tgks.mar.login.action;

import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.moemao.tgks.common.core.action.TGKSAction;
import com.moemao.tgks.common.tool.CommonConstant;
import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.common.ums.user.entity.UserEvt;
import com.moemao.tgks.common.ums.user.entity.UserReq;
import com.moemao.tgks.common.ums.user.service.UserService;
import com.opensymphony.xwork2.ActionContext;

public class LoginAction extends TGKSAction
{
    
    /** 
     * @Fields serialVersionUID
     */ 
    private static final long serialVersionUID = -2714691292873213571L;

    private static Log logger = LogFactory.getLog(LoginAction.class);
    
    private UserService ums_userService;
    
    /**
     * 登录账户
     */
    private UserEvt userEvt;
    
    private UserReq userReq = new UserReq();
    
    private String message;
    
    /**
     * 
     * @Title: login
     * @Description: CGWEB登录 进入选图下单页面
     * @return
     * @return String 返回类型
     * @throws
     */
    public String invite_login()
    {
    	CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "LoginAction.invite_login");
    	
    	userReq = new UserReq();
    	userReq.setUsername("KRSMA");
    	userReq.setPassword("123456");
    	
    	// 账户登录
        List<UserEvt> userList = ums_userService.queryUser(userReq);
    	
    	if (null != userList && userList.size() > 0)
    	{
    		userEvt = userList.get(0);
            
            Map<String, Object> session = ActionContext.getContext().getSession();
            session.put(CommonConstant.USER_INFO, userEvt);
    	}
    	else
    	{
    		message = "密码错误";
    		
    		CommonUtil.systemLog("mar/invite_login.action", CommonConstant.SYSTEMLOG_TYPE_0, CommonConstant.FAILD, String.format("账号：%s 登录MAR失败（密码错误）", userReq.getUsername()));
    		CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_LOGIN_FAILD, String.format("账号：%s 密码：%s", userReq.getUsername(), userReq.getPassword()));
    		return ERROR;
    	}
    	
    	//CommonUtil.systemLog("mar/invite_login.action", CommonConstant.SYSTEMLOG_TYPE_0, CommonConstant.SUCCESS, String.format("账号：%s 登录MAR成功", userReq.getUsername()));
		CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_LOGIN_SUCCESS, String.format("账号：%s 密码：%s", userReq.getUsername(), userReq.getPassword()));
		CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "LoginAction.invite_login");
    	return SUCCESS;
    }
    
    public String invite_ie_login()
    {
        CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "LoginAction.invite_ie_login");
        
        userReq = new UserReq();
        userReq.setUsername("KRSMA");
        userReq.setPassword("123456");
        
        // 账户登录
        List<UserEvt> userList = ums_userService.queryUser(userReq);
        
        if (null != userList && userList.size() > 0)
        {
            userEvt = userList.get(0);
            
            Map<String, Object> session = ActionContext.getContext().getSession();
            session.put(CommonConstant.USER_INFO, userEvt);
        }
        else
        {
            message = "密码错误";
            
            CommonUtil.systemLog("mar/invite_login.action", CommonConstant.SYSTEMLOG_TYPE_0, CommonConstant.FAILD, String.format("账号：%s 登录MAR失败（密码错误）", userReq.getUsername()));
            CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_LOGIN_FAILD, String.format("账号：%s 密码：%s", userReq.getUsername(), userReq.getPassword()));
            return ERROR;
        }
        
        //CommonUtil.systemLog("mar/invite_login.action", CommonConstant.SYSTEMLOG_TYPE_0, CommonConstant.SUCCESS, String.format("账号：%s 登录MAR成功", userReq.getUsername()));
        CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_LOGIN_SUCCESS, String.format("账号：%s 密码：%s", userReq.getUsername(), userReq.getPassword()));
        CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "LoginAction.invite_ie_login");
        return SUCCESS;
    }
    
    /**
     * 
     * @Title: account_login
     * @Description: 初始账号查询页面
     * @return
     * @return String 返回类型
     * @throws
     */
    public String account_login()
    {
        userReq = new UserReq();
        userReq.setUsername("KRSMA");
        userReq.setPassword("123456");
        
        // 账户登录
        List<UserEvt> userList = ums_userService.queryUser(userReq);
        
        if (null != userList && userList.size() > 0)
        {
            userEvt = userList.get(0);
            
            Map<String, Object> session = ActionContext.getContext().getSession();
            session.put(CommonConstant.USER_INFO, userEvt);
        }
        else
        {
            message = "密码错误";
            
            return ERROR;
        }
        
        return SUCCESS;
    }

	public UserService getUms_userService()
    {
    	return ums_userService;
    }

	public void setUms_userService(UserService ums_userService)
    {
    	this.ums_userService = ums_userService;
    }

	public UserEvt getUserEvt()
    {
    	return userEvt;
    }

	public void setUserEvt(UserEvt userEvt)
    {
    	this.userEvt = userEvt;
    }

	public UserReq getUserReq()
    {
    	return userReq;
    }

	public void setUserReq(UserReq userReq)
    {
    	this.userReq = userReq;
    }

	public String getMessage()
    {
    	return message;
    }

	public void setMessage(String message)
    {
    	this.message = message;
    }
}
