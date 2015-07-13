<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<div id="marzAccountBinding">
    <table>
        <tr>
            <td><label>代码: </label></td><td><input type="text" id="bandingAccountId" /></td>
            <td>
                <a id="bindAccount" class="button" href="#">绑定</a>
            </td>
        </tr>
    </table>
</div>
<script type="text/javascript">
$(document).ready(function(){
    $( "#bindAccount" ).click(function() {
            if ($("#bandingAccountId").val() == "")
            {
                alert("请填入绑定的账号ID");
                return false;
            }
            var options = { 
                url:"../marweb/marzAccountBinding.action?accountId=" + $("#bandingAccountId").val() , // 提交给哪个执行
                type:'POST', 
                success: function(result){
                    dealResult(result);
                    main();
                },
                error:function(){ 
                    alert("绑定失败"); 
                }
            };
            
            $("#marzAccountBinding").ajaxSubmit(options);
            return false;
    });
    
    function dealResult(result)
    {
        if ("success!" == result)
        {
            alert("绑定成功");
        }
        else
        {
            alert("绑定失败");
        }
    }
});
</script>