  //price-slider
(function() {
"use strict";

var supportsMultiple = self.HTMLInputElement && "valueLow" in HTMLInputElement.prototype;

var descriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value");
var price_low =document.getElementById("price_value-low");
var price_hight =document.getElementById("price_value-hight");


self.multirange = function(input) {
  if (supportsMultiple || input.classList.contains("multirange")) {
    return;
  }

  var value = input.getAttribute("value");
  var values = value === null ? [] : value.split(",");
  var min = +(input.min || 0);
  var max = +(input.max || 100);
  var ghost = input.cloneNode();
  var range = document.querySelector("#range");;
  var price_low = document.querySelector("#price_value-low");

  input.classList.add("multirange", "original");
  ghost.classList.add("multirange", "ghost");

  input.value = values[0] || min + (max - min) / 2;
  ghost.value = values[1] || min + (max - min) / 2;

  input.parentNode.insertBefore(ghost, input.nextSibling);

  Object.defineProperty(input, "originalValue", descriptor.get ? descriptor : {
    // Fuck you Safari >:(
    get: function() { return this.value; },
    set: function(v) { this.value = v; }
  });
    
  Object.defineProperties(input, {
    valueLow: {
      get: function() { return Math.min(this.originalValue, ghost.value); },
      set: function(v) { this.originalValue = v; },
      enumerable: true
    },
    valueHigh: {
      get: function() { return Math.max(this.originalValue, ghost.value); },
      set: function(v) { ghost.value = v; },
      enumerable: true
    }
  });

  if (descriptor.get) {
    // Again, fuck you Safari
    Object.defineProperty(input, "value", {
      get: function() { return this.valueLow + "," + this.valueHigh; },
      set: function(v) {
        var values = v.split(",");
        this.valueLow = values[0];
        this.valueHigh = values[1];
        update();
      },
      enumerable: true
    });
  }

  if (typeof input.oninput === "function") {
    ghost.oninput = input.oninput.bind(input);
  }

  function update() {
    ghost.style.setProperty("--low", 100 * ((input.valueLow - min) / (max - min)) + 1 + "%");
    ghost.style.setProperty("--high", 100 * ((input.valueHigh - min) / (max - min)) - 1 + "%");
    var range_value= range.value;  
    range_value = range_value.replace(","," до ");
    document.querySelector("#price_value-low").innerHTML=range_value+"руб.";
  }
  input.addEventListener("input", update);
  ghost.addEventListener("input", update);

  update();
}

multirange.init = function() {
  [].slice.call(document.querySelectorAll("input[type=range][multiple]:not(.multirange)")).forEach(multirange);
}

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", multirange.init);
}
else {
  multirange.init();
}

})();

//popup windows
  var feedback_link = document.querySelector(".feedback-button");
  var popup = document.querySelector(".modal-feedback");
  var modal_close = document.querySelector(".button-close");
  var overlay = document.querySelector(".modal-overlay");
  var login = document.querySelector(".login");
  var login_wrapper = document.querySelector(".login-wrapper");
  var search_icon = document.querySelector(".search-icon");
  var search_form = document.querySelector(".search-form");



    var show_mouseover = function(active_el,passive_el,addingclass){
      active_el.addEventListener("mouseover", function(evt){
      evt.preventDefault();
      passive_el.classList.add(addingclass);  
    })
    }

    var hide_mouseout = function (active_el,passive_el,addingclass){
      active_el.addEventListener("mouseout", function(evt){
      evt.preventDefault();
      passive_el.classList.remove(addingclass);  
    }) 
    } 

    hide_mouseout( login_wrapper,login_wrapper,"modal-show");
    hide_mouseout( login, login_wrapper,"modal-show");
    hide_mouseout( search_icon, search_form,"modal-show");
    hide_mouseout( search_form, search_form,"modal-show");

    show_mouseover(login,login_wrapper,"modal-show");
    show_mouseover(login_wrapper,login_wrapper,"modal-show");
    show_mouseover(search_icon,search_form,"modal-show");
    show_mouseover(search_form,search_form,"modal-show");
    
  feedback_link.addEventListener("click", function(evt){
  		evt.preventDefault();
  		popup.classList.add("modal-show");
  		overlay.classList.add("modal-show");
  })	

    modal_close.addEventListener("click", function(evt){
  		evt.preventDefault();
  		popup.classList.remove("modal-show");
  		overlay.classList.remove("modal-show");
  })	

   overlay.addEventListener("click", function(evt){
        evt.preventDefault();
        overlay.classList.remove("modal-show");
        popup.classList.remove("modal-show");

    })

//slider
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  var dots = document.getElementsByClassName("switch-slider");


  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
