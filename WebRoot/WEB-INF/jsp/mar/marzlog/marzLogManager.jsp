<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderManager.inc.jsp" %>
<style type="text/css">
#marzLogReq{border:0px solid;}
#marzLogReq td{border:0px solid;}
#marzLogReq input{width:120px;}
#marzLogReq select{width:120px;}
</style>
<input type="hidden" id="marzLogManagerSubmit" name="marzLogManagerSubmit" value="0" />
<div class="ui-widget">
	<form id="marzLogReq" action="../mar/queryMarzLog.action" method="post">
		<table>
			<tr>
				<td><label>账户ID: </label></td><td><input type="text" name="marzLogReq.tgksId" /></td>
                <td>操作时间：</td>
                <td><input type="text" class="datepicker" name="marzLogReq.createTimeStart" /></td>
                <td>~</td>
                <td><input type="text" class="datepicker" name="marzLogReq.createTimeEnd" /></td>
                <td><label>类型: </label></td>
                <td>
                    <select name="marzLogReq.type">
                        <option value="">全部</option>
                        <option value="0">系统</option>
                        <option value="1">战斗</option>
                        <option value="2">探索</option>
                        <option value="3">道具</option>
                        <option value="4">合成</option>
                        <option value="5">出售</option>
                        <option value="6">PVP</option>
                        <option value="7">抽卡</option>
                        <option value="9">充值</option>
                    </select>
                </td>
				<td>
				</td>
				<td>
				<button id="clearMarzLog">重置</button>
				<button id="queryMarzLog">查询</button>
				</td>
			</tr>
		</table>
	</form>
</div>

<button id="deleteMarzLog">删除</button>
<button id="resetMarzLog">清空</button>

<div id="marzLogDiv"></div>

<div id="marzLogEdit" title="MarzLog Edit">
	<form id="marzLogForm" action="../mar/editMarzLog.action" method="post"></form>
</div>

<div id="marzLogConfirm" title="操作确认" hidden="hidden">
	<p><span class="ui-icon ui-icon-alert" style="float: left; margin: 0 7px 20px 0;"></span>记录将被删除且不可恢复，是否确认？</p>
