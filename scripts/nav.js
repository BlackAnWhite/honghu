define(['jquery'], function($) {
  return Class.extend({
    init: function(navList) {
      this.navList = navList;
      this.addEvent();
    },
    //添加事件
    addEvent: function() {
      var self = this;
      this.navList.on('click', function(e) {
        $(".ripple").remove();
        var posX = $(this).offset().left,
          posY = $(this).offset().top,
          buttonWidth = $(this).width(),
          buttonHeight = $(this).height();
        $(this).prepend('<span class="ripple"></span>');
        self.animationLine(posX);
        buttonHeight = buttonWidth >= buttonHeight ? buttonWidth : buttonHeight;
        var x = e.pageX - posX - buttonWidth / 2;
        var y = e.pageY - posY - buttonHeight / 2;

        $(".ripple").css({
          width: buttonWidth,
          height: buttonHeight,
          top: y + 'px',
          left: x + 'px'
        }).addClass("rippleEffect");
      });
    },
    //移动线条
    animationLine: function(leftPos) {
      $('#fullpageMenu li.slide-line').animate({
        left: leftPos
      });
    }
  });
});
