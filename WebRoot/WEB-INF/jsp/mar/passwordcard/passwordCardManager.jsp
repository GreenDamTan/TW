<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderManager.inc.jsp" %>
<style type="text/css">
#passwordCardReq{border:0px solid;}
#passwordCardReq td{border:0px solid;}
#passwordCardReq input{width:120px;}
#passwordCardReq select{width:120px;}
</style>
<input type="hidden" id="passwordCardManagerSubmit" name="passwordCardManagerSubmit" value="0" />
<div class="ui-widget">
	<form id="passwordCardReq" action="../mar/queryPasswordCard.action" method="post">
		<table>
			<tr>
                <td>状态：</td>
                <td>
                    <select name="passwordCardReq.status">
                        <option value="">全部</option>
                        <option value="0">未使用</option>
                        <option value="1">使用中</option>
                        <option value="2">已使用</option>
                    </select>
                </td>
				<td><label>卡密串：</label></td><td><input type="text" name="passwordCardReq.password" /></td>
				<td><label>招待ID：</label></td><td><input type="text" name="passwordCardReq.inviteCode" /></td>
			</tr>
			<tr>
			     <td>操作时间：</td>
                 <td><input type="text" class="datepicker" name="passwordCardReq.createTimeStart" /></td>
                 <td>~</td>
                 <td><input type="text" class="datepicker" name="passwordCardReq.createTimeEnd" /></td>
                 <td>
                 </td>
                 <td>
                 <button id="clearPasswordCard">重置</button>
                 <button id="queryPasswordCard">查询</button>
                 </td>
			</tr>
		</table>
	</form>
</div>

<button id="createPasswordCard">生成</button>
<button id="renewPasswordCard">重置</button>
<button id="deletePasswordCard">删除</button>
<button id="exportPasswordCard">导出</button>

<div id="passwordCardDiv"></div>

<div id="passwordCardEdit" title="PasswordCard Edit">
	<form id="passwordCardForm" action="" method="post"></form>
</div>

<div id="passwordCardConfirm" title="操作确认" hidden="hidden">
	<p><span class="ui-icon ui-icon-alert" style="float: left; margin: 0 7px 20px 0;"></span>记录将被删除且不可恢复，是否确认？</p>
