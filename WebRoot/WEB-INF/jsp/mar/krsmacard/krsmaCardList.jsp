<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<input type="hidden" id="krsmaCardListSubmit" name="krsmaCardListSubmit" value="0" />
<div id="krsmaCardTableDiv" class="ui-widget">
    <table id="krsmaCardTable" class="ui-widget ui-widget-content">
        <thead>
            <tr class="ui-widget-header ">
                <th width="20"><input type="checkbox" id="allKrsmaCardId" name="allKrsmaCardId"  /></th>
                <th>ID</th>
                <th>名字</th>
                <th>图标</th>
                <th>自动出售</th>
                <th>名声合成</th>
                <th>职业</th>
                <th>稀有度</th>
                <th>昵称</th>
                <!-- <th>卡图</th> -->
            </tr>
        </thead>
        <tbody>
            <s:iterator  value="list" var="evt">
                <tr>
                    <td width="20"><input type="checkbox" name="krsmaCardId" value="<s:property value='#evt.id'/>" /></td>
                    <td><b id="<s:property value='#evt.id'/>" class="krsmaCardUpdate"><s:property value="#evt.cardId"/></b></td>
                    <td><s:property value="#evt.name"/></td>
                    <!-- <td><img width="40px" src="<s:property value="#evt.iconUrl"/>" /></td> -->
                    <td><img width="40px" src="../resources/mar/marweb/face/chr20_<s:property value="#evt.cardId"/>.png" /></td>
                    <td>
                        <s:if test="#evt.sellFlag == 0">否</s:if>
                        <s:elseif test="#evt.sellFlag == 1">是</s:elseif>
                    </td>
                    <td>
                        <s:if test="#evt.fameFlag == 0">否</s:if>
                        <s:elseif test="#evt.fameFlag == 1">是</s:elseif>
                    </td>
                    <td>
                        <s:if test="#evt.type == 1">佣兵</s:if>
                        <s:elseif test="#evt.type == 2">富豪</s:elseif>
                        <s:elseif test="#evt.type == 3">盗贼</s:elseif>
                        <s:elseif test="#evt.type == 4">歌姬</s:elseif>
                        <s:elseif test="#evt.type == 5">妖精</s:elseif>
                    </td>
                    <td><s:property value="#evt.rarity"/></td>
                    <td><s:property value="#evt.nickName"/></td>
                    <!-- <td><img width="80px" src="<s:property value="#evt.imageUrl"/>" /></td> -->
                </tr>
            </s:iterator>
        </tbody>
    </table>
</div>
<script type="text/javascript">
    $(function() {
        $('#krsmaCardTable').longtable({
            'perPage' : 10
        });

        // 点击记录首栏进入更新操作
        $(".krsmaCardUpdate").click(function() {
            $("#krsmaCardManagerSubmit").val("1");
            $("#krsmaCardEdit").dialog("open");
            var edit = $.ajax({
                url : "../mar/editKrsmaCardPage.action?id=" + this.id,
                async : false
            });
            $("#krsmaCardForm").html(edit.responseText);
        });

        // 全选
        $("#allKrsmaCardId").click(function() {
            var checkbox = $("#krsmaCardTable :checkbox");
            for ( var i = 1; i < checkbox.length; i++) {
                if (checkbox[i].hidden == "") {
                    checkbox[i].checked = checkbox[0].checked;
                }
            }
        });
    });
</script>
