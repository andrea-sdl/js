; (function() {
  "use strict";

  if (typeof omsOnInit === 'function') {
    omsOnInit(doWork);
  }
  else {
    doWork();
  }

  function doWork() {

    require(['jquery', 'domReady!'], function($) {
      //tabs
      $("#tabs").tabs();

      //accordion
      $(".parent-10 .col-1").accordion({
        header: "> div > h2",
        collapsible: true,
        autoHeight: false
      });

      //show-hide cart
      $(".top_sidebar").click(function() {
        $("#Cart").toggleClass("showed", 1000);
        return false;
      });
      $(".parent-6 .product-add-to-cart").click(function() {
        $("#Cart").addClass("showed", 1000);
        return false;
      });

      //virgola prezzo carrello
      $(".itemPrice").each(function() {
        var prezzoVecchio = $(this).text();
        var prezzoNuovo = prezzoVecchio.replace(",", "");
        $(this).text(prezzoNuovo);
      });

      //link configurazione di scarico
      $(".product-attributes").append($("#config_link").remove());
      $("#config_link").show();

      //smooth scroll
      $('a[href*=#config]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
          if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body').animate({ scrollTop: targetOffset }, 1000);
            return false;
          }
        }
      });

    });
  }
})();

