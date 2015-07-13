<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<input type="hidden" name="krsmaCardEvt.id" id="krsmaCardId" value="${krsmaCardEvt.id }" />
<table>
    <tr>
        <td>ID：</td>
        <td><input type="text" name="krsmaCardEvt.cardId" id="krsmaCardCardId" value="${krsmaCardEvt.cardId }" /></td>
        <td>名字：</td>
        <td><input type="text" name="krsmaCardEvt.name" id="krsmaCardName" value="${krsmaCardEvt.name }" /></td>
    </tr>
    <tr>
        <td>进化后ID：</td>
        <td><input type="text" name="krsmaCardEvt.evoCardId" id="krsmaEvoCardCardId" value="${krsmaCardEvt.evoCardId }" /></td>
        <td>昵称：</td>
        <td><input type="text" name="krsmaCardEvt.nickName" id="krsmaCardNickName" value="${krsmaCardEvt.nickName }" /></td>
    </tr>
    <tr>
        <td>自动出售：</td>
        <td>
            <select name="krsmaCardEvt.sellFlag">
                <option value="0" <s:if test='krsmaCardEvt.sellFlag== 0"'>selected="selected"</s:if>>否</option>
                <option value="1" <s:if test='krsmaCardEvt.sellFlag=="1"'>selected="selected"</s:if>>是</option>
            </select>
        </td>
        <td>名声合成：</td>
        <td>
            <select name="krsmaCardEvt.fameFlag">
                <option value="0" <s:if test='krsmaCardEvt.fameFlag=="0"'>selected="selected"</s:if>>否</option>
                <option value="1" <s:if test='krsmaCardEvt.fameFlag=="1"'>selected="selected"</s:if>>是</option>
            </select>
        </td>
    </tr>
    <tr>
        <td>职业：</td>
        <td>
            <select name="krsmaCardEvt.type">
                <option value="1" <s:if test='krsmaCardEvt.type== 1"'>selected="selected"</s:if>>佣兵</option>
                <option value="2" <s:if test='krsmaCardEvt.type=="2"'>selected="selected"</s:if>>富豪</option>
                <option value="3" <s:if test='krsmaCardEvt.type=="3"'>selected="selected"</s:if>>盗贼</option>
                <option value="4" <s:if test='krsmaCardEvt.type=="4"'>selected="selected"</s:if>>歌姬</option>
                <option value="5" <s:if test='krsmaCardEvt.type=="5"'>selected="selected"</s:if>>妖精</option>
            </select>
        </td>
        <td>稀有度：</td>
        <td>
            <select name="krsmaCardEvt.rarity">
                <option value="MR" <s:if test='krsmaCardEvt.rarity=="MR"'>selected="selected"</s:if>>MR</option>
                <option value="UR" <s:if test='krsmaCardEvt.rarity=="UR"'>selected="selected"</s:if>>UR</option>
                <option value="SR" <s:if test='krsmaCardEvt.rarity=="SR"'>selected="selected"</s:if>>SR</option>
                <option value="R" <s:if test='krsmaCardEvt.rarity=="R"'>selected="selected"</s:if>>R</option>
                <option value="HN" <s:if test='krsmaCardEvt.rarity=="HN"'>selected="selected"</s:if>>HN</option>
                <option value="N" <s:if test='krsmaCardEvt.rarity=="N"'>selected="selected"</s:if>>N</option>
            </select>
        </td>
    </tr>
    <tr>
        <td>卡图URL：</td>
        <td><input type="text" name="krsmaCardEvt.imageUrl" value="${krsmaCardEvt.imageUrl }" /></td>
        <td>图标URL：</td>
        <td><input type="text" name="krsmaCardEvt.iconUrl" value="${krsmaCardEvt.iconUrl }" /></td>
    </tr>
</table>
<script type="text/javascript">
</script>