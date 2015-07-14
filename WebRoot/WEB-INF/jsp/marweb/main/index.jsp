<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeader.inc.jsp" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    
    <title>乖离性MA台服 账号托管系统——猫萌公社</title>
    
    <meta charset="utf-8">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta http-equiv="expires" content="0"> 
    <meta http-equiv="keywords" content="幻影帝国,猫盟公社,乖离性MA,账号托管,挂机">
    <link href="https://d2e1xl20cw0m26.cloudfront.net/pre/assets/favicon-5862cadf3d85c514f2068142cfb97eb3.ico" rel="icon" type="image/png">
    <link rel="stylesheet" type="text/css" href="../resources/mar/marweb/login/style.css" />
    <link rel="stylesheet" type="text/css" href="../resources/mar/marweb/cardlist/css/style.css" />
    <style type="text/css">
        .indexDiv
		{
		    width: 80%;
		}
    </style>    
  </head>
<body>

<div id="top_bg">
    <div class="top">
        <!--导航开始-->
        <div class="nav_z">
            <ul id="navul" class="cl">
                <%@ include file="/WEB-INF/jsp/marweb/main/toolbar.jsp" %>
                <!--可在此处直接添加导航-->
            </ul>
        </div><!--导航结束-->
    </div>  
</div>
<div align="center">
	<div style="height: 60px;"></div>
	
	<div id="noticeDiv" class="indexDiv">
	    _(:з」∠)_ 我是公告 但是不太想说啥...
	</div>
	
	<div id="mainDiv" class="indexDiv">
	    _(:з」∠)_ 我是主界面
	</div>
	
	<div id="logDiv" class="indexDiv">
	    _(:з」∠)_ 我是日志
	</div>
</div>

<script type="text/javascript">
$(document).ready(function(){
    main();
    log();
    
    function main()
    {
        var table=$.ajax({url:"../marweb/queryMarzAccountByTgksId.action", async:false});
        $("#mainDiv").html(table.responseText);
    }
    
    function log()
    {
        var table=$.ajax({url:"../marweb/queryMarzLogByTgksId.action", async:false});
        $("#logDiv").html(table.responseText);
    }
});

function nofind()
{
    var img=event.srcElement;
    img.src="../resources/mar/marweb/face/default.png";
    img.onerror=null;
}
</script>
</body>
</html>