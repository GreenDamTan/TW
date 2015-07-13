<%@ page language="java" import="java.util.*" pageEncoding="utf-8"  contentType="text/html; charset=UTF-8" isELIgnored="false" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<!-- saved from url=(0027)http://www.moemao.com/krsma/ -->
<!-- zhaodai  http://item.taobao.com/item.htm?id=43824719662 -->
<!-- chushi    http://item.taobao.com/item.htm?id=43821423159 -->
<!-- CD         http://item.taobao.com/item.htm?id=43902252153 -->
<html>
 <!--<![endif]-->
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta charset="UTF-8" />
  <title>乖离性百万亚瑟王 自助招待系统 | 乖離性ミリオンアーサー</title>
  <script type="text/javascript"  src="<%=basePath%>resources/js/jquery-1.8.2.js"></script>
  <script type="text/javascript"  src="<%=basePath%>resources/js/jquery.form.js"></script>
    <!-- 
  <script type="text/javascript"  src="<%=basePath%>resources/mar/invite/cse.js"></script>
  <script type="text/javascript"  src="<%=basePath%>resources/mar/invite/html5media.min.js"></script>
  <script type="text/javascript"  src="<%=basePath%>resources/mar/invite/default+ja.I.js"></script>
  <meta content="authenticity_token" name="csrf-param" /> 
  <meta content="0GzJWtkVKEK3qgfeGcNf/3g+P0lsjt1S98NW53Fnjk0=" name="csrf-token" />
  <meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" name="viewport" />
    -->
  <meta content="乖離性ミリオンアーサーの招待！" name="description" />
  <meta content="乖離性ミリオンアーサー,ミリオンアーサー,招待" name="keywords" />
  <link href="https://d2e1xl20cw0m26.cloudfront.net/pre/assets/favicon-5862cadf3d85c514f2068142cfb97eb3.ico" rel="icon" type="image/png">
  <link href="<%=basePath%>resources/mar/invite/style.css" media="all" rel="stylesheet" />
  <!--[if lt IE 9]><script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
  <!-- 
  <link type="text/css" href="<%=basePath%>resources/mar/invite/default+ja.css" rel="stylesheet" />
  <link type="text/css" href="<%=basePath%>resources/mar/invite/minimalist.css" rel="stylesheet" />
   -->
  <link type="text/css" href="<%=basePath%>resources/mar/adaptive-placeholders/style.css" rel="stylesheet">
  <style type="text/css">
    #inviteCode
    {
        margin-left: 20px;
        margin-top: 18px;
        width: 220px;
    }
    #password
    {
        margin-left: 30px;
        margin-top: 18px;
        width: 440px;
    }
    #inviteCodeLabel
    {
        margin-left: 10px;
        font-size: 15px;
    }
    #passwordLabel
    {
        margin-left: 20px;
        font-size: 15px;
    }
    #buyPassword
    {
        margin-left: 10px;
    }
    body
    {
	  font-family:宋体;
	}
</style>
 </head>
 <body>
  <div id="wrapper">
   <div id="sqexHeader-black">
    <!-- 
    <a href="http://www.square-enix.com/jp/" id="sqexlogo" target="_blank"><img alt="SQUARE ENIX" border="0" height="14" src="<%=basePath%>resources/mar/invite/logo-black.gif" width="130" /></a>
      -->
   </div>
   <div id="container" style="margin: 50px 0px; opacity: 1;">
    <div id="bg_line_e" style="background-color:black;">
     <div id="bg_line">
      <img alt="Bg gold lt" class="bg_lt" src="<%=basePath%>resources/mar/invite/bg_gold_lt.png" />
      <img alt="Bg gold rt" class="bg_rt" src="<%=basePath%>resources/mar/invite/bg_gold_rt.png" />
      <img alt="Bg gold lb" class="bg_lb" src="<%=basePath%>resources/mar/invite/bg_gold_lb.png" />
      <img alt="Bg gold rb" class="bg_rb" src="<%=basePath%>resources/mar/invite/bg_gold_rb.png" />
      <div id="bg_light">
       <div class="twinkle" id="twinkle1"></div>
       <div class="twinkle" id="twinkle2"></div>
       <div data-pjax-container="true" id="contents" style="opacity: 1;">
        <section class="indexPage">
         <h1><span>乖离性MA 自助招待系统</span></h1>
         <h2>乖離性ミリオンアーサー事前登録キャンペーン、豪華声優陣のボイスが聞ける！ 乖離性ミリオンアーサーに事前登録して、レアな騎士を手に入れよう！</h2>
         <div id="term">
          test
         </div>
         <div id="term_finished">
          ☆ 请在输入框中填写您的 招待ID（9位数字 中间请勿加逗号空格）以及 <a href="http://item.taobao.com/item.htm?id=43824719662"><b>神秘代码</b></a> ，点击 获取招待 按钮即可 ☆
         </div>
         <div id="contentsBox">
          <div id="countBox">
           <!-- 招待form -->
			<div class="ui-widget">
			    <form id="inviteReq" action="../mar/invite.action" method="post">
			        <table>
			            <tr>
			                <td>
									<input class="invite_code" type="text" required="" name="inviteCode" id="inviteCode" />
									<label alt="请输入招待号码（9位数字）" placeholder="招待号码"  id="inviteCodeLabel"></label>
			                </td>
                            <td>
								    <input class="password_code" type="text" required="" name="password" id="password" />
								    <label alt="请输入神秘代码（很长的那串）" placeholder="神秘代码" id="passwordLabel" ></label>
                            </td>
                            <td>
                                    <a id="buyPassword" onclick="window.open('http://item.taobao.com/item.htm?id=43824719662')"><b>→点击购买神秘代码←</b></a>
                            </td>
			            </tr>
			        </table>
			    </form>
			</div>
          </div>
          <div id="achieve">
           <ul class="nav sp">
            <li class="twitter"><a href="http://www.moemao.com">招待┏ (゜ω゜)=☞</a></li>
           </ul>
           <figure class="sp">
            <img alt="Achieve01" class="achieve01" src="<%=basePath%>resources/mar/invite/bigleft.png" />
           </figure>
           <figure class="sp">
            <img alt="Achieve02" class="achieve02" src="<%=basePath%>resources/mar/invite/bigright.png" />
           </figure>
           <ul class="nav">
            <li class="twitter"><a id="inviteGo">招待┏ (゜ω゜)=☞</a></li>
           </ul>
          </div>
         </div>
        </section>
       </div>
      </div>
     </div>
    </div>
   </div>
