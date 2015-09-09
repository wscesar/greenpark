
/*======================================================================================
=                            Swipe.js downloaded from Github                            =
======================================================================================
 */

(function() {
  var handleTouchMove, handleTouchStart, xDown, yDown;

  handleTouchStart = function(evt) {
    var xDown, yDown;
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
  };

  handleTouchMove = function(evt) {
    var xDiff, xDown, xUp, yDiff, yDown, yUp;
    if (!xDown || !yDown) {
      return;
    }
    xUp = evt.touches[0].clientX;
    yUp = evt.touches[0].clientY;
    xDiff = xDown - xUp;
    yDiff = yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {

      /*most significant */
      if (xDiff > 0) {

        /* left swipe */
        document.querySelector('nav').classList.remove('active');
        return false;
      } else {

        /* right swipe */
      }
    } else {
      if (yDiff > 0) {

        /* up swipe */
      } else {

        /* down swipe */
      }
    }

    /* reset values */
    xDown = null;
    yDown = null;
  };

  document.addEventListener('touchstart', handleTouchStart, false);

  document.addEventListener('touchmove', handleTouchMove, false);

  xDown = null;

  yDown = null;

}).call(this);

