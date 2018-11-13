$(function () {
	//브라우저의(뷰포트 viewport) 높이값을 article의 높이값으로 갱신
		var ht = $(window).height();
	$("article").height(ht);

	//브라우저가 리사이즈 될 때마다 article의 높이값 갱신
	$(window).on("resize",function () {
		$("article").height(ht);
	});

	//각 article안의 이미지 제어
	$("article").on("mousemove",function () {
		// 마우스 커서의 위치 저장
		var x = event.pageX;
		var y = event.pageY;
		//첫 번째 페이지 이미지 위치값
		$(".img11").css({right:0-x/30,bottom:0-y/30});
		$(".img12").css({right:-20+x/20,bottom:-40+y/20});
		$(".img13").css({right:100,bottom:600});
		//두 번째
		$(".img21").css({right:0-x/30,bottom:-350-y/30});
		$(".img22").css({right:-20+x/20,bottom:0+y/20});
		//세 번째
		$(".img31").css({right:1500-x/30,bottom:500-y/30});
		$(".img32").css({right:x/20,bottom:y/20});
		$(".img33").css({right:1500-x/20,bottom:80-y/-40});
		//네 번째
		$(".img41").css({right:20-x/30,bottom:-120-y/30});
		$(".img42").css({right:0+x/20,bottom:-180+y/20});
	});
	//내비게이션의 메뉴 클릭시 해당 페이지로 이동
	$("#gnb li").on("click",function () {
		var ht = $(window).height();//브라우저의 높이값 저장 = article의 높이값
		var idx = $(this).index();//각각의 메뉴의 인덱스 번호를 저장

		var articleT = ht * idx;

		$("html,body").stop().animate({"scrollTop":articleT},1000);

	});
	$(window).on("scroll",function () {
		var ht = $(window).height();
		var scroll = $(window).scrollTop();

		/*if(scroll>=ht*0 && scroll<ht*1){//첫번째 메뉴의 두번째 페이지 영역
			$("#gnb li").removeClass();
			$("#gnb li").eq(0).addClass('on');
		}

		if(scroll>=ht*1 && scroll<ht*2){//첫번째 메뉴의 두번째 페이지 영역
			$("#gnb li").removeClass();
			$("#gnb li").eq(1).addClass('on');
		}
		if(scroll>=ht*2 && scroll<ht*3){//두번째 메뉴의 두번째 페이지 영역
			$("#gnb li").removeClass();
			$("#gnb li").eq(2).addClass('on');
		}
		if(scroll>=ht*3 && scroll<ht*4){//세번째 메뉴의 두번째 페이지 영역
			$("#gnb li").removeClass();
			$("#gnb li").eq(3).addClass('on');
		}
		if(scroll>=ht*4 && scroll<ht*5){//네번째 메뉴의 두번째 페이지 영역
			$("#gnb li").removeClass();
			$("#gnb li").eq(4).addClass('on');
		}*/
		for(var i=0; i<4; i++){//0~3까지 1씩 증가
			if(scroll>=ht*i && scroll<ht*(i+1)){
				$("#gnb li").removeClass();
				$("#gnb li").eq(i).addClass('on');
			}
		}
	});

	//article 위에서 마우스 휠을 움직이면 
	$("article").on("mousewheel",function (event,delta) {
		if(delta>0){//마우스 휠을 올렸을때
			//현재 article의 이전 article의 상단에서부터의 위치로
			//.offset().top 기준 객체가 브라우저 상단에서부터의 거리
			var prev = $(this).prev().offset().top;
			$("html,body").stop().animate({"scrollTop":prev},1000,"easeInOutBack");
		}else if (delta<0) {//마우스 휠을 내렸을때
			var next = $(this).next().offset().top;
			$("html,body").stop().animate({"scrollTop":next},1000,"easeInOutBack");
		}
	});

});