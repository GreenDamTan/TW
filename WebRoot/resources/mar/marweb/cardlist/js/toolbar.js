$(function(){
	// 分类菜单鼠标悬停
	$("#gameClassTag").mouseover(function (){
		$("#gameClass").show();
	}).mouseout(function(){
		//$("#gameClass").hide();
	});
	
	$(".closeButton").click(function (){
		$("#gameClass").hide();
	});
}); 