<div id="passwordCardEdit" title="PasswordCard Edit">
    <form id="passwordCardForm" action="../mar/editPasswordCard.action" method="post"></form>
</div>
   <div id="foot_home">
    <div class="bannerLink">
     <ul>
      <li>
       <figure>
        <a href="http://item.taobao.com/item.htm?id=43824719662" target="_blank"><img alt="招待神秘代码购买" class="banner01" src="<%=basePath%>resources/mar/invite/banner01.png" /></a>
       </figure>
       </li>
      <li>
       <figure>
        <a href="http://www.moemao.com/krsma/chushi.html" target="_blank"><img alt="初始账号列表" class="banner02" src="<%=basePath%>resources/mar/invite/banner02.png" /></a>
       </figure>
       </li>
     </ul>
    </div>
    <div class="sqex-footer-black" id="sqexFooter">
     <div id="sqex-footer-contents">
      <div id="sqex-footer-contents-inner" class="clearfix">
       <div class="sqex-footer-logos">
        <img src="<%=basePath%>resources/mar/invite/sp_iphone_k.gif" alt="iPhone" />
        <img src="<%=basePath%>resources/mar/invite/sp_android_k.gif" alt="Android" />
       </div>
       <div class="sqex-footer-shares-wrap clearfix">
        <dl class="sqex-footer-shares">
         <dt>
          <img src="<%=basePath%>resources/mar/invite/share_k.gif" alt="share" />
         </dt>
         <dd>
          <a class="facebook" title="Facebookでシェア"><img src="<%=basePath%>resources/mar/invite/sp_share_fb_k.gif" alt="Facebookにシェアする" height="25" /></a>
         </dd>
         <dd>
          <a class="twitter" title="Twitterでシェア"><img src="<%=basePath%>resources/mar/invite/sp_share_tw_k.gif" alt="Twitterにシェアする" height="25" /></a>
         </dd>
         <dd>
          <a class="mixi" title="mixiチェックに追加"><img src="<%=basePath%>resources/mar/invite/sp_share_mx_k2.gif" alt="mixiチェック" height="25" /></a>
         </dd>
         <dd>
          <a class="googleplus" title="Google+でシェア"><img src="<%=basePath%>resources/mar/invite/sp_share_gp.png" alt="Google+にシェアする" height="25" /></a>
         </dd>
         <dd>
          <a class="line" target="_blank"><img src="<%=basePath%>resources/mar/invite/share_line.png" alt="LINEで送る" title="LINEで送る" style="vertical-align:top!important; width:25px;" /></a>
         </dd>
        </dl>
       </div>
      </div>
      <ul class="clearfix">
       <li><a href="http://item.taobao.com/item.htm?id=43824719662">自助招待</a></li>
       <li><a href="http://item.taobao.com/item.htm?id=43821423159">初始账号</a></li>
       <li><a href="http://item.taobao.com/item.htm?id=43902252153">CD特典</a></li>
       <li><a href="http://wiki.famitsu.com/kairi/">WIKI攻略</a></li>
      </ul>
      <div class="sqex-footer-copy-logo">
       <p class="sqex-footer-copyright">&copy; 2014 MOEMAO CO., LTD. ALL Rights Reserved.</p>
      </div>
     </div>
    </div>
   </div>
  </div>
  <div id="background" style="opacity: 1;">
  <!-- 
   <video autoplay="autoplay" class="bg_video" id="bg_top_movie" loop="loop" poster="https://cache.pre.kairisei-ma.jp/pre/assets/bg_top-acfccc2232f64f5206ce10bf45933836.jpg" style="width: 1855px; height: 1045.0704225352113px; margin-left: -927.5px; margin-top: -522.5352112676056px;">
    <source src="https://cache.pre.kairisei-ma.jp/pre/assets/top-2489964cb8f93ed2ed5b4a9cf5de644d.webm" type="video/webm"></source>
    <source src="https://cache.pre.kairisei-ma.jp/pre/assets/top-e540b692f4602b98247a8e6b24e0a6d8.mp4" type="video/mp4"></source>
   </video>
   <video autoplay="autoplay" class="bg_video" id="bg_gacha_movie" loop="loop" poster="https://cache.pre.kairisei-ma.jp/pre/assets/bg_gacha-e02c43781720983733f7fe0217baef9c.jpg" style="width: 1855px; height: 1045.0704225352113px; margin-left: -927.5px; margin-top: -522.5352112676056px; display: none;">
    <source src="https://cache.pre.kairisei-ma.jp/pre/assets/gacha_avant_movie-bc742eb541f853c1c69375aa1b1cdc53.webm" type="video/webm"></source>
    <source src="https://cache.pre.kairisei-ma.jp/pre/assets/gacha_avant_movie-00b3643c99837321eef7011f6dc2a26d.mp4" type="video/mp4"></source>
   </video>
    -->
  </div>
  <div id="animation_layer"></div>
  <div id="sqexFooterDialog"></div>
  <input type="hidden" id="lock" value="0" />
 </body>
