<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<input type="hidden" name="marzMapEvt.id" id="marzMapId" value="${marzMapEvt.id }" />
<table>
    <tr>
        <td>bossId</td>
        <td><input type="text" name="marzMapEvt.bossId" id="marzMapbossId" value="${marzMapEvt.bossId }" /></td>
        <td>BP消耗</td>
        <td><input type="text" name="marzMapEvt.bpCost" id="marzMapbpCost" value="${marzMapEvt.bpCost }" /></td>
        <td>攻击目标数</td>
        <td><input type="text" name="marzMapEvt.target" id="marzMaptarget" value="${marzMapEvt.target }" /></td>
    </tr>
    <tr>
        <td>战斗回合数</td>
        <td><input type="text" name="marzMapEvt.process" id="marzMapprocess" value="${marzMapEvt.process }" /></td>
        <td>钥匙类型</td>
        <td><input type="text" name="marzMapEvt.openKeyType" id="marzMapopenKeyType" value="${marzMapEvt.openKeyType }" /></td>
        <td>排序</td>
        <td><input type="text" name="marzMapEvt.sort" id="marzMapsort" value="${marzMapEvt.sort }" /></td>
    </tr>
    <tr>
        <td>名称</td>
        <td colspan="3"><input type="text" name="marzMapEvt.bossName" id="marzMapbossName" value="${marzMapEvt.bossName }" /></td>
        <td>VIP可见等级</td>
        <td>
            <select name="marzMapEvt.vip">
                <option value="0" <s:if test="marzMapEvt.vip == 0">selected="selected"</s:if>>试用</option>
                <option value="1" <s:if test="marzMapEvt.vip == 1">selected="selected"</s:if>>普通</option>
                <option value="2" <s:if test="marzMapEvt.vip == 2">selected="selected"</s:if>>白金</option>
                <option value="3" <s:if test="marzMapEvt.vip == 3">selected="selected"</s:if>>钻石</option>
                <option value="4" <s:if test="marzMapEvt.vip == 4">selected="selected"</s:if>>未生效</option>
            </select>
        </td>
    </tr>
</table>
<script type="text/javascript">
</script>