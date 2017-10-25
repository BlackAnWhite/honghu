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
    'nav': 'scripts/nav'
  }
});

define(['jquery', 'fullpage', 'nav', 'scene', 'swiper'], function($, fullpage, nav, Scene, swiper) {
  $(function() {
    //建立场景
    new Scene(nav);
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