<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderManager.inc.jsp" %>
<div id="marzManagerDiv">
    <button id="threadPoolStart">启动</button>
    <button id="threadPoolShutdown">关闭</button>
    <!-- <button id="threadPoolStatus">刷新</button> -->
</div>
<div id="marzStatusDiv">
    <s:iterator  value="marzThreadList" var="evt">
        <s:property value='#evt'/><br />
    </s:iterator>
</div>
<div id="marzSystemLogDiv">

</div>

<script type="text/javascript">
$(document).ready(function(){
    // 启动线程池
    $("#threadPoolStart").button({
        icons: {
            primary: "ui-icon-plus"
        }
    }).click(function(){
        $.ajax({
            url: "../mar/marzThreadPoolStart.action",
            type: "post",
            async: true,
            timeout: "10000",
            error: function(){
                alert("启动失败");
            },
            success: function(data){
                alert("启动成功");
            }
        });
    });
    
    // 关闭线程池
    $("#threadPoolShutdown").button({
        icons: {
            primary: "ui-icon-minus"
        }
    }).click(function(){
        $.ajax({
            url: "../mar/marzThreadPoolShutdown.action",
            type: "post",
            async: true,
            timeout: "10000",
            error: function(){
                alert("关闭失败");
            },
            success: function(data){
                alert("关闭成功");
            }
        });
    });
});
</script>