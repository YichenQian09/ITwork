
//header&footer

//固定置顶
$(function(){        
        //获取要定位元素距离浏览器顶部的距离
        var navH = $(".header-fix").offset().top;
        //滚动条事件
        $(window).scroll(function(){
                //获取滚动条的滑动距离
                var scroH = $(this).scrollTop();
                //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
                if(scroH >=  navH){
                        $(".header-fix").css({"position":"fixed","top":0,"left":0,"background":"#ffffff","border-bottom":"1px solid #e2e2e2"});
                }
                else if(scroH < navH){
                        $(".header-fix").css({"position":"static","margin":"0 auto","background":"transparent","border":"none"});
                }
        })
})

//返回顶部
window.onload = function(){
        var timer = null;
        var box = document.getElementById("returntop");
        box.onclick = function(){
                cancelAnimationFrame(timer);
                timer = requestAnimationFrame(function fn(){
                        var oTop = document.body.scrollTop || document.documentElement.scrollTop;
                        if(oTop > 0){
                                document.body.scrollTop = document.documentElement.scrollTop = oTop - 100;
                                timer = requestAnimationFrame(fn);
                        }
                        else{
                                cancelAnimationFrame(timer);
                        } 
                });
        };
}


//main

//左边按钮
$(document).ready(function(){//加载整个DOM元素

		//绿色
		$(".main-productions-left").eq(0).children("div").children("span").mouseover(function(){
			//防止多次移入产生连续显示和消失问题
			$(".main-productions-left-hover").eq(0).stop(true,true);
			$('.main-productions-left-hover').eq(0).animate({opacity:'1'},400);
		});//鼠标移入显示文字

		$(".main-productions-left").eq(0).children("div").children("span").mouseout(function(){
			$('.main-productions-left-hover').eq(0).animate({opacity:'0'},400);
		});//鼠标移除文字消失

		//橙色
		$(".main-productions-left").eq(1).children("div").children("span").mouseover(function(){
			//防止多次移入产生连续显示和消失问题
			$(".main-productions-left-hover").eq(1).stop(true,true);
			$('.main-productions-left-hover').eq(1).animate({opacity:'1'},400);
		});

		$(".main-productions-left").eq(1).children("div").children("span").mouseout(function(){
			$('.main-productions-left-hover').eq(1).animate({opacity:'0'},400);
		});

		//紫色
		$(".main-productions-left").eq(2).children("div").children("span").mouseover(function(){
			//防止多次移入产生连续显示和消失问题
			$(".main-productions-left-hover").eq(2).stop(true,true);
			$('.main-productions-left-hover').eq(2).animate({opacity:'1'},400);
		});

		$(".main-productions-left").eq(2).children("div").children("span").mouseout(function(){
			$('.main-productions-left-hover').eq(2).animate({opacity:'0'},400);
		});
	})

