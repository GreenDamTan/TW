<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderManager.inc.jsp" %>
<style type="text/css">
#marzMapReq{border:0px solid;}
#marzMapReq td{border:0px solid;}
#marzMapReq input{width:120px;}
#marzMapReq select{width:120px;}
</style>
<input type="hidden" id="marzMapManagerSubmit" name="marzMapManagerSubmit" value="0" />
<div class="ui-widget">
	<form id="marzMapReq" action="../mar/queryMarzMap.action" method="post">
		<table>
			<tr>
				<td><label>BOSSID: </label></td><td><input type="text" name="marzMapReq.bossId" /></td>
				<td><label>名称: </label></td><td><input type="text" name="marzMapReq.bossName" /></td>
				<td>
				
				</td>
				<td>
				<button id="clearMarzMap">重置</button>
				<button id="queryMarzMap">查询</button>
				</td>
			</tr>
		</table>
	</form>
</div>

<button id="addMarzMap">新增</button>
<button id="deleteMarzMap">删除</button>

<div id="marzMapDiv"></div>

<div id="marzMapEdit" title="MarzMap Edit">
	<form id="marzMapForm" action="../mar/editMarzMap.action" method="post"></form>
</div>

<div id="marzMapConfirm" title="操作确认" hidden="hidden">
	<p><span class="ui-icon ui-icon-alert" style="float: left; margin: 0 7px 20px 0;"></span>记录将被删除且不可恢复，是否确认？</p>
