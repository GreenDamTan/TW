<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderManager.inc.jsp" %>
<style type="text/css">
#marzCardReq{border:0px solid;}
#marzCardReq td{border:0px solid;}
#marzCardReq input{width:120px;}
#marzCardReq select{width:120px;}
</style>
<input type="hidden" id="marzCardManagerSubmit" name="marzCardManagerSubmit" value="0" />
<div class="ui-widget">
	<form id="marzCardReq" action="../mar/queryMarzCard.action" method="post">
		<table>
			<tr>
				<td>类型：</td>
                <td>
                    <select name="marzCardReq.type">
                        <option value="">全部</option>
                        <option value="0">日卡</option>
                        <option value="1">周卡</option>
                        <option value="2">月卡</option>
                        <option value="3">季卡</option>
                    </select>
                </td>
                <td>状态：</td>
                <td>
                    <select name="marzCardReq.status">
                        <option value="">全部</option>
                        <option value="0">未使用</option>
                        <option value="1">已使用</option>
                    </select>
                </td>
                <td><label>卡密串：</label></td><td><input type="text" name="marzCardReq.password" /></td>
            </tr>
            <tr>
                <td>创建时间：</td>
                <td><input type="text" class="datepicker" name="marzCardReq.createTimeStart" /></td>
                <td>~</td>
                <td><input type="text" class="datepicker" name="marzCardReq.createTimeEnd" /></td>
				<td>
				</td>
				<td>
				<button id="clearMarzCard">重置</button>
				<button id="queryMarzCard">查询</button>
				</td>
			</tr>
		</table>
	</form>
</div>

<button id="createMarzCard">生成</button>
<select id="createMarzCardType">
    <option value="0">日卡</option>
    <option value="1">周卡</option>
    <option value="2">月卡</option>
    <option value="3">季卡</option>
</select>
<button id="renewMarzCard">重置</button>
<button id="deleteMarzCard">删除</button>
<button id="exportMarzCard">导出</button>

<div id="marzCardDiv"></div>

<div id="marzCardEdit" title="MarzCard Edit">
	<form id="marzCardForm" action="../mar/editMarzCard.action" method="post"></form>
</div>

<div id="marzCardConfirm" title="操作确认" hidden="hidden">
	<p><span class="ui-icon ui-icon-alert" style="float: left; margin: 0 7px 20px 0;"></span>记录将被删除且不可恢复，是否确认？</p>
