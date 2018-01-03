$(document).ready(function(){
	$(".review-three").addClass("firstt");
	$(".review-change-left").on("click",function(){
		if($(".review-three").hasClass("secondd")){
			$(".review-three").stop(true,true);
			/*防止被反复触发*/
			$(".review-three").animate({marginLeft:"0%"},700);
			$(".review-three").removeClass("secondd").addClass("firstt");
		}
		else if($(".review-three").hasClass("thirdd")){
			$(".review-three").stop(true,true);
			$(".review-three").animate({marginLeft:"-100%"},700);
			$(".review-three").removeClass("thirdd").addClass("secondd");
		}
	})
	$(".review-change-right").on("click",function(){
		if($(".review-three").hasClass("firstt"))
		{
			$(".review-three").stop(true,true);
			$(".review-three").animate({marginLeft:"-100%"},700);
			$(".review-three").removeClass("firstt").addClass("secondd");
		}
		else if($(".review-three").hasClass("secondd")){
			$(".review-three").stop(true,true);
			$(".review-three").animate({marginLeft:"-200%"},700);
			$(".review-three").removeClass("secondd").addClass("thirdd");
		}
	})


	$(".fir-button").on("click",function(){
		$(".intro>img").attr("src","images/bigpro.png").fadeIn("slow");
	})
	$(".sec-button").on("click",function(){
		$(".intro>img").attr("src","images/bigsecond.jpg").fadeIn("1000");
	})
	$(".thi-button").on("click",function(){
		$(".intro>img").attr("src","images/bigthird.jpg");
		//$(".intro>img").fadeOut("500");
		//$('<img src="images/bigthird.jpg">').appendTo($('intro'));
		//$(".intro>img").animate({"src","images/bigsecond.jpg"},1000);
	})
})
