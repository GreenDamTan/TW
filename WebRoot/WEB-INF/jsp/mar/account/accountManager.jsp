<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderManager.inc.jsp" %>
<style type="text/css">
#accountReq{border:0px solid;}
#accountReq td{border:0px solid;}
#accountReq input{width:120px;}
#accountReq select{width:120px;}
</style>
<input type="hidden" id="accountManagerSubmit" name="accountManagerSubmit" value="0" />
<div class="ui-widget">
	<form id="accountReq" action="../mar/queryAccount.action" method="post">
		<table>
			<tr>
			    <td>状态: </td>
			    <td>
			        <select name="accountReq.status">
                         <option value="">全部</option>
                         <option value="0">新建</option>
                         <option value="1">执行中</option>
                         <option value="2">已完成</option>
                         <option value="3">已售出</option>
                         <option value="4">招待预备</option>
                         <option value="5">招待完成</option>
                         <option value="9">自用测试</option>
			        </select>
			    </td>
				<td><label>UUID: </label></td><td><input type="text" name="accountReq.uuid" /></td>
				<td><label>招待ID: </label></td><td><input type="text" name="accountReq.inviteCode" /></td>
                <td><label>价格: </label></td><td><input type="text" name="accountReq.price" /></td>
			</tr>
			<tr>
                <td>佣兵</td><td><input type="checkbox" name="accountReq.urNumA" value="2" /></td>
                <td>富豪</td><td><input type="checkbox" name="accountReq.urNumB" value="2" /></td>
                <td>盗贼</td><td><input type="checkbox" name="accountReq.urNumC" value="2" /></td>
                <td>歌姬</td><td><input type="checkbox" name="accountReq.urNumD" value="2" /></td>
			</tr>
			<tr>
			    <td>时间：</td>
                <td><input type="text" class="datepicker" name="accountReq.createTimeStart" /></td>
                <td>~</td>
                <td><input type="text" class="datepicker" name="accountReq.createTimeEnd" /></td>
                <td><label>UR: </label></td><td><input type="text" name="accountReq.title" /></td>
                <td><label>水晶: </label></td><td><input type="text" name="accountReq.crystal" /></td>
			</tr>
			<tr>
			    <td></td>
			    <td></td>
			    <td></td>
			    <td></td>
			    <td></td>
			    <td colspan="2">
			         
			    </td>
                <td>
                    <button id="clearAccount">重置</button>
                    <button id="queryAccount">查询</button>
                </td>
			</tr>
		</table>
	</form>
</div>

<form id="accountUploadForm" name="accountUploadForm" action="../mar/uploadAccount.action" method="post" enctype="multipart/form-data">
    <table>
        <tr>
            <td>
                <button id="addAccount">新增</button>
				<button id="deleteAccount">删除</button>
				<button id="initialAccount">执行</button>
				<button id="checkCardAccount">更新</button>
				<button id="gachaAccount">抽卡</button>
				<button id="allCheckCardAccount">全更</button>
				<!-- <button id="allGachaAccount">全抽</button> -->
				<button id="exportUuidAccount">导出</button>
				<button id="forInviteAccount">招待预备</button>
            </td>
            <td>
                <input type="file" id="accountUpload" name="upload" size="30"/>
            </td>
            <td >
                <button id="uploadAccountButton">上传</button>
            </td>
        </tr>
    </table>
</form>
<div id="accountDiv"></div>

<div id="accountEdit" title="Account Edit">
	<form id="accountForm" action="../mar/editAccount.action" method="post"></form>
</div>

<div id="accountConfirm" title="操作确认" hidden="hidden">
	<p><span class="ui-icon ui-icon-alert" style="float: left; margin: 0 7px 20px 0;"></span>记录将被删除且不可恢复，是否确认？</p>
