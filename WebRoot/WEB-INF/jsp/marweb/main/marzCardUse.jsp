<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<div id="marzCardUseDiv">
    <table>
        <tr>
            <td><label>点卡号码: </label></td><td><input type="text" id="marzCardUsePassword" /></td>
            <td><a id="message" style="color:red;">请在框中填入点卡密码 点击充值按钮</a></td>
            <td>
                <a id="marzCardUseButton" class="button" href="#">充值</a>
            </td>
            <td>
                <a id="returnAccountButton" class="button" href="#">返回</a>
            </td>
        </tr>
    </table>
</div>
<script type="text/javascript">
$(document).ready(function(){
    $( "#marzCardUseButton" ).click(function() {
        if ($("#marzCardUsePassword").val() == "")
        {
            document.getElementById("message").innerHTML= "请填入点卡号码";
            return false;
        }
        
        var options = { 
            url:"../marweb/marzCardUse.action?password=" + $("#marzCardUsePassword").val() , // 提交给哪个执行
            type:'POST', 
            success: function(result){
                dealResult(result);
                 var table2=$.ajax({url:"../marweb/queryMarzLogByTgksIdOnlyMarzCard.action", async:false});
                $("#logDiv").html(table2.responseText);
            },
            error:function(){ 
                document.getElementById("message").innerHTML= "充值失败";
            }
        };
        
        $("#marzCardUseDiv").ajaxSubmit(options);
        return false;
    });
    
    $("#returnAccountButton").click(function(){
        var table=$.ajax({url:"../marweb/queryMarzAccountByTgksId.action", async:false});
        $("#mainDiv").html(table.responseText);
        var table2=$.ajax({url:"../marweb/queryMarzLogByTgksId.action", async:false});
        $("#logDiv").html(table2.responseText);
    });
    
    function dealResult(result)
    {
        if ("success!" == result)
        {
            document.getElementById("message").innerHTML= "充值成功";
        }
        else
        {
            document.getElementById("message").innerHTML= "点卡错误或已使用";
            return false;
        }
    }
});
</script>