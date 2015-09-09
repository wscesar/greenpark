
/*======================================================================================
=                              Change Banner Function                                   =
======================================================================================
 */

(function() {
  var banner, banner_left_arrow, banner_right_arrow, banner_thumbs, changeBanner, i, thumb, timer;

  banner = document.querySelector('#prime-logistics > .banner');

  banner_left_arrow = document.querySelector('#prime-logistics > .banner .icon-left_arrow');

  banner_right_arrow = document.querySelector('#prime-logistics > .banner .icon-right_arrow');

  banner_thumbs = document.querySelectorAll('.thumbs > button');

  changeBanner = function(element) {
    var caption, i, next_banner, next_caption;
    next_banner = element.getAttribute('data-number');
    next_caption = element.getAttribute('data-caption');
    caption = document.querySelector('#prime-logistics .banner .caption p');
    i = 0;
    while (i < banner_thumbs.length) {
      banner_thumbs[i].classList.remove('active');
      i++;
    }
    element.classList.add('active');
    banner.style.opacity = '0';
    banner.setAttribute('data-number', next_banner);
    caption.innerHTML = next_caption;
    return banner.style.opacity = '1';
  };


  /*====================================
  =            Banner Timer            =
  ====================================
   */

  thumb = 1;

  timer = setInterval((function() {
    thumb++;
    if (thumb > 3) {
      thumb = 1;
    } else {
      thumb = thumb;
    }
    return document.querySelector('#thumb0' + thumb).click();
  }), 4000);


  /*=================================================================
  =            Apply changeBanner() on all banner_thumbs             =
  =================================================================
   */

  i = 0;

  while (i < banner_thumbs.length) {
    banner_thumbs[i].addEventListener('click', (function() {
      changeBanner(this);
      clearInterval(timer);
      return timer = setInterval((function() {
        thumb++;
        if (thumb > 3) {
          thumb = 1;
        } else {
          thumb = thumb;
        }
        return $('#thumb0' + thumb).click();
      }), 4000);
    }), false);
    i++;
  }


  /*=================================================
  =            Banner Left Arrow Function            =
  =================================================
   */

  banner_left_arrow.onclick = function() {
    var next_banner;
    next_banner = banner.getAttribute('data-number');
    next_banner = parseInt(next_banner) - 1;
    if (next_banner < 1) {
      next_banner = 3;
    } else {
      next_banner = next_banner;
    }
    return document.querySelector('#thumb0' + next_banner).click();
  };


  /*=================================================
  =            Banner Right Arrow Function            =
  =================================================
   */

  banner_right_arrow.onclick = function() {
    var next_banner;
    next_banner = banner.getAttribute('data-number');
    next_banner = parseInt(next_banner) + 1;
    if (next_banner > 3) {
      next_banner = 1;
    } else {
      next_banner = next_banner;
    }
    return document.querySelector('#thumb0' + next_banner).click();
  };

}).call(this);

