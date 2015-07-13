<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>POST Handler</title>
<script type="text/JavaScript">
window.addEventListener("message", function( event ) {
// 把父窗口发送过来的数据向服务器发送post请求
var data = event.data;
$.ajax({
type: 'POST',
data: "info=" + data,
dataType: "json"
}).done(function(res){
//可以向父窗体返回结果
window.parent.postMessage(res, "*");
}).fail(function(res){
window.parent.postMessage(res, "*");
});
}, false );
</script>
</head>
<body>
</body>
</html>
