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
    init: function(Nav) {
      //初始化导航下线条的位置
      this.navList = $("#fullpageMenu .nav-menu");
      this.initNav();
      this.nav = new Nav(this.navList);
      this.allowMoveSlider = true; //是否允许滑动
      this.addListener();
    },

    initNav: function(time) { //初始化导航下线条的位置
      this.pageIndex = location.hash.split('/').length > 1 ? (function() {
        var temp;
        if(!location.hash.split('/')[1]) return 0;
        switch (location.hash.split('/')[1]) {
          case '1':
            temp = 1;
            break;
          case '2':
            temp = 1;
            break;
          case '3':
            temp = 2;
            break;
          case '4':
            temp = 3;
            break;
          default:
            temp = 0;
            break;
        }
        return temp;
      })() : 0;
      // console.log(this.pageIndex);
      var navLineCurrentLeft = $("#fullpageMenu .nav-menu").eq(this.pageIndex).offset().left;
      $('#fullpageMenu li.slide-line').css({
        opacity: 1
      }).animate({
        left: navLineCurrentLeft
      }, time || 0);
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
        },
        onSlideLeave: function() { //滑块离开动画开始
          self.allowMoveSlider = false;
          setTimeout(function(){
            self.initNav(400);
          },10);
        },
        afterResize: function() {
          self.initNav(400);
        }
      });

      //设置鼠标滚动监听
      $(window).on('mousewheel', function(e) {
        e.preventDefault();
        var mousewheelDirection = e.originalEvent.deltaY > 0 ? 'down' : 'up';
        if (self.allowMoveSlider) mousewheelDirection === 'down' ? (function() {
          //向下滚动滚轮
          $.fn.fullpage.moveSlideRight();
        })() : (function() {
          //想上滚动滚轮
          $.fn.fullpage.moveSlideLeft();
        })();
      });
    }
  })
});