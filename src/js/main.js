/*
 * Promocity
 */

//= partials/jquery-2.1.4.min.js

/*
 * Custom
 */

//= partials/owl.carousel.min.js
//= partials/jquery.cloud9carousel.js
//= partials/jquery.reflection.js
//= partials/slick.min.js
//= partials/odometer.min.js
//= partials/jquery.validate.min.js
//= partials/jquery.maskedinput.js

var globalPrice = 0;
function changeNumber() {
  priceResult = globalPrice;
    //перебираем блок
    $(".calc-item").each(function(index){
      //если выделен чекбокс
      if ($( this ).children("input").prop("checked") == true ){  
        //прибавляем цену
        priceResult = priceResult + parseInt($( this ).children("label").children(".calc-price").html());
      }
    });
    CalcOut(priceResult);
} // close changeNumber

function CalculatorSelectSiteType(el){//изменение страницы
  globalPrice = parseInt(el.find('.site-price').text());
  CalcOut(globalPrice);
}

function CalcOut(outprice_num){//вывод
    $('#odometer-site-visit').html(outprice_num);
    $('#odometer-landing').html(outprice_num);
    $('#odometer-corp-site').html(outprice_num);
    $('#odometer-present-site').html(outprice_num);
    $('#odometer-e-shop').html(outprice_num);
}

function ifCalcDetails(){//страница подробнее
  var calcdetails_price = parseInt($('.site-details-price').text());
  if (calcdetails_price){
    globalPrice = calcdetails_price;
    CalcOut(calcdetails_price);
  }
}

