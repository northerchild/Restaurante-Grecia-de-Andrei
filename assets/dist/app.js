"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}navigator.serviceWorker&&navigator.serviceWorker.register("/sw.js"),function(){function e(){var e=function(){var e=$("#description").height();return $(window).scrollTop()>$(window).height()-1.8*e}();e&&!o&&(console.log("Cambiar la navegacion"),o=!0,$("#description").addClass("fixed").removeClass("absolute"),$("#navigation").slideUp(),$("#sticky-navigation").slideDown()),!e&&o&&(console.log("volver a la navegacion"),o=!1,$("#description").removeClass("fixed").addClass("absolute"),$("#navigation").slideDown(),$("#sticky-navigation").slideUp())}function n(){$("#responsive-nav ul").toggleClass("active"),$("#menu_opener").toggleClass(".glyphicon-menu-hamburger")}var o=!1,i=0;e(),function(){var e=(new Date).getHours();(e<10||e>22)&&($("#is-open .text").html("Cerrado Ahora <br /> Abierto desde las 10:00 am a 10:00 pm"),console.log(e))}();var a=$("[data-name=image-counter]").attr("content");console.log(a),console.log($(window).height()),$("#sticky-navigation").removeClass("hidden"),$("#sticky-navigation").slideUp(0),$("#menu_opener").on("click",n),$(".menu-link").on("click",n),setInterval(function(){i<a?i++:i=0,$("#gallery .inner").css({left:"-"+100*i+"%"})},2500),$(window).scroll(e)}();var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}();!function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"get",value:function(e){navigator.geolocation?navigator.geolocation.getCurrentPosition(function(n){e({lat:n.coords.latitude,lng:n.coords.longitude})}):alert("No pudimos detectar el lugar donde te encuentras")}}]),e}(),n={lat:4.6972323,lng:-74.0503135};google.maps.event.addDomListener(window,"load",function(){var e=new google.maps.Map(document.getElementById("map"),{center:n,zoom:16});new google.maps.Marker({map:e,position:n,title:"Restaurante Grecia De Andrei",visible:!0})}),e.get(function(e){var t=new google.maps.LatLng(e.lat,e.lng),a=new google.maps.LatLng(n.lat,n.lng);(new google.maps.DistanceMatrixService).getDistanceMatrix({origins:[t],destinations:[a],travelMode:google.maps.TravelMode.DRIVING},function(e,n){if(n===google.maps.DistanceMatrixStatus.OK){var t=e.rows[0].elements[0].duration.text;document.querySelector("#message").innerHTML="Estas a "+t+' de una noche inolvidable en <span class="dancing-script medium">Grecia De Andrei</span> '}})})}(),$.fn.formObject=function(){var e={};return $.each($(this).serializeArray(),function(r,n){e[n.name]=n.value||""}),e},function(){function t(){e()?function(){var t=$(n);console.log(t.formObject()),$.ajax({url:t.attr("action"),method:"POST",data:t.formObject(),dataType:"json",success:function(){console.log("Hola"),t.slideUp(),$("#info-contacto").html("Enviamos tu mensaje, muy pronto estaremos en contacto contigo.")}})}():(a($(n).find(".input:invalid").first().parent()),$(".input:invalid").css({background:"#f50f0f"}))}function e(){return document.querySelector(n).checkValidity()}function a(t){$(".step.active").removeClass("active"),t.addClass("active"),t.find(".input").focus();var e=t.index(".step")+1;$(".path-step.active").removeClass("active"),$(".path-step:nth-child("+e+")").addClass("active")}var n="#contact-form";$(".step textarea").on("keydown",function(t){13==t.keyCode&&(t.preventDefault(),$(t.target).blur())}),$(".path-step").on("click",function(t){var e=$(t.target);$(".path-step.active").removeClass("active"),e.addClass("active");var n=e.index(".path-step")+1;a($(".step:nth-child("+n+")"))}),$(n).find(".input").on("change",function(n){var o=$(n.target).parent().next(".step");!e()&&o.length>0?a(o):t()})}();