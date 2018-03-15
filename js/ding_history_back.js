(function ($) {
  'use strict';

  /**
   * History back.
   */
  Drupal.behaviors.historyBack = {
    attach: function (context) {
      $(function () {
        var link = $('<span>', {
          'class': 'ding-history-back',
          'text': Drupal.t('Back'),
          'onclick': "history.go(-1);"
        });

        link.clone().prependTo($('.view-mode-full', context));
        link.clone().appendTo($('.view-mode-full', context));
      });
    }
  };

})(jQuery);
