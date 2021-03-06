send_form = function(element) {

    form = element.getAttribute('data-form');
    submit = document.querySelector(form + ' .submit');
    name = document.querySelector(form + ' .name').value;
    email = document.querySelector(form + ' .email').value;
    phone = document.querySelector(form + ' .phone').value;
    msg = document.querySelector(form + ' .msg').value;
    data = 'name=' + name + '&email=' + email + '&phone=' + phone + '&msg=' + msg + '&form=' + form;

    submit.setAttribute('disabled', 'true');
    submit.innerHTML = '';
    submit.style.opacity = 0;
    submit.classList.add('loading');
    submit.removeAttribute('style');

    request = new XMLHttpRequest;
    request.open('POST', 'inc/send-contact.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(data);

    request.onload = function() {

        if (this.status >= 200 && this.status < 400) {

            response = request.responseText;

            if (response == 'ok') {

                all_submits = document.querySelectorAll('form .submit');

                //set true local storage form_displayed on modal
                localStorage.setItem('form_displayed', 'true');

                for (var i = 0; i < all_submits.length; i++) {

                    //set data-send equals true on all submit button
                    all_submits[i].setAttribute('data-send', 'true');

                    //disable all submit button
                    all_submits[i].setAttribute('disabled', 'true');
                    all_submits[i].style.opacity = 0;
                    all_submits[i].classList.add('success');
                    all_submits[i].innerHTML = 'Sua mensagem enviada com sucesso, obrigado';
                    all_submits[i].classList.remove('loading');
                    all_submits[i].removeAttribute('style');
                }

            }else{
                alert(response);
            }

        } else {
            alert('Erro ao enviar email, arquivo send-contact não encontrado, informe o administrador do site');
        }

    }

}





egoi = function(element) {
    form = element.getAttribute('data-form')
    name = document.querySelector(form + ' .name').value
    email = document.querySelector(form + ' .email').value

    cliente = '133248'
    lang = 'br'
    lista = '3'
    formid = '3'
    data = 'fname_5=' + name + '&email_6=' + email + '&lista=' + lista + '&cliente=' + cliente + '&lang=' + lang + '&formid=' + formid

    request = new XMLHttpRequest;
    request.open('POST', 'http://88.kmitd1.com/w/3e3eC0Oe1jSWwRnvgec151ac01', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(data);
}
