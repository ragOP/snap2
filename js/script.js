function scrollToTop(){var e=$("header").outerHeight(!0),t=$("#steps-container").offset().top-(e+30);$("html, body").animate({scrollTop:t},1e3)}$(document).ready((function(){$(".step");window.history&&window.history.pushState&&(window.history.pushState("forward",null,""),$(window).on("popstate",(function(){modal.addClass("visible")}))),$("#btnGray").on("click",(function(){var e=$(this).attr("data-url");window.location.href=e})),$("#carriers-slide-1").slick({dots:!1,arrows:!1,slidesToShow:7,slidesToScroll:1,autoplay:!0,autoplaySpeed:0,speed:2e3,cssEase:"linear",infinite:!0,variableWidth:!0,responsive:[{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}),$("#carriers-slide-2").slick({dots:!1,arrows:!1,slidesToShow:7,slidesToScroll:1,autoplay:!0,autoplaySpeed:0,speed:2e3,cssEase:"linear",infinite:!0,variableWidth:!0,rtl:!0,responsive:[{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:480,settings:{slidesToShow:1}}]}),$(".initialBtn").on("click",(function(){$("#questiontag").fadeOut(500),$("#main").fadeOut(500,(function(){$("#step1, #steps-container").fadeIn(500)})),$("#flexcard, #flexcardbenfits, #carriers, #flexsteps").fadeOut(500),$(".percent-value").text("25%"),$(".percent").css("width","25%"),scrollToTop()})),$(".btn1, .skip1").on("click",(function(){var e=$(this).attr("data-value");$("#medicare").val(e),$("#step1").fadeOut(500,(function(){$("#step2").fadeIn(500)})),scrollToTop(),$(".percent-value").text("50%"),$(".percent").css("width","50%"),"yes"==e?$("#list1").addClass("yes"):$("#list1").addClass("no")})),$(".btn2, .skip2").on("click",(function(){var e=$(this).attr("data-value");$("#benefit").val(e),$(".percent-value").text("75%"),$(".percent").css("width","75%"),"yes"==e?$("#list2").addClass("yes"):$("#list2").addClass("no"),$("#step2").fadeOut(500,(function(){$("#step3").fadeIn(500),setTimeout((function(){$(".stepper-item1").removeClass("active").addClass("completed"),$(".stepper-item2").addClass("active"),$("#list1").fadeIn(500),setTimeout((function(){$(".stepper-item2").removeClass("active").addClass("completed"),$(".stepper-item3").addClass("active"),$("#list2").fadeIn(500),setTimeout((function(){$(".stepper-item3").removeClass("active").addClass("completed"),$(".stepper-item4").addClass("active"),setTimeout((function(){$(".stepper-item4").removeClass("active").addClass("completed"),$(".percent-value").text("100%"),$(".percent").css("width","100%"),$("#step3").fadeOut(500,(function(){$(".wizard-title").fadeOut(500),$(".progress").fadeOut(500),$("#step4").fadeIn(500),$("#flexcard1").length&&$("#flexcard1").addClass("mobile")}))}),1500)}),1500)}),1500)}),1500)})),scrollToTop()})),$(".btn3, .skip3").on("click",(function(){var e=$(this).attr("data-value");$("#benefit").val(e),"yes"==e?$("#list3").addClass("yes"):$("#list3").addClass("no"),$("#step3").fadeOut(500,(function(){$("#step4").fadeIn(500),setTimeout((function(){$(".stepper-item1").removeClass("active").addClass("completed"),$(".stepper-item2").addClass("active"),$("#list1").fadeIn(500),setTimeout((function(){$(".stepper-item2").removeClass("active").addClass("completed"),$(".stepper-item3").addClass("active"),$("#list2").fadeIn(500),setTimeout((function(){$(".stepper-item3").removeClass("active").addClass("completed"),$(".stepper-item4").addClass("active"),$("#list3").fadeIn(500),setTimeout((function(){$(".stepper-item4").removeClass("active").addClass("completed"),$(".percent-value").text("100%"),$(".percent").css("width","100%"),$("#step4").fadeOut(500,(function(){$(".wizard-title").fadeOut(500),$(".progress").fadeOut(500),$("#step5").fadeIn(500)}))}),1500)}),1500)}),1500)}),1500)})),scrollToTop()}))}));var modal=$("#modal-custom"),modal_close=$("#modal_close");modal_close.on("click",(function(){modal.removeClass("visible")})),$(document).click((function(e){$(e.target).is("#modal-custom")&&$("#modal-custom").removeClass("visible")}));