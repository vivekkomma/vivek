/*
WP Theme: medileaves - Technology & IT Solutions WordPress Theme
Author: powersquall.com
Version: 1.1  
Design and Developed by: Power Squall
*/

/*=============================================
[  Table of contents  ]
===============================================
:: Predefined Variables
:: Preloader
:: ClassAdd Loading
:: Check Exists
:: Header Sticky
:: Slicknav
:: Header Search
:: Header Sidemenu
:: Page Header Mobile
:: Swiper Slider
:: Magnific Popup
:: Progressbar
:: Portfolio Effect
:: Rounded Skill
:: Masonry
:: Isotope
:: Services Fancy
:: Sticky Footer
:: Countdown
:: Woocommerce SwitchToGrid
:: Back to Top
:: Image Hotspot
:: Mobile Click
:: Mobile Bottom Navbar
:: PowerSquall Window load and functions

==============================================
[ End table content ]
============================================*/


/*-------------------------*/
/* Predefined Variables */
/*-------------------------*/
(function($){
  "use strict";


/*-------------------------*/
/* Predefined Variables */
/*-------------------------*/
var PowerSquall = {},
    $window = $(window),
    $document = $(document),
    $body = $('body'),
    $bar = $('.bar'),
    $header = $('header'),
    $progressBar = $('.progress-bar'),
    $counter = $('.counter');


/*-------------------------*/
/* Preloader */
/*-------------------------*/ 
PowerSquall.preloader = function () {
    $('#preloader').delay(0).fadeOut('slow');
};

/*-------------------------*/
/* Class Add Loading */
/*-------------------------*/
PowerSquall.classAdd = function () {
  $('#site-header').removeClass('header-loading');
};

/*-------------------------*/
/* Check if Function Exists */
/*-------------------------*/
$.fn.exists = function () {
    return this.length > 0;
};

/*----------------------------*/
/* Header Sticky */
/*----------------------------*/
PowerSquall.stickyHeader = function () {
  var headerHeight = $('.site-header').height();
  var stickyHeaderheight = $('.site-header .header-main').height();
  $("#page").css("padding-top", (headerHeight) + "px");
  $(".header-transparnt .page-header").css("padding-top", (headerHeight) + "px");
  $(".header-transparnt-light .page-header").css("padding-top", (headerHeight) + "px");
  $(".elementor-column.sticky-top, .team-detail-info.sticky-top").css("top", (stickyHeaderheight) + 20 + "px");
  $(".admin-bar .elementor-column.sticky-top, .team-detail-info.sticky-top").css("top", (stickyHeaderheight) + 50 + "px");

  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
      $('.site-header.sticky-on').addClass('sticky');
    } else {
      $('.site-header.sticky-on').removeClass('sticky');
    }
  });
};

/*-------------------------*/
/* Slicknav */
/*-------------------------*/
PowerSquall.slickNav = function () {
  $('#menu').slicknav({prependTo:'#slicknav_menu'});
  $('.slicknav_nav').slicknav({
      label: '',
      prependTo:'.primary-nav #slicknav_menu',
      closedSymbol: "&#43;",  // Character after collapsed parents. "&#9658;"
      openedSymbol: "&#45;",  // Character after expanded parents. "&#9660;"
      allowParentLinks: true,  // Allow clickable links as parent elements. 
  });
};

/*-------------------------*/
/* Header Search */
/*-------------------------*/
PowerSquall.headerSearch = function () {
  $('.header-search .search-btn, #mobile-search').on('click', function() {
      $('.search-main').addClass('search-show');
  });

  $('.search-main .search-close, .search-main .search-overlay').on('click', function() {
      $(this).parent().removeClass('search-show');
  });
};

/*-------------------------*/
/* Header Sidemenu */
/*-------------------------*/
PowerSquall.headerSidemenu = function () {
  $('.site-header .header-sidemenu').on('click', function() {
      $('body').addClass('sidemenu-open');
  });

  $('.sidemenu-main .sidemenu-close, .sidemenu-main .sidemenu-overlay').on('click', function() {
      $('body').removeClass('sidemenu-open');
  });
};

/*-------------------------*/
/* Page Header - Mobile */
/*-------------------------*/
PowerSquall.pageHeaderMobile = function () {
  if ($(window).width() < 975) {
    $('.page-header').addClass('mobile-page-header');
  } else {
    $('.page-header').removeClass('mobile-page-header');
  }
};

