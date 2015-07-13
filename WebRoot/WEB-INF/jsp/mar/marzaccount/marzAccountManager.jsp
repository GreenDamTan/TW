<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderManager.inc.jsp" %>
<style type="text/css">
#marzAccountReq{border:0px solid;}
#marzAccountReq td{border:0px solid;}
#marzAccountReq input{width:120px;}
#marzAccountReq select{width:120px;}
</style>
<input type="hidden" id="marzAccountManagerSubmit" name="marzAccountManagerSubmit" value="0" />
<div class="ui-widget">
	<form id="marzAccountReq" action="../mar/queryMarzAccount.action" method="post">
		<table>
			<tr>
                <td><label>TGKSID: </label></td><td><input type="text" name="marzAccountReq.tgksId" /></td>
                <td><label>类型: </label></td>
                <td>
	                <select name="marzAccountReq.type">
                        <option value="">全部</option>
		                <option value="0">IOS</option>
		                <option value="1">Android</option>
	                </select>
                </td>
                <td><label>状态: </label></td>
                <td>
                    <select name="marzAccountReq.status">
                        <option value="">全部</option>
                        <option value="0">离线</option>
                        <option value="1">在线</option>
                    </select>
                </td>
                <td><label>VIP: </label></td>
                <td>
                    <select name="marzAccountReq.vip">
                        <option value="">全部</option>
                        <option value="0">试用</option>
                        <option value="1">普通</option>
                        <option value="2">白金</option>
                        <option value="3">钻石</option>
                    </select>
                </td>
			</tr>
			<tr>
                <td>未过期: </td>
                <td><input type="text" class="datepicker" name="marzAccountReq.endTime" /></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
				<td>
					<button id="clearMarzAccount">重置</button>
					<button id="queryMarzAccount">查询</button>
				</td>
			</tr>
		</table>
	</form>
</div>

<button id="addMarzAccount">新增</button>
<button id="deleteMarzAccount">删除</button>
<button id="onlineMarzAccount">上线</button>
<button id="offlineMarzAccount">下线</button>

<div id="marzAccountDiv"></div>

<div id="marzAccountEdit" title="MarzAccount Edit">
	<form id="marzAccountForm" action="../mar/editMarzAccount.action" method="post"></form>
</div>

<div id="marzAccountConfirm" title="操作确认" hidden="hidden">
	<p><span class="ui-icon ui-icon-alert" style="float: left; margin: 0 7px 20px 0;"></span>记录将被删除且不可恢复，是否确认？</p>
