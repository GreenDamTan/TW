package com.moemao.tgks.mar.marz.tool;

import java.util.List;

import com.moemao.tgks.common.core.spring.ContextUtil;
import com.moemao.tgks.common.tool.CommonUtil;
import com.moemao.tgks.mar.marzmap.entity.MarzMapEvt;
import com.moemao.tgks.mar.marzmap.entity.MarzMapReq;
import com.moemao.tgks.mar.marzmap.service.MarzMapService;


public class MarzDataPool
{
    private static MarzMapService marzMapService;
    
    private MarzDataPool()
    {
        marzMapService = (MarzMapService) ContextUtil.getBean("mar_marzMapService");
    }
    
    private static MarzDataPool instance;
    
    public static MarzDataPool getInstance()
    {
        if (null == instance)
        {
            instance = new MarzDataPool();
        }
        
        if (null == marzMapService)
        {
            marzMapService = (MarzMapService) ContextUtil.getBean("mar_marzMapService");
        }
        
        return instance;
    }
    
    /**
     * 
     * @Title: getMarzMapAllList
     * @Description: 获取当前所有副本
     * @return
     * @return List<MarzMapEvt> 返回类型
     * @throws
     */
    public synchronized List<MarzMapEvt> getMarzMapAllList()
    {
        MarzMapReq mapReq = new MarzMapReq();
        return marzMapService.queryMarzMap(mapReq);
    }
    
    public synchronized MarzMapEvt getMarzMapByBossId(String bossId)
    {
        MarzMapReq mapReq = new MarzMapReq();
        mapReq.setBossId(bossId);
        List<MarzMapEvt> list = marzMapService.queryMarzMap(mapReq);
        if (CommonUtil.isEmpty(list))
        {
            return null;
        }
        return list.get(0);
    }
    
    /**
     * 
     * @Title: addMarzMap
     * @Description: 添加新副本
     * @param marzMapEvt
     * @return void 返回类型
     * @throws
     */
    public synchronized void addMarzMap(MarzMapEvt marzMapEvt)
    {
        MarzMapReq mapReq = new MarzMapReq();
        mapReq.setBossId(marzMapEvt.getBossId().substring(0, marzMapEvt.getBossId().length() - 1));
        if (CommonUtil.isEmpty(marzMapService.queryMarzMap(mapReq)))
        {
            marzMapService.addMarzMap(marzMapEvt);
            System.out.println("新增地图：" + marzMapEvt.getBossName() + " " + marzMapEvt.getBossId());
        }
    }
}