//左右切换-绿色-右
$(document).ready(function(){
	var i=0;//图片数组
	var j=1;//文字数组

	//绿色
	$(".main-title").eq(0).children("span").click(function(){
		
		if(i >= 2 && j >= 3){//已切换到第三页 点击按钮需要返回第一页
			
			//防止连续多按页面崩溃
			$(".main-productions-right").eq(0).children("img").stop(true,true);
			$(".main-productions-left").eq(0).children("div").children("h3").stop(true,true);
			$(".main-productions-left").eq(0).children("div").children("p").stop(true,true);

			//点击切换按钮 第一页图片左移进入，之后定位且换页按钮颜色变化
			$(".main-productions-right").eq(0).children("img").eq(0).animate({left:'0px',opacity:'1'},850,function(){
				i=0;
				j=1;
				$(".main-productions-right").eq(0).children("img").eq(0).css('top','0px','left','0');
				$(".main-pages").eq(0).children("ul").children("li").eq(2).removeClass("change");
				$(".main-pages").eq(0).children("ul").children("li").eq(0).addClass("change");
			});
		
			//点击切换按钮 第三页文字左移消失
			$(".main-productions-left").eq(0).children("div").eq(3).children("h3").animate({left:'-300px',opacity:'0'},350);
			$(".main-productions-left").eq(0).children("div").eq(3).children("p").animate({left:'-300px',opacity:'0'},850);
		
			//点击切换按钮 第三页图片右移消失，之后将第三页文字图片隐藏
			$(".main-productions-right").eq(0).children("img").eq(2).animate({left:'300px',opacity:'0'},850,function(){
				$(".main-productions-left").eq(0).children("div").eq(3).css('display','none');
				$(".main-productions-right").eq(0).children("img").eq(2).css('display','none');
			});
		
			//点击切换按钮 第一页文字图片显示
			$(".main-productions-left").eq(0).children("div").eq(1).css('display','block');
			$(".main-productions-right").eq(0).children("img").eq(0).css('display','inline-block');
		
			//点击切换按钮 第一页文字右移进入，之后定位
			$(".main-productions-left").eq(0).children("div").eq(1).children("h3").animate({left:'300px',opacity:'1'},350);
			$(".main-productions-left").eq(0).children("div").eq(1).children("p").animate({left:'300px',opacity:'1'},850,function(){
				$(".main-productions-left").eq(0).children("div").eq(1).css('top','50px','left','0');
			});
		}

		if(i<2 && j<3){
			
			//防止连续多按页面崩溃
			$(".main-productions-right").eq(0).children("img").stop(true,true);
			$(".main-productions-left").eq(0).children("div").children("h3").stop(true,true);
			$(".main-productions-left").eq(0).children("div").children("p").stop(true,true);
			i=i+1;
			j=j+1;
			
			//点击切换按钮 后一页图片左移进入，之后定位且换页按钮颜色变化
			$(".main-productions-right").eq(0).children("img").eq(i+1-1).animate({left:'0px',opacity:'1'},850,function(){
				$(".main-productions-right").eq(0).children("img").eq(i+1-1).css('top','-1px','left','0');
				$(".main-pages").eq(0).children("ul").children("li").eq(i-1).removeClass("change");//换页按钮
				$(".main-pages").eq(0).children("ul").children("li").eq(i+1-1).addClass("change");//换页按钮
			});
			
			//点击切换按钮 前一页文字左移消失
			$(".main-productions-left").eq(0).children("div").eq(j-1).children("h3").animate({left:'-300px',opacity:'0'},350);
			$(".main-productions-left").eq(0).children("div").eq(j-1).children("p").animate({left:'-300px',opacity:'0'},850);
			
			//点击切换按钮 前一页图片右移消失，之后将前一页文字图片隐藏
			$(".main-productions-right").eq(0).children("img").eq(i-1).animate({left:'300px',opacity:'0'},850,function(){
				$(".main-productions-left").eq(0).children("div").eq(j-1).css('display','none');
				$(".main-productions-right").eq(0).children("img").eq(i-1).css('display','none');
			});
			
			//点击切换按钮 后一页文字图片显示
			$(".main-productions-left").eq(0).children("div").eq(j+1-1).css('display','block');
			$(".main-productions-right").eq(0).children("img").eq(i+1-1).css('display','inline-block');
			
			//点击切换按钮 后一页文字右移进入，之后定位
			$(".main-productions-left").eq(0).children("div").eq(j+1-1).children("h3").animate({left:'300px',opacity:'1'},350);
			$(".main-productions-left").eq(0).children("div").eq(j+1-1).children("p").animate({left:'300px',opacity:'1'},850,function(){
				$(".main-productions-left").eq(0).children("div").eq(j+1-1).css('top','50px','left','0');
			});
		
		}
	});
})

