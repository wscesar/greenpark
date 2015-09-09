
/*========================================================
=            Magnify Images On a Modal Banner             =
========================================================
 */

(function() {
  (function() {
    return $('.icon-magnify, .icon-magnify + img, figure .img, .aerial_view button').on('click', function() {
      var caption, caption_placeholder, group, img, img_placeholder, modal_backgrund, modal_banner, number, section;
      img = this.parentNode.getAttribute('data-image');
      group = this.parentNode.getAttribute('data-group');
      number = this.parentNode.getAttribute('data-number');
      caption = this.parentNode.getAttribute('data-caption');
      section = this.parentNode.getAttribute('data-section');
      modal_banner = document.querySelector('.modal.banner');
      modal_backgrund = document.querySelector('.modal.background');
      img_placeholder = document.querySelector('.modal figure img');
      caption_placeholder = document.querySelector('.modal figure figcaption');
      modal_banner.style.display = 'block';
      modal_backgrund.style.display = 'block';
      setTimeout((function() {
        modal_banner.classList.add('show');
        return modal_backgrund.classList.add('show');
      }), 100);
      img_placeholder.setAttribute('src', 'assets/img/' + img);
      img_placeholder.setAttribute('data-group', group);
      img_placeholder.setAttribute('data-number', number);
      img_placeholder.setAttribute('data-section', section);
      if (caption !== null) {
        caption_placeholder.innerHTML = caption;
        return caption_placeholder.style.display = 'block';
      } else {
        caption_placeholder.innerHTML = '';
        return caption_placeholder.style.display = 'none';
      }
    });
  })();

}).call(this);

