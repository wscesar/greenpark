modal_window        = document.querySelector('#modal')
modal_banner        = document.querySelectorAll('#modal .banner img')
modal_background    = document.querySelector('#modal .background')
modal_banner_thumbs = document.querySelectorAll('#modal .banner .thumbs button')
appartments_thumbs  = document.querySelectorAll('#appartments .thumbs img')
modal_banner_left_arrow = document.querySelector('#modal .banner .ctrl.left')
modal_banner_right_arrow = document.querySelector('#modal .banner .ctrl.right')



// close modal window
modal_background.onclick = function() {
    modal_window.style.opacity = 0;

    setTimeout(function(){
        modal_window.classList.remove('active');
        modal_window.removeAttribute('style');
    },1000)
}



modal_banner_left_arrow.onclick = function() {
    var n = document.querySelector('.modal .banner img.active').getAttribute('data-number') - 1

    n <= 0 ? n = 5 : n = n - 1;

    for ( var i = 0 ; i < modal_banner.length ; i++ ) {
        modal_banner[i].classList.remove('active');
        modal_banner_thumbs[i].classList.remove('active');
    }

    modal_banner[n].classList.add('active');
    modal_banner_thumbs[n].classList.add('active');
}



modal_banner_right_arrow.onclick = function() {
    var n = document.querySelector('.modal .banner img.active').getAttribute('data-number') - 1

    n >= 5 ? n = 0 : n = n + 1

    for ( var i = 0 ; i < modal_banner.length ; i++ ) {
        modal_banner[i].classList.remove('active');
        modal_banner_thumbs[i].classList.remove('active');
    }

    modal_banner[n].classList.add('active');
    modal_banner_thumbs[n].classList.add('active');
}



for ( var i = 0 ; i < appartments_thumbs.length ; i++) {
    
    // show modal banner img on appartments thumb click
    appartments_thumbs[i].onclick = function() {
        n = this.getAttribute('data-number') - 1;

        for ( var i = 0 ; i < appartments_thumbs.length ; i++ ) {
            modal_banner[i].classList.remove('active');
            modal_banner_thumbs[i].classList.remove('active');
        }
         
        modal_window.classList.add('active');
        modal_banner[n].classList.add('active');

    }

    // change modal banner img on modal banner thumb click
    modal_banner_thumbs[i].onclick = function() {

        n = this.getAttribute('data-number') - 1 ;

        for ( var i = 0 ; i < modal_banner_thumbs.length ; i++ ) {
            modal_banner[i].classList.remove('active');
            modal_banner_thumbs[i].classList.remove('active');
        }
          
        this.classList.add('active');
        modal_banner[n].classList.add('active');

    }


}