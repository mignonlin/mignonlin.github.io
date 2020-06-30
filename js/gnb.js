$(function(){
	var gnbA =$('#gnb>li');
	var sub = $('#gnb>li>ul');
	
	var headerMin = $('#headerBox').height();
	var headerMax = sub.innerHeight()+headerMin;

	var state = false;
	var speed = 150;
	
	//마우스오버
	gnbA.mouseenter(function(){
		if(!state){
			//#headerBox가 풀박스인데 에니메이트를 주겠다 
			$('#headerBox').stop().animate({height:headerMax/*변수라서 따옴표없음*/},speed,function(){
				sub.stop().fadeIn(speed);
			}); 
			state=true;
		}
		$(this).addClass('on'); 
		$(this).find(sub).addClass('on'); 
	}); //mouseenter end
	
	//마우스아웃
	gnbA.mouseleave(function(){
		$(this).removeClass('on');   //add 에서 remove로 바꿔줌 
		$(this).find(sub).removeClass('on'); 
	}); //mouseleave end
	//마우스아웃 주메뉴 벗어날때
	$('#gheader').mouseleave(function(){ //헤더박스의 위로 올라가는 부드럽게 올라가는 설정해주랴고 
		sub.stop().fadeOut(speed,function(){
		$('#headerBox').stop().animate({height:headerMin},speed);
		});
		state=false;
	});
});