$(document).ready(function() {
  ifCalcDetails();
$(".calc-item").each(function(index){
  //добавляем каждому функцию при изменении с false на true: прибавляет общую цену
  $( this ).children("input").change(function(){
    changeNumber();
  });
  });
/* calculator.html
 *  -----------------------------------------------------------------------------*/

  $(".calc-block-faq").hover(function(){
    $(".faq-triangle").toggle();
  });


  $(".callback-label").click(function(){
    $('.callback').toggle("fast");
  });

  $(".call-request-label").click(function(){
    $('.call-request').toggle("fast");
  });

  $(".search-label").click(function(){
   $('.search').toggle("fast");
  });

  $(".photo-gallery-label").click(function(){
   $('.gallery').toggle("fast");
  });

  $(".online-advise-label").click(function(){
   $('.online-advise').toggle("fast");
  });

  $(".item-catalog-label").click(function(){
   $('.item-catalog').toggle("fast");
  });   

  $(".basket-label").click(function(){
   $('.basket-block').toggle("fast");
  });

  $(".slider-label").click(function(){
   $('.slider').toggle("fast");
  });

  $(".news-label").click(function(){
   $('.news').toggle("fast");
  });

  $(".banner-label").click(function(){
   $('.banner').toggle("fast");
  });

  $(".audio-label").click(function(){
   $('.audio').toggle("fast");
  });

  $(".video-label").click(function(){
   $('.video').toggle("fast");
  });

  $(".private-office-label").click(function(){
   $('.private-office').toggle("fast");
  });

  $(".blog-label").click(function(){
   $('.blog').toggle("fast");
  });

  $(".forum-label").click(function(){
   $('.forum').toggle("fast");
  });

  $(".robo-label").click(function(){
   $('.robo').toggle("fast");
  });

  $(".vk-label").click(function(){
   $('.calc-vk').toggle("fast");
  });

  $(".facebook-label").click(function(){
    $('.calc-fb').toggle("fast");
  });

  $(".classmate-label").click(function(){
    $('.calc-cm').toggle("fast");
  });

  $(".instagramm-label").click(function(){
    $('.calc-instag').toggle("fast");
  });

  $(".twit-label").click(function(){
    $('.calc-twit').toggle("fast");
  });

  hideAll();

  function hideAll() {
  $('.select-site-visit').hide();
  $('.select-landing-page').hide();
  $('.select-corp-site').hide();
  $('.select-present-site').hide();
  $('.select-e-shop').hide();
  $('.starter-img-wr').hide();
  $('.calc-section').hide();

  $("input[type=checkbox]").removeAttr("checked");

  $('.basket').hide();
  $('.search').hide();
  $('.callback').hide();
  $('.gallery').hide();
  $('.call-request').hide();
  $('.basket-block').hide();
  $('.item-catalog').hide();
  $('.online-advise').hide();
  $('.news').hide();
  $('.slider').hide();
  $('.banner').hide();
  $('.audio').hide();
  $('.video').hide();
  $('.private-office').hide();
  $('.robo').hide();
  $('.forum').hide();
  $('.blog').hide();
  $('.calc-vk').hide();
  $('.calc-fb').hide();
  $('.calc-cm').hide();
  $('.calc-instag').hide();
  $('.calc-twit').hide();

  $(".calc-item input[type=checkbox]:checked").css("background", "url(../img/calc/calc-uncheck.png) no-repeat 50% 50%");

    // changeNumber(0);
}

  $(".form-left").hide();

  $(".form-right").click(function(){
    $(".calc-submit").hide(300);
      $(".form-left").show(300);
      $(".form-right").hide();
      $(".form-hide-right").hide();      
  });

  $(".form-left").click(function(){
    $(".calc-submit").show(300);
    $(".form-left").hide();
    $(".form-right").show(300);
    $(".form-hide-right").show();  
  });

  /* HIDE ALL function -------------------------------------------------------------------------------- */
  function hideAllPanels() { /* возвращает сайт в исходное состояние */
    hideAll();

    /* скрываем открытые панели */
    $('#site-visit-tunning-outter').hide();
    $('#site-visit-add-option-outter').hide();
    $('#site-visit-calc-wr').hide();
    $('#site-visit-calc-total-price-wr').hide();
    $('#site-visit-site-order-outter').hide();

    $('#landing-tunning-outter').hide();
    $('#landing-add-option-outter').hide();
    $('#landing-calc-wr').hide();
    $('#landing-calc-total-price-wr').hide();    
    $('#landing-site-order-outter').hide();

    $('#corp-site-tunning-outter').hide();
    $('#corp-site-add-option-outter').hide();
    $('#corp-site-calc-wr').hide();
    $('#corp-site-calc-total-price-wr').hide();
    $('#corp-site-site-order-outter').hide();

    $('#present-site-tunning-outter').hide();
    $('#present-site-add-option-outter').hide();
    $('#present-site-calc-wr').hide();
    $('#present-site-calc-total-price-wr').hide();
    $('#present-site-order-outter').hide();

    $('#e-shop-tunning-outter').hide();
    $('#e-shop-add-option-outter').hide();
    $('#e-shop-calc-wr').hide();
    $('#e-shop-calc-total-price-wr').hide();
    $('#e-shop-order-outter').hide();

    $("#site-visit img").attr({ "src":"../img/calc/site-visit.png"});
    $("#landing img").attr({ "src":"../img/calc/landing.png"});
    $("#corp-site img").attr({ "src":"../img/calc/corp.png"});
    $("#present-site img").attr({ "src":"../img/calc/present.png"});
    $("#e-shop img").attr({ "src":"../img/calc/e-shop.png"});

    $(".site-item-inner-wr").css({ "background":"#b6e7fa"});
    $(".site-price").css({ "background":"#b6e7fa"});

    $('.animation-disc-site-visit').hide();
    $('.animation-disc-landing').hide();
    $('.animation-disc-corp-site').hide();
    $('.animation-disc-present').hide();
    $('.animation-disc-e-shop').hide();


  }
  /* LANDING --------------------------------------------------------------------------------------- */
  $("#landing").click(function(){
    hideAllPanels();

    /* открываем панели лендинга */
    $('#landing-tunning-outter').toggle("fast");
    $('#landing-add-option-outter').toggle("fast");
    $('#landing-calc-wr').toggle("fast");
    $('#landing-calc-total-price-wr').toggle("fast");
    $('#landing-site-order-outter').toggle("fast");

    /* меняем рисунок */
    $("#landing img").attr({ "src":"../img/calc/landing-active.png"});
    $("#landing .site-item-inner-wr").css({ "background":"#6dcff6"});
    $("#landing .site-price").css({ "background":"#6dcff6"});

    $('.animation-disc-landing').toggle();
    $(".animation-disc-landing li:nth-child(1)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(2)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(3)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.5s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(4)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.6s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(5)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.7s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(6)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.8s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(7)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.9s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(8)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(9)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.1s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(10)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.2s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(11)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(12)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(13)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.5s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(14)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.6s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(15)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.7s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(16)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.8s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(17)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.9s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(18)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(19)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.1s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(20)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.2s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(21)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(22)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(23)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.5s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(24)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.6s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(25)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.7s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(26)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.8s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(27)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.9s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(28)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(29)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.1s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(30)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.2s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(31)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(32)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-landing li:nth-child(33)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.5s", "animation-fill-mode":"forwards"});
      //changeNumber
    CalculatorSelectSiteType($(this));

    return false;
  });

  /* CORP SITE-------------------------------------------------------------------------------------- */
  $("#corp-site").click(function(){
    hideAllPanels();

    /* открываем панели лендинга */
    $('#corp-site-tunning-outter').toggle("fast");
    $('#corp-site-add-option-outter').toggle("fast");
    $('#corp-site-calc-wr').toggle("fast");
    $('#corp-site-calc-total-price-wr').toggle("fast");
    $('#corp-site-site-order-outter').toggle("fast");

    /* меняем рисунок */
    $("#corp-site img").attr({ "src":"../img/calc/corp-active.png"});
    $("#corp-site .site-item-inner-wr").css({ "background":"#6dcff6"});
    $("#corp-site .site-price").css({ "background":"#6dcff6"});

    $('.animation-disc-corp-site').toggle();
    $(".animation-disc-corp-site li:nth-child(1)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(2)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(3)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.5s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(4)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.6s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(5)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.7s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(6)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.8s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(7)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.9s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(8)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(9)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.1s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(10)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.2s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(11)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(12)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(13)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.5s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(14)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.6s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(15)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.7s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(16)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.8s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(17)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.9s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(18)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(19)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.1s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(20)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.2s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(21)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(22)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(23)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.5s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(24)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.6s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(25)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.7s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(26)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.8s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(27)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.9s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(28)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(29)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.1s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(30)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.2s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(31)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(32)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(33)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.5s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(34)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.6s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(35)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.7s", "animation-fill-mode":"forwards"});
    $(".animation-disc-corp-site li:nth-child(36)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.8s", "animation-fill-mode":"forwards"});
     
      //changeNumber
    CalculatorSelectSiteType($(this));

    return false;
  });

  /* PRESENTATION SITE--------------------------------------------------------------------------------- */
  $("#present-site").click(function(){
    hideAllPanels();

    /* открываем панели лендинга */
    $('#present-site-tunning-outter').toggle("fast");
    $('#present-site-add-option-outter').toggle("fast");
    $('#present-site-calc-wr').toggle("fast");
    $('#present-site-calc-total-price-wr').toggle("fast");
    $('#present-site-order-outter').toggle("fast");

    /* меняем рисунок */
    $("#present-site img").attr({ "src":"../img/calc/present-active.png"});
    $("#present-site .site-item-inner-wr").css({ "background":"#6dcff6"});
    $("#present-site .site-price").css({ "background":"#6dcff6"});


    $('.animation-disc-present').toggle();
    $(".animation-disc-present li:nth-child(1)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(2)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(3)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.5s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(4)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.6s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(5)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.7s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(6)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.8s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(7)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.9s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(8)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(9)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.1s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(10)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.2s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(11)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(12)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(13)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.5s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(14)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.6s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(15)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.7s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(16)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.8s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(17)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.9s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(18)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(19)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.1s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(20)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.2s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(21)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(22)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(23)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.5s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(24)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.6s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(25)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.7s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(26)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.8s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(27)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.9s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(28)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(29)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.1s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(30)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.2s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(31)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(32)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(33)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.5s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(34)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.6s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(35)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.7s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(36)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.8s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(37)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.9s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(38)").css({ "animation":"disc-appear 0.1s", "animation-delay":"4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-present li:nth-child(39)").css({ "animation":"disc-appear 0.1s", "animation-delay":"4.1s", "animation-fill-mode":"forwards"});
   
      //changeNumber
    CalculatorSelectSiteType($(this));

    return false;    
  });

  /* E-SHOP ------------------------------------------------------------------------------------------ */
  $("#e-shop").click(function(){
    hideAllPanels();

    /* открываем панели лендинга */
    $('#e-shop-tunning-outter').toggle("fast");
    $('#e-shop-add-option-outter').toggle("fast");
    $('#e-shop-calc-wr').toggle("fast");
    $('#e-shop-calc-total-price-wr').toggle("fast");
    $('#e-shop-order-outter').toggle("fast");

    /* меняем рисунок */
    $("#e-shop img").attr({ "src":"../img/calc/e-shop-active.png"});
    $("#e-shop .site-item-inner-wr").css({ "background":"#6dcff6"});
    $("#e-shop .site-price").css({ "background":"#6dcff6"});


    $('.animation-disc-e-shop').toggle();
    $(".animation-disc-e-shop li:nth-child(1)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(2)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(3)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.5s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(4)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.6s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(5)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.7s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(6)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.8s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(7)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.9s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(8)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(9)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.1s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(10)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.2s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(11)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(12)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(13)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.5s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(14)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.6s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(15)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.7s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(16)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.8s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(17)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.9s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(18)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(19)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.1s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(20)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.2s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(21)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(22)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(23)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.5s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(24)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.6s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(25)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.7s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(26)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.8s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(27)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.9s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(28)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(29)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.1s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(30)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.2s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(31)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(32)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(33)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.5s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(34)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.6s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(35)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.7s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(36)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.8s", "animation-fill-mode":"forwards"});
    $(".animation-disc-e-shop li:nth-child(37)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.9s", "animation-fill-mode":"forwards"});
      //changeNumber
    CalculatorSelectSiteType($(this));

    return false;
  });

  /* SITE VISIT ------------------------------------------------------------------------------------- */
  $("#site-visit").click(function(){
    hideAllPanels();

    $("#site-visit img").attr({ "src":"../img/calc/site-visit-active.png"});
    $("#site-visit .site-item-inner-wr").css({ "background":"#6dcff6"});
    $("#site-visit .site-price").css({ "background":"#6dcff6"});

    $('#site-visit-tunning-outter').toggle("fast");
    $('#site-visit-add-option-outter').toggle("fast");
    $('#site-visit-calc-wr').toggle("fast");
    $('#site-visit-calc-total-price-wr').toggle("fast");
    $('#site-visit-site-order-outter').toggle("fast");

    $('.animation-disc-site-visit').toggle();
    $(".animation-disc-site-visit li:nth-child(1)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(2)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(3)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.5s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(4)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.6s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(5)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.7s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(6)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.8s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(7)").css({ "animation":"disc-appear 0.1s", "animation-delay":"0.9s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(8)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(9)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.1s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(10)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.2s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(11)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(12)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(13)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.5s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(14)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.6s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(15)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.7s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(16)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.8s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(17)").css({ "animation":"disc-appear 0.1s", "animation-delay":"1.9s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(18)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(19)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.1s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(20)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.2s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(21)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(22)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(23)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.5s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(24)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.6s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(25)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.7s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(26)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.8s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(27)").css({ "animation":"disc-appear 0.1s", "animation-delay":"2.9s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(28)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(29)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.1s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(30)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.2s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(31)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.3s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(32)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.4s", "animation-fill-mode":"forwards"});
    $(".animation-disc-site-visit li:nth-child(33)").css({ "animation":"disc-appear 0.1s", "animation-delay":"3.5s", "animation-fill-mode":"forwards"});

      //changeNumber
  CalculatorSelectSiteType($(this));

    return false;
  });


showOnDetails();

  function showOnDetails() {
    $('.site-visit-details #site-visit-tunning-outter').show();
    $('.site-visit-details #site-visit-add-option-outter').show();
    $('.site-visit-details #site-visit-calc-wr').show();
    $('.site-visit-details #site-visit-site-order-outter').show();

    $('#landing-tunning-outter').hide();
    $('#landing-add-option-outter').hide();
    $('#landing-calc-wr').hide();
    $('#landing-site-order-outter').hide();

    $('#corp-site-tunning-outter').hide();
    $('#corp-site-add-option-outter').hide();
    $('#corp-site-calc-wr').hide();
    $('#corp-site-site-order-outter').hide();

    $('#present-site-tunning-outter').hide();
    $('#present-site-add-option-outter').hide();
    $('#present-site-calc-wr').hide();
    $('#present-site-order-outter').hide();

    $('#e-shop-tunning-outter').hide();
    $('#e-shop-add-option-outter').hide();
    $('#e-shop-calc-wr').hide();
    $('#e-shop-order-outter').hide();
    $('.animation-disc-site-visit').hide();
    $('.animation-disc-landing').hide();
    $('.animation-disc-corp-site').hide();
    $('.animation-disc-present').hide();
    $('.animation-disc-e-shop').hide();   
  }

/* calc form validate
-------------------------------------------------------------------------------------------------- */
/* comments.html validate */
 $('#form-site-visit-1').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

  $('#form-site-visit-2').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

 $('#form-landing-1').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

  $('#form-landing-2').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

 $('#form-corp-site-1').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

  $('#form-corp-site-2').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

 $('#form-present-site-1').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

  $('#form-present-site-2').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

 $('#form-e-shop-1').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

  $('#form-e-shop-2').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

 $('#form-site-visit-details-1').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

  $('#form-site-visit-details-2').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

 $('#form-landing-details-1').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

  $('#form-landing-details-2').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

 $('#form-corp-site-details-1').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

  $('#form-corp-site-details-2').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

  $('#form-present-site-details-1').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

  $('#form-present-site-details-2').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

 $('#form-e-shop-details-1').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

  $('#form-e-shop-details-2').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     }
   }
 });

  $('#order-form').validate({
   rules: {
     name: {
      required: true,
      minlength: 3      
     },
     tel: {
      required: true
     },
     service : {
      required: true
     }
   }, //end rules
   messages: {
     name: {
       required: "Пожалуйста введите Ф.И.О.",
       minlength: "Ф.И.О. не должны быть короче 3 символов."
     },
     tel: {
        required: "Заполните поле телефон."
     },
     service : {
      required: "Выберите тип услуги"
     }
   }
 });



  $(".calc-tel").mask("+7 (999) 999-9999");


