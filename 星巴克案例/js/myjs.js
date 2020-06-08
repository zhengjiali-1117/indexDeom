$(function(){
	$(".navmenu .listmenu li a").click(function(){
		$(this).next("ul").slideToggle();	//获取.navmenu .listmenu li a的下一个ul
	})	
	
	
	
	$(".header .menu").click(function(){
		$(".navmenu").addClass("on"); //添加一个类等于 .navmenu.on
		$(".bg").fadeIn(300);	
	})
	
	$(".bg").click(function(){
		$(".navmenu").removeClass("on");	
		$(".bg").fadeOut(300);
	})
	
	
	var sTop1=$(window).scrollTop();//当前滚动页面的顶端到最开始页面的顶端的距离
	
	
	$(window).scroll(function(){
		
		var sTop2=$(window).scrollTop();
			
		
		if($(this).scrollTop()>=100){
			$(".header").addClass("on");
			
			if(sTop2>sTop1){
				$(".header").css({top:-60})
			}else{
				$(".header").css({top:0})	
			}
			
		}else{
			$(".header").removeClass("on");	
			$(".header").css({top:0})	
		}
		
		
			
		
		sTop1=sTop2;
		
		
		
		$(".navmenu").removeClass("on");	
		$(".bg").fadeOut(300);	
		
		
		
		
		
	})
	
	
})