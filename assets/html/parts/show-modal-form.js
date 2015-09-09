
/*===============================================================
=            Show modal form when user clic on button            =
===============================================================
 */

(function() {
  (function() {
    return document.querySelector('#allotments a').onclick = function() {
      var displayed;
      displayed = document.querySelector('.modal.form').getAttribute('data-displayed');
      $('.modal.form').css('display', 'block');
      $('.modal.background').css('display', 'block');
      return setTimeout((function() {
        $('.modal.form').attr('data-displayed', 'true').addClass('show');
        return $('.modal.background').addClass('show');
      }), 100);
    };
  })();

}).call(this);

