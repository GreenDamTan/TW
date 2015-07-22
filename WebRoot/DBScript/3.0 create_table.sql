--
-- 表的结构 `t_tgks_mar_passwordcard`
--
DROP TABLE IF EXISTS `t_tgks_mar_passwordcard`;
CREATE TABLE IF NOT EXISTS `t_tgks_mar_passwordcard` (
  `id` varchar(30) NOT NULL COMMENT '表唯一主键',
  `password` varchar(32) NOT NULL COMMENT '卡密号码',
  `status` varchar(3) NOT NULL COMMENT '状态（0 未使用；1 使用中；2 已使用）',
  `inviteCode` varchar(9) default NULL COMMENT '招待ID',
  `usedtime` timestamp NULL default NULL COMMENT '使用时间',
  `createtime` timestamp NOT NULL default CURRENT_TIMESTAMP COMMENT '创建时间'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='招待用卡密表';



--
-- 表的结构 `t_tgks_mar_krsmacard`
--
DROP TABLE IF EXISTS `t_tgks_mar_krsmacard`;
CREATE TABLE IF NOT EXISTS `t_tgks_mar_krsmacard` (
  `id` varchar(30) NOT NULL COMMENT '表唯一主键',
  `cardId` varchar(30) NOT NULL COMMENT '卡牌ID',
  `evoCardId` varchar(30) default NULL COMMENT '进化后卡牌ID',
  `sellFlag` varchar(3) NOT NULL default '0' COMMENT '自动卖出标志',
  `fameFlag` varchar(3) NOT NULL default '0' COMMENT '自动名声合成标志',
  `name` varchar(100) NOT NULL COMMENT '名字',
  `nickName` varchar(100) default NULL COMMENT '昵称',
  `type` varchar(3) NOT NULL COMMENT '职业（1 佣兵；2 富豪；3 盗贼；4 歌姬）',
  `rarity` varchar(10) NOT NULL COMMENT '稀有度',
  `imageUrl` varchar(500) default NULL COMMENT '卡图URL',
  `iconUrl` varchar(500) default NULL COMMENT '图标URL',
  PRIMARY KEY  (`id`),
  UNIQUE KEY `cardId` (`cardId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='乖离性MA卡牌信息表';



--
-- 表的结构 `t_tgks_mar_account`
--
DROP TABLE IF EXISTS `t_tgks_mar_account`;
CREATE TABLE IF NOT EXISTS `t_tgks_mar_account` (
  `id` varchar(30) NOT NULL COMMENT '表唯一主键',
  `uuid` varchar(50) NOT NULL COMMENT 'UUID（登录用）',
  `hashtoken` varchar(50) default NULL COMMENT 'HASHTOKEN',
  `gachaHash` varchar(50) default NULL COMMENT 'GACHAHASH',
  `accountKey` varchar(200) default NULL COMMENT '账号加密key',
  `status` varchar(3) NOT NULL COMMENT '状态（0 新建；1 执行中；2 已完成；3 已售出）',
  `inviteCode` varchar(9) default NULL COMMENT '招待ID',
  `title` varchar(500) default NULL COMMENT '标题',
  `urNumA` int(3) NOT NULL default '0' COMMENT 'UR数量 佣兵',
  `urNumB` int(3) NOT NULL default '0' COMMENT 'UR数量 富豪',
  `urNumC` int(3) NOT NULL default '0' COMMENT 'UR数量 盗贼',
  `urNumD` int(3) NOT NULL default '0' COMMENT 'UR数量 歌姬',
  `cardIds` varchar(500) default NULL COMMENT '卡片ID（只包含UR SR）',
  `crystal` int(10) NOT NULL default '0' COMMENT '水晶数量',
  `price` int(10) NOT NULL default '0' COMMENT '价格',
  `createtime` timestamp NOT NULL default CURRENT_TIMESTAMP COMMENT '创建时间',
  `remark` varchar(500) default NULL COMMENT '备注',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='乖离性MA账号信息表';


--
-- 表的结构 `t_tgks_mar_marzaccount`
--
DROP TABLE IF EXISTS `t_tgks_mar_marzaccount`;
CREATE TABLE IF NOT EXISTS `t_tgks_mar_marzaccount` (
  `id` varchar(30) NOT NULL COMMENT '表唯一主键',
  `tgksid` varchar(30) default NULL COMMENT 'tgks账号ID',
  `uuid` varchar(50) default NULL COMMENT 'UUID',
  `hashtoken` varchar(50) default NULL COMMENT 'hashtoken',
  `accountKey` varchar(200) default NULL COMMENT '账号KEY',
  `gachahash` varchar(50) default NULL COMMENT 'gachahash',
  `type` varchar(3) NOT NULL COMMENT '类型（0 IOS；1 Android）',
  `status` varchar(3) NOT NULL COMMENT '状态（0 离线；1 在线）',
  `sessionid` varchar(30) default NULL COMMENT 'SessionId',
  `vip` varchar(3) NOT NULL COMMENT 'VIP等级（0 试用；1 普通；2 白金；3 钻石）',
  `name` varchar(100) default NULL COMMENT '角色名',
  `userid` varchar(30) default NULL COMMENT 'USER ID',
  `lv` int(3) default '0' COMMENT '等级',
  `ap` int(3) default '0' COMMENT 'AP',
  `apmax` int(3) default '0' COMMENT 'AP上限',
  `bp` int(3) default '0' COMMENT 'BP',
  `bpmax` int(3) default '0' COMMENT 'BP上限',
  `cardnum` int(5) default '0' COMMENT '卡片数量',
  `cardmax` int(5) default '0' COMMENT '卡片数量上限',
  `gold` int(10) default '0' COMMENT '金钱',
  `fp` int(10) default '0' COMMENT '友情点',
  `coin` int(10) default '0' COMMENT '水晶数量',
  `bossIds` varchar(500) default NULL COMMENT '挂机地图',
  `sellCardIds` varchar(500) default NULL COMMENT '出售卡片ID',
  `fameCardIds` varchar(500) default NULL COMMENT '自动合成名声卡片ID',
  `itemInfo` varchar(500) default NULL COMMENT '物品信息',
  `endtime` timestamp NULL default NULL COMMENT '到期时间',
  `createtime` timestamp NOT NULL default CURRENT_TIMESTAMP COMMENT '创建时间',
  `remark` varchar(500) default NULL COMMENT '备注',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='挂机账号信息表';


--
-- 表的结构 `t_tgks_mar_marzcard`
--
DROP TABLE IF EXISTS `t_tgks_mar_marzcard`;
CREATE TABLE IF NOT EXISTS `t_tgks_mar_marzcard` (
  `id` varchar(30) NOT NULL COMMENT '表唯一主键',
  `password` varchar(32) NOT NULL COMMENT '卡密号码',
  `type` varchar(3) NOT NULL COMMENT '类型（0 日卡；1 周卡；2 月卡；3 季卡）',
  `status` varchar(3) NOT NULL COMMENT '状态（0 未使用；1 已使用）',
  `usedtime` timestamp NULL default NULL COMMENT '使用时间',
  `createtime` timestamp NOT NULL default CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='挂机点卡表';


--
-- 表的结构 `t_tgks_mar_marzlog`
--
DROP TABLE IF EXISTS `t_tgks_mar_marzlog`;
CREATE TABLE IF NOT EXISTS `t_tgks_mar_marzlog` (
  `id` varchar(30) NOT NULL COMMENT '表唯一主键',
  `tgksId` varchar(30) NOT NULL COMMENT 'TGKS账号的USERNAME',
  `type` varchar(3) NOT NULL COMMENT '类型（0 系统；1 战斗；2 探索；3 道具使用；4 合成；5 出售；9 充值）',
  `info` varchar(5000) default NULL COMMENT '状态（0 未使用；1 已使用）',
  `createtime` timestamp NOT NULL default CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='挂机日志表';


--
-- 表的结构 `t_tgks_mar_marzmap`
--
DROP TABLE IF EXISTS `t_tgks_mar_marzmap`;
CREATE TABLE IF NOT EXISTS `t_tgks_mar_marzmap` (
  `id` varchar(30) NOT NULL COMMENT '表唯一主键',
  `bossId` varchar(30) NOT NULL COMMENT '战斗地图的BOSSID',
  `bossName` varchar(100) default NULL COMMENT 'BOSS名称难度',
  `bpCost` int(5) NOT NULL default '0' COMMENT 'BP消耗',
  `target` int(3) NOT NULL default '0' COMMENT '攻击目标数量',
  `process` int(3) NOT NULL default '1' COMMENT '战斗敌人批次数量',
  `vip` varchar(3) NOT NULL default '0' COMMENT 'VIP等级（0 试用；1 普通；2 白金；3 钻石）',
  `openKeyType` varchar(10) NOT NULL default '1' COMMENT '开图钥匙类型（0 无；其他 钥匙ID）',
  `sort` varchar(5) NOT NULL default '0' COMMENT '展示顺序',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='挂机地图表';

--
-- 表的结构 `t_tgks_mar_marzsetting`
--
DROP TABLE IF EXISTS `t_tgks_mar_marzsetting`;
CREATE TABLE IF NOT EXISTS `t_tgks_mar_marzsetting` (
  `id` varchar(30) NOT NULL COMMENT '表唯一主键',
  `tgksId` varchar(30) NOT NULL COMMENT 'TGKS账号的USERNAME',
  `type` varchar(3) NOT NULL COMMENT '类型（0 开关；1 参数）',
  `name` varchar(100) NOT NULL COMMENT '参数名',
  `value` varchar(3000) default NULL COMMENT '参数值',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='挂机参数表';

--
-- 表的结构 `t_tgks_mar_marzitem`
--
DROP TABLE IF EXISTS `t_tgks_mar_marzitem`;
CREATE TABLE IF NOT EXISTS `t_tgks_mar_marzitem` (
  `id` varchar(30) NOT NULL COMMENT '表唯一主键',
  `itemId` varchar(30) NOT NULL COMMENT '物品ID',
  `name` varchar(30) NOT NULL COMMENT '名称',
  `type` varchar(3) NOT NULL COMMENT '类型（1 药水；2 钥匙；3 硬币）',
  `status` varchar(3) NOT NULL COMMENT '状态（0 已失效；1 生效中）',
  `param` varchar(100) default NULL COMMENT '参数（多个参数时用|分割）',
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='挂机物品表';