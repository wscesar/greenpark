<!doctype html>
<html lang='pt-BR'>
<head>

    <meta charset='UTF-8'>

    <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no'>

    <title>Condomínio Residencial Greenpark</title>

    <!-- Favicon -->
    <link rel='icon' href='assets/img/favicon.ico'>

    <!-- Css -->
    <link rel='stylesheet' href='assets/css/main.css'>
    <link rel='stylesheet' href='assets/css/fonts.css'>

    <!-- Analytics -->
    <script src='assets/js/analytics.js'></script>

    <!-- HTML5 Shiv -->
    <!--[if lt IE 9]><script src='assets/js/html5.js'></script><![endif]-->

</head>
<body>
    <?php require 'pages/home.php'; ?>

    <!-- Js -->
    <script src='assets/js/jquery.js'></script>
    <script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>

    <script src='assets/js/input-validate.js'></script>
    <script src='assets/js/send-form.js'></script>
    <script src='assets/js/blueprint.js'></script>
    <script src='assets/js/unbounce.js'></script>
    <script src='assets/js/scroll.js'></script>
    <script src='assets/js/modal.js'></script>
    <script src='assets/js/map.js'></script>
    <script src='assets/js/swipe.js'></script>

    <script>
        header = document.querySelector('header');
        logo = document.querySelector('header .logo');
        menu_button = document.querySelector('header button');
        responsive_nav_a = document.querySelectorAll('header nav a');

        menu_button.addEventListener( 'click' , function() {

            header.classList.add('active');

        });

        for( var i = 0 ; i < nav_a.length ; i++ ) {

            nav_a[i].addEventListener( 'click' , function() {

                header.classList.remove('active');

            });

        }

        

        differentials_ctrl = document.querySelectorAll('#differentials .icons .ctrl')

        for ( var i = 0 ; i < differentials_ctrl.length ; i++ ) {

            differentials_ctrl[i].onclick = function() {
            
                differentials_figure = document.querySelectorAll('#differentials .icons figure')
                
                for ( var i = 0 ; i < differentials_figure.length ; i++ ) {

                    differentials_figure[i].classList.toggle('active')
                    
                }
                
            }
            
        }
    </script>

    
</body>
</html>