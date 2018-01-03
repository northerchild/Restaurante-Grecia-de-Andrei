"use strict";

!function () {
  function t() {
    if (e()) !function () {
      var t = $(n);console.log(t.formObject()), $.ajax({ url: t.attr("action"), method: "POST", data: t.formObject(), dataType: "json", success: function success() {
          console.log("Hola"), t.slideUp(), $("#info-contacto").html("Enviamos tu mensaje, muy pronto estaremos en contacto contigo.");
        } });
    }();else {
      a($(n).find(".input:invalid").first().parent());
    }
  }function e() {
    return document.querySelector(n).checkValidity();
  }function a(t) {
    $(".step.active").removeClass("active"), t.addClass("active"), t.find(".input").focus();var e = 2 * t.index(".step") + 1;$(".path-step.active").removeClass("active"), $(".path-step:nth-child(" + e + ")").addClass("active");
  }var n = "#contact-form";$(".step textarea").on("keydown", function (t) {
    13 == t.keyCode && (t.preventDefault(), $(t.target).blur());
  }), $(".path-step").on("click", function (t) {
    var e = $(t.target);$(".path-step.active").removeClass("active"), e.addClass("active");var n = e.index(".path-step") + 1;a($(".step:nth-child(" + n + ")"));
  }), $(n).find(".input").on("change", function (n) {
    var o = $(n.target).parent().next(".step");!e() && o.length > 0 ? a(o) : t();
  });
}();
//# sourceMappingURL=steps.js.map