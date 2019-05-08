;(function(){
    "use strict";
    $(document).ready(function () {
    	window.modalError = $("#modalError");

	    window.errorHandler = function(error){
	        modalError.modal('toggle');
	        modalError.find('.modal-body').text(error);
    	}

    });
}());