/* INDEX.html
-------------------------------------------------------------------------------------------------- */
  $('.index-services').fadeIn(1300);


    new Image().src = '../img/index/spritesheet-active.png';

 $('.double-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.double-slider',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed: 6000,
  pauseOnHover : true
});











  $(".owl-carousel").owlCarousel({
    navigation: true,
    items : 1, 
    stopOnHover : true,
    lazyLoad : true,
    slideSpeed : 800,
    navigationText : false
  });

  $("#our-clients-owl-carousel").owlCarousel({
    navigation: false,
    items : 3, 
    stopOnHover : true,
    lazyLoad : true,
    slideSpeed : 800,
    navigationText : false,
    autoPlay : false,
    mouseDrag : false,
    touchDrag : false
  });
  
  $("#owl-responses-our-clients").owlCarousel({
    navigation: true,
    items : 5, 
    stopOnHover : true,
    lazyLoad : true,
    slideSpeed : 800,
    navigationText : false,
    autoPlay : false,
    mouseDrag : false,
    touchDrag : false
  });

  $(".our-projects").owlCarousel({
    items : 6
  });

  // $(".about-specialist-gallery").owlCarousel({
  //   items : 9
  // });

  $(".specialist-item").click(function(){

    $(this).children(".specialist-text").toggle(300); // end toggle
  });

  showcaseOne();
  hideAllExpand();
  shocaseBtn();

  function hideAllExpand() {
    $(".project-expand-item-1").css({ "z-index":"-20"});
    $(".project-expand-item-1").css({ "width":"0"});
    $("#expand-item-1-close").hide();
    $(".showcase-1-wr").hide();

    $(".project-expand-item-2").css({ "z-index":"-20"});
    $(".project-expand-item-2").css({ "width":"0"});
    $("#expand-item-2-close").hide();
    $(".showcase-2-wr").hide();

    $(".project-expand-item-3").css({ "z-index":"-20"});
    $(".project-expand-item-3").css({ "width":"0"});
    $("#expand-item-3-close").hide();
    $(".showcase-3-wr").hide();

    $(".project-expand-item-4").css({ "z-index":"-20"});
    $(".project-expand-item-4").css({ "width":"0"});
    $("#expand-item-4-close").hide();
    $(".showcase-4-wr").hide();

    $(".project-expand-item-5").css({ "z-index":"-20"});
    $(".project-expand-item-5").css({ "width":"0"});
    $("#expand-item-5-close").hide();
    $(".showcase-5-wr").hide();

    $(".project-expand-item-6").css({ "z-index":"-20"});
    $(".project-expand-item-6").css({ "width":"0"});
    $("#expand-item-6-close").hide();
    $(".showcase-6-wr").hide();

    $(".project-expand-item-7").css({ "z-index":"-20"});
    $(".project-expand-item-7").css({ "width":"0"});
    $("#expand-item-7-close").hide();
    $(".showcase-7-wr").hide();

    $(".project-expand-item-8").css({ "z-index":"-20"});
    $(".project-expand-item-8").css({ "width":"0"});
    $("#expand-item-8-close").hide();
    $(".showcase-8-wr").hide();
  }

  function shocaseBtn() {
    $("#expand-item-1-close").click(function(){
      $("#expand-item-1-close").hide();
      $(".showcase-1-wr").hide();
      $(".project-expand-item-1").animate({ "width":"0"}, 1100, function() {
        $(".project-expand-item-1").css({ "z-index":"-20"});
      });
    });

    $("#expand-item-1-open").click(function(){
      $(".project-expand-item-1").css({ "z-index":"40"});
      $(".project-expand-item-1").animate({ "width":"1371px"}, 1100);
      setTimeout(function() {
        $(".showcase-1-wr").fadeIn();
      }, 1100);
      $("#expand-item-1-close").show(); 
    });

    $("#expand-item-2-close").click(function(){
      $("#expand-item-2-close").hide();
      $(".showcase-2-wr").hide();
      $(".project-expand-item-2").animate({ "width":"0"}, 1100, function() {
        $(".project-expand-item-2").css({ "z-index":"-20"});
      });
    });

    $("#expand-item-2-open").click(function(){
      $(".project-expand-item-2").css({ "z-index":"40"});
      $(".project-expand-item-2").animate({ "width":"1371px"}, 1100);
      setTimeout(function() {
        $(".showcase-2-wr").fadeIn();
      }, 1100);
      $("#expand-item-2-close").show(); 
    });

    $("#expand-item-3-close").click(function(){
      $("#expand-item-3-close").hide();
      $(".showcase-3-wr").hide();
      $(".project-expand-item-3").animate({ "width":"0"}, 1100, function() {
        $(".project-expand-item-3").css({ "z-index":"-20"});
      });
    });

    $("#expand-item-3-open").click(function(){
      $(".project-expand-item-3").css({ "z-index":"40"});
      $(".project-expand-item-3").animate({ "width":"1371px"}, 1100);
      setTimeout(function() {
        $(".showcase-3-wr").fadeIn();
      }, 1100);
      $("#expand-item-3-close").show(); 
    });

    $("#expand-item-4-close").click(function(){
      $("#expand-item-4-close").hide();
      $(".showcase-4-wr").hide();
      $(".project-expand-item-4").animate({ "width":"0"}, 1100, function() {
        $(".project-expand-item-4").css({ "z-index":"-20"});
      });
    });

    $("#expand-item-4-open").click(function(){
      $(".project-expand-item-4").css({ "z-index":"40"});
      $(".project-expand-item-4").animate({ "width":"1371px"}, 1100);
      setTimeout(function() {
        $(".showcase-4-wr").fadeIn();
      }, 1100);
      $("#expand-item-4-close").show(); 
    });

    $("#expand-item-5-close").click(function(){
      $("#expand-item-5-close").hide();
      $(".showcase-5-wr").hide();
      $(".project-expand-item-5").animate({ "width":"0"}, 1100, function() {
        $(".project-expand-item-5").css({ "z-index":"-20"});
      });
    });

    $("#expand-item-5-open").click(function(){
      $(".project-expand-item-5").css({ "z-index":"40"});
      $(".project-expand-item-5").animate({ "width":"1371px"}, 1100);
      setTimeout(function() {
        $(".showcase-5-wr").fadeIn();
      }, 1100);
      $("#expand-item-5-close").show(); 
    });

    $("#expand-item-6-close").click(function(){
      $("#expand-item-6-close").hide();
      $(".showcase-6-wr").hide();
      $(".project-expand-item-6").animate({ "width":"0"}, 1100, function() {
        $(".project-expand-item-6").css({ "z-index":"-20"});
      });
    });

    $("#expand-item-6-open").click(function(){
      $(".project-expand-item-6").css({ "z-index":"40"});
      $(".project-expand-item-6").animate({ "width":"1371px"}, 1100);
      setTimeout(function() {
        $(".showcase-6-wr").fadeIn();
      }, 1100);
      $("#expand-item-6-close").show(); 
    });

    $("#expand-item-7-close").click(function(){
      $("#expand-item-7-close").hide();
      $(".showcase-7-wr").hide();
      $(".project-expand-item-7").animate({ "width":"0"}, 1100, function() {
        $(".project-expand-item-7").css({ "z-index":"-20"});
      });
    });

    $("#expand-item-7-open").click(function(){
      $(".project-expand-item-7").css({ "z-index":"40"});
      $(".project-expand-item-7").animate({ "width":"1371px"}, 1100);
      setTimeout(function() {
        $(".showcase-7-wr").fadeIn();
      }, 1100);
      $("#expand-item-7-close").show(); 
    });

    $("#expand-item-8-close").click(function(){
      $("#expand-item-8-close").hide();
      $(".showcase-8-wr").hide();
      $(".project-expand-item-8").animate({ "width":"0"}, 1100, function() {
        $(".project-expand-item-8").css({ "z-index":"-20"});
      });
    });

    $("#expand-item-8-open").click(function(){
      $(".project-expand-item-8").css({ "z-index":"40"});
      $(".project-expand-item-8").animate({ "width":"1371px"}, 1100);
      setTimeout(function() {
        $(".showcase-8-wr").fadeIn();
      }, 1100);
      $("#expand-item-8-close").show(); 
    });
  }
  




  function showcaseOne() {
    var showcase = $(".showcase")
      showcase.Cloud9Carousel( {
        yPos: 42,
        yRadius: 48,
        mirrorOptions: {
          gap: 12,
          height: 0.2
        },
        autoPlay: false,
        bringToFront: true,
        onRendered: showcaseUpdated,
        onLoaded: function() {
          showcase.css( 'visibility', 'visible' )
          showcase.css( 'display', 'none' )
          showcase.fadeIn( 500 )
        }
      } )

      function showcaseUpdated( showcase ) {
        var title = $('#item-title').html(
          $(showcase.nearestItem()).attr( 'alt' )
        )
        var c = Math.cos((showcase.floatIndex() % 1) * 2 * Math.PI)
        title.css('opacity', 0.5 + (0.5 * c))
      } 
  } // close showcaseOne()

});







