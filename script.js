particlesJS.load('particles-js','particles.json', function(){

		    console.log("function loaded");
		    });

var assignedImage = 0;
var intervalMe;
function goNext(e){

window.clearInterval(intervalMe);
intervalMe = setInterval(autoSlide, 10000);


function autoSlide(){



if(slideImg[assignedImage+1]){
assignedImage++;

}else{

assignedImage=0;

}

$('#imageShow').css('background-image', 'url(' + slideImg[assignedImage] + ')');

}

var slideImg = ["./Media/slide2.jpg","./Media/slide1.jpg","./Media/slide3.jpg"];
$('#imageShow').css('background-image', 'url(' + slideImg[assignedImage] + ')');

if(e && e.type == "click" && e.target.id == "arrowFwd"){


	if(slideImg[assignedImage+1]){
	assignedImage++;
}else{

assignedImage=0;

}

$("#imageShow").fadeIn(1000);
$('#imageShow').css('background-image', 'url(' + slideImg[assignedImage] + ')');

}else if(e && e.type == "click" && e.target.id == "arrowBack"){


	if(slideImg[assignedImage-1]){
	assignedImage--;
}else{

assignedImage = (slideImg.length-1);

}

$("#arrowFwd").fadeIn(1000);
$('#imageShow').css('background-image', 'url(' + slideImg[assignedImage] + ')');

}



}

function scrollIt(e){


if(e.target.className == "ul huno"){

    $('html,body').animate({
        scrollTop: $("#services").offset().top},
        'slow');
}else if(e.target.className == "ul hdos"){


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

$("#arrowFwd").on("click", goNext);
$("#arrowBack").on("click", goNext);
$(".ul").on("mouseover", navHover).on("mouseenter", navHover).on("mouseleave", navHover).on("click", scrollIt);
goNext();

