package com.moemao.tgks.mar.tool;

import com.moemao.tgks.common.tool.IDUtil;

public class MarUtil
{
	/**
     * MAR模块唯一标识生成
     * 根据传入的模块标识生成24位的ID
     * 
     * @return
     */
    public static String createUniqueID()
    {
        return IDUtil.createUniqueID(MarConstant.MODULE_TAG);
    }
    
    public static String dealJSON(String json, String param1, String param2)
    {
        /*
        Pattern p = Pattern.compile(param1 + ".*" + param2);
        Matcher m = p.matcher(json);
        return m.replaceAll(param2);
        */
        StringBuilder sb = new StringBuilder(json);
        if (json.contains(param1) && json.contains(param2))
        {
            sb.replace(json.indexOf(param1) - 1, json.indexOf(param2) + param2.length(), "@@@@");
            json = MarUtil.dealJSON(sb.toString(), param1, param2);
        }
        
        return json.replace("@@@@", "\"" + param2);
    }
    
    public static void main(String[] args)
    {
        String json = "{\"gacha_list\":[{\"gachaid\":10000010,\"gacha_name\":\"絆ガチャ\",\"buymsg\":\"絆ポイントを使って回せるガチャ！\",\"order_num\":50,\"groupid\":10000010,\"gacha_type\":1,\"arthur_type\":0,\"pay_type\":2,\"pay_typeid\":0,\"price\":0,\"card_num\":1,\"card_num_max\":1,\"play_count\":0,\"play_count_priority_price\":0,\"play_count_max\":0,\"is_stepup_price\":0,\"is_daily_first\":1,\"focus_cardid\":[10000010,0,0],\"box_now\":0,\"box_max\":0,\"is_enable_box_reset\":0},{\"gachaid\":10000011,\"gacha_name\":\"絆ガチャ\",\"buymsg\":\"絆ポイントを使って回せるガチャ！\",\"order_num\":50,\"groupid\":10000010,\"gacha_type\":1,\"arthur_type\":0,\"pay_type\":2,\"pay_typeid\":0,\"price\":200,\"card_num\":1,\"card_num_max\":10,\"play_count\":0,\"play_count_priority_price\":0,\"play_count_max\":0,\"is_stepup_price\":0,\"is_daily_first\":0,\"focus_cardid\":[10000010,0,0],\"box_now\":0,\"box_max\":0,\"is_enable_box_reset\":0},{\"gachaid\":20001010,\"gacha_name\":\"ﾌﾞｰｽ\"��11連ｶﾞﾁ\"ｷｬﾒﾛｯﾄの精\",\"buymsg\":\"<color yellow>\"以上</color>のカードが必ず手に入\"br>10\"おま\"枚でお得\"1連ガチャ\",\"order_num\":32,\"groupid\":20001010,\"gacha_type\":0,\"arthur_type\":0,\"pay_type\":3,\"pay_typeid\":0,\"price\":15,\"card_num\":11,\"card_num_max\":11,\"play_count\":0,\"play_count_priority_price\":0,\"play_count_max\":0,\"is_stepup_price\":1,\"is_daily_first\":0,\"focus_cardid\":[10000052,0,0],\"box_now\":0,\"box_max\":0,\"is_enable_box_reset\":0},{\"gachaid\":20001000,\"gacha_name\":\"ブースターガチャｷｬﾒﾛｯﾄの精\",\"buymsg\":\"<color yellow>\"以上</color>のカードが必ず手に入るガチャ\",\"order_num\":31,\"groupid\":20001000,\"gacha_type\":0,\"arthur_type\":0,\"pay_type\":3,\"pay_typeid\":0,\"price\":1,\"card_num\":1,\"card_num_max\":1,\"play_count\":0,\"play_count_priority_price\":0,\"play_count_max\":0,\"is_stepup_price\":1,\"is_daily_first\":0,\"focus_cardid\":[10000052,0,0],\"box_now\":0,\"box_max\":0,\"is_enable_box_reset\":0}],\"banners\":[{\"home_banner_type\":2,\"image_url\":\"http://www.cache.kairisei-ma.jp/top/2014040714/app_banners/150105_g_camelot_app.png\",\"open_url\":\"http://www.kairisei-ma.jp/information/2015/01/camelot0116.html\",\"infomation\":[\"Ｒ以上確定！\"]}]}";
        //String json2 = "{\"gacha_list\":[{\"gachaid\":10000010,\"gacha_name\":\"絆ガチャ\",\"buymsg\":\"絆ポイントを使って回せるガチャ！\",\"order_num\":50,\"groupid\":10000010,\"gacha_type\":1,\"arthur_type\":0,\"pay_type\":2,\"pay_typeid\":0,\"price\":0,\"card_num\":1,\"card_num_max\":1,\"play_count\":0,\"play_count_priority_price\":0,\"play_count_max\":0,\"is_stepup_price\":0,\"is_daily_first\":1,\"focus_cardid\":[10000010,0,0],\"box_now\":0,\"box_max\":0,\"is_enable_box_reset\":0},{\"gachaid\":10000011,\"gacha_name\":\"x\",\"buymsg\":\"x\",\"order_num\":50,\"groupid\":10000010,\"gacha_type\":1,\"arthur_type\":0,\"pay_type\":2,\"pay_typeid\":0,\"price\":200,\"card_num\":1,\"card_num_max\":10,\"play_count\":0,\"play_count_priority_price\":0,\"play_count_max\":0,\"is_stepup_price\":0,\"is_daily_first\":0,\"focus_cardid\":[10000010,0,0],\"box_now\":0,\"box_max\":0,\"is_enable_box_reset\":0},{\"gachaid\":20001010,\"gacha_name\":\"x\",\"buymsg\":\"x\",\"order_num\":32,\"groupid\":20001010,\"gacha_type\":0,\"arthur_type\":0,\"pay_type\":3,\"pay_typeid\":0,\"price\":15,\"card_num\":11,\"card_num_max\":11,\"play_count\":0,\"play_count_priority_price\":0,\"play_count_max\":0,\"is_stepup_price\":1,\"is_daily_first\":0,\"focus_cardid\":[10000052,0,0],\"box_now\":0,\"box_max\":0,\"is_enable_box_reset\":0},{\"gachaid\":20001000,\"gacha_name\":\"x\",\"buymsg\":\"x\",\"order_num\":31,\"groupid\":20001000,\"gacha_type\":0,\"arthur_type\":0,\"pay_type\":3,\"pay_typeid\":0,\"price\":1,\"card_num\":1,\"card_num_max\":1,\"play_count\":0,\"play_count_priority_price\":0,\"play_count_max\":0,\"is_stepup_price\":1,\"is_daily_first\":0,\"focus_cardid\":[10000052,0,0],\"box_now\":0,\"box_max\":0,\"is_enable_box_reset\":0}],\"banners\":[{\"home_banner_type\":2,\"image_url\":\"http://www.cache.kairisei-ma.jp/top/2014040714/app_banners/150105_g_camelot_app.png\",\"open_url\":\"http://www.kairisei-ma.jp/information/2015/01/camelot0116.html\",\"infomation\":[\"Ｒ以上確定！\"]}]}";
        //String json3 = "gacha_namexxxbuymsg~~~gacha_namexxxbuymsg~~~gacha_namexxxbuymsg~~~gacha_namexxxbuymsg";
        json = MarUtil.dealJSON(json, "gacha_name", "buymsg");
        System.out.println(json);
    }
}
