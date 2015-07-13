$(function(){
    $("#onlineLocalButton").click(function(){
    	var iframeWin = document.getElementById("otherPage").contentWindow;
		iframeWin.postMessage( document.getElementById("message").value, "https://app.login.kairisei-ma.jp:443/Auth/login.php");
		alert(1);
		window.addEventListener("message", function( event ) {
			console.log(event, event.data);
		}, false);
		alert(2);
    	/*
        $.ajax( {
                url : "https://app.login.kairisei-ma.jp:443/Auth/login.php", 
                data : '{"uuid":"f57e8b2c-acbf-43a7-9d05-a3f0fc439a46","hash_token":"492N+ZrLTxcvj3h/gWTjdX/+RJE=","clver":"3","os":0,"carrier":3,"market":1,"lang":0,"device":"iPhone5S","token":""}',
                type : 'POST', 
                async : false,
                dataType : 'text',
                timeout : 5000,
                success : function(data){
                    alert(data);
                    alert(JSON.stringify(data));
                },
                error : function(XMLHttpRequest, textStatus, errorThrown) {   
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);  
                }
        });
        
        
        $.ajax( {
            url : "http://app.kairisei-ma.jp/Game/HomeShow", 
            data : '1CAStLp2Ags0LfOd11xIprR1aw9ds=',
            type : "GET", 
            dataType : "jsonp",
            jsonp : "callbackparam",
            jsonpCallback : "success_jsonpCallback",
            async : false,
            timeout : 5000,
            success : function(data){
                alert(data);
                alert(JSON.stringify(data));
            },
            error : function(XMLHttpRequest, statusText, errorThrown) {   
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(statusText);  
            }
        });
        */
        return false;
    });
    
    $("#offlineLocalButton").click(function(){
        
        return false;
    });
    
    $("#settingLocalButton").click(function(){
        var table=$.ajax({url:"../marweb/settingPage.action", async:false});
        $("#mainDiv").html(table.responseText);
    });
});