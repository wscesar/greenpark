function ajax() {
    table  = document.querySelector('table tbody');
    nome   = document.querySelector('form .nome').value
    cidade = document.querySelector('form .cidade').value
    data   = 'nome=' + nome + '&cidade=' + cidade;

    request = new XMLHttpRequest;
    request.open('POST', 'select.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(data);

    request.onload = function() {
        
        if ( this.status >= 200 && this.status < 400 ) {

            response = request.responseText;
            table.innerHTML = response;
            
        }
    }
}