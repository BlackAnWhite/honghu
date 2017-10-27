/**
 * @Author:      allenAugustine
 * @DateTime:    2017-10-27 10:33:58
 * @Description: 环形轮播效果
 */
'use strict';
define(function() {
  return function() {
    var carousels = document.querySelectorAll('.carousel');
    for (var i = 0; i < carousels.length; i++) carousel(carousels[i]);

    function carousel(root) {
      var figure = root.querySelector('figure'),
        nav = root.querySelector('nav'),
        images = figure.children,
        n = images.length,
        gap = root.dataset.gap || 0,
        bfc = 'bfc' in root.dataset,
        theta = 2 * Math.PI / n,
        currImage = 0, //当前显示图片
        currImageWidth = images[currImage].offsetWidth,
        windowWidth = document.body.offsetWidth;
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
      window.addEventListener('resize', function() {
        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
        currImageWidth = images[currImage].offsetWidth;
      });

      //按钮点击事件
      nav.addEventListener('click', function(e) {
        e.stopPropagation();
        var t = e.target;
        if (t.tagName.toUpperCase() != 'BUTTON') return;
        currImage = t.classList.contains('next') ? currImage + 1 : currImage - 1;
        rotateCarousel(currImage);
      }, true);

      //为左右图片添加点击事件
      for (var i = 0; i < n; i++) {
        images[i].index = i;
        images[i].addEventListener('click', function(e) {
          var slideWidth = (windowWidth - currImageWidth) / 2;
          if (this.index != currImage) {
            if (e.pageX < slideWidth) {
              currImage--;
            } else if (e.pageX > slideWidth + currImageWidth) {
              currImage++;
            }
          }
          rotateCarousel(currImage);
        });
      }

      //排列图片
      function setupCarousel(n, s) {
        var apothem = s / (2 * Math.tan(Math.PI / n));
        figure.style.transformOrigin = '50% 50% ' + -apothem + 'px';
        for (var i = 0; i < n; i++) images[i].style.padding = gap + 'px';
        for (i = 1; i < n; i++) {
          images[i].style.transformOrigin = '50% 50% ' + -apothem + 'px';
          images[i].style.transform = 'rotateY(' + i * theta + 'rad)';
        }
        if (bfc)
          for (i = 0; i < n; i++) images[i].style.backfaceVisibility = 'hidden';
        rotateCarousel(currImage);
      }

      /**
       * [rotateCarousel 旋转动作]
       * @param  {[type]} imageIndex [description]
       * @return {[void]}            [无返回值]
       */
      function rotateCarousel(imageIndex) {
        figure.style.transform = 'rotateY(' + imageIndex * -theta + 'rad)';
      }
    }
  }
});