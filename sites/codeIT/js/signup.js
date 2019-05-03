;(function(){
    "use strict";
    $(document).ready(function() {
        $('#formSignUp').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3,
                    maxlength: 20,
                    lettersonly: true
                },
                secondname: {
                    required: true,
                    minlength: 3,
                    maxlength: 40,
                    lettersonly: true
                },
                email: {
                    required: true,
                    email: true
                },
                pass: {
                    required: true,
                    minlength: 5,
                    maxlength: 20,
                },
                agreement: "required",
                gender: "required",
            },
            messages: {
                name: {
                    required: "Please enter your name",
                    minlength: "Please enter at least 3 characters",
                    maxlength: "Please enter no more 25 characters",
                },
                secondname: {
                    required: "Please enter your second name",
                    minlength: "Please enter at least 3 characters",
                    maxlength: "Please enter no more 60 characters",
                },
                email: {
                    required: "Please enter email",
                    email: "Please check your email is correct"
                },
                pass: {
                    required: "Please enter your password",
                    minlength: "Please enter at least 6 characters",
                    maxlength: "Please enter no more 20 characters",
                },
                gender: {
                    required: "Please select your gender"
                },
                agreement: {
                    required: "Please confirm that you agree with conditions of agreement"
                }
            }
        });

        jQuery.validator.addMethod("lettersonly", function(value, element){
            return this.optional(element) || /^[a-z]+$/i.test(value);
        }, "Please letters only");

        $("#formSignUp").submit(function(evt) {
            evt.preventDefault();

            var form = $(this);
            if (!form.valid()) {
                return;
            }

            var url = form.attr("action"),
                modalError = $("#modalError");

            $.ajax({
                type: "POST",
                url: url,
                data: form.serialize(),
                success: function (data) {
                    if (data.status === "OK") {
                        window.location.replace("companies.html");
                        return;
                    }

                    if (data.status === "Error" || data.status === 'Form Error') {
                        errorHandler(data.message);
                    }
                },
                error: function() {
                    errorHandler("Connection failed");
                }
            });
        });
    });
}());