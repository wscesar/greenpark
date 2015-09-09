
/*===============================================================
=            Show Next Image Banner On Modal Window            =
===============================================================
 */

(function() {
  (function() {
    return document.querySelector('.modal .icon-right_arrow').onclick = function() {
      var caption, group, img, next, next_caption, section;
      img = document.querySelector('.modal img');
      caption = document.querySelector('.modal figcaption');
      group = img.getAttribute('data-group');
      section = img.getAttribute('data-section');
      next = img.getAttribute('data-number');
      next = parseInt(next) + 1;
      if (next > 3) {
        next = 1;
      } else {
        next = next;
      }
      next_caption = document.querySelector(section + ' .figure' + next).getAttribute('data-caption');
      caption.innerHTML = next_caption;
      caption.style.display = 'block';
      img.classList.add('hide');
      return setTimeout((function() {
        img.setAttribute('src', 'assets/img/' + group + '-0' + next + '.jpg');
        img.setAttribute('data-number', next);
        img.classList.remove('hide');
      }), 500);
    };
  })();


  /*===============================================================
  =            Show Previous Image Banner On Modal Window          =
  ===============================================================
   */

  (function() {
    return document.querySelector('.modal .icon-left_arrow').onclick = function() {
      var caption, group, img, next, next_caption, section;
      img = document.querySelector('.modal img');
      caption = document.querySelector('.modal figcaption');
      group = img.getAttribute('data-group');
      section = img.getAttribute('data-section');
      next = img.getAttribute('data-number');
      next = parseInt(next) - 1;
      if (next < 1) {
        next = 3;
      } else {
        next = next;
      }
      next_caption = document.querySelector(section + ' .figure' + next).getAttribute('data-caption');
      caption.innerHTML = next_caption;
      caption.style.display = 'block';
      img.classList.add('hide');
      setTimeout((function() {
        img.setAttribute('src', 'assets/img/' + group + '-0' + next + '.jpg');
        img.setAttribute('data-number', next);
        img.classList.remove('hide');
      }), 500);
    };
  })();


  /*==========================================
  =            Close Modal Window            =
  ==========================================
   */

  (function() {
    return document.querySelector('.modal.background').onclick = function() {
      var modal_banner, modal_bg, modal_form, modal_table;
      modal_form = document.querySelector('.modal.form');
      modal_table = document.querySelector('.modal.table');
      modal_banner = document.querySelector('.modal.banner');
      modal_bg = document.querySelector('.modal.background');
      modal_form.classList.remove('show');
      modal_table.classList.remove('show');
      modal_banner.classList.remove('show');
      modal_bg.classList.remove('show');
      return setTimeout((function() {
        modal_form.classList.remove('shake');
        modal_form.style.display = 'none';
        modal_table.style.display = 'none';
        modal_banner.style.display = 'none';
        modal_bg.style.display = 'none';
      }), 1000);
    };
  })();

}).call(this);

