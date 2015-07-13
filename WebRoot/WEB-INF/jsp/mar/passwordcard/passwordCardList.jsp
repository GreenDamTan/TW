<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<input type="hidden" id="passwordCardListSubmit" name="passwordCardListSubmit" value="0" />
<div id="passwordCardTableDiv" class="ui-widget">
    <table id="passwordCardTable" class="ui-widget ui-widget-content">
        <thead>
            <tr class="ui-widget-header ">
                <th width="20"><input type="checkbox" id="allPasswordCardId" name="allPasswordCardId"  /></th>
				<th>卡密号码</th>
				<th>状态</th>
				<th>招待ID</th>
				<th>使用时间</th>
				<th>创建时间</th>
				<th>操作</th>
            </tr>
        </thead>
        <tbody>
			<s:iterator  value="list" var="evt">
				<tr <s:if test="#evt.status == 1">bgcolor="#f00"</s:if><s:if test="#evt.status == 2">bgcolor="#ddd"</s:if>>
					<td width="20"><input type="checkbox" name="passwordCardId" value="<s:property value='#evt.id'/>" /></td>
					<td><s:property value="#evt.password"/></td>
					<td>
					    <s:if test="#evt.status == 0">
                            未使用
                        </s:if>
                        <s:elseif test="#evt.status== 1">
                            使用中
                        </s:elseif>
                        <s:elseif test="#evt.status== 2">
                            已使用
                        </s:elseif>
                    </td>
					<td><s:property value="#evt.inviteCode"/></td>
					<td><s:date name="#evt.usedTime" format="yyyy-MM-dd HH:mm:ss"/></td>
					<td><s:date name="#evt.createTime" format="yyyy-MM-dd HH:mm:ss"/></td>
					<td><button>重试</button></td>
				</tr>
			</s:iterator>
		</tbody>
    </table>
</div>
<script type="text/javascript">
	$(function() {
		$('#passwordCardTable').longtable({
			'perPage' : 10
		});

		// 点击记录首栏进入更新操作
		$(".passwordCardUpdate").click(function() {
			$("#passwordCardManagerSubmit").val("1");
			$("#passwordCardEdit").dialog("open");
			var edit = $.ajax({
				url : "../mar/editPasswordCardPage.action?id=" + this.id,
				async : false
			});
			$("#passwordCardForm").html(edit.responseText);
		});

		// 全选
		$("#allPasswordCardId").click(function() {
			var checkbox = $("#passwordCardTable :checkbox");
			for ( var i = 1; i < checkbox.length; i++) {
				if (checkbox[i].hidden == "") {
					checkbox[i].checked = checkbox[0].checked;
				}
			}
		});
	});
</script>
