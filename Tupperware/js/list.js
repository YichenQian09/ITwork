$(function(){
			$(".main-secondlist").hover(function(){
				$(this).children("ul").stop(true,true).slideDown("1000");
			},function(){
				$(this).children("ul").stop(true,false).slideUp("1000");
			})
})