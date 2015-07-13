<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<input type="hidden" id="marzCardListSubmit" name="marzCardListSubmit" value="0" />
<div id="marzCardTableDiv" class="ui-widget">
    <table id="marzCardTable" class="ui-widget ui-widget-content">
        <thead>
            <tr class="ui-widget-header ">
                <th width="20"><input type="checkbox" id="allMarzCardId" name="allMarzCardId"  /></th>
                <th>卡密号码</th>
                <th>类型</th>
                <th>状态</th>
                <th>使用时间</th>
                <th>创建时间</th>
            </tr>
        </thead>
        <tbody>
			<s:iterator  value="list" var="evt">
				<tr <s:if test="#evt.status == 1">bgcolor="#ddd"</s:if>>
					<td width="20"><input type="checkbox" name="marzCardId" value="<s:property value='#evt.id'/>" /></td>
                    <td><s:property value="#evt.password"/></td>
                    <td>
                        <s:if test="#evt.type == 0">
                            日卡
                        </s:if>
                        <s:elseif test="#evt.type == 1">
                            周卡
                        </s:elseif>
                        <s:elseif test="#evt.type == 2">
                            月卡
                        </s:elseif>
                        <s:elseif test="#evt.type == 3">
                            季卡
                        </s:elseif>
                    </td>
                    <td>
                        <s:if test="#evt.status == 0">
                            未使用
                        </s:if>
                        <s:elseif test="#evt.status== 1">
                            已使用
                        </s:elseif>
                    </td>
                    <td><s:date name="#evt.usedTime" format="yyyy-MM-dd HH:mm:ss"/></td>
                    <td><s:date name="#evt.createTime" format="yyyy-MM-dd HH:mm:ss"/></td>
				</tr>
			</s:iterator>
		</tbody>
    </table>
</div>
<script type="text/javascript">
	$(function() {
		$('#marzCardTable').longtable({
			'perPage' : 10
		});

		// 点击记录首栏进入更新操作
		$(".marzCardUpdate").click(function() {
			$("#marzCardManagerSubmit").val("1");
			$("#marzCardEdit").dialog("open");
			var edit = $.ajax({
				url : "../mar/editMarzCardPage.action?id=" + this.id,
				async : false
			});
			$("#marzCardForm").html(edit.responseText);
		});

		// 全选
		$("#allMarzCardId").click(function() {
			var checkbox = $("#marzCardTable :checkbox");
			for ( var i = 1; i < checkbox.length; i++) {
				if (checkbox[i].hidden == "") {
					checkbox[i].checked = checkbox[0].checked;
				}
			}
		});
	});
</script>
