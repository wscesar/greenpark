
/*=====================================================================
=            Show modal form when user are leaving the page            =
=====================================================================
 */

(function() {
  (function() {
    var modal_bg, modal_form;
    modal_form = document.querySelector('.modal.form');
    modal_bg = document.querySelector('.modal.background');
    return document.querySelector('body').addEventListener('mouseleave', function(element) {
      var displayed;
      displayed = modal_form.getAttribute('data-displayed');
      if (element.offsetY - $(window).scrollTop() < 0 && displayed !== 'true') {
        modal_form.style.display = 'block';
        modal_bg.style.display = 'block';
        return setTimeout((function() {
          modal_bg.classList.add('show');
          modal_form.classList.add('show');
          modal_form.classList.add('shake');
          return modal_form.setAttribute('data-displayed', 'true');
        }), 500);
      }
    });
  })();

}).call(this);

