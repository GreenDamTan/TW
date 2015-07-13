package com.moemao.tgks.mar.marz.tool;

import java.util.ArrayList;
import java.util.List;

import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.mar.marz.entity.CardEvt;
import com.moemao.tgks.mar.marz.entity.ItemEvt;
import com.moemao.tgks.mar.marzitem.entity.MarzItemEvt;

public class MarzUtil
{
    public static String resultCodeStr(int resultCode)
    {
        return resultCode == MarzConstant.RES_CODE_SUCCESS_0 ? "成功" : "失败";
    }
    
    public static String listToString(List<String> list)
    {
        if (CommonUtil.isEmpty(list))
        {
            return "";
        }
        
        StringBuffer str = new StringBuffer();
        
        for (String s : list)
        {
            if (!CommonUtil.isEmpty(s.trim()))
            {
                str.append(s.trim()).append(",");
            }
        }
        
        return str.substring(0, str.length() - 1).toString();
    }
    
    public static List<String> stringToList(String str)
    {
        if (CommonUtil.isEmpty(str))
        {
            return new ArrayList<String>();
        }
        
        List<String> list = new ArrayList<String>();
        for (String s : str.split(","))
        {
            if (!CommonUtil.isEmpty(s.trim()))
            {
                list.add(s.trim());
            }
        }
        
        return list;
    }
    
    public static String getFaceImageUrl(String cardId)
    {
        return "<img width=\"25px\" onerror=\"nofind();\" src=\"../resources/mar/marweb/face/chr20_" + cardId + ".png\" title=\"" + cardId + "\" />";
    }
    
    public static String getFaceImageUrlByIdList(List<String> cardIdList)
    {
        StringBuffer sb = new StringBuffer();
        for (String cardId : cardIdList)
        {
            sb.append(getFaceImageUrl(cardId));
        }
        return sb.toString();
    }
    
    public static String getFaceImageUrl(CardEvt card)
    {
    	return "<img width=\"25px\" onerror=\"nofind();\" src=\"../resources/mar/marweb/face/chr20_" + card.getCardid() + ".png\" title=\"" + card.getCardid() + "\" />";
    }
    
    public static String getFaceImageUrlByList(List<CardEvt> cardList)
    {
    	StringBuffer sb = new StringBuffer();
    	for (CardEvt card : cardList)
    	{
    		sb.append(getFaceImageUrl(card));
    	}
    	return sb.toString();
    }
    
    public static String getItemInfo(List<ItemEvt> itemList, List<MarzItemEvt> marzItemList)
    {
        StringBuffer sb = new StringBuffer();
        for (ItemEvt item : itemList)
        {
            for (MarzItemEvt marzItem : marzItemList)
            {
                if (item.getItemId().equals(marzItem.getItemId()) && MarzConstant.MARZITEM_STATUS_1.equals(marzItem.getStatus()))
                {
                    sb.append("[" + marzItem.getName() + "：" + item.getNum() + "] ");
                }
                
            }
        }
        
        return sb.toString();
    }
}
