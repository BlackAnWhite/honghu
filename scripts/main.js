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
    'data': 'scripts/data',
    'animates': 'scripts/animates'
  }
});

require(['jquery', 'fullpage', 'nav', 'scene', 'swiper', 'carousel', 'data', 'animates'],
  function($, fullpage, nav, Scene, Swiper, carousel, data, Animates) {

    //展示案例详情
    function showCase(pop, title, desc, contentimg, that) {
      var loadingImg = $('.line-scale-pulse-out');
      loadingImg.css('display', 'block');
      pop.css('z-index', 10000).animate({ 'opacity': 1 });
      title.html(that.data('name'));
      desc.html(that.data('desc'));
      var tempImg = new Image();
      tempImg.src = that.data('sourceimg');
      contentimg.html(' ');
      tempImg.onload = function() {
        loadingImg.css('display', 'none');
        contentimg.html(this);
        window.caseSwiper = new Swiper('#pop_content', {
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

    //menu按钮状态切换
    var currentColor = '';

    function menuChange(status) {
      var menu = $('.menu'),
        nav = $('#xs_nav');
      if (status == 'menu') {
        $('.menu span').css('background-color', currentColor);
        menu.find('span').eq(0).css('transform', 'translateY(11px)');
        menu.find('span').eq(1).css('transform', 'translateY(-11px)');
        menu.find('span').eq(2).css('width', '65%');
        nav.stop().animate({
          opacity: 0
        }, 500, function() {
          $(this).css('z-index', -1)
        });
      } else {
        currentColor = $('.menu span').css('background-color');
        $('.menu span').css('background-color', '#333');
        menu.find('span').eq(0).css('transform', 'rotate(45deg)');
        menu.find('span').eq(1).css('transform', 'rotate(-45deg)');
        menu.find('span').eq(2).css('width', 0);
        nav.css('z-index', 1000).stop().animate({
          opacity: 1
        }, 500);
      }
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
      $('.pop .closeBtn').on('click', function() {
        $('.pop').animate({
          opacity: 0
        }, 500, function() {
          $(this).css('z-index', -1);
        });
        //销毁swiper对象
        window.caseSwiper.destroy();
        $('.pop .swiper-wrapper').css('transform', 'translate3d(0px, 0px, 0px)');
      });

      /*=================================================================
      =                             小屏幕导航                          =
      =================================================================*/
      var menuStatus = true;
      $('.menu').on('click', function(e) {
        if (menuStatus) {
          menuStatus = false;
          menuChange();
        } else {
          menuStatus = true;
          menuChange('menu');
        }
      });
      $('#xs_nav a').on('click', function() {
        menuStatus = true;
        menuChange('menu');
      });

      /*=================================================================
      =                           在线留言                              =
      =================================================================*/
      var popMessage = $('.pop-message');
      $('.weichat').on('mouseenter', function() {
        $(this).find('.animated').addClass('bounce');
      }).on('mouseleave', function() {
        $(this).find('.animated').removeClass('bounce');
      }).on('click', function() {
        popMessage.css('z-index', 10005).animate({ 'opacity': 0.95 });
        setTimeout(function() {
          popMessage.find('.animated').addClass('flipInX').css('opacity', 1);
        }, 100);
      });

      $('.pop-message .closeBtn').on('click', function() {
        popMessage.animate({
          opacity: 0
        }, 500, function() {
          $(this).css('z-index', -1);
        }).find('.animated').removeClass('flipInX').css('opacity', 0);
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
      =              延缓背景图加载  增加首屏渲染速度                   =
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

      var timer, dexterity = 100, //案例页面上下滑动翻页灵活度
        pop = $('.pop'), //弹出层
        title = $('.case-content-title'), //弹出层标题盒子
        contentimg = $('.case-content-img'), //弹出层内容盒子
        desc = $('.case-content-desc'), //弹出层描述盒子
        windowWidth = $(window).width(),
        windowHeight = $(window).height();

      $(window).on('resize', function() {
        clearTimeout(timer);
        timer = setTimeout(function() {
          windowWidth = $(window).width();
          windowHeight = $(window).height();
          var containerHeight = $('#case_page .container').height(),
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
          $.each(data.case, function(index, item) {
            dom += '<img class="animated" src="' + item.thumbnail + '" data-desc="' + item.description + '" data-name="' + item.name + '" data-sourceimg="' + item.sourceimg + '" alt="">';
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
              mousewheelSensitivity: 0.5,
              onSetTranslate: function(a, b) {
                if (b > dexterity) {
                  $.fn.fullpage.moveSlideLeft();
                }
                if (b < -$('#case_page .swiper-wrapper').height() + $('#case_page .swiper-container').height() - dexterity) {
                  $.fn.fullpage.moveSlideRight();
                }
              }
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

      /*=================================================================
      =                            小程序                               =
      =================================================================*/
      function setPageBgChangeEvent(spAllBtn,page) {
        var spAllBtn = spAllBtn,
          spCurIndex = 0;

        function spEvent() {
          var index = $(this).index(),
            bgUrl = windowWidth > 768 ? $(this).attr('data-lg-bg') : $(this).attr('data-xs-bg');
          if (index != spCurIndex) {
            spCurIndex = index;
            $(page).css('background-image', 'url(' + bgUrl + ')');
            $(page+' .title-group p').html($(this).attr('data-content'));
            $(page+' .title-group h2').html($(this).attr('data-title'));
            spAllBtn.removeClass('active');
            $(this).addClass('active');
          }
        }
        spAllBtn.on('mouseenter', spEvent).on('click', spEvent);
      }
      setPageBgChangeEvent($('#small_program_page .local-nav li'),'#small_program_page');
      setPageBgChangeEvent($('#seo_page .local-nav li'),'#seo_page');
      // var spAllBtn = $('#small_program_page .local-nav li'),
      //   spCurIndex = 0;

      // function spEvent() {
      //   var index = $(this).index(),
      //     bgUrl = windowWidth > 768 ? $(this).attr('data-lg-bg') : $(this).attr('data-xs-bg');
      //   if (index != spCurIndex) {
      //     spCurIndex = index;
      //     $('#small_program_page').css('background-image', 'url(' + bgUrl + ')');
      //     $('#small_program_page .title-group p').html($(this).attr('data-content'));
      //     spAllBtn.removeClass('active');
      //     $(this).addClass('active');
      //   }
      // }
      // spAllBtn.on('mouseenter', spEvent).on('click', spEvent);

      /*=================================================================
      =                         商城分页显示                            =
      =================================================================*/

      var mallAllBtn = $('#mall_page .local-nav li'),
        mallAllBox = $('#mall_page .content li'),
        mallCurIndex = 0;
      mallAllBox.css('display', 'none').eq(0).css('display', 'block');
      mallAllBtn.on('click', function() {
        mallCurIndex = $(this).index();
        mallAllBtn.removeClass('active');
        $(this).addClass('active');
        mallAllBox.css('display', 'none').eq(mallCurIndex).css('display', 'block');
      });

      setInterval(function() {
        mallCurIndex = mallCurIndex + 1 >= mallAllBtn.length ? 0 : mallCurIndex + 1;
        mallAllBtn.removeClass('active').eq(mallCurIndex).addClass('active');
        mallAllBox.css('display', 'none').eq(mallCurIndex).css('display', 'block');
      }, 5000);

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
