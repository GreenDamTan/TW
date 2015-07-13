<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<div id="marzLogTableDiv" class="ui-widget">
    <table id="marzLogTable" class="ui-widget ui-widget-content">
        <thead>
            <tr class="ui-widget-header ">
                <th width="150px">操作时间</th>
                <th width="60px">类型</th>
                <th>详细信息</th>
                <th width="60px"><a id="queryLogButton" class="button" href="#">刷新</a></th>
            </tr>
        </thead>
        <tbody>
            <s:iterator  value="list" var="evt">
                <tr>
                    <td width="150px"><s:date name="#evt.createTime" format="yyyy-MM-dd HH:mm:ss"/></td>
                    <td width="60px">
                        <s:if test="#evt.type == 0">
                            系统
                        </s:if>
                        <s:elseif test="#evt.type == 1">
                            战斗
                        </s:elseif>
                        <s:elseif test="#evt.type == 2">
                            探索
                        </s:elseif>
                        <s:elseif test="#evt.type == 3">
                            道具
                        </s:elseif>
                        <s:elseif test="#evt.type == 4">
                            合成
                        </s:elseif>
                        <s:elseif test="#evt.type == 5">
                            出售
                        </s:elseif>
                        <s:elseif test="#evt.type == 6">
                            PVP
                        </s:elseif>
                        <s:elseif test="#evt.type == 7">
                            抽卡
                        </s:elseif>
                        <s:elseif test="#evt.type == 9">
                            充值
                        </s:elseif>
                    </td>
                    <td colspan="2"><s:property value='#evt.info' escapeHtml="false" /></td>
                </tr>
            </s:iterator>
        </tbody>
    </table>
</div>
<script type="text/javascript">
$(function() {
    $("#queryLogButton").click(function(){
        var table=$.ajax({url:"../marweb/queryMarzLogByTgksId.action", async:false});
        $("#logDiv").html(table.responseText);
    });
    
    $('#marzLogTable').longtable({
        'perPage' : 10
    });
});
</script>