<script type="text/javascript">
$(document).ready(function(){
    var browser={
	    versions:function(){
	    var u = window.navigator.userAgent;
	    return {
	        trident: u.indexOf('Trident') > -1, //IE内核
	        presto: u.indexOf('Presto') > -1, //opera内核
	        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
	        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
	        mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端
	        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
	        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
	        iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者安卓QQ浏览器
	        iPad: u.indexOf('iPad') > -1, //是否为iPad
	        webApp: u.indexOf('Safari') == -1 ,//是否为web应用程序，没有头部与底部
	        weixin: u.indexOf('MicroMessenger') == -1 //是否为微信浏览器
	        };
	    }()
	}
	//document.writeln(" 是否为移动终端: "+browser.versions.mobile);
	//document.writeln(" ios终端: "+browser.versions.ios);
	//document.writeln(" android终端: "+browser.versions.android);
	//document.writeln(" 是否为iPhone: "+browser.versions.iPhone);
	//document.writeln(" 是否iPad: "+browser.versions.iPad);
	//document.writeln(navigator.userAgent);

    // 用来识别是否是IE浏览器 对于IE不稳定的问题还是跳转到ie.jsp页面处理比较好
	var navigatorName = "Microsoft Internet Explorer";  
	if( navigator.appName == navigatorName || browser.versions.trident)
	{   
		//alert("ie")
		self.location="invite_ie_login.action";
	}
	else
	{   
        //alert("not ie")
	}   
    
    $( "#inviteGo" ).click(function() {
        // 校验锁
        if ("1" == $("#lock").val())
        {
            alert("招待正在执行，请稍等片刻 _(:з」∠)_");
            return;
        }
        
        if (!validate())
        {
            return;
        }

        var options = {
            url : "../mar/invite.action",
            type : "POST",
            success : function(result){
                $.ajax({url:"../mar/invite.action", data:$("#inviteReq").formSerialize(), async:false});
                dealResult(result);
                // 解锁
                $("#lock").val(0);
                $("#achieve").css("background", "url(../resources/mar/invite/union.png) left top no-repeat transparent");
            },
            error : function(){
                alert("请10分钟后进游戏查看礼物箱，再有问题请找店长！");
                // 解锁
                $("#lock").val(0);
                $("#achieve").css("background", "url(../resources/mar/invite/union.png) left top no-repeat transparent");
            }
        };

        // 确认操作
        $("#inviteReq").ajaxSubmit(options);
        // 加锁
        $("#lock").val(1);
        $("#achieve").css("background", "url(../resources/mar/invite/union2.png) left top no-repeat transparent");
        
        return false;
    });
    
    function validate()
    {
        // 判断非空
        if ("" == $("#inviteCode").val())
        {
            alert("请填入您的招待ID！");
            return false;
        }
        
        if ("" == $("#password").val())
        {
            alert("请填入神秘代码！");
            return false;
        }
        
        // 处理招待ID
        var reg = new RegExp("^[0-9]*$");
        var temp;
        var result = "";
        for (var i=0; i<$("#inviteCode").val().length; i++)
        {
            temp = $("#inviteCode").val().charAt(i)
            if (reg.test(temp))
            {
                result += temp;
            }
        }
        $("#inviteCode").val(result);
        if ($("#inviteCode").val().length != 9)
        {
            alert("请填入正确的招待ID！9位数字，中间请勿加空格或逗号！");
            return false;
        }
        
        return true; 
    }
    
    function dealResult(result)
    {
        if ("0" == result)
        {
            // 图片切换为已完成
            
            alert("您的招待已经完成，请在礼物箱中查收~");
        }
        else if ("1" == result)
        {
            // 图片切换为神秘代码错误或者重试
            
            alert("神秘代码错误或已被使用！如果之前已经操作过，请10分钟后进游戏查看礼物箱，再有问题请找店长！");
        }
    }
});
</script>
</html>