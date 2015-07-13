<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<input type="hidden" id="accountListSubmit" name="accountListSubmit" value="0" />
<div id="accountTableDiv" class="ui-widget">
    <table id="accountTable" class="ui-widget ui-widget-content">
        <thead>
            <tr class="ui-widget-header ">
                <th width="20"><input type="checkbox" id="allAccountId" name="allAccountId"  /></th>
                <th>ID</th>
				<th>招待ID</th>
                <th>UUID</th>
                <!-- <th>加密key</th> -->
                <th>状态</th>
                <!-- <th>创建时间</th>
                <th>标题</th> -->
                <th>水晶</th>
                <th>价格</th>
                <th>UR数量</th>
                <th>卡牌</th>
            </tr>
        </thead>
        <tbody>
			<s:iterator  value="list" var="evt">
				<tr bgcolor="<s:if test="#evt.status == 3">#aaa</s:if><s:elseif test="#evt.gachaHash == null">#ddd</s:elseif>">
					<td width="20"><s:if test="#evt.status != 3"><input type="checkbox" name="accountId" value="<s:property value='#evt.id'/>" /></s:if></td>
                    <td width="100px"><b id="<s:property value='#evt.id'/>" class="accountUpdate"><s:property value="#evt.id"/></b></td>
                    <td width="100px"><s:property value="#evt.inviteCode"/></td>
                    <td width="300px"><s:property value='#evt.uuid'/></td>
                    <!-- <td><s:property value='#evt.accountKey'/></td> -->
                    <td width="60px">
                        <s:if test="#evt.status == 0">新建</s:if>
                        <s:elseif test="#evt.status == 1">执行中</s:elseif>
                        <s:elseif test="#evt.status == 2">已完成</s:elseif>
                        <s:elseif test="#evt.status == 3">已出售</s:elseif>
                        <s:elseif test="#evt.status == 4">招待预备</s:elseif>
                        <s:elseif test="#evt.status == 5">招待完成</s:elseif>
                    </td>
                    <!-- <td width="150px"><s:date name="#evt.createTime" format="yyyy-MM-dd HH:mm:ss"/></td>
                    <td width="300px"><s:property value='#evt.title'/></td> -->
                    <td width="30px"><s:property value='#evt.crystal'/></td>
                    <td width="30px"><s:property value='#evt.price'/></td>
                    <td width="50px"><b><a style="color: red">佣<s:property value='#evt.urNumA'/></a> <a style="color: blue">壕<s:property value='#evt.urNumB'/></a> <a style="color: green">盗<s:property value='#evt.urNumC'/></a> <a style="color: black">姬<s:property value='#evt.urNumD'/></a></b></td>
                    <td>
                        <s:iterator  value="#evt.iconList" var="icon">
                            <img width="35px" src="<s:property value='#icon'/>"/>
                        </s:iterator>
                    </td>
				</tr>
			</s:iterator>
		</tbody>
    </table>
</div>
<script type="text/javascript">
	$(function() {
		$('#accountTable').longtable({
			'perPage' : 10
		});

		// 点击记录首栏进入更新操作
		$(".accountUpdate").click(function() {
			$("#accountManagerSubmit").val("1");
			$("#accountEdit").dialog("open");
			var edit = $.ajax({
				url : "../mar/editAccountPage.action?id=" + this.id,
				async : false
			});
			$("#accountForm").html(edit.responseText);
		});

		// 全选
		$("#allAccountId").click(function() {
			var checkbox = $("#accountTable :checkbox");
			for ( var i = 1; i < checkbox.length; i++) {
				if (checkbox[i].hidden == "") {
					checkbox[i].checked = checkbox[0].checked;
				}
			}
		});
	});
</script>
