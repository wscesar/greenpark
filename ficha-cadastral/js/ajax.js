function trim_spaces() {
    
    content = this.value
    content = content.replace(RegExp('      ', 'g'), ' ') //trim four spaces
    content = content.replace(RegExp('   ', 'g'), ' ') //trim three spaces
    content = content.replace(RegExp('  ', 'g'), ' ') //trim two spaces

    //Replace content and value to empty if there are just spaces
    if ( content == ' ' ) {
        
        this.value = '';
        content = '';

    } else {
        
        this.value = content;

    }

}

function selectData() {
    table     = document.querySelector('#table');
    nome        = document.querySelector('form .nome').value
    cidade     = document.querySelector('form .cidade').value
    data        = 'nome=' + nome + '&cidade=' + cidade;

    request = new XMLHttpRequest;
    request.open('POST', '../inc/sql-select-data.php', true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(data);

    request.onload = function() {
        
        if ( this.status >= 200 && this.status < 400 ) {

            response = request.responseText;
            table.innerHTML = response;
            
        }
    }
}

window.addEventListener('load', selectData);

query_input = document.querySelectorAll('form .query');

for ( var i = 0 ; query_input.length ; i++ ) {
    query_input[i].addEventListener('keyup', selectData);
    query_input[i].addEventListener('keyup', trim_spaces);
}