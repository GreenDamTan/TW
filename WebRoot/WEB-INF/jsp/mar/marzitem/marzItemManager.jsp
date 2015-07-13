<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderManager.inc.jsp" %>
<!-- 替换mar为命名空间，首字母小写，替换完成后删除注释 -->
<!-- 替换marzItem为新增的类名，首字母小写，替换完成后删除注释 -->
<!-- 替换MarzItem为新增的类名，首字母大写，替换完成后删除注释 -->
<style type="text/css">
#marzItemReq{border:0px solid;}
#marzItemReq td{border:0px solid;}
#marzItemReq input{width:120px;}
#marzItemReq select{width:120px;}
</style>
<input type="hidden" id="marzItemManagerSubmit" name="marzItemManagerSubmit" value="0" />
<div class="ui-widget">
	<form id="marzItemReq" action="../mar/queryMarzItem.action" method="post">
		<table>
			<tr>
				<td><label>物品ID: </label></td><td><input type="text" name="marzItemReq.itemId" /></td>
                <td>类型</td>
                <td>
                    <select name="marzItemReq.type">
                        <option value="">全部</option>
                        <option value="1">药水</option>
                        <option value="2">钥匙</option>
                        <option value="3">硬币</option>
                    </select>
                </td>
                <td>状态</td>
                <td>
                    <select name="marzItemReq.status">
                        <option value="">全部</option>
                        <option value="0">已失效</option>
                        <option value="1">生效中</option>
                    </select>
                </td>
				<td>
				
				</td>
				<td>
				<button id="clearMarzItem">重置</button>
				<button id="queryMarzItem">查询</button>
				</td>
			</tr>
		</table>
	</form>
</div>

<button id="addMarzItem">新增</button>
<button id="deleteMarzItem">删除</button>
<button id="onMarzItem">启用</button>
<button id="offMarzItem">禁用</button>
<a style="color:red;">硬币参数规则：抽奖名称=硬币ID=消耗数量=gachaId=payType 多个参数用,分隔</a>
<div id="marzItemDiv"></div>

<div id="marzItemEdit" title="MarzItem Edit">
	<form id="marzItemForm" action="../mar/editMarzItem.action" method="post"></form>
</div>

<div id="marzItemConfirm" title="操作确认" hidden="hidden">
	<p><span class="ui-icon ui-icon-alert" style="float: left; margin: 0 7px 20px 0;"></span>记录将被删除且不可恢复，是否确认？</p>
</div>
<script type="text/javascript">
$(document).ready(function(){
	var table=$.ajax({url:"../mar/queryMarzItem.action",async:false});
	$("#marzItemDiv").html(table.responseText);
	
	function query()
	{
		var table=$.ajax({url:"../mar/queryMarzItem.action", data:$("#marzItemReq").formSerialize(), async:false});
		$("#marzItemDiv").html(table.responseText);
	}
	
	// 新增/更新窗口
	$( "#marzItemEdit" ).dialog({
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
				if (!marzItemFormCheck())
				{
					return false;
				}
				var form = $("#marzItemForm");
				form.submit();
			}, 
			"关闭": function()
			{
				$("#marzItemManagerSubmit").val("0");
				$("#marzItemEdit").dialog("close"); 
			} 
		}
	});
	
	// 提交表单
	$("#marzItemForm").submit(function()
	{
		if ($("#marzItemManagerSubmit").val() == "0")
		{
			return false;
		}
		
		$("#marzItemManagerSubmit").val("0");
		
		var options = { 
			url:"../mar/editMarzItem.action", // 提交给哪个执行
			type:'POST', 
			success: function(){
				$("#marzItemEdit").dialog("close");
				// 新增完毕刷新form
				query();
				alert("操作成功");
			},
			error:function(){ 
				$("#marzItemEdit").dialog("close"); 
				alert("操作失败"); 
			}
		};
		
		$("#marzItemForm").ajaxSubmit(options);
		
		return false; // 为了不刷新页面,返回false，反正都已经在后台执行完了，没事！
	});  
	
	// 新增按钮
	$( "#addMarzItem" ).button({
		icons: {
			primary: "ui-icon-plus"
			}
		}).click(function() {
		// 请求提交标志
		$("#marzItemManagerSubmit").val("1");
		$( "#marzItemEdit" ).dialog( "open" );
		var edit=$.ajax({url:"../mar/editMarzItemPage.action",async:false});
		$("#marzItemForm").html(edit.responseText);
		return false;
	});
	
	 // 删除按钮
	$( "#deleteMarzItem" ).button({
		icons: {
			primary: "ui-icon-minus"
			}
		}).click(function() {
		$("#marzItemManagerSubmit").val("1");
		// 获取选中的记录ids
		var ids = "";
		var array = document.getElementsByName("marzItemId");
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
			$("#marzItemManagerSubmit").val("0");
			return false;
		}
		
		// ajax调用删除action
		var options = { 
			url:"../mar/deleteMarzItem.action?ids=" + ids , // 提交给哪个执行
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
		$("#marzItemConfirm").dialog({
			resizable: false,
            height:160,
            modal: true,
            buttons: {
                "确认": function() {
                	$( this ).dialog( "close" );
                	// 异步请求删除操作
                	$("#marzItemConfirm").ajaxSubmit(options);
                },
                "取消": function() {
                    $( this ).dialog( "close" );
                }
            }
		});
		return false;
	});
	 
	 // 启用按钮
	$( "#onMarzItem" ).button({
		icons: {
			primary: "ui-icon-check"
			}
		}).click(function() {
			$("#marzItemManagerSubmit").val("1");
			// 获取选中的记录ids
			var ids = "";
			var array = document.getElementsByName("marzItemId");
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
				$("#marzItemManagerSubmit").val("0");
				return false;
			}
			
			// ajax调用删除action
			var options = { 
				url:"../mar/changeStatusMarzItem.action?status=1&ids=" + ids , // 提交给哪个执行
				type:'POST', 
				success: function(){
					// 执行成功刷新form
					query();
				},
				error:function(){ 
					alert("操作失败"); 
				}
			};
			
			$("#marzItemConfirm").ajaxSubmit(options);
			$("#marzItemManagerSubmit").val("0");
			return false;
	});
	 
	 // 停用按钮
	$( "#offMarzItem" ).button({
		icons: {
			primary: "ui-icon-close"
			}
		}).click(function() {
			$("#marzItemManagerSubmit").val("1");
			// 获取选中的记录ids
			var ids = "";
			var array = document.getElementsByName("marzItemId");
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
				$("#marzItemManagerSubmit").val("0");
				return false;
			}
			
			// ajax调用删除action
			var options = { 
				url:"../mar/changeStatusMarzItem.action?status=0&ids=" + ids , // 提交给哪个执行
				type:'POST', 
				success: function(){
					// 执行成功刷新form
					query();
				},
				error:function(){ 
					alert("操作失败"); 
				}
			};
			
			$("#marzItemConfirm").ajaxSubmit(options);
			$("#marzItemManagerSubmit").val("0");
			return false;
	});
	
	 // 刷新按钮
	$( "#queryMarzItem" ).button().click(function() {
			query();
		return false;
	});
	 
	// 重置按钮
	$( "#clearMarzItem" ).button().click(function() {
			$("#marzItemReq").clearForm();
		return false;
	});
	
	// 页面校验
	function marzItemFormCheck()
	{
		return true;
	}
});
</script>