</div>
<script type="text/javascript">
$(document).ready(function(){
	function query()
	{
		var table=$.ajax({url:"../mar/queryMarzLog.action", data:$("#marzLogReq").formSerialize(), async:false});
		$("#marzLogDiv").html(table.responseText);
	}
	
	// 新增/更新窗口
	$( "#marzLogEdit" ).dialog({
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
				if (!marzLogFormCheck())
				{
					return false;
				}
				var form = $("#marzLogForm");
				form.submit();
			}, 
			"关闭": function()
			{
				$("#marzLogManagerSubmit").val("0");
				$("#marzLogEdit").dialog("close"); 
			} 
		}
	});
	
	// 提交表单
	$("#marzLogForm").submit(function()
	{
		if ($("#marzLogManagerSubmit").val() == "0")
		{
			return false;
		}
		
		$("#marzLogManagerSubmit").val("0");
		
		var options = { 
			url:"../mar/editMarzLog.action", // 提交给哪个执行
			type:'POST', 
			success: function(){
				$("#marzLogEdit").dialog("close");
				// 新增完毕刷新form
				query();
				alert("操作成功");
			},
			error:function(){ 
				$("#marzLogEdit").dialog("close"); 
				alert("操作失败"); 
			}
		};
		
		$("#marzLogForm").ajaxSubmit(options);
		
		return false; // 为了不刷新页面,返回false，反正都已经在后台执行完了，没事！
	});  
	
	// 新增按钮
	$( "#addMarzLog" ).button({
		icons: {
			primary: "ui-icon-plus"
			}
		}).click(function() {
		// 请求提交标志
		$("#marzLogManagerSubmit").val("1");
		$( "#marzLogEdit" ).dialog( "open" );
		var edit=$.ajax({url:"../mar/editMarzLogPage.action",async:false});
		$("#marzLogForm").html(edit.responseText);
		return false;
	});
	
	 // 删除按钮
	$( "#deleteMarzLog" ).button({
		icons: {
			primary: "ui-icon-minus"
			}
		}).click(function() {
		$("#marzLogManagerSubmit").val("1");
		// 获取选中的记录ids
		var ids = "";
		var array = document.getElementsByName("marzLogId");
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
			$("#marzLogManagerSubmit").val("0");
			return false;
		}
		
		// ajax调用删除action
		var options = { 
			url:"../mar/deleteMarzLog.action?ids=" + ids , // 提交给哪个执行
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
		$("#marzLogConfirm").dialog({
			resizable: false,
            height:160,
            modal: true,
            buttons: {
                "确认": function() {
                	$( this ).dialog( "close" );
                	// 异步请求删除操作
                	$("#marzLogConfirm").ajaxSubmit(options);
                },
                "取消": function() {
                    $( this ).dialog( "close" );
                }
            }
		});
		return false;
	});
	
	// 清空按钮
    $( "#resetMarzLog" ).button({
        icons: {
            primary: "ui-icon-minus"
            }
        }).click(function() {
        $("#marzLogManagerSubmit").val("1");
                
        // ajax调用删除action
        var options = { 
            url:"../mar/resetMarzLog.action" , // 提交给哪个执行
            type:'POST', 
            success: function(){
                alert("清空成功");
                // 执行成功刷新form
                query();
            },
            error:function(){ 
                alert("清空失败"); 
            }
        };
        
        // 确认操作
        $("#marzLogConfirm").dialog({
            resizable: false,
            height:160,
            modal: true,
            buttons: {
                "确认": function() {
                    $( this ).dialog( "close" );
                    // 异步请求删除操作
                    $("#marzLogConfirm").ajaxSubmit(options);
                },
                "取消": function() {
                    $( this ).dialog( "close" );
                }
            }
        });
        return false;
    });
	 
	 // 启用按钮
	$( "#onMarzLog" ).button({
		icons: {
			primary: "ui-icon-check"
			}
		}).click(function() {
			$("#marzLogManagerSubmit").val("1");
			// 获取选中的记录ids
			var ids = "";
			var array = document.getElementsByName("marzLogId");
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
				$("#marzLogManagerSubmit").val("0");
				return false;
			}
			
			// ajax调用删除action
			var options = { 
				url:"../mar/changeStatusMarzLog.action?status=1&ids=" + ids , // 提交给哪个执行
				type:'POST', 
				success: function(){
					// 执行成功刷新form
					query();
				},
				error:function(){ 
					alert("操作失败"); 
				}
			};
			
			$("#marzLogConfirm").ajaxSubmit(options);
			$("#marzLogManagerSubmit").val("0");
			return false;
	});
	 
	 // 停用按钮
	$( "#offMarzLog" ).button({
		icons: {
			primary: "ui-icon-close"
			}
		}).click(function() {
			$("#marzLogManagerSubmit").val("1");
			// 获取选中的记录ids
			var ids = "";
			var array = document.getElementsByName("marzLogId");
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
				$("#marzLogManagerSubmit").val("0");
				return false;
			}
			
			// ajax调用删除action
			var options = { 
				url:"../mar/changeStatusMarzLog.action?status=0&ids=" + ids , // 提交给哪个执行
				type:'POST', 
				success: function(){
					// 执行成功刷新form
					query();
				},
				error:function(){ 
					alert("操作失败"); 
				}
			};
			
			$("#marzLogConfirm").ajaxSubmit(options);
			$("#marzLogManagerSubmit").val("0");
			return false;
	});
	
	 // 刷新按钮
	$( "#queryMarzLog" ).button().click(function() {
			query();
		return false;
	});
	 
	// 重置按钮
	$( "#clearMarzLog" ).button().click(function() {
			$("#marzLogReq").clearForm();
		return false;
	});
	
	// 页面校验
	function marzLogFormCheck()
	{
		return true;
	}
});

function nofind()
{
    var img=event.srcElement;
    img.src="../resources/mar/marweb/face/default.png";
    img.onerror=null;
}
</script>
