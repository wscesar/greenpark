nav_a = document.querySelectorAll('nav a');
// to_top = document.querySelector('.icon-top_arrow');
header_height = document.querySelector('header').offsetHeight;

// to_top.addEventListener('click', ->
//   $('html, body').stop().animate { scrollTop: 0 }, 1000


for ( var i = 0 ; i < nav_a.length ; i++ ) {

  nav_a[i].addEventListener('click', function() {
    section = this.getAttribute('data-section');
    goTo = document.querySelector(section).offsetTop;
    goTo = goTo - header_height;

    $('html, body').stop().animate({ scrollTop: goTo }, 1000);
  });



// window.onscroll = function(){
    
//     window_top_position = window.pageYOffset

//     if (window_top_position > 1) {
//         document.querySelector('header').classList.add('fixed')
//         console.log('oi')
//     }else{
//         document.querySelector('header').classList.remove('fixed')
//         console.log('ola')
//     }

// }


// window.onscroll = function(){
    
//     video         = document.querySelector('#video').offsetHeight;
//     contact       = document.querySelector('#contact').offsetHeight;
//     location      = document.querySelector('#location').offsetHeight;
//     greenpark     = document.querySelector('#greenpark').offsetHeight;
//     appartments   = document.querySelector('#appartments').offsetHeight;
//     differentials = document.querySelector('#differentials').offsetHeight;
//     work_progress = document.querySelector('#work-progress').offsetHeight;

//     window_top_position = window.pageYOffset

//     if (window_top_position == sobre) {
//          _gaq.push(['_trackPageview', '/differentials']);
//     }

//     if (window_top_position == servicos) {
//          _gaq.push(['_trackPageview', '/greenpark']);
//     }

//     if (window_top_position == portfolio) {
//          _gaq.push(['_trackPageview', '/appartments']);
//     }

//     if (window_top_position == web) {
//          _gaq.push(['_trackPageview', '/video']);
//     }

//     if (window_top_position == diferencial) {
//          _gaq.push(['_trackPageview', '/location']);
//     }

//     if (window_top_position == depoimentos) {
//          _gaq.push(['_trackPageview', '/contact']);
//     }

//     if (window_top_position == contato) {
//          _gaq.push(['_trackPageview', '/work']);
//     }

// }
}