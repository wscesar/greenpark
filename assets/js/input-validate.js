function validate_input() {
    
    content = this.value
    content = content.replace(RegExp('        ', 'g'), ' ') //trim four blank spaces
    content = content.replace(RegExp('     ', 'g'), ' ') //trim three blank spaces
    content = content.replace(RegExp('    ', 'g'), ' ') //trim two blank spaces
    type    = this.getAttribute('type');

    //Replace content and value to empty if there are just blank spaces
    if ( content == ' ' ) {
        
        this.value = '';
        content = '';

    } else {
        
        this.value = content;

    }


    //If content is not empty fix label
    if (content != '') {
        
        this.nextElementSibling.classList.add('fixed');

    } else {

        this.nextElementSibling.classList.remove('fixed');

    }


    //If type equals email verify if email exists
    if ( type == 'email' ) {

        form         = this.getAttribute('data-form');
        submit     = document.querySelector(form + ' .submit');
        data         = 'domain=' + this.value.split('@')[1];
        was_sent = submit.getAttribute('data-send');

        if ( was_sent != 'true' ) {
            
            request = new XMLHttpRequest;
            request.open('POST', 'inc/validate-email.php', true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            request.send(data);

            request.onload = function() {
                
                if ( this.status >= 200 && this.status < 400 ) {

                    response = request.responseText;
                    
                    if ( response != 'valid-email' ) {
                        
                        submit.setAttribute('disabled', 'true');
                        submit.classList.add('alert');
                        submit.innerHTML = 'Informe um email válido';

                    } else {

                        submit.removeAttribute('disabled');
                        submit.classList.remove('alert');
                        submit.innerHTML = 'Enviar';

                    }
                }
            }
        }
    }
}

text_input = document.querySelectorAll('form .text');

for ( var i = 0 ; text_input.length ; i++ ) {

    text_input[i].onblur =

}