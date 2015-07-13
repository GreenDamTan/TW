<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<input type="hidden" name="marzItemEvt.id" id="marzItemId" value="${marzItemEvt.id }" />
<table>
    <tr>
        <td>物品ID</td>
        <td><input type="text" name="marzItemEvt.itemId" id="marzItemItemId" value="${marzItemEvt.itemId }" /></td>
        <td>名称</td>
        <td><input type="text" name="marzItemEvt.name" id="marzItemName" value="${marzItemEvt.name }" /></td>
    </tr>
    <tr>
        <td>类型</td>
        <td>
            <select name="marzItemEvt.type">
                <option value="3" <s:if test="marzItemEvt.type == 3">selected="selected"</s:if>>硬币</option>
                <option value="2" <s:if test="marzItemEvt.type == 2">selected="selected"</s:if>>钥匙</option>
                <option value="1" <s:if test="marzItemEvt.type == 1">selected="selected"</s:if>>药水</option>
            </select>
        </td>
        <td>状态</td>
        <td>
            <select name="marzItemEvt.status">
                <option value="0" <s:if test="marzItemEvt.status == 0">selected="selected"</s:if>>已失效</option>
                <option value="1" <s:if test="marzItemEvt.status == 1">selected="selected"</s:if>>生效中</option>
            </select>
        </td>
    </tr>
    <tr>
        <td>参数</td>
        <td colspan="3"><textarea name="marzItemEvt.param" cols="80" rows="5">${marzItemEvt.param }</textarea></td>
    </tr>
</table>
<script type="text/javascript">
</script>