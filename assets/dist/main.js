"use strict";!function(){var n=!1,o=0,i=$("[data-name=image-counter]").attr("content");console.log(i),console.log($(window).height()),$("#contact-form").on("submit",function(n){return function(n){console.log(n.formObject()),$.ajax({url:n.attr("action"),method:"POST",data:n.formObject(),dataType:"json"})}($(this)),n.preventDefault(),!1}),$("#sticky-navigation").removeClass("hidden"),$("#sticky-navigation").slideUp(0),setInterval(function(){o<i?o++:o=0,$("#gallery .inner").css({left:"-"+100*o+"%"})},2500),$(window).scroll(function(){var o=function(){var n=$("#description").height();return $(window).scrollTop()>$(window).height()-1.8*n}();o&&!n&&(console.log("Cambiar la navegacion"),n=!0,$("#description").addClass("fixed").removeClass("absolute"),$("#navigation").slideUp(),$("#sticky-navigation").slideDown()),!o&&n&&(console.log("volver a la navegacion"),n=!1,$("#description").removeClass("fixed").addClass("absolute"),$("#navigation").slideDown(),$("#sticky-navigation").slideUp())})}();
//# sourceMappingURL=main.js.map