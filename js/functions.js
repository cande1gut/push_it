$( document ).ready(function() {

	var click = new Audio("sounds/ButtonTap.wav");
	var time_ch = new Audio("sounds/SecondBeep.wav");
	var song = new Audio("sounds/HallOfTheMountainKing.mp3");
	var score = 0;
	var c = 30;
	var wait = 2;
	var interval = setInterval(tiempo, 1000);

	function tiempo(){
		song.play();
		c--;
		$("#timer").text(c);
		time_ch.play();
		if(c == 0)
		{
			clearInterval(interval);
			$("#number2").text("Congratulations! you tapped the button " + score + " times");
			$('#myModal').modal('toggle');
			wait--;
			if(wait == 0){
				song.pause();
				song.currentTime = 0
				time_ch.pause();
				time_ch.currentTime = 0
			}
		}
	}

	$("#boton").bind("mousedown touchstart",function () {
		$("#boton").attr("src","img/button2.png");
	});

	$("#boton").bind("mouseup touchend",function () {
		$("#boton").attr("src","img/button1.png");
	});

	$("#boton").on("click touch",function () {
		score++;
		$("#number").text(score);
		click.play();
	});

	$("#boton_re").on("click touch",function () {
		$('#myModal').modal('toggle');
		score = 0;
		c = 30;
		wait = 2;
		$("#number").text(score);
		$("#timer").text(30);
		interval = setInterval(tiempo, 1000);
	});
});