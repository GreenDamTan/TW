<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<input type="hidden" id="marzLogListSubmit" name="marzLogListSubmit" value="0" />
<div id="marzLogTableDiv" class="ui-widget">
    <table id="marzLogTable" class="ui-widget ui-widget-content">
        <thead>
            <tr class="ui-widget-header ">
                <th width="20"><input type="checkbox" id="allMarzLogId" name="allMarzLogId"  /></th>
                <th>ID</th>
                <th>TGKS账号</th>
				<th>操作时间</th>
                <th>类型</th>
                <th>详细信息</th>
            </tr>
        </thead>
        <tbody>
			<s:iterator  value="list" var="evt">
				<tr>
					<td width="20"><input type="checkbox" name="marzLogId" value="<s:property value='#evt.id'/>" /></td>
					<td><b id="<s:property value='#evt.id'/>" class="marzLogUpdate"><s:property value="#evt.id"/></b></td>
					<td><s:property value='#evt.tgksId'/></td>
					<td><s:date name="#evt.createTime" format="yyyy-MM-dd HH:mm:ss"/></td>
                    <td>
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
                        <s:elseif test="#evt.type == 9">
                            充值
                        </s:elseif>
                    </td>
                    <td><s:property value='#evt.info' escapeHtml="false" /></td>
				</tr>
			</s:iterator>
		</tbody>
    </table>
</div>
<script type="text/javascript">
	$(function() {
		$('#marzLogTable').longtable({
			'perPage' : 10
		});

		// 点击记录首栏进入更新操作
		$(".marzLogUpdate").click(function() {
			$("#marzLogManagerSubmit").val("1");
			$("#marzLogEdit").dialog("open");
			var edit = $.ajax({
				url : "../mar/editMarzLogPage.action?id=" + this.id,
				async : false
			});
			$("#marzLogForm").html(edit.responseText);
		});

		// 全选
		$("#allMarzLogId").click(function() {
			var checkbox = $("#marzLogTable :checkbox");
			for ( var i = 1; i < checkbox.length; i++) {
				if (checkbox[i].hidden == "") {
					checkbox[i].checked = checkbox[0].checked;
				}
			}
		});
	});
</script>
