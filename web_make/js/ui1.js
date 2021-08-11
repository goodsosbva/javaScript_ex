$(document).ready(function(){
	$("#container").addClass("start");
	$("nav li").click(function(){
		$("#container").css("max-width", "100%");
		var id=$(this).attr("data-rol");
		$("nav li").removeClass("on");
		$(this).addClass("on")
		// alert($(this).attr("data-rol"));
		$(".content").removeClass("prev this next")
		// 클릭시 가지고 있떤 클래스를 모두지 운다
		$("#" + id).addClass("this").prevAll().addClass("prev");
		//클릭한 메뉴와 매칭되는 id에 this 클ㅈ래스를 지정하고 그앞의 모든 <section> 태그는 .prev 클래스를 지정
		$("#" + id).nextAll().addClass("next");
		//클릭한 메뉴와 매칭되는 id의 뒤에 오는 <section> 태그는 .next 클래스를 지정한다.		
	});
	// 로고를 클릭하면 메인 페이지로!
	$(".logo_box").click(function(){
		$("nav li").removeClass("on");
		$(".content").removeClass("prev this next");
		$("#container").css("max-width", "1200px");
	});
	// 롤링 배너 왼쪽/ 오른쪽
	$(".roll_left").click(function(){
		$(".book_roll li").eq(0).insertAfter(".book_roll li:last-child");
	});
	$(".roll_right").click(function(){
		$(".book_roll li").eq(-1).insertBefore(".book_roll li:first-child");
	});
	
});
