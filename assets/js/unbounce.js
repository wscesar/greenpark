body             = document.querySelector('body');
modal_form       = document.querySelector('.modal.form');
modal_banner     = document.querySelector('.modal.banner');
modal_background = document.querySelector('.modal.background');

body.onmouseleave = function(element) {

    body_top_position = window.pageYOffset;
    mouse_top_position = element.offsetY;

    if ( (mouse_top_position - body_top_position < 0) && (localStorage.getItem('form_displayed') != 'true') ) {

        modal_background.style.display = 'block';
        modal_banner.style.display = 'none';
        modal_form.style.display = 'block';
        modal_form.classList.add('shake');
        localStorage.setItem('form_displayed','true');

    }

}