/*-------------------------*/
/* Swiper Slider */
/*-------------------------*/
PowerSquall.swiperSlider = function () {
  $( '.swiper-container' ).each(function () {
      var swiper = new Swiper( $( this ), {
      slidesPerView:  (($(this).attr('data-items')) ? $(this).attr('data-items') : 4),
      spaceBetween:   (($(this).attr('data-space')) ? $(this).data('space') : 15),
      autoplay:       (($(this).attr('data-autoplay')) ? $(this).data('autoplay') : false),
      loop:           (($(this).attr('data-loop')) ? $(this).data('loop') : false),
      centeredSlides: (($(this).attr('data-centered')) ? $(this).data('centered') : false),
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1200: {slidesPerView: (($(this).attr('data-items')) ? $(this).attr('data-items') : 4),},
        992:  {slidesPerView: (($(this).attr('data-lg-items')) ? $(this).attr('data-lg-items') : 3),},
        768:  {slidesPerView: (($(this).attr('data-md-items')) ? $(this).attr('data-md-items') : 2),},
        480:  {slidesPerView: (($(this).attr('data-sm-items')) ? $(this).attr('data-sm-items') : 1),},
        0:  {slidesPerView: (($(this).attr('data-xs-items')) ? $(this).attr('data-xs-items') : 1),}
      }
      });
  });
};


/*-------------------------*/
/* Magnific Popup */
/*-------------------------*/
PowerSquall.mediaPopups = function () {
  if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
       $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
      });
  }
}

/*-------------------------*/
/* Progressbar */
/*-------------------------*/ 
PowerSquall.progressBar = function () {
    if ($progressBar.exists()) {
        $progressBar.each(function (i, elem) {
            var $elem = $(this),
                percent = $elem.attr('data-percent') || "100",
                delay = $elem.attr('data-delay') || "100",
                type = $elem.attr('data-type') || "%";
            if (!$elem.hasClass('progress-animated')) {
                $elem.css({
                    'width': '0%'
                });
            }
        var progressBarRun = function () {
            $elem.animate({
                'width': percent + '%'
            }, 'easeInOutCirc').addClass('progress-animated');
             $elem.delay(delay).append('<div class="progress-value"><span class="progress-number animated fadeIn">' + percent + '</span><span class="progress-type animated fadeIn">' + type + '</span></div>');
        };
        $(elem).appear(function () {
                setTimeout(function () {
                    progressBarRun();
                }, delay);
            });
        });
      }
};

/*-------------------------*/
/* Portfolio Effect */
/*-------------------------*/
PowerSquall.portfolioEffect = function () {
  $(document).on("click mousemove","body",function(e){
      if ($(".portfolio-wrapper").length > 0) {
        $(".portfolio-style-1 .portfolio-item").each(function () {
          let $Target = $(this);
          let $TargetInner = $Target.find(".item-info");
          let newposX = event.pageX - $Target.offset().left + 25;
          let newposY = event.pageY - $Target.offset().top + 25;
          $Target
            .mousemove(function (event) {
                $($TargetInner).css({left: +newposX+"px", top:+newposY+"px"});
            })
            .mouseleave(function () {
                $TargetInner.css({left: +newposX+"px", top:+newposY+"px"});
            });
        });
      }
  });
};

/*-------------------------*/
/* Parallax Banner */
/*-------------------------*/
PowerSquall.parallaxBanner = function () {
  if($(".parallax-banner").length != 0) {
     $('.js-scene').parallax();
  }
};

/*-------------------------*/
/* Parallax Image */
/*-------------------------*/
PowerSquall.parallaxImage = function () {
  $('.parallax-enable').each(function(i,o){
    $(this).scrollparallax();
  });
};

/*-------------------------*/
/* Counters Skill */
/*-------------------------*/
PowerSquall.counters = function () {
  if ($counter.exists()) {
    var timer = $('.timer');
      if(timer.length) {
        timer.appear(function () {
          timer.countTo();
      });
    }
  }
};