</div>
<script type="text/javascript">
$(document).ready(function(){
	var table=$.ajax({url:"../mar/queryMarzMap.action",async:false});
	$("#marzMapDiv").html(table.responseText);
	
	function query()
	{
		var table=$.ajax({url:"../mar/queryMarzMap.action", data:$("#marzMapReq").formSerialize(), async:false});
		$("#marzMapDiv").html(table.responseText);
	}
	
	// 新增/更新窗口
	$( "#marzMapEdit" ).dialog({
		modal: true,
		height:500,
		width:750,
		autoOpen: false,
		show: "fold",
		hide: "fold",
		buttons:
		{ 
			"确定":function()
			{
				// 页面校验
				if (!marzMapFormCheck())
				{
					return false;
				}
				var form = $("#marzMapForm");
				form.submit();
			}, 
			"关闭": function()
			{
				$("#marzMapManagerSubmit").val("0");
				$("#marzMapEdit").dialog("close"); 
			} 
		}
	});
	
	// 提交表单
	$("#marzMapForm").submit(function()
	{
		if ($("#marzMapManagerSubmit").val() == "0")
		{
			return false;
		}
		
		$("#marzMapManagerSubmit").val("0");
		
		var options = { 
			url:"../mar/editMarzMap.action", // 提交给哪个执行
			type:'POST', 
			success: function(){
				$("#marzMapEdit").dialog("close");
				// 新增完毕刷新form
				query();
				alert("操作成功");
			},
			error:function(){ 
				$("#marzMapEdit").dialog("close"); 
				alert("操作失败"); 
			}
		};
		
		$("#marzMapForm").ajaxSubmit(options);
		
		return false; // 为了不刷新页面,返回false，反正都已经在后台执行完了，没事！
	});  
	
	// 新增按钮
	$( "#addMarzMap" ).button({
		icons: {
			primary: "ui-icon-plus"
			}
		}).click(function() {
		// 请求提交标志
		$("#marzMapManagerSubmit").val("1");
		$( "#marzMapEdit" ).dialog( "open" );
		var edit=$.ajax({url:"../mar/editMarzMapPage.action",async:false});
		$("#marzMapForm").html(edit.responseText);
		return false;
	});
	
	 // 删除按钮
	$( "#deleteMarzMap" ).button({
		icons: {
			primary: "ui-icon-minus"
			}
		}).click(function() {
		$("#marzMapManagerSubmit").val("1");
		// 获取选中的记录ids
		var ids = "";
		var array = document.getElementsByName("marzMapId");
		for (var i=0; i<array.length; i++)
	   	{
	   		if (array[i].checked)
  			{
	   			if (ids == "")
   				{
	   				ids += array[i].value;
   				}
	   			else
	   			{
	   				ids += "," + array[i].value;
	   			}
  			}
	   	}
		
		// 操作验证
		if (ids == "")
		{
			alert("请选择至少一条记录");
			$("#marzMapManagerSubmit").val("0");
			return false;
		}
		
		// ajax调用删除action
		var options = { 
			url:"../mar/deleteMarzMap.action?ids=" + ids , // 提交给哪个执行
			type:'POST', 
			success: function(){
				alert("删除成功");
				// 执行成功刷新form
				query();
			},
			error:function(){ 
				alert("删除失败"); 
			}
		};
		
		// 确认操作
		$("#marzMapConfirm").dialog({
			resizable: false,
            height:160,
            modal: true,
            buttons: {
                "确认": function() {
                	$( this ).dialog( "close" );
                	// 异步请求删除操作
                	$("#marzMapConfirm").ajaxSubmit(options);
                },
                "取消": function() {
                    $( this ).dialog( "close" );
                }
            }
		});
		return false;
	});
	 
	 // 启用按钮
	$( "#onMarzMap" ).button({
		icons: {
			primary: "ui-icon-check"
			}
		}).click(function() {
			$("#marzMapManagerSubmit").val("1");
			// 获取选中的记录ids
			var ids = "";
			var array = document.getElementsByName("marzMapId");
			for (var i=0; i<array.length; i++)
		   	{
		   		if (array[i].checked)
	  			{
		   			if (ids == "")
	   				{
		   				ids += array[i].value;
	   				}
		   			else
		   			{
		   				ids += "," + array[i].value;
		   			}
	  			}
		   	}
			
			// 操作验证
			if (ids == "")
			{
				alert("请选择至少一条记录");
				$("#marzMapManagerSubmit").val("0");
				return false;
			}
			
			// ajax调用删除action
			var options = { 
				url:"../mar/changeStatusMarzMap.action?status=1&ids=" + ids , // 提交给哪个执行
				type:'POST', 
				success: function(){
					// 执行成功刷新form
					query();
				},
				error:function(){ 
					alert("操作失败"); 
				}
			};
			
			$("#marzMapConfirm").ajaxSubmit(options);
			$("#marzMapManagerSubmit").val("0");
			return false;
	});
	 
	 // 停用按钮
	$( "#offMarzMap" ).button({
		icons: {
			primary: "ui-icon-close"
			}
		}).click(function() {
			$("#marzMapManagerSubmit").val("1");
			// 获取选中的记录ids
			var ids = "";
			var array = document.getElementsByName("marzMapId");
			for (var i=0; i<array.length; i++)
		   	{
		   		if (array[i].checked)
	  			{
		   			if (ids == "")
	   				{
		   				ids += array[i].value;
	   				}
		   			else
		   			{
		   				ids += "," + array[i].value;
		   			}
	  			}
		   	}
			
			// 操作验证
			if (ids == "")
			{
				alert("请选择至少一条记录");
				$("#marzMapManagerSubmit").val("0");
				return false;
			}
			
			// ajax调用删除action
			var options = { 
				url:"../mar/changeStatusMarzMap.action?status=0&ids=" + ids , // 提交给哪个执行
				type:'POST', 
				success: function(){
					// 执行成功刷新form
					query();
				},
				error:function(){ 
					alert("操作失败"); 
				}
			};
			
			$("#marzMapConfirm").ajaxSubmit(options);
			$("#marzMapManagerSubmit").val("0");
			return false;
	});
	
	 // 刷新按钮
	$( "#queryMarzMap" ).button().click(function() {
			query();
		return false;
	});
	 
	// 重置按钮
	$( "#clearMarzMap" ).button().click(function() {
			$("#marzMapReq").clearForm();
		return false;
	});
	
	// 页面校验
	function marzMapFormCheck()
	{
		return true;
	}
});
</script>
