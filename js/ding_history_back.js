(function ($) {
  'use strict';

  /**
   * History back.
   */
  Drupal.behaviors.historyBack = {
    attach: function (context) {
      $(function () {
        var link = $('<a>', {
          'class': 'step-back',
          'text': Drupal.t('Back'),
          'href': '#'
        });

        link.clone().prependTo($('.primary-content', context));
        link.clone().appendTo($('.primary-content', context));

        $('.step-back').click(function (e) {
          e.preventDefault();

          // Attach item id to history url.
          // This will be used for scroll to item effect.
          var id = decodeURIComponent(window.location.href).match(/\d+$/);

          // Check if where is an item id
          if (id !== null) {
            window.location = document.referrer + '#' + id[0];
          }
          else {
            window.history.back();
          }
        });
      });
    }
  };

})(jQuery);