//ajax_form
function checktext(str){
  if (!str){
    return '';
  }else{
    return str;
  }
}

function OrderForm(){
  $.ajax({
        type: "POST",
        url: "/actions.php",
        data: 'action=orderform'+
              '&order_name='+$('#order-name').val()+
              '&order_tel='+$('#order-tel').val()+
        '&order_email='+$('#order-email').val()+
        '&order_service='+$('#order-service option:selected').text()+
        '&order_packet='+$('#order-packet option:selected').text()+
        '&order_comments='+$('#order-comments').val()+
        '&contacts_email='+$('#contacts_email').text(),
        success: function(data){
      //успешно
      console.log(data);
        }
    });
}

function getuslugi(){
  var restext = '';
  $(".calc-item").each(function(index){
    //если выделен чекбокс
    if ($( this ).children("input").prop("checked") == true ){  
    //прибавляем цену
    restext = restext + $( this ).children("label").children(".calc-item-name").html() + ";";
    }
  });
  return restext
}

//на страницах подробнее
function CalcFormZakaz_1(){
  $.ajax({
        type: "POST",
        url: "/actions.php",
        data: 'action=calcformzakaz_1'+
              '&zakaz_name='+$('#zakaz-1-name').val()+
              '&zakaz_tel='+$('#zakaz-1-tel').val()+
        '&zakaz_email='+$('#zakaz-1-email').val()+
        '&zakaz_uslugi='+getuslugi()+
        '&zakaz_sitetype='+$('.about-head').text()+
        '&zakaz_price='+globalPrice+
        '&contacts_email='+$('#contacts_email').text(),
        success: function(data){
      //успешно
      console.log(data);
        }
    });
}
function CalcFormZakaz_2(){
  $.ajax({
        type: "POST",
        url: "/actions.php",
        data: 'action=calcformzakaz_2'+
              '&zakaz_name='+$('#zakaz-2-name').val()+
              '&zakaz_tel='+$('#zakaz-2-tel').val()+
        '&zakaz_email='+$('#zakaz-2-email').val()+
        '&zakaz_uslugi='+getuslugi()+
        '&zakaz_sitetype='+$('.about-head').text()+
        '&zakaz_price='+globalPrice+
        '&contacts_email='+$('#contacts_email').text(),
        success: function(data){
      //успешно
      console.log(data);
        }
    });
}

