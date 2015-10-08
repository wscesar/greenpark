<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <title>Document</title>
    <link rel="stylesheet" href="../css/main.css">
</head>
<body style="display: none">

    <form onsubmit='return false'>
        <img src="../img/logo-greenpark.png" style="float:left">
        <img src="../img/logo-teamprime.png" style="float:right">
        

        <h2>Consulta de Cadastros</h2>
    
        <input placeholder="Nome" class="query nome">
        <input placeholder="Cidade" class="query cidade">
        
    </form>

    <div id="table"></div>

    <script src="../js/ajax.js"></script>

    <script>
        login = sessionStorage.getItem('login');

        if( login != 'true' ) {
            window.location = 'login.php';
        }else{
            document.querySelector('body').removeAttribute('style');
        }

    </script>
</body>
</html>

