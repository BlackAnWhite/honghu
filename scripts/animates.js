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
      this.contactFooter = $('#contact_page .contact-footer')
      this.seo = $('#seo_page .animated');
      this.splogo = $('#small_program_page img.animated');
      this.sptitle = $('#small_program_page span.animated');
      this.spdesc = $('#small_program_page p.animated');
      this.mall = $('#mall_page .animated');
      this.drp = $('#drp_page .animated');
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
      });
    },
    renderSEO: function() {
      this.seo.addClass('zoomIn').css('opacity', 1);
    },
    uninstallSEO: function() {
      this.timeout(function() {
        this.seo.removeClass('zoomIn').css('opacity', 0);
      });
    },
    renderSmallProgram: function() {
      this.splogo.addClass('rotateIn').css('opacity', 1);
      this.sptitle.addClass('fadeInRight').css('opacity', 1);
      this.spdesc.addClass('fadeInUp').css('opacity', 1);
    },
    uninstallSmallProgram: function() {
      this.timeout(function() {
        this.splogo.removeClass('rotateIn').css('opacity', 0);
        this.sptitle.removeClass('fadeInRight').css('opacity', 0);
        this.spdesc.removeClass('fadeInUp').css('opacity', 0);
      });
    },
    renderMall: function() {
      this.mall.addClass('fadeInDown').css('opacity', 1);
    },
    uninstallMall: function() {
      this.timeout(function() {
        this.mall.removeClass('fadeInDown').css('opacity', 0);
      });
    },
    renderDrp: function() {
      this.drp.addClass('rotateIn').css('opacity', 1);
    },
    uninstallDrp: function() {
      this.timeout(function() {
        this.drp.removeClass('rotateIn').css('opacity', 0);
      });
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
      this.contactFooter.addClass('fadeInUp');
    },
    uninstallContact: function() {
      this.timeout(function() {
        this.contactTitle.removeClass('fadeInDown');
        this.contactName.removeClass('fadeInLeft');
        this.contactTel.removeClass('fadeInRight');
        this.contactDesc.removeClass('fadeInUp');
        this.contactSubmit.removeClass('fadeInUp');
        this.contactFooter.removeClass('fadeInUp');
      })
    }
  });
});
