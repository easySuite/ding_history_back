(function ($) {
  'use strict';

  /**
   * History back.
   */
  Drupal.behaviors.historyBack = {
    attach: function (context) {
      $(function () {
        var link = $('<span>', {
          'class': 'step-back',
          'text': Drupal.t('Back'),
          'onclick': "history.go(-1);"
        });

        link.clone().prependTo($('.primary-content', context));
        link.clone().appendTo($('.primary-content', context));
      });
    }
  };

})(jQuery);