//左右切换-橙色-右
$(document).ready(function(){
	var i=0;//图片数组
	var j=1;//文字数组

	//橙色
	$(".main-title").eq(1).children("span").click(function(){
		
		if(i >= 2 && j >= 3){//已切换到第三页 点击按钮需要返回第一页
			
			//防止连续多按页面崩溃
			$(".main-productions-right").eq(1).children("img").stop(true,true);
			$(".main-productions-left").eq(1).children("div").children("h3").stop(true,true);
			$(".main-productions-left").eq(1).children("div").children("p").stop(true,true);

			//点击切换按钮 第一页图片左移进入，之后定位且换页按钮颜色变化
			$(".main-productions-right").eq(1).children("img").eq(0).animate({left:'0px',opacity:'1'},850,function(){
				i=0;
				j=1;
				$(".main-productions-right").eq(1).children("img").eq(0).css('top','0px','left','0');
				$(".main-pages").eq(1).children("ul").children("li").eq(2).removeClass("change");
				$(".main-pages").eq(1).children("ul").children("li").eq(0).addClass("change");
			});
		
			//点击切换按钮 第三页文字左移消失
			$(".main-productions-left").eq(1).children("div").eq(3).children("h3").animate({left:'-300px',opacity:'0'},350);
			$(".main-productions-left").eq(1).children("div").eq(3).children("p").animate({left:'-300px',opacity:'0'},850);
		
			//点击切换按钮 第三页图片右移消失，之后将第三页文字图片隐藏
			$(".main-productions-right").eq(1).children("img").eq(2).animate({left:'300px',opacity:'0'},850,function(){
				$(".main-productions-left").eq(1).children("div").eq(3).css('display','none');
				$(".main-productions-right").eq(1).children("img").eq(2).css('display','none');
			});
		
			//点击切换按钮 第一页文字图片显示
			$(".main-productions-left").eq(1).children("div").eq(1).css('display','block');
			$(".main-productions-right").eq(1).children("img").eq(0).css('display','inline-block');
		
			//点击切换按钮 第一页文字右移进入，之后定位
			$(".main-productions-left").eq(1).children("div").eq(1).children("h3").animate({left:'300px',opacity:'1'},350);
			$(".main-productions-left").eq(1).children("div").eq(1).children("p").animate({left:'300px',opacity:'1'},850,function(){
				$(".main-productions-left").eq(1).children("div").eq(1).css('top','50px','left','0');
			});
		}

		if(i<2 && j<3){
			
			//防止连续多按页面崩溃
			$(".main-productions-right").eq(1).children("img").stop(true,true);
			$(".main-productions-left").eq(1).children("div").children("h3").stop(true,true);
			$(".main-productions-left").eq(1).children("div").children("p").stop(true,true);
			i=i+1;
			j=j+1;
			
			//点击切换按钮 后一页图片左移进入，之后定位且换页按钮颜色变化
			$(".main-productions-right").eq(1).children("img").eq(i+1-1).animate({left:'0px',opacity:'1'},850,function(){
				$(".main-productions-right").eq(1).children("img").eq(i+1-1).css('top','-1px','left','0');
				$(".main-pages").eq(1).children("ul").children("li").eq(i-1).removeClass("change");//换页按钮
				$(".main-pages").eq(1).children("ul").children("li").eq(i+1-1).addClass("change");//换页按钮
			});
			
			//点击切换按钮 前一页文字左移消失
			$(".main-productions-left").eq(1).children("div").eq(j-1).children("h3").animate({left:'-300px',opacity:'0'},350);
			$(".main-productions-left").eq(1).children("div").eq(j-1).children("p").animate({left:'-300px',opacity:'0'},850);
			
			//点击切换按钮 前一页图片右移消失，之后将前一页文字图片隐藏
			$(".main-productions-right").eq(1).children("img").eq(i-1).animate({left:'300px',opacity:'0'},850,function(){
				$(".main-productions-left").eq(1).children("div").eq(j-1).css('display','none');
				$(".main-productions-right").eq(1).children("img").eq(i-1).css('display','none');
			});
			
			//点击切换按钮 后一页文字图片显示
			$(".main-productions-left").eq(1).children("div").eq(j+1-1).css('display','block');
			$(".main-productions-right").eq(1).children("img").eq(i+1-1).css('display','inline-block');
			
			//点击切换按钮 后一页文字右移进入，之后定位
			$(".main-productions-left").eq(1).children("div").eq(j+1-1).children("h3").animate({left:'300px',opacity:'1'},350);
			$(".main-productions-left").eq(1).children("div").eq(j+1-1).children("p").animate({left:'300px',opacity:'1'},850,function(){
				$(".main-productions-left").eq(1).children("div").eq(j+1-1).css('top','50px','left','0');
			});
		
		}
	});
})

