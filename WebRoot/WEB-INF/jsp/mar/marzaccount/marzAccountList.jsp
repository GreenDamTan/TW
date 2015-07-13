<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<input type="hidden" id="marzAccountListSubmit" name="marzAccountListSubmit" value="0" />
<div id="marzAccountTableDiv" class="ui-widget">
    <table id="marzAccountTable" class="ui-widget ui-widget-content">
        <thead>
            <tr class="ui-widget-header ">
                <th width="20"><input type="checkbox" id="allMarzAccountId" name="allMarzAccountId"  /></th>
				<th>ID</th>
                <th>TGKSID</th>
                <th>类型</th>
                <th>VIP</th>
                <th>状态</th>
                <th>角色名</th>
                <th>等级</th>
                <th>AP</th>
                <th>BP</th>
                <th>卡片</th>
                <th>到期时间</th>
                <th>创建时间</th>
            </tr>
        </thead>
        <tbody>
			<s:iterator  value="list" var="evt">
				<tr <s:if test="#evt.status == 0">style="background-color: #ddd"</s:if>>
					<td width="20"><input type="checkbox" name="marzAccountId" value="<s:property value='#evt.id'/>" /></td>
					<td><b id="<s:property value='#evt.id'/>" class="marzAccountUpdate"><s:property value="#evt.id"/></b></td>
                    <td><s:property value='#evt.tgksId'/></td>
                    <td>
                        <s:if test="#evt.type == 0">IOS</s:if>
                        <s:elseif test="#evt.type == 1">Android</s:elseif>
                    </td>
                    <td>
                        <s:if test="#evt.vip == 0">试用</s:if>
			            <s:elseif test="#evt.vip == 1">普通</s:elseif>
			            <s:elseif test="#evt.vip == 2">白金</s:elseif>
			            <s:elseif test="#evt.vip == 3">钻石</s:elseif>
                    </td>
                    <td>
                        <s:if test="#evt.status == 0">离线</s:if>
                        <s:elseif test="#evt.status == 1">在线</s:elseif>
                    </td>
                    <td><s:property value='#evt.name'/></td>
                    <td><s:property value='#evt.lv'/></td>
                    <td><s:property value='#evt.ap'/>/<s:property value='#evt.apMax'/></td>
                    <td><s:property value='#evt.bp'/>/<s:property value='#evt.bpMax'/></td>
                    <td><s:property value='#evt.cardNum'/>/<s:property value='#evt.cardMax'/></td>
                    <td><s:date name="#evt.endTime" format="yyyy-MM-dd HH:mm:ss"/></td>
                    <td><s:date name="#evt.createTime" format="yyyy-MM-dd HH:mm:ss"/></td>
				</tr>
			</s:iterator>
		</tbody>
    </table>
</div>
<script type="text/javascript">
	$(function() {
		$('#marzAccountTable').longtable({
			'perPage' : 10
		});

		// 点击记录首栏进入更新操作
		$(".marzAccountUpdate").click(function() {
			$("#marzAccountManagerSubmit").val("1");
			$("#marzAccountEdit").dialog("open");
			var edit = $.ajax({
				url : "../mar/editMarzAccountPage.action?id=" + this.id,
				async : false
			});
			$("#marzAccountForm").html(edit.responseText);
		});

		// 全选
		$("#allMarzAccountId").click(function() {
			var checkbox = $("#marzAccountTable :checkbox");
			for ( var i = 1; i < checkbox.length; i++) {
				if (checkbox[i].hidden == "") {
					checkbox[i].checked = checkbox[0].checked;
				}
			}
		});
	});
</script>