//сайт визитка
function CalcFormZakaz_1_site_vizit(){
  $.ajax({
        type: "POST",
        url: "/actions.php",
        data: 'action=calcformzakaz_1'+
              '&zakaz_name='+$('#zakaz-1-name-visit').val()+
              '&zakaz_tel='+$('#zakaz-1-tel-visit').val()+
        '&zakaz_email='+$('#zakaz-1-email-visit').val()+
        '&zakaz_uslugi='+getuslugi()+
        '&zakaz_sitetype='+'Сайт-визитка'+
        '&zakaz_price='+globalPrice+
        '&contacts_email='+$('#contacts_email').text(),
        success: function(data){
      //успешно
      console.log(data);
        }
    });
}
function CalcFormZakaz_2_site_vizit(){
  $.ajax({
        type: "POST",
        url: "/actions.php",
        data: 'action=calcformzakaz_2'+
              '&zakaz_name='+$('#zakaz-2-name-visit').val()+
              '&zakaz_tel='+$('#zakaz-2-tel-visit').val()+
        '&zakaz_email='+$('#zakaz-2-email-visit').val()+
        '&zakaz_uslugi='+getuslugi()+
        '&zakaz_sitetype='+'Сайт-визитка'+
        '&zakaz_price='+globalPrice+
        '&contacts_email='+$('#contacts_email').text(),
        success: function(data){
      //успешно
      console.log(data);
        }
    });
}

