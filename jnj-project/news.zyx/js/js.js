$(document).ready(function() {

	$('#fullpage').fullpage({
		
		sectionsColor:['#fff','#fff','#fff','#fff'], //控制每个section的背景颜色
		
		controlArrow:true,   //是否隐藏左右滑块的箭头(默认为true)
		
		verticalCentered: true,  //内容是否垂直居中(默认为true)
		 
		css3: true, //是否使用 CSS3 transforms 滚动(默认为false)
		 
		resize:false, //字体是否随着窗口缩放而缩放(默认为false)
		
		scrolllingSpeed:1000,  //滚动速度，单位为毫秒(默认为700)
		
		anchors:['page1','page2','page3','page4'],  //定义锚链接(值不能和页面中任意的id或name相同，尤其是在ie下，定义时不需要加#)  

		lockAnchors:false,  //是否锁定锚链接，默认为false。设置weitrue时，锚链接anchors属性也没有效果。
		
		loopBottom:false,  //滚动到最底部后是否滚回顶部(默认为false)
		
		loopTop:false, //滚动到最顶部后是否滚底部
		
		loopHorizontal:false,//左右滑块是否循环滑动
		
		autoScrolling:true, // 是否使用插件的滚动方式，如果选择 false，则会出现浏览器自带的滚动条
		
		scrollBar:true,//是否显示滚动条，为true是一滚动就是一整屏
		
		fixedElements:".logo", //固定元素
		
		menu:".menu",
		
		keyboardScrolling:true, //是否使用键盘方向键导航(默认为true)
		
		keyboardScrolling:true, //页面是否循环滚动（默认为false）
		
		navigation:true, //是否显示项目导航（默认为false）
		
		navigationTooltips:["","","",""],//项目导航的 tip
		
		navigationColor:'green', //项目导航的颜色
		
		slidesNavigation:true,
		
	});

});