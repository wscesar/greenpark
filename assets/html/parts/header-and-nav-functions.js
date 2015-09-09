
/*======================================================================================
=            Scroll Header Background and Fix Nav Position on Window Scrool             =
=====================================================================================
 */

(function() {
  (function() {
    return window.onscroll = function() {
      var header, header_height, nav, window_top_position;
      nav = document.querySelector('nav');
      header = document.querySelector('header');
      header_height = header.offsetHeight;
      window_top_position = window.pageYOffset;
      if (window_top_position > header_height) {
        nav.classList.add('fixed');
        return header.classList.add('fixed');
      } else {
        header.style.backgroundPosition = '50% ' + window_top_position + 'px';
        nav.classList.remove('fixed');
        return header.classList.remove('fixed');
      }
    };
  })();

}).call(this);