/*-------------------------*/
/* Rounded Skill */
/*-------------------------*/
PowerSquall.roundedSkill = function () {
      var $roundedSkillEl = $('.rounded-skill');
      if( $roundedSkillEl.length > 0 ){
        $roundedSkillEl.each(function(){
          var element = $(this);
          var roundSkillSize = element.attr('data-size');
          var roundSkillSpeed = element.attr('data-speed');
          var roundSkillWidth = element.attr('data-width');
          var roundSkillColor = element.attr('data-color');
          var roundSkillCap = element.attr('data-cap');
          var roundSkillTrackColor = element.attr('data-trackcolor');
          if( !roundSkillSize ) { roundSkillSize = 140; }
          if( !roundSkillSpeed ) { roundSkillSpeed = 2000; }
          if( !roundSkillWidth ) { roundSkillWidth = 8; }
          if( !roundSkillColor ) { roundSkillColor = '#0093BF'; }
          if( !roundSkillCap ) { roundSkillCap = 'square'; }
		     if( !roundSkillTrackColor ) { roundSkillTrackColor = 'rgba(200,200,200,0.2)'; }
          var properties = {roundSkillSize:roundSkillSize, roundSkillSpeed:roundSkillSpeed, roundSkillWidth:roundSkillWidth, roundSkillColor:roundSkillColor, roundSkillCap:roundSkillCap, roundSkillTrackColor:roundSkillTrackColor};
           element.css({'width':roundSkillSize+'px','height':roundSkillSize+'px','line-height':roundSkillSize+'px'}).animate({opacity:0}, 10);
            element.appear(function () {
              if (!element.hasClass('skills-animated')) {
                var t = setTimeout( function(){ element.css({opacity: 1}); }, 100 );
                runRoundedSkills( element, properties );
                element.addClass('skills-animated');
              }
            });
        });      

       }
    function runRoundedSkills( element, properties){
      element.easyPieChart({
        size: Number(properties.roundSkillSize),
        animate: Number(properties.roundSkillSpeed),
        scaleColor: false,
        trackColor: properties.roundSkillTrackColor,
        lineWidth: Number(properties.roundSkillWidth),
        lineCap: properties.roundSkillCap,
        barColor: properties.roundSkillColor
      });
    }
}


/*-------------------------*/
/* Masonry */
/*-------------------------*/
PowerSquall.masonry = function () {
    var $masonry = $('.masonry-main .masonry'),
      $itemElement = '.masonry-main .masonry-item';
      if ($masonry.exists()) {
        $masonry.isotope({
          resizable: true,
          itemSelector: $itemElement,
          masonry: {
            gutterWidth: 10
          }
        });
     }  
}

/*-------------------------*/
/* Isotope */
/*-------------------------*/
PowerSquall.Isotope = function () {
      if ($('.b-isotope').length > 0) {
        var $container = $('.b-isotope-grid');
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });

        // layout Isotope after each image loads
        $grid.imagesLoaded().progress(function() {
            $grid.isotope('layout');
        });
        // filter items when filter link is clicked
        $('.b-isotope-filter a').on('click', function() {
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector
            });
            return false;
        });
        $('.b-isotope-filter a').on('click', function() {
            $('.b-isotope-filter').find('.current').removeClass('current');
            $(this).parent().addClass('current');
        });
    }
}

/*-------------------------*/
/* Services Fancy */
/*-------------------------*/
PowerSquall.servicesEffect = function () {
    const tsHoverImg = gsap.utils.toArray(".services-fancy1-item");
    tsHoverImg.forEach((target) => {
        const tsImg = target.querySelector('.services-img');
        const t1 = gsap.timeline();
        t1.to(tsImg, {
            opacity: 1,
            duration: 0.3,
            scale: 1.0,
            ease: "Power2.easeOut"
        })
        target.tsHoverAnim = t1.play().reversed(true);
        target.addEventListener("mouseenter", tshoverimg);
        target.addEventListener("mouseleave", tshoverimg);
        target.addEventListener("mousemove", (e) => {
            let xpos = e.offsetX;
            let ypos = e.offsetY;
            const t1 = gsap.timeline();
            t1.to(tsImg, { x: xpos, y: ypos });
        });
    });

    function tshoverimg() {
        this.tsHoverAnim.reversed(!this.tsHoverAnim.reversed());
    }
}

/*-------------------------*/
/* Footer Sticky */
/*-------------------------*/
PowerSquall.footerSticky = function () {
  var footer = $(".site-footer").height();
  $(".sticky-footer .site-content-contain").css({'margin-bottom': footer})
}

