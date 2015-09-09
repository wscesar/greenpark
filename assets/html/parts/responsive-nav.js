
/*======================================================================================
=                             Show and Hide Responsive Nav                              =
======================================================================================
 */

(function() {
  var i, nav, nav_a;

  nav = document.querySelector('nav');

  nav_a = document.querySelectorAll('nav a');

  document.querySelector('nav .button').onclick = function() {
    document.querySelector('nav').classList.add('active');
  };

  i = 0;

  while (i < nav_a.length) {
    nav_a[i].addEventListener('click', (function() {
      nav.classList.remove('active');
    }), false);
    i++;
  }

}).call(this);

