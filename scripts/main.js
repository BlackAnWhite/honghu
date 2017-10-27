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
    'carousel': 'scripts/carousel'
  }
});

define(['jquery', 'fullpage', 'nav', 'scene', 'swiper', 'carousel'], function($, fullpage, nav, Scene, swiper, carousel) {
  $(function() {
    //建立场景
    new Scene(nav);
    carousel();

    //index_page 按钮触碰效果
    $('#index_page .lside .btn-group .btn').hover(function() {
      $(this).prev().css({
        'transform': 'scale(1.2)'
      });
    }, function() {
      $(this).prev().css({
        'transform': 'scale(1)'
      });
    });

    var timer;
    $(window).on('resize', function() {
      clearTimeout(timer);
      timer = setTimeout(function() {
        var windowWidth = $(window).width(),
          containerHeight = $('#case_page .container').height(),
          carouselBox = $('#case_page .carousel');
        //大小屏图片切换
        if ( windowWidth < 1200) {
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

        //案例上下居中
        carouselBox.css('padding-top',(containerHeight-carouselBox.outerHeight())/2-32);
        // .outerHeight()

      }, 100);
    }).trigger('resize');

  });
});

(function() {
  //simple inheritance By John Resig
  var initializing = false,
    fnTest = /xyz/.test(function() { xyz; }) ? /\b_super\b/ : /.*/;
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

    function Class() { if (!initializing && this.init) this.init.apply(this, arguments); }
    Class.prototype = prototype;
    Class.prototype.constructor = Class;
    Class.extend = arguments.callee;
    return Class;
  };
})();