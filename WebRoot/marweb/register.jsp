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
		<form id="marwebForm" action="../marweb/register.action" method="post">
			<h1>注 册</h1>
			<div>
				<input type="text" placeholder="用户名（4~16位）" required="" id="username" name="userEvt.username" />
			</div>
			<div>
				<input type="password" placeholder="密码（4~16位）" required="" id="password" name="userEvt.password" />
			</div>
			<div>
				<input type="password" placeholder="确认密码" required="" id="password2" />
			</div>
			<div>
				<input type="text" placeholder="旺旺ID" required="" id="name" name="userEvt.name" />
			</div>
			<div>
				<input type="text" placeholder="邮箱（可不填）" required="" id="email" name="userEvt.email" />
			</div>
			<div>
				<label style="color:red;">${message }</label>
			</div>
			<div>
				<input type="button" id="marweb_register" value="注册" onclick="register();"/>
				<a href="alert('点我也没用，我又不知道你的密码是啥_(:з」∠)_')">忘记密码?</a>
				<a href="index.jsp">直接登录</a>
			</div>
		</form><!-- form -->
		<div class="button">
			<a href="#" onclick="window.open('http://www.moemao.com/index.php/marweb-help');">乖离性MA离线挂机工具使用说明</a>
		</div><!-- button -->
	</section><!-- content -->
</div><!-- container -->

<script type="text/javascript">
function register()
{
	if (document.getElementById("username").value == "")
	{
		alert("请填入账号");
		return;
	}
	else
	{
		if (document.getElementById("username").value.length < 4 || document.getElementById("username").value.length > 16)
		{
			alert("账号长度为4~16位");
			return;
		}
	}
	
	if (document.getElementById("password").value == "" || document.getElementById("password2").value == "")
	{
		alert("请填入密码");
		return;
	}
	else
	{
		if (document.getElementById("password").value.length < 4 || document.getElementById("password").value.length > 16)
		{
			alert("密码长度为4~16位");
			return;
		}
	}
	
	if (document.getElementById("password").value != document.getElementById("password2").value)
	{
		alert("两次填入的密码不一致");
		return;
	}
	
	if (document.getElementById("name").value == "")
	{
		alert("请填入旺旺ID");
		return;
	}
	
	document.getElementById("marwebForm").submit();
}
</script>
</body>
</html>