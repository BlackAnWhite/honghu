/**
 * @Author:      allenAugustine
 * @DateTime:    2017-10-28 09:26:49
 * @Description: 静态资源加载
 */
define(['jquery'], function($) {
  return Class.extend({
    init: function(url,fn) {
    	this.fn = fn;
      this.url = url || 'case.json';
      this.dom = '';
      this.render();
    },
    render: function() {
      var self = this,temp;
      $.getJSON(this.url, function(data) {
      	$.each(data.case,function(index,item){
      		self.dom += '<img src="'+item.thumbnail+'" data-desc="'+item.description+'" data-name="'+item.name+'" data-sourceimg="'+item.sourceimg+'" alt="">';
      	});
      	self.fn(self.dom);
      });
    }
  });
});