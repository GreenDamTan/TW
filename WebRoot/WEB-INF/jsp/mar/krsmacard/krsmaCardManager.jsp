<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderManager.inc.jsp" %>
<style type="text/css">
#krsmaCardReq{border:0px solid;}
#krsmaCardReq td{border:0px solid;}
#krsmaCardReq input{width:120px;}
#krsmaCardReq select{width:120px;}
</style>
<input type="hidden" id="krsmaCardManagerSubmit" name="krsmaCardManagerSubmit" value="0" />
<div class="ui-widget">
    <form id="krsmaCardReq" action="../mar/queryKrsmaCard.action" method="post">
        <table>
            <tr>
                <td><label>ID: </label></td><td><input type="text" name="krsmaCardReq.cardId" /></td>
                <td><label>名称: </label></td><td><input type="text" name="krsmaCardReq.name" /></td>
                <td><label>职业: </label></td>
                <td>
                    <select name="krsmaCardReq.type">
                        <option value="">全部</option>
                        <option value="1">佣兵</option>
		                <option value="2">富豪</option>
		                <option value="3">盗贼</option>
		                <option value="4">歌姬</option>
		                <option value="5">妖精</option>
                    </select>
                </td>
                <td><label>稀有度: </label></td>
                <td>
                    <select name="krsmaCardReq.rarity">
                        <option value="">全部</option>
                        <option value="MR">MR</option>
                        <option value="UR">UR</option>
                        <option value="SR">SR</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td><label>自动出售: </label></td>
                <td>
                    <select name="krsmaCardReq.sellFlag">
                        <option value="">全部</option>
                        <option value="0">否</option>
                        <option value="1">是</option>
                    </select>
                </td>
                <td><label>名声合成: </label></td>
                <td>
                    <select name="krsmaCardReq.fameFlag">
                        <option value="">全部</option>
                        <option value="0">否</option>
                        <option value="1">是</option>
                    </select>
                </td>
                <td></td><td></td>
                <td>
                </td>
                <td>
                    <button id="clearKrsmaCard">重置</button>
                    <button id="queryKrsmaCard">查询</button>
                </td>
            </tr>
        </table>
    </form>
</div>

<button id="addKrsmaCard">新增</button>
<button id="deleteKrsmaCard">删除</button>
<button id="onKrsmaCard">启用</button>
<button id="offKrsmaCard">禁用</button>

<div id="krsmaCardDiv"></div>

<div id="krsmaCardEdit" title="KrsmaCard Edit">
    <form id="krsmaCardForm" action="../mar/editKrsmaCard.action" method="post"></form>
</div>

<div id="krsmaCardConfirm" title="操作确认" hidden="hidden">
    <p><span class="ui-icon ui-icon-alert" style="float: left; margin: 0 7px 20px 0;"></span>记录将被删除且不可恢复，是否确认？</p>
