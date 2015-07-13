<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<div id="accountDiv">
	<table>
	    <tr>
	        <td>角色名</td>
	        <td>${marzAccountEvt.name }</td>
	        <td>状态</td>
	        <td>
	            <s:if test="marzAccountEvt.status == 0">离线</s:if>
	            <s:elseif test="marzAccountEvt.status == 1">在线</s:elseif>
	        </td>
	        <td>
	            <s:if test="marzAccountEvt.status == 0">
	                <a id="onlineButton" class="button" href="#">上线</a>
	            </s:if>
	            <s:elseif test="marzAccountEvt.status == 1">
	                <a id="offlineButton" class="button" href="#">下线</a>
	            </s:elseif>
	        </td>
	        <td>
	            <a id="refrushButton" class="button" href="#">刷新</a>
	        </td>
	    </tr>
	    <tr>
	        <td>角色等级</td>
	        <td>${marzAccountEvt.lv }</td>
	        <td>VIP等级</td>
	        <td>
		        <s:if test="marzAccountEvt.vip == 0">试用</s:if>
		        <s:if test="marzAccountEvt.vip == 1">普通</s:if>
		        <s:if test="marzAccountEvt.vip == 2">白金</s:if>
		        <s:if test="marzAccountEvt.vip == 3">钻石</s:if>
	        </td>
	        <td><!-- 角色ID --></td>
	        <td><!-- ${marzAccountEvt.userId } --></td>
	    </tr>
	    <tr>
	        <td>AP</td>
	        <td>${marzAccountEvt.ap }/${marzAccountEvt.apMax }</td>
	        <td>BP</td>
	        <td>${marzAccountEvt.bp }/${marzAccountEvt.bpMax }</td>
	        <td>卡片数量</td>
	        <td>${marzAccountEvt.cardNum }/${marzAccountEvt.cardMax }</td>
	    </tr>
	    <tr>
	        <td>金钱</td>
	        <td>${marzAccountEvt.gold }</td>
	        <td>友情点</td>
	        <td>${marzAccountEvt.fp }</td>
	        <td>水晶</td>
	        <td>${marzAccountEvt.coin }</td>
	    </tr>
	    <tr>
	        <td>创建时间</td>
	        <td><s:date name="marzAccountEvt.createTime" format="yyyy-MM-dd HH:mm:ss"/></td>
	        <td>到期时间</td>
	        <td><s:date name="marzAccountEvt.endTime" format="yyyy-MM-dd HH:mm:ss"/></td>
            <td>
                <s:set name="nowTime" value="new java.util.Date()"></s:set>
                <s:if test="marzAccountEvt.endTime.getTime() < #nowTime.getTime()">
                    <a style="color:red;">已经到期</a>
                </s:if>
            </td>
	        <td><a id="settingButton" class="button" href="#">挂机设置</a></td>
	    </tr>
	    <tr>
	        <td>售卡列表</td>
	        <td>${marzAccountEvt.sellCardIds }</td>
	        <td>名声列表</td>
	        <td>${marzAccountEvt.fameCardIds }</td>
	    </tr>
	    <tr>
	        <td>道具信息</td>
	        <td colspan="5">${marzAccountEvt.itemInfo }</td>
	    </tr>
	    <tr>
	        <td>战斗地图</td>
	        <td colspan="3">${marzAccountEvt.bossIds }</td>
	        <td colspan="2"><a style="color:red;">${marzAccountEvt.remark }</a></td>
	    </tr>
	</table>
</div>
<script type="text/javascript">
$(document).ready(function(){
    $("#onlineButton").click(function(){
        var options = { 
                url:"../marweb/accountOnline.action", // 提交给哪个执行
                type:'POST', 
                success: function(){
                    // 执行成功刷新form
                    var table=$.ajax({url:"../marweb/queryMarzAccountByTgksId.action", async:false});
                    $("#mainDiv").html(table.responseText);
                },
                error:function(){ 
                    alert("操作失败"); 
                }
            };
            
        $("#accountDiv").ajaxSubmit(options);
        return false;
    });
    
    $("#offlineButton").click(function(){
        var options = { 
                url:"../marweb/accountOffline.action", // 提交给哪个执行
                type:'POST', 
                success: function(){
                    // 执行成功刷新form
                    var table=$.ajax({url:"../marweb/queryMarzAccountByTgksId.action", async:false});
                    $("#mainDiv").html(table.responseText);
                },
                error:function(){ 
                    alert("操作失败"); 
                }
            };
            
        $("#accountDiv").ajaxSubmit(options);
        return false;
    });
    
    $("#settingButton").click(function(){
        var table=$.ajax({url:"../marweb/settingPage.action", async:false});
        $("#mainDiv").html(table.responseText);
    });
    
    $("#refrushButton").click(function(){
        var table=$.ajax({url:"../marweb/queryMarzAccountByTgksId.action", async:false});
        $("#mainDiv").html(table.responseText);
    });
});
</script>