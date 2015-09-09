
/*=====================================================================
=            Show modal form when user are leaving the page            =
=====================================================================
 */

(function() {
  var banner, banner_left_arrow, banner_right_arrow, banner_thumbs, changeBanner, egoi, handleTouchMove, handleTouchStart, i, nav, nav_a, send_form, text_input, thumb, timer, xDown, yDown;

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


  /*===============================================================
  =            Show modal form when user clic on button            =
  ===============================================================
   */

  (function() {
    return document.querySelector('#allotments a').onclick = function() {
      var displayed;
      displayed = document.querySelector('.modal.form').getAttribute('data-displayed');
      $('.modal.form').css('display', 'block');
      $('.modal.background').css('display', 'block');
      return setTimeout((function() {
        $('.modal.form').attr('data-displayed', 'true').addClass('show');
        return $('.modal.background').addClass('show');
      }), 1);
    };
  })();


  /*====================================================
  =            Validate Text Inputs Function            =
  ====================================================
   */

  text_input = document.querySelectorAll('form .text');

  i = 0;

  while (i < text_input.length) {
    text_input[i].onblur = function() {
      var content, data, form, request, submit, type, was_sent;
      content = this.value;
      content = content.replace(RegExp('    ', 'g'), ' ');
      content = content.replace(RegExp('   ', 'g'), ' ');
      content = content.replace(RegExp('  ', 'g'), ' ');
      type = this.getAttribute('type');
      if (content === ' ') {
        this.value = '';
        content = '';
      } else {
        this.value = content;
      }
      if (content !== '') {
        this.nextElementSibling.classList.add('fixed');
      } else {
        this.nextElementSibling.classList.remove('fixed');
      }
      if (type === 'email') {
        form = this.getAttribute('data-form');
        submit = document.querySelector(form + ' .submit');
        data = 'domain=' + this.value.split('@')[1];
        was_sent = submit.getAttribute('data-send');
        if (was_sent !== 'true') {
          request = new XMLHttpRequest;
          request.open('POST', 'inc/validate-email.php', true);
          request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
          request.send(data);
          return request.onload = function() {
            var response;
            if (request.status >= 200 && request.status < 400) {
              response = request.responseText;
              if (response !== 'valid-email') {
                submit.setAttribute('disabled', 'true');
                submit.classList.add('alert');
                return submit.innerHTML = 'Informe um email válido';
              } else {
                submit.removeAttribute('disabled');
                submit.classList.remove('alert');
                return submit.innerHTML = 'Enviar';
              }
            }
          };
        }
      }
    };
    i++;
  }


  /*==============================================
  =             Send Form Function                =
  ==============================================
   */

  send_form = function(element) {
    var data, email, form, msg, name, phone, request, submit;
    form = element.getAttribute('data-form');
    submit = document.querySelector(form + ' .submit');
    name = document.querySelector(form + ' .name').value;
    email = document.querySelector(form + ' .email').value;
    phone = document.querySelector(form + ' .phone').value;
    msg = document.querySelector(form + ' .msg').value;
    data = 'name=' + name + '&email=' + email + '&phone=' + phone + '&msg=' + msg + '&form=' + form;
    submit.setAttribute('disabled', 'true');
    submit.innerHTML = '';
    submit.classList.add('hide');
    submit.classList.add('loading');
    submit.classList.remove('hide');
    request = new XMLHttpRequest;
    request.open('POST', 'inc/send-contact.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(data);
    return request.onload = function() {
      var all_submits, results;
      if (request.status >= 200 && request.status < 400) {
        all_submits = document.querySelectorAll('form .submit');
        document.querySelector('.modal.form').setAttribute('data-displayed', 'true');
        i = 0;
        results = [];
        while (i < all_submits.length) {
          all_submits[i].setAttribute('data-send', 'true');
          all_submits[i].setAttribute('disabled', 'true');
          all_submits[i].classList.add('hide');
          all_submits[i].classList.add('success');
          all_submits[i].innerHTML = 'Sua mensagem enviada com sucesso, obrigado';
          all_submits[i].classList.remove('loading');
          all_submits[i].classList.remove('hide');
          results.push(i++);
        }
        return results;
      } else {
        return alert('Erro ao enviar email, arquivo send-contact não encontrado, contate o administrador do site');
      }
    };
  };

  egoi = function(element) {
    var cliente, data, email, form, formid, lang, lista, name, request;
    form = element.getAttribute('data-form');
    name = document.querySelector(form + ' .name').value;
    email = document.querySelector(form + ' .email').value;
    cliente = '133248';
    lang = 'br';
    lista = '3';
    formid = '3';
    data = 'fname_5=' + name + '&email_6=' + email + '&lista=' + lista + '&cliente=' + cliente + '&lang=' + lang + '&formid=' + formid;
    request = new XMLHttpRequest;
    request.open('POST', 'http://88.kmitd1.com/w/3e3eC0Oe1jSWwRnvgec151ac01', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return request.send(data);
  };


  /*=======================================================
  =            Show Data Table On Modal Window            =
  =======================================================
   */

  (function() {
    return $('.icon-paper, .icon-paper + img').on('click', function() {
      var modal_backgrund, modal_table, table, tables;
      table = this.parentNode.getAttribute('data-table');
      table = document.querySelector(table);
      tables = document.querySelectorAll('.modal ul');
      modal_table = document.querySelector('.modal.table');
      modal_backgrund = document.querySelector('.modal.background');
      tables[0].classList.remove('show');
      tables[1].classList.remove('show');
      tables[2].classList.remove('show');
      table.classList.add('show');
      modal_table.style.display = 'block';
      modal_backgrund.style.display = 'block';
      return setTimeout((function() {
        modal_table.classList.add('show');
        return modal_backgrund.classList.add('show');
      }), 1);
    });
  })();


  /*========================================================
  =            Magnify Images On a Modal Banner             =
  ========================================================
   */

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
      }), 1);
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


  /*===============================================================
  =            Show Next Image Banner On Modal Window            =
  ===============================================================
   */

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


  /*======================================================================================
  =                                Animate Window Scroll                                  =
  ======================================================================================
   */

  (function() {
    var nav_a, results, to_top;
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


  /*======================================================================================
  =            Scroll Header Background and Fix Nav Position on Window Scrool             =
  =====================================================================================
   */

  (function() {
    return window.onscroll = function() {
      var distance_to_map, header, header_height, map, nav, window_top_position;
      nav = document.querySelector('nav');
      map = document.querySelector('#map-canvas');
      header = document.querySelector('header');
      header_height = header.offsetHeight;
      window_top_position = window.pageYOffset;
      distance_to_map = document.querySelector('#map-canvas').offsetTop;
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


  /*======================================================================================
  =                             Show and Hide Responsive Nav                              =
  ======================================================================================
   */

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


  /*======================================================================================
  =                              Change Banner Function                                   =
  ======================================================================================
   */

  banner = document.querySelector('#prime-logistics > .banner');

  banner_left_arrow = document.querySelector('#prime-logistics > .banner .icon-left_arrow');

  banner_right_arrow = document.querySelector('#prime-logistics > .banner .icon-right_arrow');

  banner_thumbs = document.querySelectorAll('.thumbs > button');

  changeBanner = function(element) {
    var caption, next_banner, next_caption;
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


  /*======================================================================================
  =                            Swipe.js downloaded from Github                            =
  ======================================================================================
   */

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