</div>
<script type="text/javascript">
$(document).ready(function(){
	function query()
	{
		var table=$.ajax({url:"../mar/queryPasswordCard.action", data:$("#passwordCardReq").formSerialize(), async:false});
		$("#passwordCardDiv").html(table.responseText);
	}
	
	// 新增/更新窗口
	$( "#passwordCardEdit" ).dialog({
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
				if (!passwordCardFormCheck())
				{
					return false;
				}
				var form = $("#passwordCardForm");
				form.submit();
			}, 
			"关闭": function()
			{
				$("#passwordCardManagerSubmit").val("0");
				$("#passwordCardEdit").dialog("close"); 
			} 
		}
	});
	
	// 提交表单
	$("#passwordCardForm").submit(function()
	{
		if ($("#passwordCardManagerSubmit").val() == "0")
		{
			return false;
		}
		
		$("#passwordCardManagerSubmit").val("0");
		
		var options = { 
			url:"../mar/editPasswordCard.action", // 提交给哪个执行
			type:'POST', 
			success: function(){
				$("#passwordCardEdit").dialog("close");
				// 新增完毕刷新form
				query();
				alert("操作成功");
			},
			error:function(){ 
				$("#passwordCardEdit").dialog("close"); 
				alert("操作失败"); 
			}
		};
		
		$("#passwordCardForm").ajaxSubmit(options);
		
		return false; // 为了不刷新页面,返回false，反正都已经在后台执行完了，没事！
	});  
	
	// 导出按钮
	$( "#exportPasswordCard" ).button({
		icons: {
			primary: "ui-icon-plus"
			}
		}).click(function() {
		// 请求提交标志
		// 获取选中的记录ids
        var ids = "";
        var array = document.getElementsByName("passwordCardId");
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
            $("#passwordCardManagerSubmit").val("0");
            return false;
        }
        
        // ajax调用删除action
        var options = { 
            url:"../mar/exportPasswordCard.action?ids=" + ids , // 提交给哪个执行
            type:'POST', 
            success: function(){
                // 执行成功刷新form
                query();
            },
            error:function(){ 
                alert("导出失败"); 
            }
        };
        
		$( "#passwordCardEdit" ).dialog( "open" );
		var edit=$.ajax({url:"../mar/exportPasswordCard.action?ids=" + ids, async:false});
		$("#passwordCardForm").html(edit.responseText);
		return false;
	});
	
	 // 删除按钮
	$( "#deletePasswordCard" ).button({
		icons: {
			primary: "ui-icon-minus"
			}
		}).click(function() {
		$("#passwordCardManagerSubmit").val("1");
		// 获取选中的记录ids
		var ids = "";
		var array = document.getElementsByName("passwordCardId");
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
			$("#passwordCardManagerSubmit").val("0");
			return false;
		}
		
		// ajax调用删除action
		var options = { 
			url:"../mar/deletePasswordCard.action?ids=" + ids , // 提交给哪个执行
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
		$("#passwordCardConfirm").dialog({
			resizable: false,
            height:160,
            modal: true,
            buttons: {
                "确认": function() {
                	$( this ).dialog( "close" );
                	// 异步请求删除操作
                	$("#passwordCardConfirm").ajaxSubmit(options);
                },
                "取消": function() {
                    $( this ).dialog( "close" );
                }
            }
		});
		return false;
	});
	
	// 重置按钮
    $( "#renewPasswordCard" ).button({
        icons: {
            primary: "ui-icon-plus"
            }
        }).click(function() {
        $("#passwordCardManagerSubmit").val("1");
        // 获取选中的记录ids
        var ids = "";
        var array = document.getElementsByName("passwordCardId");
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
            $("#passwordCardManagerSubmit").val("0");
            return false;
        }
        
        // ajax调用删除action
        var options = { 
            url:"../mar/renewPasswordCard.action?ids=" + ids , // 提交给哪个执行
            type:'POST', 
            success: function(){
                alert("重置成功");
                // 执行成功刷新form
                query();
            },
            error:function(){ 
                alert("重置失败"); 
            }
        };
        
        // 确认操作
        $("#passwordCardConfirm").dialog({
            resizable: false,
            height:160,
            modal: true,
            buttons: {
                "确认": function() {
                    $( this ).dialog( "close" );
                    // 异步请求删除操作
                    $("#passwordCardConfirm").ajaxSubmit(options);
                },
                "取消": function() {
                    $( this ).dialog( "close" );
                }
            }
        });
        return false;
    });
	 
	 // 创建按钮
	$( "#createPasswordCard" ).button({
		icons: {
			primary: "ui-icon-check"
			}
		}).click(function() {
			$("#passwordCardManagerSubmit").val("1");
						
			// ajax调用删除action
			var options = { 
				url:"../mar/createPasswordCard.action", // 提交给哪个执行
				type:'POST', 
				success: function(){
					// 执行成功刷新form
					query();
				},
				error:function(){ 
					alert("操作失败"); 
				}
			};
			
			$("#passwordCardConfirm").ajaxSubmit(options);
			$("#passwordCardManagerSubmit").val("0");
			return false;
	});
	
	 // 刷新按钮
	$( "#queryPasswordCard" ).button().click(function() {
			query();
		return false;
	});
	 
	// 重置按钮
	$( "#clearPasswordCard" ).button().click(function() {
			$("#passwordCardReq").clearForm();
		return false;
	});
	
	// 页面校验
	function passwordCardFormCheck()
	{
		return true;
	}
});
</script>
