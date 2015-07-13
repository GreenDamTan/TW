<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="ie6 ielt8"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="ie7 ielt8"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="ie8"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--> <html lang="en"> <!--<![endif]-->
<head>
<meta charset="utf-8">
<title>乖离性MA账号托管系统——猫萌公社</title>
<link href="https://d2e1xl20cw0m26.cloudfront.net/pre/assets/favicon-5862cadf3d85c514f2068142cfb97eb3.ico" rel="icon" type="image/png">
<link rel="stylesheet" type="text/css" href="../resources/mar/marweb/login/style.css" />
</head>
<body>
<div class="container">
	<section id="content">
		<form id="marwebForm" action="../marweb/login.action" method="post">
			<h1>登 陆</h1>
			<div>
				<input type="text" placeholder="用户名" required="" id="username" name="userReq.username" />
			</div>
			<div>
				<input type="password" placeholder="密码" required="" id="password" name="userReq.password" />
			</div>
			<div>
				<label style="color:red;">${message }</label>
			</div>
			<div>
				<input type="button" id="marweb_login" value="登陆" onclick="login();"/>
				<a href="#">忘记密码?</a>
				<a href="register.jsp">注册账号</a>
			</div>
		</form><!-- form -->
		<div class="button">
            <a href="#" onclick="window.open('http://www.moemao.com/index.php/marweb-help');">乖离性MA离线挂机工具使用说明</a>
		</div><!-- button -->
	</section><!-- content -->
</div><!-- container -->

<script type="text/javascript">
function login()
{
	if (document.getElementById("username").value == "")
	{
		alert("请填入账号");
		return;
	}
	if (document.getElementById("password").value == "")
	{
		alert("请填入密码");
		return;
	}
	
	document.getElementById("marwebForm").submit();
}
</script>
</body>
</html>