</div>
<script type="text/javascript">
$(document).ready(function(){
	var table=$.ajax({url:"../mar/queryMarzCard.action",async:false});
	$("#marzCardDiv").html(table.responseText);
	
	function query()
	{
		var table=$.ajax({url:"../mar/queryMarzCard.action", data:$("#marzCardReq").formSerialize(), async:false});
		$("#marzCardDiv").html(table.responseText);
	}
	
	// 新增/更新窗口
	$( "#marzCardEdit" ).dialog({
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
				if (!marzCardFormCheck())
				{
					return false;
				}
				var form = $("#marzCardForm");
				form.submit();
			}, 
			"关闭": function()
			{
				$("#marzCardManagerSubmit").val("0");
				$("#marzCardEdit").dialog("close"); 
			} 
		}
	});
	
	// 提交表单
	$("#marzCardForm").submit(function()
	{
		if ($("#marzCardManagerSubmit").val() == "0")
		{
			return false;
		}
		
		$("#marzCardManagerSubmit").val("0");
		
		var options = { 
			url:"../mar/editMarzCard.action", // 提交给哪个执行
			type:'POST', 
			success: function(){
				$("#marzCardEdit").dialog("close");
				// 新增完毕刷新form
				query();
				alert("操作成功");
			},
			error:function(){ 
				$("#marzCardEdit").dialog("close"); 
				alert("操作失败"); 
			}
		};
		
		$("#marzCardForm").ajaxSubmit(options);
		
		return false; // 为了不刷新页面,返回false，反正都已经在后台执行完了，没事！
	});  
	
	// 新增按钮
	$( "#addMarzCard" ).button({
		icons: {
			primary: "ui-icon-plus"
			}
		}).click(function() {
		// 请求提交标志
		$("#marzCardManagerSubmit").val("1");
		$( "#marzCardEdit" ).dialog( "open" );
		var edit=$.ajax({url:"../mar/editMarzCardPage.action",async:false});
		$("#marzCardForm").html(edit.responseText);
		return false;
	});
	
	// 导出按钮
    $( "#exportMarzCard" ).button({
        icons: {
            primary: "ui-icon-plus"
            }
        }).click(function() {
        // 请求提交标志
        // 获取选中的记录ids
        var ids = "";
        var array = document.getElementsByName("marzCardId");
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
            $("#marzCardManagerSubmit").val("0");
            return false;
        }
        
        // ajax调用删除action
        var options = { 
            url:"../mar/exportMarzCard.action?ids=" + ids , // 提交给哪个执行
            type:'POST', 
            success: function(){
                // 执行成功刷新form
                query();
            },
            error:function(){ 
                alert("导出失败"); 
            }
        };
        
        $( "#marzCardEdit" ).dialog( "open" );
        var edit=$.ajax({url:"../mar/exportMarzCard.action?ids=" + ids, async:false});
        $("#marzCardForm").html(edit.responseText);
        return false;
    });
	
	 // 删除按钮
	$( "#deleteMarzCard" ).button({
		icons: {
			primary: "ui-icon-minus"
			}
		}).click(function() {
		$("#marzCardManagerSubmit").val("1");
		// 获取选中的记录ids
		var ids = "";
		var array = document.getElementsByName("marzCardId");
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
			$("#marzCardManagerSubmit").val("0");
			return false;
		}
		
		// ajax调用删除action
		var options = { 
			url:"../mar/deleteMarzCard.action?ids=" + ids , // 提交给哪个执行
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
		$("#marzCardConfirm").dialog({
			resizable: false,
            height:160,
            modal: true,
            buttons: {
                "确认": function() {
                	$( this ).dialog( "close" );
                	// 异步请求删除操作
                	$("#marzCardConfirm").ajaxSubmit(options);
                },
                "取消": function() {
                    $( this ).dialog( "close" );
                }
            }
		});
		return false;
	});
	 
	 // 重置按钮
    $( "#renewMarzCard" ).button({
        icons: {
            primary: "ui-icon-plus"
            }
        }).click(function() {
        $("#marzCardManagerSubmit").val("1");
        // 获取选中的记录ids
        var ids = "";
        var array = document.getElementsByName("marzCardId");
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
            $("#marzCardManagerSubmit").val("0");
            return false;
        }
        
        // ajax调用删除action
        var options = { 
            url:"../mar/renewMarzCard.action?ids=" + ids , // 提交给哪个执行
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
        $("#marzCardConfirm").dialog({
            resizable: false,
            height:160,
            modal: true,
            buttons: {
                "确认": function() {
                    $( this ).dialog( "close" );
                    // 异步请求删除操作
                    $("#marzCardConfirm").ajaxSubmit(options);
                },
                "取消": function() {
                    $( this ).dialog( "close" );
                }
            }
        });
        return false;
    });
    
    // 创建按钮
    $( "#createMarzCard" ).button({
        icons: {
            primary: "ui-icon-check"
            }
        }).click(function() {
            $("#marzCardManagerSubmit").val("1");
                        
            // ajax调用删除action
            var options = { 
                url:"../mar/createMarzCard.action?type=" + $("#createMarzCardType").val(), // 提交给哪个执行
                type:'POST', 
                success: function(){
                    // 执行成功刷新form
                    query();
                },
                error:function(){ 
                    alert("操作失败"); 
                }
            };
            
            $("#marzCardConfirm").ajaxSubmit(options);
            $("#marzCardManagerSubmit").val("0");
            return false;
    });
	
	 // 刷新按钮
	$( "#queryMarzCard" ).button().click(function() {
			query();
		return false;
	});
	 
	// 重置按钮
	$( "#clearMarzCard" ).button().click(function() {
			$("#marzCardReq").clearForm();
		return false;
	});
	
	// 页面校验
	function marzCardFormCheck()
	{
		return true;
	}
});
</script>
