particlesJS.load('particles-js','particles.json', function(){

		    console.log("function loaded");
		    });


function scrollIt(e){



if(e.target.className == "ul htres"){

	$('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');


}

}


function navHover(e){

if (e.type == "mouseover" || e.type == "mouseenter"){

$(e.target).css({"color": "#23BDD6"});

}else if (e.type == "mouseleave"){

$(e.target).css({"color":"white"});

}
}


$(".ul").on("mouseover", navHover).on("mouseenter", navHover).on("mouseleave", navHover).on("click", scrollIt);


