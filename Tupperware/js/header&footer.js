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
