<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" isELIgnored="false" %>
<%@ include file="/WEB-INF/jsp/common/TGKSHeaderList.inc.jsp" %>
<script src="<%=basePath%>js/mar/marweb/local.js"></script>
<script src="<%=basePath%>js/mar/marweb/json_parse.js"></script>

<div id="localDiv">
    <table>
        <tr>
            <td>
                <a id="onlineLocalButton" class="button" href="#">开始</a>
            </td>
            <td>
                <a id="offlineLocalButton" class="button" href="#">结束</a>
            </td>
            <td>
                <a id="settingLocalButton" class="button" href="#">挂机设置</a>
            </td>
        </tr>
        <tr>
            <td colspan="3">
                <textarea id="message">{"uuid":"f57e8b2c-acbf-43a7-9d05-a3f0fc439a46","hash_token":"492N+ZrLTxcvj3h/gWTjdX/+RJE=","clver":"3","os":0,"carrier":3,"market":1,"lang":0,"device":"iPhone5S","token":""}</textarea>
            </td>
        </tr>
    </table>
</div>
<div>
    <iframe src="post.jsp" id="otherPage" style="display:none"></iframe>
</div>
<script type="text/javascript">

</script>