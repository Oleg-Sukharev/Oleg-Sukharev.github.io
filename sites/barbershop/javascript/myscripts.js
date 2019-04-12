
        var login_link = document.querySelector(".login-link");
        var popup = document.querySelector(".modal-login"); 
        var close = document.querySelector(".modal-close");
        var overlay = document.querySelector(".modal-overlay");
        var map_link = document.querySelector(".button-map");
        var map_link_contacts = document.querySelector(".contacts-button-map");
        var map = document.querySelector(".modal-map");
        var map_close = map.querySelector(".modal-close");

        login_link.addEventListener("click" ,function (evt){
        evt.preventDefault();
        popup.classList.add("modal-show");
        overlay.classList.add("modal-show");
        
        });

        overlay.addEventListener("click", function(evt){
            evt.preventDefault();
            overlay.classList.remove("modal-show");
            popup.classList.remove("modal-show");
            map.classList.remove("modal-show");
        })

        close.addEventListener("click", function(evt){
        evt.preventDefault();
        popup.classList.remove("modal-show");
        overlay.classList.remove("modal-show");
        })

        map_close.addEventListener("click", function(evt){
        evt.preventDefault();
        popup.classList.remove("modal-show");
        overlay.classList.remove("modal-show");
        map.classList.remove("modal-show");
        })

        map_link.addEventListener("click",function(evt){
            evt.preventDefault();
            map.classList.add("modal-show");
            overlay.classList.add("modal-show");
        })

        map_link_contacts.addEventListener("click",function(evt){
            evt.preventDefault();
            map.classList.add("modal-show");
            overlay.classList.add("modal-show");
        })