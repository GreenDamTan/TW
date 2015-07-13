<%@ page language="java" import="java.util.*" pageEncoding="utf-8"  contentType="text/html; charset=UTF-8" isELIgnored="false" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html>
<!-- saved from url=(0027)http://www.moemao.com/krsma/ -->
<html>
 <!--<![endif]-->
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta charset="UTF-8" />
  <title>乖离性百万亚瑟王 自助招待系统 | 乖離性ミリオンアーサー</title>
  <script type="text/javascript"  src="<%=basePath%>resources/js/jquery-1.8.2.js"></script>
  <script type="text/javascript"  src="<%=basePath%>resources/js/jquery.form.js"></script>
 </head>
 您的浏览器无法使用本系统，请发招待ID给店长
 <!-- 
 <body>
    <div align="center">
		<form id="inviteReq" action="../mar/invite.action" method="post">
			<table>
				<tr>
					<td style="width: 180px;">招待号码（9位数字）</td>
					<td><input class="invite_code" type="text" required="" name="inviteCode" id="inviteCode" /></td>
				</tr>
				<tr>
				    <td>神秘代码</td>
					<td><input class="password_code" type="text" required="" name="password" id="password" /> </td>
				</tr>
				<tr>
				    <td><a id="message" style="color:red;">填入招待ID以及代码，点击开始即可</a></td>
	                <td><input id="inviteGo" type="button" value="开始" /></td>
				</tr>
				<tr style="height: 50px;">
				    <td></td>
                    <td></td>
				</tr>
				<tr>
                    <td colspan="2"><a id="buyPassword" onclick="window.open('http://item.taobao.com/item.htm?id=43849981319')"><b>→点击购买神秘代码←</b></a></td>
                </tr>
			</table>
	</form>
	</div>
	<input type="hidden" id="lock" value="0" />
 </body>
<script type="text/javascript">
	$(document).ready(function() {

		$("#inviteGo").click(function() {
			// 校验锁
			if ("1" == $("#lock").val()) {
				alert("招待正在执行，请稍等片刻 _(:з」∠)_");
				return;
			}

			if (!validate()) {
				return;
			}

			var options = {
				url : "../mar/invite.action",
				type : "POST",
				success : function(result) {
					$.ajax({
						url : "../mar/invite.action",
						data : $("#inviteReq").formSerialize(),
						async : false
					});
					dealResult(result);
					// 解锁
					$("#lock").val(0);
				},
				error : function() {
					alert("请10分钟后进游戏查看礼物箱，再有问题请找店长！");
					// 解锁
					$("#lock").val(0);
					
                    document.getElementById("message").innerHTML= "填入招待ID以及代码，点击开始即可";
				}
			};

			// 确认操作
			$("#inviteReq").ajaxSubmit(options);
			// 加锁
			$("#lock").val(1);
            document.getElementById("message").innerHTML= "已经开始刷招待，请等待10分钟后进游戏查看礼物箱";
			return false;
		});

		function validate() {
			// 判断非空
			if ("" == $("#inviteCode").val()) {
				alert("请填入您的招待ID！");
				return false;
			}

			if ("" == $("#password").val()) {
				alert("请填入神秘代码！");
				return false;
			}

			// 处理招待ID
			var reg = new RegExp("^[0-9]*$");
			var temp;
			var result = "";
			for ( var i = 0; i < $("#inviteCode").val().length; i++) {
				temp = $("#inviteCode").val().charAt(i)
				if (reg.test(temp)) {
					result += temp;
				}
			}
			$("#inviteCode").val(result);
			if ($("#inviteCode").val().length != 9) {
				alert("请填入正确的招待ID！9位数字，中间请勿加空格或逗号！");
				return false;
			}

			return true;
		}

		function dealResult(result) {
			if ("0" == result) {
				// 图片切换为已完成

				alert("您的招待已经完成，请在礼物箱中查收~");
				document.getElementById("message").innerHTML= "您的招待已经完成";
			} else if ("1" == result) {
				// 图片切换为神秘代码错误或者重试

				alert("神秘代码错误或已被使用！如果之前已经操作过，请10分钟后进游戏查看礼物箱，再有问题请找店长！");
				document.getElementById("message").innerHTML= "填入招待ID以及代码，点击开始即可";
			}
		}
	});
</script>
 -->
</html>