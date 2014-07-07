(function ($) {
  'use strict';

  /**
   * History back.
   */
  Drupal.behaviors.historyBack = {
    attach: function (context) {
      $(function () {
        $('<a>', {
          'class': 'step-back',
          'text': Drupal.t('Back'),
          'href': '#'
        }).prependTo($('.primary-content', context));

        $('.step-back').click(function (e) {
          e.preventDefault();
          window.history.back();
        });
      });
    }
  };

})(jQuery);