/*-------------------------*/
/* Countdown */
/*-------------------------*/
PowerSquall.countdownTimer = function () {
  $('[data-countdown]').each(function () {
      var $this = $(this),
          finalDate = $(this).data('countdown');
      if (!$this.hasClass('countdown-full-format')) {
          $this.countdown(finalDate, function (event) {
              $this.html(event.strftime('<div class="single"><h3>%D</h3><span>Days</span></div> <div class="single"><h3>%H</h3><span>Hrs</span></div> <div class="single"><h3>%M</h3><span>Mins</span></div> <div class="single"><h3>%S</h3><span>Secs</span></div>'));
          });
      } else {
          $this.countdown(finalDate, function (event) {
              $this.html(event.strftime('<div class="single"><h3>%Y</h3><span>Years</span></div> <div class="single"><h3>%m</h3><span>Months</span></div> <div class="single"><h3>%W</h3><span>Weeks</span></div> <div class="single"><h3>%d</h3><span>Days</span></div> <div class="single"><h3>%H</h3><span>Hrs</span></div> <div class="single"><h3>%M</h3><span>Mins</span></div> <div class="single"><h3>%S</h3><span>Secs</span></div>'));
          });
      }
    });
};

/*----------------------------*/
/* Woocommerce SwitchToGrid */
/*----------------------------*/
PowerSquall.woocommerceSwitch = function () {
    $('.list.switchToGrid').on('click', function() {
        $('.products').addClass('product-grid-view');
        $('.products').removeClass('product-list-view');                        
    });
    
    $('.grid.switchToList').on('click', function() {  
        $('.products').removeClass('product-grid-view');               
        $('.products').addClass('product-list-view');                        
    });
};

/*-------------------------*/
/* Back to Top */
/*-------------------------*/
PowerSquall.goToTop = function () {
  var $goToTop = $('#back-to-top');
      $goToTop.hide();
    	$window.scroll(function(){
  		  if ($window.scrollTop()>100) $goToTop.fadeIn();
  		  else $goToTop.fadeOut();
  	  });

  	$goToTop.on("click", function () {
  		$('body,html').animate({scrollTop:0},1000);
  		return false;
    });
}

PowerSquall.mobileGoTop = function () {
  var $mobileGoTop = $('#mobile-go-top');
  $mobileGoTop.on("click", function () {
      $('body,html').animate({scrollTop:0},1000);
      $('body').removeClass('mobile-navbar_activated');
      return false;
  });
}

/*-------------------------*/
/* Image Hotspot */
/*-------------------------*/
PowerSquall.imageHotspot = function () {
  $(document).on('click', function(e) {
    if ($( e.target).parents('.image-hotspot').length === 0 ) {
      $('.image-hotspot').removeClass('hotspot-active');
    }
  });

  $('.image-hotspot').each(function() {
    $(this).on('click', function() {
      if ($(this).hasClass('hotspot-active')) {
        return;
      }
    $('.image-hotspot').removeClass('hotspot-active');
    $(this).addClass('hotspot-active');
    });
  });
}

/*-------------------------*/
/* Mobile Click */
/*-------------------------*/
PowerSquall.mobileClick = function () {
  $('.slicknav_btn').attr('id','slickbtn');
  if ($("#click-audio").exists()) {
      var audio = $("#click-audio")[0];
      $("#slickbtn, .navbar-trigger").click(function() {
          audio.volume = 0.7;
          audio.play();
      });
  }
}

/*-------------------------*/
/* Mobile Bottom Navbar */
/*-------------------------*/
PowerSquall.mobileBottomNavbar = function () {
    $(".navbar-trigger").click(function () {
        $("body").toggleClass("mobile-navbar_activated");
    });
};

/*===============================================*/
/* PowerSquall Window load and functions */
/*===============================================*/
//Window load Resize functions
$window.bind("load resize", function() {
    PowerSquall.pageHeaderMobile();
});

//Window load functions
$window.load(function () {
    PowerSquall.preloader(),
    PowerSquall.classAdd(),  
    PowerSquall.stickyHeader(),
    PowerSquall.slickNav(),
    PowerSquall.masonry(),
    PowerSquall.Isotope(),
    PowerSquall.servicesEffect(),
    PowerSquall.footerSticky(),
    PowerSquall.progressBar(),
    PowerSquall.imageHotspot(),
    PowerSquall.mobileClick();
});

//Document ready functions
$document.ready(function () {
	  PowerSquall.headerSearch(),
    PowerSquall.headerSidemenu(),
    PowerSquall.swiperSlider(),
    PowerSquall.mediaPopups(),
    PowerSquall.parallaxBanner(),
    PowerSquall.parallaxImage(),
    PowerSquall.portfolioEffect(),
    PowerSquall.counters(),
    PowerSquall.roundedSkill(),
    PowerSquall.countdownTimer(),
    PowerSquall.woocommerceSwitch(),
    PowerSquall.goToTop(),
    PowerSquall.mobileGoTop(),
    PowerSquall.mobileBottomNavbar(); 
});

})(jQuery);