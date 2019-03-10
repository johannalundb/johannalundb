$(document).ready(function(){
	$(".content-box").hide().fadeIn(2000);
	$(".box").hide().fadeIn(2000);
	$(".content-text").hide().fadeIn(3000);
	$("#video-background").hide().fadeIn(4000);


  // object-fit polyfill run
        objectFitImages();
        /* init Jarallax */
        jarallax(document.querySelectorAll('.jarallax'));

        jarallax(document.querySelectorAll('.jarallax-keep-img'), {
            keepImg: true,
        });

})
