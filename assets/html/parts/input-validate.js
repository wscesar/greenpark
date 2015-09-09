
/*====================================================
=            Validate Text Inputs Function            =
====================================================
 */

(function() {
  var i, text_input;

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

}).call(this);

