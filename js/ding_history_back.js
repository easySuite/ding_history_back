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
          window.history.back();
        });
      });
    }
  };

})(jQuery);
