define(['jquery'], function($) {
  return Class.extend({
    init: function() {
      this.timeDiff = 300;
      this.btns = $('.btn-group li');
      this.indexTitle = $('#index_page .rside');
      this.website = $('#website_page .animated');
      this.contactDesc = $('#contact_page p.animated:not(.info)');
      this.contactImg = $('#contact_page img.animated');
      this.contactInfo = $('#contact_page p.info');
      this.mall = $('#mall_page .animated');
      this.drp = $('#drp_page .animated');
      this.engineeringTitle = $('#engineering_page h2');
      this.engineeringDesc = $('#engineering_page p');
      this.engineeringItem = $('#engineering_page li');
      this.seo = $('#seo_page .desc-content .middle-center');
      this.seoBtn = $('#seo_page ul.animated');
      this.splogo = $('#small_program_page .desc-content h3 img');
      this.sptitle = $('#small_program_page .desc-content h3 span');
      this.spdesc = $('#small_program_page .desc-content p.animated');
      this.spBtn = $('#small_program_page ul.animated');
      this.seoTitleGroup = $('#seo_page .title-group .desc-content , #seo_page .title-group h2');
      this.spTitleGroup = $('#small_program_page .title-group .desc-content , #small_program_page .title-group h2');
    },
    timeout: function(fn) {
      var self = this;
      setTimeout(function() {
        fn.call(self);
      }, this.timeDiff);
    },
    renderIndex: function() {
      this.btns.addClass('fadeInUp').css('opacity', 1);
      this.indexTitle.addClass('fadeInRight').css('opacity', 1);
    },
    uninstallIndex: function() {
      this.timeout(function() {
        this.btns.removeClass('fadeInUp').css('opacity', 0);
        this.indexTitle.removeClass('fadeInRight').css('opacity', 0);
      });
    },
    renderWebsite: function() {
      this.website.addClass('fadeInUp').css('opacity', 1);
    },
    uninstallWebsite: function() {
      this.timeout(function() {
        this.website.removeClass('fadeInUp').css('opacity', 0);
      });
    },
    renderSEO: function() {
      this.seo.addClass('zoomIn').css('opacity', 1);
      this.seoBtn.addClass('fadeInUp').css('opacity', 1);
      if (window.SEOFLAG == true) this.seoTitleGroup.addClass('bounceInDown').css('opacity', 1);
    },
    uninstallSEO: function() {
      this.timeout(function() {
        this.seo.removeClass('zoomIn').css('opacity', 0);
        this.seoBtn.removeClass('fadeInUp').css('opacity', 0);
        if (window.SEOFLAG == true) this.seoTitleGroup.removeClass('bounceInDown').css('opacity', 0);
      });
    },
    renderSmallProgram: function() {
      this.splogo.addClass('rotateIn').css('opacity', 1);
      this.sptitle.addClass('fadeInRight').css('opacity', 1);
      this.spdesc.addClass('fadeInUp').css('opacity', 1);
      this.spBtn.addClass('fadeInUp').css('opacity', 1);
      if (window.SPFLAG == true) this.spTitleGroup.addClass('bounceInDown').css('opacity', 1);
    },
    uninstallSmallProgram: function() {
      this.timeout(function() {
        this.splogo.removeClass('rotateIn').css('opacity', 0);
        this.sptitle.removeClass('fadeInRight').css('opacity', 0);
        this.spdesc.removeClass('fadeInUp').css('opacity', 0);
        this.spBtn.removeClass('fadeInUp').css('opacity', 0);
        if (window.SPFLAG == true) this.spTitleGroup.removeClass('bounceInDown').css('opacity', 0);
      });
    },
    renderMall: function() {
      this.mall.addClass('fadeInDown').css('opacity', 1);
    },
    uninstallMall: function() {
      this.timeout(function() {
        this.mall.removeClass('fadeInDown flipInX').css('opacity', 0);
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
    renderEngineering: function() {
      this.engineeringTitle.addClass('fadeInDown').css('opacity', 1);
      this.engineeringDesc.addClass('fadeInDown').css('opacity', 1);
      this.engineeringItem.addClass('zoomIn').css('opacity', 1);
    },
    uninstallEngineering: function() {
      this.timeout(function() {
        this.engineeringTitle.removeClass('fadeInDown').css('opacity', 0);
        this.engineeringDesc.removeClass('fadeInDown').css('opacity', 0);
        this.engineeringItem.removeClass('zoomIn').css('opacity', 0);
      });
    },
    renderCase: function() {
      $('#case_page .animated').addClass('zoomIn').css('opacity', 1);
    },
    uninstallCase: function() {
      this.timeout(function() {
        $('#case_page .animated').removeClass('zoomIn').css('opacity', 0);
      });
    },
    renderContact: function() {
      this.contactDesc.addClass('flipInX').css('opacity', 1);
      this.contactImg.addClass('jackInTheBox').css('opacity', 1);
      this.contactInfo.addClass('bounceInUp').css('opacity', 1);
    },
    uninstallContact: function() {
      this.timeout(function() {
        this.contactDesc.removeClass('flipInX').css('opacity', 0);
        this.contactImg.removeClass('jackInTheBox').css('opacity', 0);
        this.contactInfo.removeClass('bounceInUp').css('opacity', 0);
      });
    }
  });
});
