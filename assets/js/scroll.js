nav = document.querySelector('nav')
nav_a = document.querySelectorAll('nav a');
header = document.querySelector('header')
header_height = document.querySelector('header').offsetHeight;

// to_top = document.querySelector('header .logo');

// to_top.addEventListener('click', function() {

//   $('html, body').stop().animate({ scrollTop: 0 }, 1000)

// }


for (var i = 0; i < nav_a.length; i++) {

    nav_a[i].addEventListener('click', function() {
        section = this.getAttribute('data-section');
        goTo = document.querySelector(section).offsetTop;
        goTo = goTo - header_height;

        $('html, body').stop().animate({
            scrollTop: goTo
        }, 1000);
    });

}


window.onscroll = function(){
    window_top_position = window.pageYOffset
    banner_height = document.querySelector('#banner').offsetHeight;

    if (window_top_position > banner_height) {

        header.classList.add('fixed')

    }else{
        header.classList.remove('fixed')
        // banner.style.backgroundPosition = '50% ' + window_top_position + 'px'
    }

}