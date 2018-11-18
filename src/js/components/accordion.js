var accordion = (function () {

  var $accordion = $('.accordion');
  var $accordion_header = $accordion.find('.accordion-header');
  var $accordion_item = $('.accordion__item');

  // default settings 
  var settings = {
    // animation speed
    speed: 400,

    // close all other accordion items if true
    oneOpen: true
  };

  return {
    // pass configurable object literal
    init: function ($settings) {
      $accordion_header.on('click', function () {
        accordion.toggle($(this));
      });

      $.extend(settings, $settings);

      // ensure only one accordion is active if oneOpen is true
      if (settings.oneOpen && $('.accordion__item.active').length > 1) {
        $('.accordion__item.active:not(:first)').removeClass('active');
      }

      // reveal the active accordion bodies
      $('.accordion__item.active').find('> .accordion-body').show();
    },
    toggle: function ($this) {

      if (settings.oneOpen && $this[0] != $this.closest('.accordion').find('> .accordion__item.active > .accordion-header')[0]) {
        $this.closest('.accordion')
          .find('> .accordion__item')
          .removeClass('active')
          .find('.accordion-body')
          .slideUp()
      }
      // show/hide the clicked accordion item
      $this.closest('.accordion__item').toggleClass('active');
      $this.next().stop().slideToggle(settings.speed);
    }
  }
})();

$(document).ready(function () {
  accordion.init();
});
