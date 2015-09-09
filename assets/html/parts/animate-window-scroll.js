
/*======================================================================================
=                                Animate Window Scroll                                  =
======================================================================================
 */

(function() {
  (function() {
    var i, nav_a, results, to_top;
    nav_a = document.querySelectorAll('nav a');
    to_top = document.querySelector('.icon-top_arrow');
    to_top.onclick = function() {
      return $('html, body').stop().animate({
        scrollTop: 0
      }, 1000);
    };
    i = 0;
    results = [];
    while (i < nav_a.length) {
      nav_a[i].onclick = function() {
        var goTo, section;
        section = this.getAttribute('data-section');
        goTo = document.querySelector(section).offsetTop;
        $('html, body').stop().animate({
          scrollTop: goTo
        }, 1000);
        return false;
      };
      results.push(i++);
    }
    return results;
  })();

}).call(this);

