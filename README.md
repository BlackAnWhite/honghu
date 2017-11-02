# HoHu


### fullpage API
> 调用法法 $('#fullpage').fullpage({属性});

```javascript
  $('#fullpage').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4'],
    loopTop: false,
    loopHorizontal: false,
    fixedElements: '#header',
    menu: '#fullpageMenu',
    controlArrows: false,
    afterSlideLoad: function() {
    },
    onSlideLeave: function() {
    },
    afterResize: function() {
    }
  });
```

+ 属性：
  1. sectionsColor: ['blue', 'green', 'orange', 'red'] 设置background-color属性
  2. controlArrows: true 定义是否通过箭头来控制slide幻灯片，默认为true.在移动设备上可一个通过滑动来操作幻灯片
  3. verticalCentered: true 每一页的内容是否垂直居中
  4. resize: false 字体是否随着页面缩放而缩放，默认值为false
  5. scrollingSpeed: 700 滚动速度,默认为700  单位ms
  6. anchors: ['page1', 'page2', 'page3', 'page4'] 定义锚链接，默认值为[]。有了锚链接用户可以快速打开定位到某一页面。定义锚链接的时候，值不要和页面中任意的id或name相同，尤其在IE浏览器下。而且定义时不需要加#
  7. lockAnchors: false 是否锁定锚链接，默认为false。如果设置为true，那么定义的锚链接，也就是anchors属性则没有效果
  8. loopTop: false 滚动到最顶部后是否连续滚动到底部，默认为false
  9. loopBottom: false 滚动到底部后是否连续滚动回顶部，默认为false
  10. loopHorizontal: true 横向slider幻灯片是否循环滚动，默认为true
  11. autoScrolling: true 是否使用插件的滚动方式，默认为true，如果选择false，则会出现浏览器自带的滚动跳，将不会暗夜滚动，而是按照滚动条的默认行为滚动
  12.  scrollBar: false 是否包含过冬天，默认为false，如果设置为true，则浏览器自带的滚动条出现，页面还是按页滚动，但是滚动条的默认行为页有效
  13. paddingTop: '0px' || paddingBottom: 0 设置每一个section顶部和底部的padding，默认都为0。一般如果我们需要在顶部或底部的设置菜单、导航、元素等，可以使用这两个配置项。
  14. fixedElements: '#header' 固定的元素默认为null、需要配置一个jquery选择器。在页面滚动的时候，fixedElements设置的元素固定不动
  15. keyboardScrolling: true 是否可以使用键盘方向键导航，默认为true
  16. touchSensitivity: 5 在移动设备中滑动页面的敏感性，默认为5，是按百分比来衡量，最高为100，越大则越难滑动。
  17. animateAnchor: true 锚链接是否可以控制滚动动画，默认为true。如果为false则没有动画效果
  18. recordHistory: true 是否记录历史，默认为true，可以记录页面滚动的历史，通过浏览器的前进后退控制导航。注意如果设置了autoScrolling:false ,那么之歌配置也将被关闭，即设置为false
  19. menu: '#fullpageMenu' 绑定彩蛋，设定的相关属性与anchors的值相对应后，彩蛋可以控制滚动，默认为false。可以设置为菜单的jquery选择器
  20. navigation: true 是否显示导航，默认为false。如果设置为true，会显示小圆点，作为导航
  21. navigationPosition: 'right' 导航小圆点位置，可以设置为left或者right
  22. navigationTooltips: ['page1', 'page2', 'page3', 'page4'] navigationTooltips:导航小圆点的tooltips设置，默认为[],注意按照顺序设置
  23. showActiveTooltip: true 是否显示当前页面的导航的tooltip信息，默认为false
  24. slidesNavigation: true 是否显示横向幻灯片的导航，默认为false
  25. slidesNavPosition: 'bottom' 横向幻灯片导航的位置，默认为bottom，可以设置为top或bottom
  26. scrollOverflow：内容超过满屏后是否显示滚动条，默认为false。如果设置为true，则会显示滚动条，如果要滚动查看内容，还需要jquery.slimscroll插件的配合。slimscroll插件主要用于模拟传统的浏览器滚动条
  27. sectionSelector：section的选择器，默认为.section
  28. slideSelector：slide的选择器，默认为.slides
  29. continuousVertical是否循环滚动，默认为false。如果设置为true，则页面会循环滚动，而不像loopTop或loopBottom那样出现跳动，注意这个属性和loopTop/loopBottom不兼容，不要同时设置

+ 方法：调用方法均为 $.fn.fullpage.xxx()
  1. moveSectionUp()/moveSectionDown()：向上或向下滚动一页
  2. moveTo(section，slides)：滚动到第几页，第几个幻灯片，注意，页面是从1开始，而幻灯片是从0开始。
  3. silentMoveTo(section,slide)：和moveTo一样，但是没有动画效果。
  4. moveSlideRight()/moveSlideLeft()：幻灯片向右/左滚动
  5. setAutoScrolling(boolean)：动态设置autoScrolling
  6. setLockAnchors：动态设置lockAnchors
  7. setRecordHistory(boolean)：动态设置recordHistory
  8. setScrollingSpeed(milliseconds)：动态设置scrollingSpeed
  9. setAllowScrolling(bollean,[directions])：添加或删除鼠标滚轮/滑动控制，第一个参数true为启用，false为禁用，后面的参数为方向，取值包含all,up,down,left,right,可以使用多个，逗号分割
  10. destroy(type)：销毁fullpage特效，type可以不写，或者使用all，不写type，fullpage给页面添加的样式和html元素还在，如果使用all，则样式、html等全部销毁，页面恢复和不使用fullpage相同的效果
  11. reBeuild()：重新更新页面和尺寸，用于通果ajax请求后改变了页面结构之后，重建效果。

+ 回调
  + afterLoad(anchorLink,index)
    1. 滚动到某一section，且滚动结束后，会触发一次此回调函数，函数接收anchorLink和index两个参数，anchorLink时锚链接的名称，index是序号，从1开始计算。
    2. 我们可以根据anchorLink和index参数值的判断，触发相应的事件
  + onLeave(index,nextIndex,direction)
    1. 在我们离开一个section时，会触发一次此回调函数，接收index/nextIndex/和direction 3个参数
      I. index是离开的页面的序号，从1开始计算。
      II. nextIndex是滚动的目标页面的序号，从1开始计算
      III. direction判断往上滚动还是往下滚动，值是up或down
    2. 通过return false 可以取消滚动
  + afterRender()
    页面结构生成后的回调函数，或者说是页面初始化完成后的回调函数
  + afterResize()
    浏览器窗口尺寸改变后的回调函数
  + afterSlideLoad(anchorLink,index,slideAnchor,slideIndex)
    滚动到某一幻灯片后的回调函数，与afterLoad类似
  + onSlideLeave(anchorLink,index,slideIndex,direction,nextSlideIndex)
    在我们离开一个slide时，会触发一次此回调函数，与onLeave类似

Author:allenAugustine
Emalil:iallenaugustine@gmail.com
注:本项目遵循AMD规范