</div>
<script type="text/javascript">
$(document).ready(function(){
    function query()
    {
        var table=$.ajax({url:"../mar/queryKrsmaCard.action", data:$("#krsmaCardReq").formSerialize(), async:false});
        $("#krsmaCardDiv").html(table.responseText);
    }
    
    // 新增/更新窗口
    $( "#krsmaCardEdit" ).dialog({
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
                if (!krsmaCardFormCheck())
                {
                    return false;
                }
                var form = $("#krsmaCardForm");
                form.submit();
            }, 
            "关闭": function()
            {
                $("#krsmaCardManagerSubmit").val("0");
                $("#krsmaCardEdit").dialog("close"); 
            } 
        }
    });
    
    // 提交表单
    $("#krsmaCardForm").submit(function()
    {
        if ($("#krsmaCardManagerSubmit").val() == "0")
        {
            return false;
        }
        
        $("#krsmaCardManagerSubmit").val("0");
        
        var options = { 
            url:"../mar/editKrsmaCard.action", // 提交给哪个执行
            type:'POST', 
            success: function(){
                $("#krsmaCardEdit").dialog("close");
                // 新增完毕刷新form
                query();
                alert("操作成功");
            },
            error:function(){ 
                $("#krsmaCardEdit").dialog("close"); 
                alert("操作失败"); 
            }
        };
        
        $("#krsmaCardForm").ajaxSubmit(options);
        
        return false; // 为了不刷新页面,返回false，反正都已经在后台执行完了，没事！
    });  
    
    // 新增按钮
    $( "#addKrsmaCard" ).button({
        icons: {
            primary: "ui-icon-plus"
            }
        }).click(function() {
        // 请求提交标志
        $("#krsmaCardManagerSubmit").val("1");
        $( "#krsmaCardEdit" ).dialog( "open" );
        var edit=$.ajax({url:"../mar/editKrsmaCardPage.action",async:false});
        $("#krsmaCardForm").html(edit.responseText);
        return false;
    });
    
     // 删除按钮
    $( "#deleteKrsmaCard" ).button({
        icons: {
            primary: "ui-icon-minus"
            }
        }).click(function() {
        $("#krsmaCardManagerSubmit").val("1");
        // 获取选中的记录ids
        var ids = "";
        var array = document.getElementsByName("krsmaCardId");
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
            $("#krsmaCardManagerSubmit").val("0");
            return false;
        }
        
        // ajax调用删除action
        var options = { 
            url:"../mar/deleteKrsmaCard.action?ids=" + ids , // 提交给哪个执行
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
        $("#krsmaCardConfirm").dialog({
            resizable: false,
            height:160,
            modal: true,
            buttons: {
                "确认": function() {
                    $( this ).dialog( "close" );
                    // 异步请求删除操作
                    $("#krsmaCardConfirm").ajaxSubmit(options);
                },
                "取消": function() {
                    $( this ).dialog( "close" );
                }
            }
        });
        return false;
    });
     
     // 启用按钮
    $( "#onKrsmaCard" ).button({
        icons: {
            primary: "ui-icon-check"
            }
        }).click(function() {
            $("#krsmaCardManagerSubmit").val("1");
            // 获取选中的记录ids
            var ids = "";
            var array = document.getElementsByName("krsmaCardId");
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
                $("#krsmaCardManagerSubmit").val("0");
                return false;
            }
            
            // ajax调用删除action
            var options = { 
                url:"../mar/changeStatusKrsmaCard.action?status=1&ids=" + ids , // 提交给哪个执行
                type:'POST', 
                success: function(){
                    // 执行成功刷新form
                    query();
                },
                error:function(){ 
                    alert("操作失败"); 
                }
            };
            
            $("#krsmaCardConfirm").ajaxSubmit(options);
            $("#krsmaCardManagerSubmit").val("0");
            return false;
    });
     
     // 停用按钮
    $( "#offKrsmaCard" ).button({
        icons: {
            primary: "ui-icon-close"
            }
        }).click(function() {
            $("#krsmaCardManagerSubmit").val("1");
            // 获取选中的记录ids
            var ids = "";
            var array = document.getElementsByName("krsmaCardId");
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
                $("#krsmaCardManagerSubmit").val("0");
                return false;
            }
            
            // ajax调用删除action
            var options = { 
                url:"../mar/changeStatusKrsmaCard.action?status=0&ids=" + ids , // 提交给哪个执行
                type:'POST', 
                success: function(){
                    // 执行成功刷新form
                    query();
                },
                error:function(){ 
                    alert("操作失败"); 
                }
            };
            
            $("#krsmaCardConfirm").ajaxSubmit(options);
            $("#krsmaCardManagerSubmit").val("0");
            return false;
    });
    
     // 刷新按钮
    $( "#queryKrsmaCard" ).button().click(function() {
            query();
        return false;
    });
     
    // 重置按钮
    $( "#clearKrsmaCard" ).button().click(function() {
            $("#krsmaCardReq").clearForm();
        return false;
    });
    
    // 页面校验
    function krsmaCardFormCheck()
    {
        return true;
    }
});
</script>