</div>
<script type="text/javascript">
$(document).ready(function(){
	var table=$.ajax({url:"../mar/queryMarzAccount.action",async:false});
	$("#marzAccountDiv").html(table.responseText);
	
	function query()
	{
		var table=$.ajax({url:"../mar/queryMarzAccount.action", data:$("#marzAccountReq").formSerialize(), async:false});
		$("#marzAccountDiv").html(table.responseText);
	}
	
	// 新增/更新窗口
	$( "#marzAccountEdit" ).dialog({
		modal: true,
		height:800,
		width:600,
		autoOpen: false,
		show: "fold",
		hide: "fold",
		buttons:
		{ 
			"确定":function()
			{
				// 页面校验
				if (!marzAccountFormCheck())
				{
					return false;
				}
				var form = $("#marzAccountForm");
				form.submit();
			}, 
			"关闭": function()
			{
				$("#marzAccountManagerSubmit").val("0");
				$("#marzAccountEdit").dialog("close"); 
			} 
		}
	});
	
	// 提交表单
	$("#marzAccountForm").submit(function()
	{
		if ($("#marzAccountManagerSubmit").val() == "0")
		{
			return false;
		}
		
		$("#marzAccountManagerSubmit").val("0");
		
		var options = { 
			url:"../mar/editMarzAccount.action", // 提交给哪个执行
			type:'POST', 
			success: function(){
				$("#marzAccountEdit").dialog("close");
				// 新增完毕刷新form
				query();
				alert("操作成功");
			},
			error:function(){ 
				$("#marzAccountEdit").dialog("close"); 
				alert("操作失败"); 
			}
		};
		
		$("#marzAccountForm").ajaxSubmit(options);
		
		return false; // 为了不刷新页面,返回false，反正都已经在后台执行完了，没事！
	});  
	
	// 新增按钮
	$( "#addMarzAccount" ).button({
		icons: {
			primary: "ui-icon-plus"
			}
		}).click(function() {
		// 请求提交标志
		$("#marzAccountManagerSubmit").val("1");
		$( "#marzAccountEdit" ).dialog( "open" );
		var edit=$.ajax({url:"../mar/editMarzAccountPage.action",async:false});
		$("#marzAccountForm").html(edit.responseText);
		return false;
	});
	
	 // 删除按钮
	$( "#deleteMarzAccount" ).button({
		icons: {
			primary: "ui-icon-minus"
			}
		}).click(function() {
		$("#marzAccountManagerSubmit").val("1");
		// 获取选中的记录ids
		var ids = "";
		var array = document.getElementsByName("marzAccountId");
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
			$("#marzAccountManagerSubmit").val("0");
			return false;
		}
		
		// ajax调用删除action
		var options = { 
			url:"../mar/deleteMarzAccount.action?ids=" + ids , // 提交给哪个执行
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
		$("#marzAccountConfirm").dialog({
			resizable: false,
            height:160,
            modal: true,
            buttons: {
                "确认": function() {
                	$( this ).dialog( "close" );
                	// 异步请求删除操作
                	$("#marzAccountConfirm").ajaxSubmit(options);
                },
                "取消": function() {
                    $( this ).dialog( "close" );
                }
            }
		});
		return false;
	});
	 
	 // 启用按钮
	$( "#onlineMarzAccount" ).button({
		icons: {
			primary: "ui-icon-check"
			}
		}).click(function() {
			$("#marzAccountManagerSubmit").val("1");
			// 获取选中的记录ids
			var ids = "";
			var array = document.getElementsByName("marzAccountId");
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
				$("#marzAccountManagerSubmit").val("0");
				return false;
			}
			
			// ajax调用删除action
			var options = { 
				url:"../mar/changeStatusMarzAccount.action?status=1&ids=" + ids , // 提交给哪个执行
				type:'POST', 
				success: function(){
					// 执行成功刷新form
					query();
				},
				error:function(){ 
					alert("操作失败"); 
				}
			};
			
			$("#marzAccountConfirm").ajaxSubmit(options);
			$("#marzAccountManagerSubmit").val("0");
			return false;
	});
	 
	 // 停用按钮
	$( "#offlineMarzAccount" ).button({
		icons: {
			primary: "ui-icon-close"
			}
		}).click(function() {
			$("#marzAccountManagerSubmit").val("1");
			// 获取选中的记录ids
			var ids = "";
			var array = document.getElementsByName("marzAccountId");
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
				$("#marzAccountManagerSubmit").val("0");
				return false;
			}
			
			// ajax调用删除action
			var options = { 
				url:"../mar/changeStatusMarzAccount.action?status=0&ids=" + ids , // 提交给哪个执行
				type:'POST', 
				success: function(){
					// 执行成功刷新form
					query();
				},
				error:function(){ 
					alert("操作失败"); 
				}
			};
			
			$("#marzAccountConfirm").ajaxSubmit(options);
			$("#marzAccountManagerSubmit").val("0");
			return false;
	});
	
	 // 刷新按钮
	$( "#queryMarzAccount" ).button().click(function() {
			query();
		return false;
	});
	 
	// 重置按钮
	$( "#clearMarzAccount" ).button().click(function() {
			$("#marzAccountReq").clearForm();
		return false;
	});
	
	// 页面校验
	function marzAccountFormCheck()
	{
		return true;
	}
});
</script>
