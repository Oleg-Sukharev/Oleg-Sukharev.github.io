;(function(){
  $(document).ready(function(){

    // $("select").niceSelect(); 
       
	$('#recipeCarousel').carousel({
	  interval: 10000
	})

	$('.promotions .carousel-item').each(function(){
	    var next = $(this).next();
	    if (!next.length) {
	    next = $(this).siblings(':first');
	    }
	    next.children(':first-child').clone().appendTo($(this));
	    
	    if (next.next().length>0) {
	    next.next().children(':first-child').clone().appendTo($(this));
	    }
	    else {
	      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
	    }
	});
	
	$(document).on('hidden.bs.modal', function (event) {
	  if ($('.modal:visible').length) {
	    $('body').addClass('modal-open');
	    $('body').addClass('padding-right');
	  }else{
	  	$('body').removeClass('padding-right');
	  }
	});

	if ($('#slick').length > 0){
		$('#slick').slick({
			autoplay: true,
		    vertical: true,
		    arrows: false,
	        speed: 200,
		    dots: false,
		    slidesToShow: 3,
		    slidesToScroll: 1
		});
	}
	$("a").on("click",function () {
		document.location.href = "catalogue.html";
	})


  });
}());