<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<input type="hidden" name="accountEvt.id" id="accountId" value="${accountEvt.id }" />
<table>
	<tr>
        <td>UUID：</td>
        <td><input type="text" name="accountEvt.uuid" value="${accountEvt.uuid }" /></td>
        <td>HashToken：</td>
        <td><input type="text" name="accountEvt.hashToken" value="${accountEvt.hashToken }" /></td>
	</tr>
    <tr>
        <td>Key：</td>
        <td><input type="text" name="accountEvt.accountKey" value="${accountEvt.accountKey }" /></td>
        <td>GachaHash：</td>
        <td><input type="text" name="accountEvt.gachaHash" value="${accountEvt.gachaHash }" /></td>
    </tr>
    <tr>
        <td>状态：</td>
        <td><input type="text" name="accountEvt.status" value="${accountEvt.status }" /></td>
        <td>招待ID：</td>
        <td><input type="text" name="accountEvt.inviteCode" value="${accountEvt.inviteCode }" /></td>
    </tr>
    <tr>
        <td>佣兵：</td>
        <td><input type="text" name="accountEvt.urNumA" value="${accountEvt.urNumA }" /></td>
        <td>富豪：</td>
        <td><input type="text" name="accountEvt.urNumB" value="${accountEvt.urNumB }" /></td>
    </tr>
    <tr>
        <td>盗贼：</td>
        <td><input type="text" name="accountEvt.urNumC" value="${accountEvt.urNumC }" /></td>
        <td>歌姬：</td>
        <td><input type="text" name="accountEvt.urNumD" value="${accountEvt.urNumD }" /></td>
    </tr>
    <tr>
        <td>水晶数量：</td>
        <td><input type="text" name="accountEvt.crystal" value="${accountEvt.crystal }" /></td>
        <td>价格：</td>
        <td><input type="text" name="accountEvt.price" value="${accountEvt.price }" /></td>
    </tr>
    <tr>
        <td>卡片ID：</td>
        <td>
            <textarea name="accountEvt.cardIds">${accountEvt.cardIds }</textarea>
        </td>
        <td>标题：</td>
        <td><input type="text" name="accountEvt.title" value="${accountEvt.title }" /></td>
    </tr>
    <tr>
        <td>备注：</td>
        <td colspan="3">
            <textarea name="accountEvt.remark">${accountEvt.remark }</textarea>
        </td>
    </tr>
</table>
<script type="text/javascript">
</script>