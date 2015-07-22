<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<div id="saveSettingDiv">
    <form id="saveSettingForm" action="../marweb/saveSetting.action">
        <table>
            <tr>
                <td width="8%">卖卡</td>
                <td width="12%">
                    <select id="marzSettingEvt.cardSell" name="marzSettingEvt.cardSell">
                         <option value="0">关</option>
                         <option value="1" <s:if test="marzSettingEvt.cardSell == 1">selected="selected"</s:if>>开</option>
                    </select>
                </td>
                <td width="8%">卖普通卡</td>
                <td width="12%">
                    <select id="marzSettingEvt.cardSellCommon" name="marzSettingEvt.cardSellCommon">
                         <option value="0">关</option>
                         <option value="1" <s:if test="marzSettingEvt.cardSellCommon == 1">selected="selected"</s:if>>开</option>
                    </select>
                </td>
                <td width="8%">喂狗粮</td>
                <td width="12%">
                    <select id="marzSettingEvt.cardFusion" name="marzSettingEvt.cardFusion">
                         <option value="0">关</option>
                         <option value="1" <s:if test="marzSettingEvt.cardFusion == 1">selected="selected"</s:if>>开</option>
                    </select>
                </td>
                <td width="8%">跑图</td>
                <td width="12%">
                    <select id="marzSettingEvt.explore" name="marzSettingEvt.explore">
                         <option value="0">关</option>
                         <option value="1" <s:if test="marzSettingEvt.explore == 1">selected="selected"</s:if>>开</option>
                    </select>
                </td>
                <td width="8%">PVP</td>
                <td width="12%">
                    <select id="marzSettingEvt.pvp" name="marzSettingEvt.pvp">
                         <option value="0">关</option>
                         <option value="1" <s:if test="marzSettingEvt.pvp == 1">selected="selected"</s:if>>开</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>卖卡列表</td>
                <td colspan="9">
                    <table>
                        <tr>
                            <s:iterator value="sellCardList" var="evt" status="idx">
                              <td width="20px">
                                <input type="checkbox" name="marzSettingEvt.sellCardIds" value="<s:property value='#evt.cardId'/>" <s:if test="#evt.check == 1">checked="checked"</s:if> />
                              </td>
                              <td>
                                <img width="35px" onerror="nofind();" src="../resources/mar/marweb/face/chr20_<s:property value="#evt.cardId"/>.png" title="<s:property value="#evt.name"/>" alt="<s:property value="#evt.name"/>" />
                              </td>
                              <s:if test="#idx.index > 0  && (#idx.index + 1)%10 == 0">
                        </tr>
                        <tr>
                              </s:if>
                            </s:iterator>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>名声合成</td>
                <td>
                    <select id="marzSettingEvt.fameFusion" name="marzSettingEvt.fameFusion">
                         <option value="0">关</option>
                         <option value="1" <s:if test="marzSettingEvt.fameFusion == 1">selected="selected"</s:if>>开</option>
                    </select>
                </td>
                <td>自动抽硬币</td>
                <td>
                    <select id="marzSettingEvt.coinGacha" name="marzSettingEvt.coinGacha">
                         <option value="0">关</option>
                         <option value="1" <s:if test="marzSettingEvt.coinGacha == 1">selected="selected"</s:if>>开</option>
                    </select>
                </td>
                <td>硬币类型</td>
                <td>
                    <select id="marzSettingEvt.coinGachaGachaId" name="marzSettingEvt.coinGachaGachaId">
                        <option value="">不选择</option>
                        <s:iterator value="allCoinGachaList" var="evt" status="idx">
                            <option value="<s:property value='#evt.param'/>" <s:if test="marzSettingEvt.coinGachaGachaId == #evt.param">selected="selected"</s:if>><s:property value='#evt.gachaName'/></option>
                        </s:iterator>
                    </select>
                </td>
                <td></td><td></td>
                <td></td><td></td>
            </tr>
            <tr>
                <td>名声列表</td>
                <td colspan="9">
                    <table>
                        <tr>
                            <s:iterator value="fameCardList" var="evt" status="idx">
                              <td width="20px">
                                <input type="checkbox" name="marzSettingEvt.fameCardIds" value="<s:property value='#evt.cardId'/>" <s:if test="#evt.check == 1">checked="checked"</s:if> />
                              </td>
                              <td>
                                <img width="35px" onerror="nofind();" src="../resources/mar/marweb/face/chr20_<s:property value="#evt.cardId"/>.png" title="<s:property value="#evt.name"/>" alt="<s:property value="#evt.name"/>" />
                              </td>
                              <s:if test="#idx.index > 0  && (#idx.index + 1)%10 == 0">
                        </tr>
                        <tr>
                              </s:if>
                            </s:iterator>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td>自动嗑药</td>
                <td>
                    <select id="marzSettingEvt.autoUseBPPotion" name="marzSettingEvt.autoUseBPPotion">
                         <option value="0">关</option>
                         <option value="1" <s:if test="marzSettingEvt.autoUseBPPotion == 1">selected="selected"</s:if>>开</option>
                    </select>
                </td>
                <td>BP不满多少时</td>
                <td>
                    <select id="marzSettingEvt.autoUseBPPotionBPLimit" name="marzSettingEvt.autoUseBPPotionBPLimit">
                         <option value="15" <s:if test="marzSettingEvt.autoUseBPPotionBPLimit == 15">selected="selected"</s:if>>15</option>
                         <option value="25" <s:if test="marzSettingEvt.autoUseBPPotionBPLimit == 25">selected="selected"</s:if>>25</option>
                         <option value="35" <s:if test="marzSettingEvt.autoUseBPPotionBPLimit == 35">selected="selected"</s:if>>35</option>
                         <option value="45" <s:if test="marzSettingEvt.autoUseBPPotionBPLimit == 45">selected="selected"</s:if>>45</option>
                    </select>
                </td>
                <td>药水类型</td>
                <td>
                    <select id="marzSettingEvt.autoUseBPPotionItemId" name="marzSettingEvt.autoUseBPPotionItemId">
                    	 <option value="">不选择</option>
                         <s:iterator value="allBPRecoverList" var="evt" status="idx">
                            <option value="<s:property value='#evt.itemId'/>" <s:if test="marzSettingEvt.autoUseBPPotionItemId == #evt.itemId">selected="selected"</s:if>><s:property value='#evt.name' /></option>
                        </s:iterator>
                    </select>
                </td>
                <td>自动买药</td>
                <td>
                    <select id="marzSettingEvt.autoBuyBPPotion" name="marzSettingEvt.autoBuyBPPotion">
                         <option value="0">关</option>
                         <option value="1" <s:if test="marzSettingEvt.autoBuyBPPotion == 1">selected="selected"</s:if>>开</option>
                    </select>
                </td>
                <td></td><td></td>
            </tr>
            <tr>
                <td>战斗</td>
                <td>
                    <select id="marzSettingEvt.battle" name="marzSettingEvt.battle">
                         <option value="0">关</option>
                         <option value="1" <s:if test="marzSettingEvt.battle == 1">selected="selected"</s:if>>开</option>
                    </select>
                </td>
                <td>优先练级</td>
                <td>
                    <select id="marzSettingEvt.battleLevelUp" name="marzSettingEvt.battleLevelUp">
                         <option value="0">关</option>
                         <option value="1" <s:if test="marzSettingEvt.battleLevelUp == 1">selected="selected"</s:if>>开</option>
                    </select>
                </td>
                <td>优先拿水晶</td>
                <td>
                    <select id="marzSettingEvt.battleGetStone" name="marzSettingEvt.battleGetStone">
                         <option value="0">关</option>
                         <option value="1" <s:if test="marzSettingEvt.battleGetStone == 1">selected="selected"</s:if>>开</option>
                    </select>
                </td>
                <td>不浪费BP</td>
                <td>
                    <select id="marzSettingEvt.battleNowaste" name="marzSettingEvt.battleNowaste">
                         <option value="0">关</option>
                         <option value="1" <s:if test="marzSettingEvt.battleNowaste == 1">selected="selected"</s:if>>开</option>
                    </select>
                </td>
                <td>不浪费BP地图</td>
                <td>
                    <select id="marzSettingEvt.battleNowasteBossId" name="marzSettingEvt.battleNowasteBossId">
                         <option value="0" <s:if test="marzSettingEvt.battleNowasteBossId == 0">selected="selected"</s:if>>每日限定素材</option>
                         <s:iterator value="noWasteMapList" var="evt" status="idx">
                            <s:if test="#evt.show == 1">
                                <option value="<s:property value='#evt.bossId'/>" <s:if test="marzSettingEvt.battleNowasteBossId == #evt.bossId">selected="selected"</s:if>><s:property value='#evt.bossName'/></option>
                            </s:if>
                         </s:iterator>
                    </select>
                </td>
            </tr>
            <tr>
                <td>战斗副本</td>
                <td colspan="9">
                    <table>
                        <tr>
		                    <s:iterator value="allMapList" var="evt" status="idx">
		                      <td width="20px">
		                        <s:if test="#evt.show == 1">
		                          <input type="checkbox" name="marzSettingEvt.bossIds" value="<s:property value='#evt.bossId'/>" <s:if test="#evt.check == 1">checked="checked"</s:if> />
		                        </s:if>
		                      </td>
		                      <td>
		                        <s:property value='#evt.bossName'/>
		                      </td>
                              <s:if test="#idx.index > 0  && (#idx.index + 1)%6 == 0">
                        </tr>
                        <tr>
                              </s:if>
		                    </s:iterator>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr>
                <td colspan="4"></td>
                <td colspan="4"><a id="message" style="color:red;">请在页面上配置挂机方案 点击保存按钮</a></td>
                <td><a id="returnAccountButton" class="button" href="#">返回</a></td>
                <td><a id="saveSettingButton" class="button" href="#">保存</a></td>
            </tr>
        </table>
    </form>
</div>
<script type="text/javascript">
$(document).ready(function(){
    $("#returnAccountButton").click(function(){
        var table=$.ajax({url:"../marweb/queryMarzAccountByTgksId.action", async:false});
        $("#mainDiv").html(table.responseText);
    });
    
    $("#saveSettingButton").click(function(){
        $("#saveSettingForm").submit();
    });
    
    $("#saveSettingForm").submit(function()
    {
        var options = { 
            url:"../marweb/saveSetting.action", // 提交给哪个执行
            data:$("#saveSettingForm").formSerialize(),
            type:'POST', 
            success: function(){
                document.getElementById("message").innerHTML= "挂机设置保存成功";
            },
            error:function(){ 
                document.getElementById("message").innerHTML= "挂机设置保存失败";
            }
        };
        
        $("#saveSettingForm").ajaxSubmit(options);
        
        return false;
    });  
});
</script>