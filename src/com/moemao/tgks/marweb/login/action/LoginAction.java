package com.moemao.tgks.marweb.login.action;

import java.util.List;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.moemao.tgks.common.core.action.TGKSAction;
import com.moemao.tgks.common.tool.CommonConstant;
import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.common.ums.tool.UmsConstant;
import com.moemao.tgks.common.ums.user.entity.UserEvt;
import com.moemao.tgks.common.ums.user.entity.UserReq;
import com.moemao.tgks.common.ums.user.service.UserService;
import com.moemao.tgks.marweb.tool.MarwebConstant;
import com.opensymphony.xwork2.ActionContext;

public class LoginAction extends TGKSAction
{

    /** 
     * @Fields serialVersionUID
     */ 
    private static final long serialVersionUID = 7712324542814613350L;
    
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
     * @Description: MARWEB登录 进入选图下单页面
     * @return
     * @return String 返回类型
     * @throws
     */
    public String login()
    {
        CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "LoginAction.login");
        
        if (CommonUtil.isEmpty(userReq.getUsername()) || CommonUtil.isEmpty(userReq.getPassword()))
        {
            message = "密码错误";
            CommonUtil.systemLog("marweb/login.action", CommonConstant.SYSTEMLOG_TYPE_0, CommonConstant.FAILD, String.format("账号：%s 登录marweb失败（密码错误）", userReq.getUsername()));
            CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_LOGIN_FAILD, String.format("账号：%s 密码：%s", userReq.getUsername(), userReq.getPassword()));
            return ERROR;
        }
        
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
            
            CommonUtil.systemLog("marweb/login.action", CommonConstant.SYSTEMLOG_TYPE_0, CommonConstant.FAILD, String.format("账号：%s 登录marweb失败（密码错误）", userReq.getUsername()));
            CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_LOGIN_FAILD, String.format("账号：%s 密码：%s", userReq.getUsername(), userReq.getPassword()));
            return ERROR;
        }
        
        CommonUtil.systemLog("marweb/login.action", CommonConstant.SYSTEMLOG_TYPE_0, CommonConstant.SUCCESS, String.format("账号：%s 登录marweb成功", userReq.getUsername()));
        CommonUtil.infoLog(logger, CommonConstant.SYSTEM_INFO_LOG_LOGIN_SUCCESS, String.format("账号：%s 密码：%s", userReq.getUsername(), "_(:з」∠)_"));
        CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "LoginAction.login");
        return SUCCESS;
    }
    
    /**
     * 
     * @Title: register
     * @Description: MARWEB账号注册 使用common的user表
     * @return
     * @return String 返回类型
     * @throws
     */
    public String register()
    {
        CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_IN, "LoginAction.register");
        
        userEvt.setUsername(userEvt.getUsername().trim());
        userEvt.setPassword(userEvt.getPassword().trim());
        
        // 查询该账号是否已经存在
        UserReq userReq = new UserReq();
        userReq.setUsername(userEvt.getUsername());
        List<UserEvt> userList = ums_userService.queryUser(userReq);
        
        // 账号存在时跳回注册页面给出message提示
        if (!CommonUtil.isEmpty(userList))
        {
            message = "账号已存在";
            return ERROR;
        }
        
        // MARWEB组别暂时写入
        userEvt.setGroupId(MarwebConstant.USER_GROUP_MARWEB_MEMBER);
        // 账号默认启用
        userEvt.setStatus(UmsConstant.USER_STATUS_1);
        // 账号类型 CGWEB 11
        userEvt.setType(MarwebConstant.USER_TYPE_MARWEB);
        
        int result = ums_userService.addUser(userEvt);
        
        if (result > 0)
        {
            message = "注册成功！请登录";
        }
        else
        {
            message = "注册失败！请联系管理员";
            return ERROR;
        }
        
        CommonUtil.systemLog("marweb/register.action", CommonConstant.SYSTEMLOG_TYPE_1, result == 0 ? CommonConstant.FAILD : CommonConstant.SUCCESS, String.format("marweb账号注册\n%S", userEvt.toString()));
        
        CommonUtil.debugLog(logger, CommonConstant.SYSTEM_INFO_LOG_METHOD_OUT, "LoginAction.register");
        
        return SUCCESS;
    }
    
    /**
     * 
     * @Title: marzLocalPage
     * @Description: 在线挂机
     * @return
     * @return String 返回类型
     * @throws
     */
    public String marzLocalPage()
    {
        return SUCCESS;
    }

    public static Log getLogger()
    {
        return logger;
    }

    public static void setLogger(Log logger)
    {
        LoginAction.logger = logger;
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
