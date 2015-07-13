<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<input type="hidden" name="marzLogEvt.id" id="marzLogId" value="${marzLogEvt.id }" />
<table>
	<tr>
		<td><label for="name">marzLog</label></td>
		<td><input type="text" name="marzLogEvt.name" id="marzLogName" class="text ui-widget-content ui-corner-all" value="${marzLogEvt.name }" /></td>
	</tr>
</table>
<script type="text/javascript">
</script>