//Лендинг
function CalcFormZakaz_1_landing(){
  $.ajax({
        type: "POST",
        url: "/actions.php",
        data: 'action=calcformzakaz_1'+
              '&zakaz_name='+$('#zakaz-1-name-landing').val()+
              '&zakaz_tel='+$('#zakaz-1-tel-landing').val()+
        '&zakaz_email='+$('#zakaz-1-email-landing').val()+
        '&zakaz_uslugi='+getuslugi()+
        '&zakaz_sitetype='+'Лендинг'+
        '&zakaz_price='+globalPrice+
        '&contacts_email='+$('#contacts_email').text(),
        success: function(data){
      //успешно
      console.log(data);
        }
    });
}
function CalcFormZakaz_2_landing(){
  $.ajax({
        type: "POST",
        url: "/actions.php",
        data: 'action=calcformzakaz_2'+
              '&zakaz_name='+$('#zakaz-2-name-landing').val()+
              '&zakaz_tel='+$('#zakaz-2-tel-landing').val()+
        '&zakaz_email='+$('#zakaz-2-email-landing').val()+
        '&zakaz_uslugi='+getuslugi()+
        '&zakaz_sitetype='+'Лендинг'+
        '&zakaz_price='+globalPrice+
        '&contacts_email='+$('#contacts_email').text(),
        success: function(data){
      //успешно
      console.log(data);
        }
    });
}

