<script>
    login = sessionStorage.getItem('login');

    if( login != 'true' ) {
        window.location = 'login.php';
    }
</script>

<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <title>Document</title>

    <style>
        body{
            /*background: #03582d;*/
        }
        form{
            background: #fbfbfb;
            border-radius: 5px;
            display: block;
            margin: auto;
            width: 300px;
            padding: 20px 40px;
        }
        div{
            margin: 0 0 20px;

        }
        label{
            display: block;
        }
        input{
            width: 100%;
        }
    </style>
</head>
<body>

    <form onsubmit='return false'>
        <input type="text" placeholder="nome" class="query nome">
        <input type="text" placeholder="cidade" class="query cidade">
    </form>

    <table>
        <thead>
            <tr style="font-weight: bold">
                <td>Nome</td>
                <td>Nascimento</td>
                <td>Pai</td>
                <td>Mae</td>
                <td>Naturalidade</td>
                <td>Nacionalidade</td>
                <td>Uf</td>
                <td>Rg_rne_pass</td>
                <td>Cpf</td>
                <td>Profissao</td>
                <td>Renda</td>
                <td>Outras_rendas</td>
                <td>Empresa</td>
                <td>Tempo_de_servico</td>
                <td>Fgts</td>
                <td>Rua</td>
                <td>cidade</td>
                <td>Bairro</td>
                <td>Uf</td>
                <td>Telefone</td>
                <td>Celular</td>
                <td>Email</td>
            </tr>
        </thead>
        <tbody></tbody>
    </table>

</body>
</html>


<script>
    

    function trim_blank_spaces() {
        
        content = this.value
        content = content.replace(RegExp('      ', 'g'), ' ') //trim four blank spaces
        content = content.replace(RegExp('   ', 'g'), ' ') //trim three blank spaces
        content = content.replace(RegExp('  ', 'g'), ' ') //trim two blank spaces
        type        = this.getAttribute('type');

        //Replace content and value to empty if there are just blank spaces
        if ( content == ' ' ) {
            
            this.value = '';
            content = '';

        } else {
            
            this.value = content;

        }

    }

    function ajax() {
        table     = document.querySelector('table tbody');
        nome        = document.querySelector('form .nome').value
        cidade     = document.querySelector('form .cidade').value
        data        = 'nome=' + nome + '&cidade=' + cidade;

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

	window.addEventListener('load', ajax);

	query_input = document.querySelectorAll('form .query');
    for ( var i = 0 ; query_input.length ; i++ ) {
        query_input[i].addEventListener('keyup', ajax);
        query_input[i].addEventListener('keyup', trim_blank_spaces);
    }



</script>