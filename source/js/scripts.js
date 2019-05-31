/* eslint-disable jquery/no-show */
/* eslint-disable eqeqeq */
/* eslint-disable jquery/no-class */
/* eslint-disable jquery/no-ready */
/* eslint-disable no-undef */
/* eslint-disable jquery/no-filter */
;(function () {
// preloader
  $(window).on(`load`, function () {
    // eslint-disable-next-line jquery/no-fade
    $(`.loader_inner`).fadeOut()
    // eslint-disable-next-line jquery/no-fade
    $(`.loader`).delay(500).fadeOut(`slow`)
  })

  $(document).ready(function () {
  // burger menu
    $.fatNav()

    // animation
    AOS.init({
      easing: 'ease-in-out-sine'
    })

    // filter porfolio
    $(`.portfolio__btn`).click(function () {
      // eslint-disable-next-line jquery/no-attr
      const filterValue = $(this).attr('data-filter')
      $(`.portfolio__btn`).removeClass(`portfolio__btn-active`)
      $(this).addClass(`portfolio__btn-active`)

      if (filterValue == `all`) {
        $(`.all`).show(`slow`)
      } else {
        // eslint-disable-next-line jquery/no-hide
        $(`.all`).not('.' + filterValue).hide()
        $(`.all`).filter('.' + filterValue).show(`slow`)
      }
    })

    // form validation
    // eslint-disable-next-line no-undef
    jQuery.validator.addMethod(`lettersonly`, function (value, element) {
      return this.optional(element) || /^[a-z]+$/i.test(value)
    }, `Letters only please`)

    // eslint-disable-next-line no-undef
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
          required: `Please enter your name`,
          minlength: `Please enter at least 3 characters`,
          maxlength: `Please enter no more 20 characters`
        },
        email: {
          required: `Please enter email`,
          email: `Please check your email is correct`
        },
        message: {
          required: `Please enter a message`
        }
      }
    })
  })
}())
