;(function(){
	//preloader 
	$(window).on("load", function (e) {
	    $(".loader_inner").fadeOut();
	    $(".loader").delay(500).fadeOut("slow");
	});

  	$(document).ready(function(){
  		//burger menu
		$.fatNav();
		//animation 
		AOS.init({
       		easing: 'ease-in-out-sine'
   		});



	//filter porfolio
    $(".portfolio__btn").click(function(){
        var filterValue = $(this).attr('data-filter');
        $(".portfolio__btn").removeClass("portfolio__btn-active");
        $(this).addClass("portfolio__btn-active");

        if(filterValue == "all"){
            $(".all").show("slow");
        }else{   
            $(".all").not('.'+filterValue).hide();
            $(".all").filter('.'+filterValue).show("slow");
        }
    });    

  });
}());