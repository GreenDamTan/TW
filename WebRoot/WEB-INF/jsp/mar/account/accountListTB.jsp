<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<div id="accountTableDiv" class="ui-widget">
    <table id="accountTable" class="ui-widget ui-widget-content">
        <thead>
            <tr class="ui-widget-header ">
				<th>ID</th>
                <th>标题</th>
                <th>价格</th>
                <!-- <th>水晶</th> -->
                <th>UR数量</th>
                <th>卡牌</th>
            </tr>
        </thead>
        <tbody>
			<s:iterator  value="list" var="evt">
				<tr <s:if test="#evt.status == 3">bgcolor="#ddd"</s:if>>
					<td width="100px"><b id="<s:property value='#evt.id'/>" class="accountUpdate"><s:property value="#evt.inviteCode"/></b></td>
                    <td width="300px"><s:property value='#evt.title'/></td>
                    <td width="30px"><s:property value='#evt.price'/></td>
                    <!-- <td width="30px"><s:property value='#evt.crystal'/></td> -->
                    <td width="100px"><b><a style="color: red">佣<s:property value='#evt.urNumA'/></a> <a style="color: blue">壕<s:property value='#evt.urNumB'/></a> <a style="color: green">盗<s:property value='#evt.urNumC'/></a> <a style="color: black">姬<s:property value='#evt.urNumD'/></a></b></td>
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
		
	});
</script>