//Корпоративный
function CalcFormZakaz_1_corp(){
  $.ajax({
        type: "POST",
        url: "/actions.php",
        data: 'action=calcformzakaz_1'+
              '&zakaz_name='+$('#zakaz-1-name-corp').val()+
              '&zakaz_tel='+$('#zakaz-1-tel-corp').val()+
        '&zakaz_email='+$('#zakaz-1-email-corp').val()+
        '&zakaz_uslugi='+getuslugi()+
        '&zakaz_sitetype='+'Корпоративный'+
        '&zakaz_price='+globalPrice+
        '&contacts_email='+$('#contacts_email').text(),
        success: function(data){
      //успешно
      console.log(data);
        }
    });
}
function CalcFormZakaz_2_corp(){
  $.ajax({
        type: "POST",
        url: "/actions.php",
        data: 'action=calcformzakaz_2'+
              '&zakaz_name='+$('#zakaz-2-name-corp').val()+
              '&zakaz_tel='+$('#zakaz-2-tel-corp').val()+
        '&zakaz_email='+$('#zakaz-2-email-corp').val()+
        '&zakaz_uslugi='+getuslugi()+
        '&zakaz_sitetype='+'Корпоративный'+
        '&zakaz_price='+globalPrice+
        '&contacts_email='+$('#contacts_email').text(),
        success: function(data){
      //успешно
      console.log(data);
        }
    });
}

