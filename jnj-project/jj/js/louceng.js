//	$(function(){
        ////1.楼梯什么时候显示，800px scroll-scrollTop
        //$(window).on('scroll',function(){
            //var $scroll=$(this).scrollTop();
            //if($scroll>=700){
                //$('#loutinav').show();
            //}else{
                //$('#loutinav').hide();
            //}
    
            ////4.拖动滚轮，对应的楼梯样式进行匹配
            //$('.page').each(function(){
                //var $loutitop=$('.page').eq($(this).index()).offset().top+600;
                //console.log($loutitop);
                //if($loutitop>$scroll){//楼层的top大于滚动条的距离
                    //$('#loutinav li').removeClass('active');
                    //$('#loutinav li').eq($(this).index()).addClass('active');
                    //return false;//中断循环
                //}
            //});
        //});
        ////2.获取每个楼梯的offset().top,点击楼梯让对应的内容模块移动到对应的位置  offset().left
        
        //var $loutili=$('#loutinav li').not('.last');
        //$loutili.on('click',function(){
            //$(this).addClass('active').siblings('li').removeClass('active');
            //var $loutitop=$('.page').eq($(this).index()).offset().top;
            ////获取每个楼梯的offsetTop值
            //$('html,body').animate({//$('html,body')兼容问题body属于chrome
                //scrollTop:$loutitop-50
            //})
        //});
        ////3.回到顶部
        //$('.last').on('click',function(){
            //$('html,body').animate({//$('html,body')兼容问题body属于chrome
                //scrollTop:0
            //})
        //});
    //})
$(function(){
	//var html="";
	//document.querySelector("#a1").innerHTML=html;
	//document.querySelector("#a2").innerHTML=html;
	//document.querySelector("#a3").innerHTML=html;
	//document.querySelector("#a4").innerHTML=html;
	//document.querySelector("#a5").innerHTML=html;
	//document.querySelector("#a6").innerHTML=html;
	//document.querySelector("#a7").innerHTML=html;
	//document.querySelector("#a8").innerHTML=html;
	var $lift=$(".lift_list");
	var $f1=$("#a1");
	var $floor=$(".floor");
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		if($f1.offset().top<scrollTop+innerHeight/2)
			$lift.parent().show();
		else
			$lift.parent().hide();

		$floors.each(function(i,f){
			var $f=$(f);
			if($f.offset().top<scrollTop+innerHeight/2){
				$lift.children(":eq("+i+")")
					  .addClass("lift_item_on")
					  .siblings()
					  .removeClass("lift_item_on");
			}
		})
	})
	$lift.on("click","li",function(){
		var $li=$(this);
		var i=$li.index();
		var $fi=$($floor[i]);
		var offsetTop=$fi.offset().top;
		$("html,body").stop(true).animate({
			scrollTop:offsetTop-50
		},500)
	})
})