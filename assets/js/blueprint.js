blueprint              = document.querySelectorAll('#blueprint figure img');
blueprint_arrows       = document.querySelectorAll('#blueprint .ctrl');
blueprint_thumbs       = document.querySelectorAll('#blueprint .thumbs button');


// change blueprint on thumbs
for ( var i = 0 ; i < blueprint.length ; i++ ) {

    blueprint_thumbs[i].onclick = function() {

        n = this.getAttribute('data-number') - 1 ;

        for ( var i = 0 ; i < blueprint_thumbs.length ; i++ ) {
            blueprint[i].classList.remove('active');
            blueprint_thumbs[i].classList.remove('active');
        }
          
        this.classList.add('active');
        blueprint[n].classList.add('active');

    }
}

// change blueprint on arrows
for ( var i = 0 ; i < blueprint_arrows.length ; i++ ) {

    blueprint_arrows[i].onclick = function() {

        var n = document.querySelector('#blueprint img.active').getAttribute('data-number');

        switch(n) {
            case '1' : n = 1; break;
            case '2' : n = 0; break;
        }

        for ( var i = 0 ; i < blueprint_thumbs.length ; i++ ) {
            blueprint[i].classList.remove('active');
            blueprint_thumbs[i].classList.remove('active');
        }

        blueprint[n].classList.add('active');
        blueprint_thumbs[n].classList.add('active');

    }
}