</div>
<script type="text/javascript">
$(document).ready(function(){
	function query()
	{
		var table=$.ajax({url:"../mar/queryAccount.action", data:$("#accountReq").formSerialize(), async:false});
		$("#accountDiv").html(table.responseText);
	}
	
	// 新增/更新窗口
	$( "#accountEdit" ).dialog({
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
				if (!accountFormCheck())
				{
					return false;
                    $("#accountManagerSubmit").val("0");
				}
				var form = $("#accountForm");
				form.submit();
                $("#accountManagerSubmit").val("0");
			}, 
			"关闭": function()
			{
				$("#accountManagerSubmit").val("0");
				$("#accountEdit").dialog("close"); 
			} 
		}
	});
	
	// 提交表单
	$("#accountForm").submit(function()
	{
		if ($("#accountManagerSubmit").val() == "0")
		{
			return false;
		}
		
		$("#accountManagerSubmit").val("0");
		
		var options = { 
			url:"../mar/editAccount.action", // 提交给哪个执行
			type:'POST', 
			success: function(){
				$("#accountEdit").dialog("close");
				// 新增完毕刷新form
				query();
				alert("操作成功");
			},
			error:function(){ 
				$("#accountEdit").dialog("close"); 
				alert("操作失败"); 
			}
		};
		
		$("#accountForm").ajaxSubmit(options);
        $("#accountManagerSubmit").val("0");
		return false; // 为了不刷新页面,返回false，反正都已经在后台执行完了，没事！
	});  
	
	// 新增按钮
	$( "#addAccount" ).button({
		icons: {
			primary: "ui-icon-plus"
			}
		}).click(function() {
		// 请求提交标志
		$("#accountManagerSubmit").val("1");
		$( "#accountEdit" ).dialog( "open" );
		var edit=$.ajax({url:"../mar/editAccountPage.action",async:false});
		$("#accountForm").html(edit.responseText);
		return false;
	});
	
	// 导出
	$( "#exportUuidAccount" ).button({
        icons: {
            primary: "ui-icon-export"
            }
        }).click(function() {
        // 请求提交标志
        $("#accountManagerSubmit").val("1");
        // 获取选中的记录ids
        var ids = "";
        var array = document.getElementsByName("accountId");
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
            $("#accountManagerSubmit").val("0");
            return false;
        }
        
        $( "#accountEdit" ).dialog( "open" );
        var edit=$.ajax({url:"../mar/exportAccountUuid.action?ids=" + ids,async:false});
        $("#accountForm").html(edit.responseText);
        return false;
    });
	
	 // 删除按钮
	$( "#deleteAccount" ).button({
		icons: {
			primary: "ui-icon-minus"
			}
		}).click(function() {
        
        if ($("#accountManagerSubmit").val() == "1")
        {
            return false;
        }
		$("#accountManagerSubmit").val("1");
		// 获取选中的记录ids
		var ids = "";
		var array = document.getElementsByName("accountId");
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
			$("#accountManagerSubmit").val("0");
			return false;
		}
		
		// ajax调用删除action
		var options = { 
			url:"../mar/deleteAccount.action?ids=" + ids , // 提交给哪个执行
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
		$("#accountConfirm").dialog({
			resizable: false,
            height:160,
            modal: true,
            buttons: {
                "确认": function() {
                	$( this ).dialog( "close" );
                	// 异步请求删除操作
                	$("#accountConfirm").ajaxSubmit(options);
                	$("#accountManagerSubmit").val("0");
                },
                "取消": function() {
                    $( this ).dialog( "close" );
                }
            }
		});
		return false;
	});
	 
	 // 执行按钮
	$( "#initialAccount" ).button({
		icons: {
			primary: "ui-icon-check"
			}
		}).click(function() {
        
            if ($("#accountManagerSubmit").val() == "1")
            {
                return false;
            }
            
			$("#accountManagerSubmit").val("1");
			// 获取选中的记录ids
			var ids = "";
			var array = document.getElementsByName("accountId");
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
				$("#accountManagerSubmit").val("0");
				return false;
			}
			
			// ajax调用删除action
			var options = { 
				url:"../mar/initialAccount.action?ids=" + ids , // 提交给哪个执行
				type:'POST', 
				success: function(){
					// 执行成功刷新form
					query();
				},
				error:function(){ 
					$("#accountManagerSubmit").val("0");
				}
			};
			
			$("#accountConfirm").ajaxSubmit(options);
			$("#accountManagerSubmit").val("0");
			return false;
	});
	 
	 // 更新卡组
	$( "#checkCardAccount" ).button({
		icons: {
			primary: "ui-icon-circle"
			}
		}).click(function() {
		
	        if ($("#accountManagerSubmit").val() == "1")
	        {
	            return false;
	        }
	        
			$("#accountManagerSubmit").val("1");
			// 获取选中的记录ids
			var ids = "";
			var array = document.getElementsByName("accountId");
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
				$("#accountManagerSubmit").val("0");
				return false;
			}
			
			// ajax调用删除action
			var options = { 
				url:"../mar/checkCardAccount.action?ids=" + ids , // 提交给哪个执行
				type:'POST', 
				success: function(){
					// 执行成功刷新form
					query();
				},
				error:function(){ 
					//alert("操作失败"); 
				}
			};
			
			$("#accountConfirm").ajaxSubmit(options);
			$("#accountManagerSubmit").val("0");
			return false;
	});
	
	// 抽卡
    $( "#gachaAccount" ).button({
        icons: {
            primary: "ui-icon-circle"
            }
        }).click(function() {
        
            if ($("#accountManagerSubmit").val() == "1")
            {
                return false;
            }
            
            $("#accountManagerSubmit").val("1");
            // 获取选中的记录ids
            var ids = "";
            var array = document.getElementsByName("accountId");
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
                $("#accountManagerSubmit").val("0");
                return false;
            }
            
            // ajax调用删除action
            var options = { 
                url:"../mar/gachaAccount.action?ids=" + ids , // 提交给哪个执行
                type:'POST', 
                success: function(){
                    // 执行成功刷新form
                    query();
                    //alert("全部完成");
                },
                error:function(){ 
                    //alert("操作失败"); 
                }
            };
            
            $("#accountConfirm").ajaxSubmit(options);
            $("#accountManagerSubmit").val("0");
            return false;
    });
    
    $( "#allCheckCardAccount" ).button({
        icons: {
            primary: "ui-icon-circle"
            }
        }).click(function() {
        
            if ($("#accountManagerSubmit").val() == "1")
            {
                return false;
            }
            
            $("#accountManagerSubmit").val("1");
            
            // ajax调用删除action
            var options = { 
                url:"../mar/allCheckCardAccount.action", // 提交给哪个执行
                type:'POST', 
                success: function(){
                    // 执行成功刷新form
                    query();
                },
                error:function(){ 
                    //alert("操作失败"); 
                }
            };
            
            $("#accountConfirm").ajaxSubmit(options);
            $("#accountManagerSubmit").val("0");
            return false;
    });
    
    $( "#allGachaAccount" ).button({
        icons: {
            primary: "ui-icon-circle"
            }
        }).click(function() {
        
            if ($("#accountManagerSubmit").val() == "1")
            {
                return false;
            }
            
            $("#accountManagerSubmit").val("1");
            
            // ajax调用删除action
            var options = { 
                url:"../mar/allGachaAccount.action", // 提交给哪个执行
                type:'POST', 
                success: function(){
                    // 执行成功刷新form
                    query();
                },
                error:function(){ 
                    //alert("操作失败"); 
                }
            };
            
            $("#accountConfirm").ajaxSubmit(options);
            $("#accountManagerSubmit").val("0");
            return false;
    });
    
    // 招待准备
    $( "#forInviteAccount" ).button({
        icons: {
            primary: "ui-icon-circle"
            }
        }).click(function() {
        
            if ($("#accountManagerSubmit").val() == "1")
            {
                return false;
            }
            
            $("#accountManagerSubmit").val("1");
            
            /*
            // 获取选中的记录ids
            var ids = "";
            var array = document.getElementsByName("accountId");
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
                $("#accountManagerSubmit").val("0");
                return false;
            }
            */
            // ajax调用删除action
            var options = { 
                url:"../mar/forInviteAccount.action",// + ids , // 提交给哪个执行
                type:'POST', 
                success: function(){
                    // 执行成功刷新form
                    $("#accountManagerSubmit").val("0");
                    query();
                },
                error:function(){ 
                    //alert("操作失败"); 
                    $("#accountManagerSubmit").val("0");
                }
            };
            
            $("#accountConfirm").ajaxSubmit(options);
            $("#accountManagerSubmit").val("0");
            return false;
    });
    
    $( "#uploadAccountButton" ).button().click(function() {
	   if ($("#accountUpload").val() == null || $("#accountUpload").val() == "")
        {
            alert("请选择文件");
            return;
        }
        
        var options = { 
            url:"../mar/uploadAccount.action", // 提交给哪个执行
            type:'POST', 
            success: function(uploadUrl){
                // 执行成功刷新form
                alert("上传成功");
                query();
            },
            error:function(){ 
                alert("上传失败"); 
            }
        };
        
        $("#accountUploadForm").ajaxSubmit(options);
        return false;
	});
	 // 刷新按钮
	$( "#queryAccount" ).button().click(function() {
			query();
		return false;
	});
	 
	// 重置按钮
	$( "#clearAccount" ).button().click(function() {
			$("#accountReq").clearForm();
		return false;
	});
	
	// 页面校验
	function accountFormCheck()
	{
		return true;
	}
});
</script>
