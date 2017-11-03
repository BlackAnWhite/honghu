/**
 * @Author:      allenAugustine
 * @DateTime:    2017-10-17 14:44:02
 * @Description: create scene
 */
(function(global, scene) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'fullpage'], function($, fullpage) {
      return scene();
    });
  } else {
    global.Scene = scene();
  }
})(typeof window !== 'undefined' ? window : this, function() {
  return Class.extend({
    init: function(Nav, Animates) {
      //初始化导航下线条的位置
      this.navList = $("#fullpageMenu .nav-menu");
      this.initNav();
      this.nav = new Nav(this.navList);
      this.animates = new Animates();
      this.allowMoveSlider = true; //是否允许滑动
      this.addListener();
    },

    initNav: function(time) { //初始化导航下线条的位置
      this.pageIndex = location.hash.split('/').length > 1 ? (function() {
        var temp;
        if (!location.hash.split('/')[1]) return 0;
        switch (location.hash.split('/')[1]) {
          case '1':
            temp = 1;
            break;
          case '2':
            temp = 1;
            break;
          case '3':
            temp = 1;
            break;
          case '4':
            temp = 1;
            break;
          case '5':
            temp = 1;
            break;
          case '6':
            temp = 1;
            break;
          case '7':
            temp = 2;
            break;
          case '8':
            temp = 3;
            break;
          default:
            temp = 0;
            break;
        }
        return temp;
      })() : 0;

      if(this.pageIndex == 2 || this.pageIndex ==3){
        $('.menu span').css('background-color','#333');
      }else{
        $('.menu span').css('background-color','#fff');
      }

      var navLine = $("#fullpageMenu .nav-menu").eq(this.pageIndex),
        navLineCurrentLeft = navLine.offset().left;
      $('#fullpageMenu li.slide-line').css({
        opacity: 1
      }).animate({
        left: navLineCurrentLeft,
        width: navLine.width()
      }, time || 0);
    },

    renderAnimate: function(page, flag) {
      switch (page.attr('id')) {
        case 'index_page':
          flag ? this.animates.renderIndex() : this.animates.uninstallIndex();
          break;
        case 'website_page':
          flag ? this.animates.renderWebsite() : this.animates.uninstallWebsite();
          break;
        case 'seo_page':
          flag ? this.animates.renderSEO() : this.animates.uninstallSEO();
          break;
        case 'small_program_page':
          flag ? this.animates.renderSmallProgram() : this.animates.uninstallSmallProgram();
          break;
        case 'case_page':
          flag ? this.animates.renderCase() : this.animates.uninstallCase();
          break;
        case 'contact_page':
          flag ? this.animates.renderContact() : this.animates.uninstallContact();
          break;
        case 'mall_page':
          flag ? this.animates.renderMall() : this.animates.uninstallMall();
          break;
        case 'drp_page':
          flag ? this.animates.renderDrp() : this.animates.uninstallDrp();
          break;
        case 'engineering_page':
          flag ? this.animates.renderEngineering() : this.animates.uninstallEngineering();
          break;
        default:
          break;
      }
    },

    addListener: function() {
      var self = this;
      //调用fullpage插件
      $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4'],
        loopTop: false,
        loopHorizontal: false,
        fixedElements: '#header',
        menu: '#fullpageMenu',
        controlArrows: false,
        afterSlideLoad: function() { //滑块进入动画完毕
          self.allowMoveSlider = true;
          self.renderAnimate(this, true);
        },
        onSlideLeave: function() { //滑块离开动画开始
          self.allowMoveSlider = false;
          setTimeout(function() {
            self.initNav(400);
          }, 10);
          self.renderAnimate(this, false);
        },
        afterResize: function() {
          self.initNav(400);
        }
      });

      //设置鼠标滚动监听
      $('#fullpage').on('mousewheel', function(e) {
        e.preventDefault();
        var mousewheelDirection = e.originalEvent.deltaY > 0 ? 'down' : 'up';
        if (self.allowMoveSlider) {
          if (mousewheelDirection === 'down') {
            $.fn.fullpage.moveSlideRight();
          } else {
            $.fn.fullpage.moveSlideLeft();
          }
        }
      });
    }
  });
});
