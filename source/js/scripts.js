;(function(){
  "use strict";
  $(document).ready(function(){

  	var hideMenu = function(){
		if($( ".navbar-collapse" ).hasClass( "show" )){
			navbar.removeClass("show");
		}
  	};


	$(".nav-link").on("click", function (evt) {
		hideMenu();
		evt.preventDefault();
		var id  = $(this).attr('href');
		var	top = $(id).offset().top;

		$('body,html').animate({scrollTop: top}, 1500);
	});



  });
}());