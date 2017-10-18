/**
 * @Author:      allenAugustine
 * @DateTime:    2017-10-17 14:44:02
 * @Description: create sence
 */
(function(global, sence) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'fullpage'], function($, fullpage) {
      return sence();
    });
  } else {
    global.Sence = sence();
  }
})(typeof window !== 'undefined' ? window : this, function() {
  return Class.extend({
    init: function() {
      this.allowMoveSlider = true; //是否允许滑动
      this.addListener();
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