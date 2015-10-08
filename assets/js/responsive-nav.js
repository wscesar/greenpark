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