<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeader.inc.jsp" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    
    <title>乖离性MA初始账号查询系统——猫萌公社</title>
    
    <meta charset="utf-8">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0"> 
    <meta http-equiv="keywords" content="幻影帝国,猫盟公社,乖离性MA初始账号查询">
    <style type="text/css">
	#accountReq{border:0px solid;}
	#accountReq td{border:0px solid; text-align: center;}
	#accountReq input{width:120px;}
	#accountReq select{width:120px;}
	</style>    
</head>
<body>
<div style="height: 300px; font-size: 30px; background: url(http://www.itmo.com/images/wiki/glx.jpg) no-repeat center top;">
<a style="padding-left: 100px;" onclick="window.open('http://item.taobao.com/item.htm?id=43813070651')"><b>→点击进入淘宝页面购买←</b></a>
</div>
<div>
	<form id="accountReq" action="../mar/queryAccountTB_login.action" method="post">
		<table width="100%">
		    <tr></tr>
			<tr>
			    <td>
				    <input id="urNumA" type="checkbox" name="accountReq.urNumA" value="2"  style="vertical-align:middle" />
				    <label for="checkbox" style="font-size:12px; line-height:12px">佣兵</label>
			    </td>
			    <td>
			        <input id="urNumB" type="checkbox" name="accountReq.urNumB" value="2" style="vertical-align:middle" />			    
                    <label for="checkbox" style="font-size:12px; line-height:12px">富豪</label>
                </td>
			    <td>
				    <input id="urNumC" type="checkbox" name="accountReq.urNumC" value="2" style="vertical-align:middle" />
	                <label for="checkbox" style="font-size:12px; line-height:12px">盗贼</label>
			    </td>
			    <td>
			        <input id="urNumD" type="checkbox" name="accountReq.urNumD" value="2" style="vertical-align:middle" />
                    <label for="checkbox" style="font-size:12px; line-height:12px">歌姬</label>
                </td>
                <td>UR：<input type="text" name="accountReq.title" /></td>
                <td>
                    <!-- <button id="clearAccount">重置</button> -->
                    <button id="queryAccount">查询</button>
                </td>
			</tr>
		</table>
	</form>
</div>

<div id="accountDiv" style="text-align: center;">请先选择上方的职业！勾选一种或多种</div>

<script type="text/javascript">
$(document).ready(function(){
    var table=$.ajax({url:"../mar/queryAccountTB_login.action", data:$("#accountReq").formSerialize(), async:false});
    $("#accountDiv").html(table.responseText);
    
	// 查询方法
	function query()
	{
		var table=$.ajax({url:"../mar/queryAccountTB_login.action", data:$("#accountReq").formSerialize(), async:false});
		$("#accountDiv").html(table.responseText);
	}
	
	 // 查询按钮
	$( "#queryAccount" ).button().click(function() {
	    //alert(document.getElementById("urNumA").checked);
        if (document.getElementById("urNumA").checked == false && document.getElementById("urNumB").checked == false && document.getElementById("urNumC").checked == false && document.getElementById("urNumD").checked == false)
        {
            alert("请先选择上方的职业！勾选一种或多种")
            $("#accountDiv").html("请先选择上方的职业！勾选一种或多种")
            return false;;
        }
        
        query();
		return false;
	});
	 
	// 重置按钮
	$( "#clearAccount" ).button().click(function() {
			$("#accountReq").clearForm();
		return false;
	});
});
</script>
</body>
</html>
