/**
 * @Author:      allenAugustine
 * @DateTime:    2017-10-17 15:35:39
 * @Description: application entry
 */
require.config({
  baseUrl: './',
  paths: {
    'jquery': 'libarys/jquery.min',
    'fullpage': 'libarys/jquery.fullpage',
    'swiper': 'libarys/swiper.jquery.min',
    'scene': 'scripts/scene',
    'nav': 'scripts/nav',
    'carousel': 'scripts/carousel',
    // 'ware': 'scripts/ware',
    'data': 'scripts/data',
    'animates': 'scripts/animates'
  }
});

define(['jquery', 'fullpage', 'nav', 'scene', 'swiper', 'carousel', /*'ware',*/ 'data', 'animates'],
  function($, fullpage, nav, Scene, Swiper, carousel, /*ware,*/ data, Animates) {

    //展示案例详情
    function showCase(pop, title, desc, contentimg, that) {
      pop.css('z-index', 10000);
      pop.animate({ 'opacity': 1 });
      title.html(that.data('name'));
      desc.html(that.data('desc'));
      var tempImg = new Image();
      tempImg.src = that.data('sourceimg');
      contentimg.html(' ');
      tempImg.onload = function() {
        contentimg.html(this);
        new Swiper('#pop_content', {
          scrollbar: '.swiper-scrollbar',
          direction: 'vertical',
          slidesPerView: 'auto',
          freeMode: true,
          freeModeMomentum: false,
          mousewheelControl: true,
          mousewheelSensitivity: 0.5
        });
      };
    }
    $(function() {
      setTimeout(function() {
        document.querySelector('.loading-layer').style.display = "none";
        $('.btn-group li').addClass('fadeInUp');
        $('#index_page .rside').addClass('fadeInRight');
      }, 10);
      //建立场景
      new Scene(nav, Animates);
      // ware('#index_page .container', 0xff0000);
      $('#pop_content')[0].style.height = $(window).height() - 50 + 'px';
      /*=================================================================
      =                     pop 关闭按钮点击事件                        =
      =================================================================*/
      $('.closeBtn').on('click', function() {
        $('.pop').animate({
          opacity: 0
        }, 500, function() {
          $(this).css('z-index', -1);
        });
      });

      /*=================================================================
      =                     index_page 按钮触碰效果                     =
      =================================================================*/
      $('#index_page .lside .btn-group .btn').hover(function() {
        $(this).prev().css({
          'transform': 'scale(1.2)'
        });
      }, function() {
        $(this).prev().css({
          'transform': 'scale(1)'
        });
      });

      /*=================================================================
      =                            背景图加载                           =
      =================================================================*/
        $('#mall_page').css('background-image', 'url(images/mall_bg.jpg)');
      if ($(window).width() < 768) {
        $('#small_program_page').css('background-image', 'url(images/small_program_bg_mobile.jpg)');
        $('#website_page').css('background-image', 'url(images/website_bg_mobile.jpg)');
        $('#seo_page').css('background-image', 'url(images/seo_bg_mobile.jpg)');
        $('#contact_page').css('background-image', 'url(images/contact_bg_mobile.jpg)');
        $('#engineering_page').css('background-image', 'url(images/engineering_bg_mobile.jpg)');
        $('#drp_page').css('background-image', 'url(images/drp_bg_mobile.jpg)');
      } else {
        $('#small_program_page').css('background-image', 'url(images/small_program_bg_pc.jpg)');
        $('#website_page').css('background-image', 'url(images/website_bg_pc.jpg)');
        $('#seo_page').css('background-image', 'url(images/seo_bg_pc.jpg)');
        $('#contact_page').css('background-image', 'url(images/contact_bg_pc.jpg)');
        $('#engineering_page').css('background-image', 'url(images/engineering_bg_pc.jpg)');
        $('#drp_page').css('background-image', 'url(images/drp_bg_pc.jpg)');
      }

      var timer,
        pop = $('.pop'), //弹出层
        title = $('.case-content-title'), //弹出层标题盒子
        contentimg = $('.case-content-img'), //弹出层内容盒子
        desc = $('.case-content-desc'); //弹出层描述盒子

      $(window).on('resize', function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
          var windowWidth = $(window).width(),
            windowHeight = $(window).height(),
            containerHeight = $('#case_page .container').height(),
            carouselBox = $('#case_page .carousel');

          $('.slide-line').css('width', $("#fullpageMenu .nav-menu").eq(0).width());

          /*=================================================================
          =                         大小屏图片源切换                        =
          =================================================================*/
          if (windowWidth < 1200) {
            $('.media-img').each(function(index, item) {
              if (!item.flag || item.flag != 'xs') {
                item.src = $(item).attr('data-xs-src');
                item.flag = 'xs';
              }
            });
          } else {
            $('.media-img').each(function(index, item) {
              if (!item.flag || item.flag != 'lg') {
                item.src = $(item).attr('data-lg-src');
                item.flag = 'lg';
              }
            });
          }

          /*=================================================================
          =                            案例响应式                           =
          =================================================================*/
          var dom = '';
          console.log(data);
          $.each(data.case, function(index, item) {
            dom += '<img src="' + item.thumbnail + '" data-desc="' + item.description + '" data-name="' + item.name + '" data-sourceimg="' + item.sourceimg + '" alt="">';
          });
          if (windowWidth < 992) {
            $('.mobile-case').html(dom);
            $('.swiper-container')[0].style.height = windowHeight - 60 + 'px';
            var iSwiper = new Swiper('#i-c1', {
              scrollbar: '.swiper-scrollbar',
              direction: 'vertical',
              slidesPerView: 'auto',
              freeMode: true,
              freeModeMomentum: false,
              mousewheelControl: true,
              mousewheelSensitivity: 0.5
            });
            //弹出详情
            $('.mobile-case img').on('click', function() {
              showCase(pop, title, desc, contentimg, $(this));
            });

          } else {
            $('.pc-case').html(dom);
            carousel(showCase, pop, title, desc, contentimg);
          }

        }, 100);
      }).trigger('resize');
    });
  });

(function() {
  //simple inheritance By John Resig
  var initializing = false,
    fnTest = /xyz/.test(function() { return xyz; }) ? /\b_super\b/ : /.*/;
  this.Class = function() {};
  Class.extend = function(prop) {
    initializing = true;
    var _super = this.prototype,
      prototype = new this();
    initializing = false;
    for (var name in prop) {
      prototype[name] = typeof prop[name] == "function" &&
        typeof _super[name] == "function" && fnTest.test(prop[name]) ?
        (function(name, fn) {
          return function() {
            var tmp = this._super;
            this._super = _super[name];
            var ret = fn.apply(this, arguments);
            this._super = tmp;
            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }

    function Class() {
      if (!initializing && this.init) this.init.apply(this, arguments);
    }
    Class.prototype = prototype;
    Class.prototype.constructor = Class;
    Class.extend = arguments.callee;
    return Class;
  };
})();