//каталог
function CalcFormZakaz_1_catalog(){
  $.ajax({
        type: "POST",
        url: "/actions.php",
        data: 'action=calcformzakaz_1'+
              '&zakaz_name='+$('#zakaz-1-name-catalog').val()+
              '&zakaz_tel='+$('#zakaz-1-tel-catalog').val()+
        '&zakaz_email='+$('#zakaz-1-email-catalog').val()+
        '&zakaz_uslugi='+getuslugi()+
        '&zakaz_sitetype='+'Сайт-каталог'+
        '&zakaz_price='+globalPrice+
        '&contacts_email='+$('#contacts_email').text(),
        success: function(data){
      //успешно
      console.log(data);
        }
    });
}
function CalcFormZakaz_2_catalog(){
  $.ajax({
        type: "POST",
        url: "/actions.php",
        data: 'action=calcformzakaz_2'+
              '&zakaz_name='+$('#zakaz-2-name-catalog').val()+
              '&zakaz_tel='+$('#zakaz-2-tel-catalog').val()+
        '&zakaz_email='+$('#zakaz-2-email-catalog').val()+
        '&zakaz_uslugi='+getuslugi()+
        '&zakaz_sitetype='+'Сайт-каталог'+
        '&zakaz_price='+globalPrice+
        '&contacts_email='+$('#contacts_email').text(),
        success: function(data){
      //успешно
      console.log(data);
        }
    });
}

//интернет магазин
function CalcFormZakaz_1_shop(){
  $.ajax({
        type: "POST",
        url: "/actions.php",
        data: 'action=calcformzakaz_1'+
              '&zakaz_name='+$('#zakaz-1-name-shop').val()+
              '&zakaz_tel='+$('#zakaz-1-tel-shop').val()+
        '&zakaz_email='+$('#zakaz-1-email-shop').val()+
        '&zakaz_uslugi='+getuslugi()+
        '&zakaz_sitetype='+'Интернет-магазин'+
        '&zakaz_price='+globalPrice+
        '&contacts_email='+$('#contacts_email').text(),
        success: function(data){
      //успешно
      console.log(data);
        }
    });
}
function CalcFormZakaz_2_shop(){
  $.ajax({
        type: "POST",
        url: "/actions.php",
        data: 'action=calcformzakaz_2'+
              '&zakaz_name='+$('#zakaz-2-name-shop').val()+
              '&zakaz_tel='+$('#zakaz-2-tel-shop').val()+
        '&zakaz_email='+$('#zakaz-2-email-shop').val()+
        '&zakaz_uslugi='+getuslugi()+
        '&zakaz_sitetype='+'Интернет-магазин'+
        '&zakaz_price='+globalPrice+
        '&contacts_email='+$('#contacts_email').text(),
        success: function(data){
      //успешно
      console.log(data);
        }
    });
}

function completePageShow() {
  window.location.href="complete-form.html";
}

