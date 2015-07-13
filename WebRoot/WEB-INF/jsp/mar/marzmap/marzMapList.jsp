<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<input type="hidden" id="marzMapListSubmit" name="marzMapListSubmit" value="0" />
<div id="marzMapTableDiv" class="ui-widget">
    <table id="marzMapTable" class="ui-widget ui-widget-content">
        <thead>
            <tr class="ui-widget-header ">
                <th width="20"><input type="checkbox" id="allMarzMapId" name="allMarzMapId"  /></th>
				<th>ID</th>
				<th>名称</th>
                <th>BP消耗</th>
                <th>攻击目标数</th>
				<th>VIP等级</th>
            </tr>
        </thead>
        <tbody>
			<s:iterator  value="list" var="evt">
				<tr <s:if test="#evt.vip == 4">bgcolor="#ddd"</s:if>>
					<td width="20"><input type="checkbox" name="marzMapId" value="<s:property value='#evt.id'/>" /></td>
					<td><b id="<s:property value='#evt.id'/>" class="marzMapUpdate"><s:property value="#evt.bossId"/></b></td>
                    <td><s:property value='#evt.bossName'/></td>
                    <td><s:property value='#evt.bpCost'/></td>
                    <td><s:property value='#evt.target'/></td>
                    <td>
                        <s:if test="#evt.vip == 0">
                            试用
                        </s:if>
                        <s:elseif test="#evt.vip== 1">
                            普通
                        </s:elseif>
                        <s:elseif test="#evt.vip == 2">
                            白金
                        </s:elseif>
                        <s:elseif test="#evt.vip == 3">
                            钻石
                        </s:elseif>
                        <s:elseif test="#evt.vip == 4">
                            未生效
                        </s:elseif>
                    </td>
				</tr>
			</s:iterator>
		</tbody>
    </table>
</div>
<script type="text/javascript">
	$(function() {
		$('#marzMapTable').longtable({
			'perPage' : 30
		});

		// 点击记录首栏进入更新操作
		$(".marzMapUpdate").click(function() {
			$("#marzMapManagerSubmit").val("1");
			$("#marzMapEdit").dialog("open");
			var edit = $.ajax({
				url : "../mar/editMarzMapPage.action?id=" + this.id,
				async : false
			});
			$("#marzMapForm").html(edit.responseText);
		});

		// 全选
		$("#allMarzMapId").click(function() {
			var checkbox = $("#marzMapTable :checkbox");
			for ( var i = 1; i < checkbox.length; i++) {
				if (checkbox[i].hidden == "") {
					checkbox[i].checked = checkbox[0].checked;
				}
			}
		});
	});
</script>
