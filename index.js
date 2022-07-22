// ハンバーガーメニュー
$(function() {
  $('.l-header-hamburger').on('click', function(){
    hamburger();
  }); 
  function hamburger() {  
    $('.l-header-hamburger').toggleClass('active');    
    if ($('.l-header-hamburger').hasClass('active')) {  //l-header-hamburgerクラスにactiveクラスが存在する場合
      $('.l-header-spMenu').addClass('active');  //l-header-spMenuにもactiveクラスを追加する
    } else {  // hamburgerクラスにactiveクラスが存在しない場合
      $('.l-header-spMenu').removeClass('active');//l-header-spMenuからactiveクラスを削除する
    }
    if ($('.l-header-hamburger').hasClass('active')) {  //l-header-hamburgerクラスにactiveクラスが存在する場合
      $('.l-header__logo').addClass('active');  //l-header__logoにもactiveクラスを追加する
    } else {  // hamburgerクラスにactiveクラスが存在しない場合
      $('.l-header__logo').removeClass('active');//l-header__logoからactiveクラスを削除する
    }

    if ($('.l-header-hamburger').hasClass('active')) {
      $('.l-header').addClass('open');
    } else {
      $('.l-header').removeClass('open');
    }
    $('.l-header-spMenu__link').on('click', function() {
      $('.l-header-hamburger').removeClass('active');
      $('.l-header-spMenu').removeClass('active');
      $('.l-header').removeClass('open');
    });
    $('#mask').on('click', function() {
      // openクラスを削除して、メニューを閉じる
      $('.l-header-hamburger').removeClass('active');
      $('.l-header-spMenu').removeClass('active');
      $('.l-header').removeClass('open');
    });
  }

  // スムーススクロール
  $('a[href^="#"]').click(function(){
    var href= $(this).attr("href");  //出発地点取得
    var target= $(href == "#" || href == "" ? 'html' : href);  //到着地点取得
    var position = target.offset().top;  //到着地点をtopからの数値で取得
    $("html,body").animate({scrollTop:position}, 600, "swing");
  });
  
  //ページトップへ戻る
  var $pageTop = $(".c-pageTop");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $pageTop.fadeIn();
    } else {
      $pageTop.fadeOut();
    }
  });
  $pageTop.on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
  
  //ヘッダー
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".l-header__inner").addClass("is-active");
    } else {
      $(".l-header__inner").removeClass("is-active");
    }
  });
});



//swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 4000,
  },
  speed: 500,
  loop: true,
  effect: "fade",


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