//左右切换-紫色-右
$(document).ready(function(){
	var i=0;//图片数组
	var j=1;//文字数组

	//紫色
	$(".main-title").eq(2).children("span").click(function(){
		
		if(i >= 2 && j >= 3){//已切换到第三页 点击按钮需要返回第一页
			
			//防止连续多按页面崩溃
			$(".main-productions-right").eq(2).children("img").stop(true,true);
			$(".main-productions-left").eq(2).children("div").children("h3").stop(true,true);
			$(".main-productions-left").eq(2).children("div").children("p").stop(true,true);

			//点击切换按钮 第一页图片左移进入，之后定位且换页按钮颜色变化
			$(".main-productions-right").eq(2).children("img").eq(0).animate({left:'0px',opacity:'1'},850,function(){
				i=0;
				j=1;
				$(".main-productions-right").eq(2).children("img").eq(0).css('top','0px','left','0');
				$(".main-pages").eq(2).children("ul").children("li").eq(2).removeClass("change");
				$(".main-pages").eq(2).children("ul").children("li").eq(0).addClass("change");
			});
		
			//点击切换按钮 第三页文字左移消失
			$(".main-productions-left").eq(2).children("div").eq(3).children("h3").animate({left:'-300px',opacity:'0'},350);
			$(".main-productions-left").eq(2).children("div").eq(3).children("p").animate({left:'-300px',opacity:'0'},850);
		
			//点击切换按钮 第三页图片右移消失，之后将第三页文字图片隐藏
			$(".main-productions-right").eq(2).children("img").eq(2).animate({left:'300px',opacity:'0'},850,function(){
				$(".main-productions-left").eq(2).children("div").eq(3).css('display','none');
				$(".main-productions-right").eq(2).children("img").eq(2).css('display','none');
			});
		
			//点击切换按钮 第一页文字图片显示
			$(".main-productions-left").eq(2).children("div").eq(1).css('display','block');
			$(".main-productions-right").eq(2).children("img").eq(0).css('display','inline-block');
		
			//点击切换按钮 第一页文字右移进入，之后定位
			$(".main-productions-left").eq(2).children("div").eq(1).children("h3").animate({left:'300px',opacity:'1'},350);
			$(".main-productions-left").eq(2).children("div").eq(1).children("p").animate({left:'300px',opacity:'1'},850,function(){
				$(".main-productions-left").eq(2).children("div").eq(1).css('top','50px','left','0');
			});
		}

		if(i<2 && j<3){
			
			//防止连续多按页面崩溃
			$(".main-productions-right").eq(2).children("img").stop(true,true);
			$(".main-productions-left").eq(2).children("div").children("h3").stop(true,true);
			$(".main-productions-left").eq(2).children("div").children("p").stop(true,true);
			i=i+1;
			j=j+1;
			
			//点击切换按钮 后一页图片左移进入，之后定位且换页按钮颜色变化
			$(".main-productions-right").eq(2).children("img").eq(i+1-1).animate({left:'0px',opacity:'1'},850,function(){
				$(".main-productions-right").eq(2).children("img").eq(i+1-1).css('top','-1px','left','0');
				$(".main-pages").eq(2).children("ul").children("li").eq(i-1).removeClass("change");//换页按钮
				$(".main-pages").eq(2).children("ul").children("li").eq(i+1-1).addClass("change");//换页按钮
			});
			
			//点击切换按钮 前一页文字左移消失
			$(".main-productions-left").eq(2).children("div").eq(j-1).children("h3").animate({left:'-300px',opacity:'0'},350);
			$(".main-productions-left").eq(2).children("div").eq(j-1).children("p").animate({left:'-300px',opacity:'0'},850);
			
			//点击切换按钮 前一页图片右移消失，之后将前一页文字图片隐藏
			$(".main-productions-right").eq(2).children("img").eq(i-1).animate({left:'300px',opacity:'0'},850,function(){
				$(".main-productions-left").eq(2).children("div").eq(j-1).css('display','none');
				$(".main-productions-right").eq(2).children("img").eq(i-1).css('display','none');
			});
			
			//点击切换按钮 后一页文字图片显示
			$(".main-productions-left").eq(2).children("div").eq(j+1-1).css('display','block');
			$(".main-productions-right").eq(2).children("img").eq(i+1-1).css('display','inline-block');
			
			//点击切换按钮 后一页文字右移进入，之后定位
			$(".main-productions-left").eq(2).children("div").eq(j+1-1).children("h3").animate({left:'300px',opacity:'1'},350);
			$(".main-productions-left").eq(2).children("div").eq(j+1-1).children("p").animate({left:'300px',opacity:'1'},850,function(){
				$(".main-productions-left").eq(2).children("div").eq(j+1-1).css('top','50px','left','0');
			});
		
		}
	});
})
