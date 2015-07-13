<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<!-- 替换mar为命名空间，首字母小写，替换完成后删除注释 -->
<!-- 替换marzItem为新增的类名，首字母小写，替换完成后删除注释 -->
<!-- 替换MarzItem为新增的类名，首字母大写，替换完成后删除注释 -->
<input type="hidden" id="marzItemListSubmit" name="marzItemListSubmit" value="0" />
<div id="marzItemTableDiv" class="ui-widget">
    <table id="marzItemTable" class="ui-widget ui-widget-content">
        <thead>
            <tr class="ui-widget-header ">
                <th width="20"><input type="checkbox" id="allMarzItemId" name="allMarzItemId"  /></th>
                <th>物品ID</th>
                <th>类型</th>
                <th>状态</th>
                <th>名称</th>
                <th>参数</th>
            </tr>
        </thead>
        <tbody>
			<s:iterator  value="list" var="evt">
				<tr <s:if test="#evt.status == 0">style="background-color: #ddd"</s:if>>
					<td width="20"><input type="checkbox" name="marzItemId" value="<s:property value='#evt.id'/>" /></td>
					<td><b id="<s:property value='#evt.id'/>" class="marzItemUpdate"><s:property value="#evt.itemId"/></b></td>
                    <td>
                        <s:if test="#evt.type == 1">药水</s:if>
                        <s:elseif test="#evt.type == 2">钥匙</s:elseif>
                        <s:elseif test="#evt.type == 3">硬币</s:elseif>
                    </td>
                    <td>
                        <s:if test="#evt.status == 0">已失效</s:if>
                        <s:elseif test="#evt.status == 1">生效中</s:elseif>
                    </td>
                    <td><s:property value="#evt.name"/></td>
                    <td><s:property value="#evt.param"/></td>
				</tr>
			</s:iterator>
		</tbody>
    </table>
</div>
<script type="text/javascript">
	$(function() {
		// 点击记录首栏进入更新操作
		$(".marzItemUpdate").click(function() {
			$("#marzItemManagerSubmit").val("1");
			$("#marzItemEdit").dialog("open");
			var edit = $.ajax({
				url : "../mar/editMarzItemPage.action?id=" + this.id,
				async : false
			});
			$("#marzItemForm").html(edit.responseText);
		});

		// 全选
		$("#allMarzItemId").click(function() {
			var checkbox = $("#marzItemTable :checkbox");
			for ( var i = 1; i < checkbox.length; i++) {
				if (checkbox[i].hidden == "") {
					checkbox[i].checked = checkbox[0].checked;
				}
			}
		});
	});
</script>
