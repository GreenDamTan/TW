<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<input type="hidden" name="marzCardEvt.id" id="marzCardId" value="${marzCardEvt.id }" />
<table>
	<tr>
		<td><label for="name">marzCard</label></td>
		<td><input type="text" name="marzCardEvt.name" id="marzCardName" class="text ui-widget-content ui-corner-all" value="${marzCardEvt.name }" /></td>
	</tr>
</table>
<script type="text/javascript">
</script>