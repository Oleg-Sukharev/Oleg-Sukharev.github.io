;(function(){
	//preloader 
	$(window).on("load", function () {
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


    //form validation
    jQuery.validator.addMethod("lettersonly", function(value, element){
          return this.optional(element) || /^[a-z]+$/i.test(value);
    }, "Letters only please");

    $('#contactForm').validate({
          rules: {
              name: {
                  required: true,
                  minlength: 3,
                  maxlength: 25,
                  lettersonly: true
              },
              email: {
                  required: true,
                  email: true
              },
              message: {
                required: true
              }
          },
          messages: {
              name: {
                  required: "Please enter your name",
                  minlength: "Please enter at least 3 characters",
                  maxlength: "Please enter no more 20 characters"
              },
              email: {
                  required: "Please enter email",
                  email: "Please check your email is correct"
              },
              message: {
                   required: "Please enter a message"
              }
          }
      });
  });

}());