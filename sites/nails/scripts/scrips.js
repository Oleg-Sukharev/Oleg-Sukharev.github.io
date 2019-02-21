
var my_multirange = function() {
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
  var price_low = document.querySelector(".price_value-low");

  input.classList.add("multirange", "original");
  ghost.classList.add("multirange", "ghost");

  input.value = values[0] || min + (max - min) / 2;
  ghost.value = values[1] || min + (max - min) / 2;

  input.parentNode.insertBefore(ghost, input.nextSibling);

  Object.defineProperty(input, "originalValue", descriptor.get ? descriptor : {
 
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
      document.querySelector(".price_value-low").innerHTML=range_value;
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
}();


var linkMap = document.querySelector(".info__map");
var closeMap = document.querySelector(".map_close-bt");
var popupMap = document.querySelector(".map");
var linkFeedback = document.querySelector(".info_bt--map");
var popupFeedback = document.querySelector(".feedback");
var closeFeedback = document.querySelector(".feedback_close-bt");
var feedbackInput = document.querySelector("#fullname");
var overlay = document.querySelector(".overlay");


overlay.addEventListener("click", function(event) {
  event.preventDefault();
  popupFeedback.classList.remove("show");
  popupMap.classList.remove("show");
  overlay.classList.remove("show");
});

linkMap.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("show");
  popupMap.classList.add("show");
});

closeMap.addEventListener("click", function(event) {
  event.preventDefault();
  popupMap.classList.remove("show");
   overlay.classList.remove("show");
});


linkFeedback.addEventListener("click", function(event) {
  event.preventDefault();
  overlay.classList.add("show");
  popupFeedback.classList.add("show");
  feedbackInput.focus();
});

closeFeedback.addEventListener("click", function(event) {
  event.preventDefault();
  popupFeedback.classList.remove("show");
  overlay.classList.remove("show");
});
