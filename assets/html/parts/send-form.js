(function() {
  var egoi, send_form;

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
      var all_submits, i, results;
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

}).call(this);

