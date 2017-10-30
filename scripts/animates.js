define(['jquery'], function($) {
  return Class.extend({
    init: function() {
      this.timeDiff = 300;
      this.btns = $('.btn-group li');
      this.indexTitle = $('#index_page .rside');
      this.website = $('#website_page .animated');
      this.contactTitle = $('#contact_page h2');
      this.contactName = $('#contact_page input[type="text"]');
      this.contactTel = $('#contact_page input[type="tel"]');
      this.contactDesc = $('#contact_page textarea');
      this.contactSubmit = $('#contact_page input[type="submit"]');
    },
    timeout: function(fn) {
      var self = this;
      setTimeout(function() {
        fn.call(self);
      }, this.timeDiff);
    },
    renderIndex: function() {
      this.btns.addClass('fadeInUp');
      this.indexTitle.addClass('fadeInRight');
    },
    uninstallIndex: function() {
      this.timeout(function() {
        this.btns.removeClass('fadeInUp');
        this.indexTitle.removeClass('fadeInRight');
      });
    },
    renderWebsite: function() {
      this.website.addClass('fadeInUp');
    },
    uninstallWebsite: function() {
      this.timeout(function() {
        this.website.removeClass('fadeInUp');
      })
    },
    renderSEO: function() {
      console.log('render SEO');
    },
    uninstallSEO: function() {
      console.log('uninstall SEO');
    },
    renderCase: function() {
      console.log('render case');
    },
    uninstallCase: function() {
      console.log('uninstall case');
    },
    renderContact: function() {
      this.contactTitle.addClass('fadeInDown');
      this.contactName.addClass('fadeInLeft');
      this.contactTel.addClass('fadeInRight');
      this.contactDesc.addClass('fadeInUp');
      this.contactSubmit.addClass('fadeInUp');
    },
    uninstallContact: function() {
      this.timeout(function() {
        this.contactTitle.removeClass('fadeInDown');
        this.contactName.removeClass('fadeInLeft');
        this.contactTel.removeClass('fadeInRight');
        this.contactDesc.removeClass('fadeInUp');
        this.contactSubmit.removeClass('fadeInUp');
      })
    }
  });
});
