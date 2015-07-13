<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<input type="hidden" name="marzAccountEvt.id" value="${marzAccountEvt.id }" />
<input type="hidden" name="marzAccountEvt.sessionId" value="${marzAccountEvt.sessionId }" />
<input type="hidden" name="marzAccountEvt.name" value="${marzAccountEvt.name }" />
<input type="hidden" name="marzAccountEvt.userId" value="${marzAccountEvt.userId }" />
<input type="hidden" name="marzAccountEvt.lv" value="${marzAccountEvt.lv }" />
<input type="hidden" name="marzAccountEvt.ap" value="${marzAccountEvt.ap }" />
<input type="hidden" name="marzAccountEvt.apMax" value="${marzAccountEvt.apMax }" />
<input type="hidden" name="marzAccountEvt.bp" value="${marzAccountEvt.bp }" />
<input type="hidden" name="marzAccountEvt.bpMax" value="${marzAccountEvt.bpMax }" />
<input type="hidden" name="marzAccountEvt.cardNum" value="${marzAccountEvt.cardNum }" />
<input type="hidden" name="marzAccountEvt.cardMax" value="${marzAccountEvt.cardMax }" />
<input type="hidden" name="marzAccountEvt.gold" value="${marzAccountEvt.gold }" />
<input type="hidden" name="marzAccountEvt.fp" value="${marzAccountEvt.fp }" />
<input type="hidden" name="marzAccountEvt.coin" value="${marzAccountEvt.coin }" />
<table>
	<tr>
		<td>TGKS账号ID</td>
		<td><input type="text" name="marzAccountEvt.tgksId" value="${marzAccountEvt.tgksId }" /></td>
		<td>账号类型</td>
		<td>
		    <select name="marzAccountEvt.type">
				<option value="0" <s:if test="marzAccountEvt.type == 0">selected="selected"</s:if>>IOS</option>
				<option value="1" <s:if test="marzAccountEvt.type == 1">selected="selected"</s:if>>Android</option>
		     </select>
	     </td>
	</tr>
    <tr>
        <td>UUID</td>
        <td><input type="text" name="marzAccountEvt.uuid" value="${marzAccountEvt.uuid }" /></td>
        <td>HashToken</td>
        <td><input type="text" name="marzAccountEvt.hashToken" value="${marzAccountEvt.hashToken }" /></td>
    </tr>
    <tr>
        <td>AccountKey</td>
        <td><input type="text" name="marzAccountEvt.accountKey" value="${marzAccountEvt.accountKey }" /></td>
        <td>GachaHash</td>
        <td><input type="text" name="marzAccountEvt.gachaHash" value="${marzAccountEvt.gachaHash }" /></td>
    </tr>
    <tr>
        <td>状态</td>
        <td>
            <select name="marzAccountEvt.status">
                <option value="0" <s:if test="marzAccountEvt.status == 0">selected="selected"</s:if>>离线</option>
                <option value="1" <s:if test="marzAccountEvt.status == 1">selected="selected"</s:if>>在线</option>
            </select>
        </td>
        <td>SessionId</td>
        <td>${marzAccountEvt.sessionId }</td>
    </tr>
    <tr>
        <td>角色名</td>
        <td>${marzAccountEvt.name }</td>
        <td>VIP等级</td>
        <td>
            <select name="marzAccountEvt.vip">
                <option value="0" <s:if test="marzAccountEvt.vip == 0">selected="selected"</s:if>>试用</option>
                <option value="1" <s:if test="marzAccountEvt.vip == 1">selected="selected"</s:if>>普通</option>
                <option value="2" <s:if test="marzAccountEvt.vip == 2">selected="selected"</s:if>>白金</option>
                <option value="3" <s:if test="marzAccountEvt.vip == 3">selected="selected"</s:if>>钻石</option>
            </select>
        </td>
    </tr>
    <tr>
        <td>角色ID</td>
        <td>${marzAccountEvt.userId }</td>
        <td>角色等级</td>
        <td>${marzAccountEvt.lv }</td>
    </tr>
    <tr>
        <td>AP</td>
        <td>${marzAccountEvt.ap }/${marzAccountEvt.apMax }</td>
        <td>BP</td>
        <td>${marzAccountEvt.bp }/${marzAccountEvt.bpMax }</td>
    </tr>
    <tr>
        <td>卡片数量</td>
        <td>${marzAccountEvt.cardNum }/${marzAccountEvt.cardMax }</td>
        <td>金钱</td>
        <td>${marzAccountEvt.gold }</td>
    </tr>
    <tr>
        <td>友情点</td>
        <td>${marzAccountEvt.fp }</td>
        <td>水晶</td>
        <td>${marzAccountEvt.coin }</td>
    </tr>
    <tr>
        <td>创建时间</td>
        <td><s:date name="marzAccountEvt.createTime" format="yyyy-MM-dd HH:mm:ss"/></td>
        <td>到期时间</td>
        <td><s:date name="marzAccountEvt.endTime" format="yyyy-MM-dd HH:mm:ss"/></td>
    </tr>
    <tr>
        <td>战斗地图</td>
        <td colspan="3"><textarea name="marzAccountEvt.bossIds" cols="56" rows="3">${marzAccountEvt.bossIds }</textarea></td>
    </tr>
    <tr>
        <td>自动卖卡</td>
        <td colspan="3"><textarea name="marzAccountEvt.sellCardIds" cols="56" rows="3">${marzAccountEvt.sellCardIds }</textarea></td>
    </tr>
    <tr>
        <td>名声合成</td>
        <td colspan="3"><textarea name="marzAccountEvt.fameCardIds" cols="56" rows="3">${marzAccountEvt.fameCardIds }</textarea></td>
    </tr>
    <tr>
        <td>物品信息</td>
        <td colspan="3"><textarea name="marzAccountEvt.itemInfo" cols="56" rows="3">${marzAccountEvt.itemInfo }</textarea></td>
    </tr>
    <tr>
        <td>备注</td>
        <td colspan="3"><textarea name="marzAccountEvt.remark" cols="56" rows="5">${marzAccountEvt.remark }</textarea></td>
    </tr>
</table>
<script type="text/javascript">
</script>