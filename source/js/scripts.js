;(function(){

  $(document).ready(function(){
    var headerHeight =  $( ".navbar" ).outerHeight();
    function hideMenu(){
		if($( ".navbar-collapse" ).hasClass( "show" )){
		  $( ".navbar-collapse" ).removeClass("show");
		}
  	};

	$(".nav-link").on("click", function (evt) {
	   hideMenu();
	   evt.preventDefault();
	   var id  = $(this).attr('href');
	   var	top = $(id).offset().top;

	   $('body,html').animate({scrollTop: top - headerHeight}, 1500);
	});

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
            phone: {
                required: true,
                minlength: 7,
                maxlength: 15,
                number: true

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
            phone: {
                required: "Please enter mobile phone number",
                minlength: "Please enter at least 7 characters",
                maxlength: "Please enter no more 15 characters",
                digits: true
            },
            message: {
                 required: "Please enter a message"
            }
        }
    });


  });
}());