$(window).scroll(function(){
	var scroll = $(window).scrollTop();
    
    document.getElementById("kontainer-top-post").style.marginTop = (-100 - 0.5*scroll) + "px";

	if(scroll >= 100){
		$("#myNavBarS").addClass("bg-primary navbar-dark");
		$(".nav-link").addClass("text-dark");
	} else {
		$("#myNavBarS").removeClass("bg-primary navbar-dark");
		$(".nav-link").removeClass("text-dark");
	}
});