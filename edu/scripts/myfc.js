// JavaScript Document
$(function() {
			$('#carousel ul').carouFredSel({
			prev: '#prev',
			next: '#next',
			pagination: "#pager",
			scroll: 1000
			});
	
});
$(function(){
	
	//demo1
	$("#focus").mogFocus();	
	$("#focus2").mogFocus({autoScroll : true});		
	//和插件本身无关
	$("#btn").click(function(){  
		$("html,body").animate({scrollTop:$("#parameters").offset().top},{duration: 2000, easing: "easeInOutQuart"});
		return false;
	});
	
});	
	

function submenushow()
{	
     $(this).parent().find('ul').slideToggle("slow");

}

function cimage()
{		
    		$(this).parent().find('img').attr("src","images/lghomeright2.png");
}
function cimage2()
{		
    		$(this).parent().find('img').attr("src","images/lghomeright.png");
}
function ccolor()
{			
			$('#leftmenu>li>ul>li').find('a').removeClass("bgededed");
    		$(this).addClass("bgededed");					
}

var k;			
$(document).ready(function(){	
	$(".boxcontent").slideUp("slow");
	$('#leftmenu').find(".f16").bind('click', submenushow);
	$('#leftmenu').find('a').bind('mouseenter', cimage);
	$('#leftmenu').find('a').bind('mouseleave', cimage2);
	$('#leftmenu>li>ul>li>a').bind('click', ccolor);
	$(".boxcontent").eq(0).slideDown("slow");
	
	$(".relationbottom").find("li").click(function(){	
		if($(this).find("img").attr("src")=="images/jia.gif"){
			$(".relationbottom").find("img").attr("src","images/jia.gif");
    		$(this).find("img").attr("src","images/jian.gif");
			$(".relationcontent").slideUp("slow");	
			$(this).find(".relationcontent").slideDown("slow");
 		}
		else if($(this).find("img").attr("src")=="images/jian.gif"){
			$(this).find("img").attr("src","images/jia.gif");
			$(".relationcontent").slideUp("slow");	
		}
	});
	$(".boxbottom").find("li").click(function(){	
		if($(this).find("img").attr("src")=="../images/jia2.gif"){
			$(".listtop").find("img").attr("src","../images/jia2.gif");
    		$(this).find(".listtop").find("img").attr("src","../images/jian2.gif");
			$(".boxcontent").slideUp("slow");	
			$(this).find(".boxcontent").slideDown("slow");
 		}
		else if($(this).find("img").attr("src")=="../images/jian2.gif"){
			$(this).find(".listtop").find("img").attr("src","../images/jia2.gif");
			$(".boxcontent").slideUp("slow");	
		}
	});

	$(".menulist").find("a").click(function(){
		$(".menulist").find("a").removeClass("liover");
		$(this).addClass("liover");
	});


	$(".hoc-01").mouseenter(function(){
		$(".hoc").show();
		$(this).siblings().mouseenter(function(){
		$(".hoc").hide();});
		$(".hoc").mouseleave(function(){
		$(".hoc").hide();
		});
		});

$(".header").mouseenter(function(){
		$(".hoc").hide();
		$(".hod").hide();
		});
$(".submenumiddle").mouseleave(function(){
		$(".hoc").hide();
		$(".hod").hide();
		});
		
	$(".hod-01").mouseenter(function(){
		$(".hod").show();
		$(this).siblings().mouseenter(function(){
		$(".hod").hide();});
		});
		
	$(".topmenu").find("a").mouseover(function(){
		$(".topmenu").find("div").removeClass("triangle");
		$(".topmenu").find("a").removeClass("color-7ed813");
		$(this).addClass("color-7ed813");
		$(this).parent().find("div").addClass("triangle");
	});
	
	
	
$(".topmenu").find("a").eq(0).mouseover(function(){
		$(".list01").show();
		$(".list02").hide();
		$(".list03").hide();
		$(".list04").hide();
	});
		$(".topmenu").find("a").eq(1).mouseover(function(){
		$(".list02").show();
		$(".list01").hide();
		$(".list03").hide();
		$(".list04").hide();
	});
		$(".topmenu").find("a").eq(2).mouseover(function(){
		$(".list03").show();
		$(".list01").hide();
		$(".list02").hide();
		$(".list04").hide();
	});
	    $(".topmenu").find("a").eq(3).mouseover(function(){
		$(".list04").show();
		$(".list01").hide();
		$(".list02").hide();
		$(".list03").hide();
	});

	
    $(".searchbtn").click(function(){
    $(".search").slideToggle(300);
	if(k==1){
    $(".topmenu").find("li").animate({height:'20px'},300);
	$(".header").animate({height:'78px'},300);	
	k=0;}
	else{
	$(".topmenu").find("li").animate({height:'100px'},300);
	$(".header").animate({height:'158px'},300);	
	k=1;}
  });
});

