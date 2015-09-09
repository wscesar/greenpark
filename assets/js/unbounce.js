modal_form = document.querySelector('.modal .form');
modal_background = document.querySelector('.modal .background');

document.querySelector('body').addEventListener('mouseleave', function(element) {

  // displayed = modal_form.getAttribute('data-displayed');
  displayed = 'false';
  body_top_position = window.pageYOffset;
  mouse_top_position = element.offsetY;

  if ( mouse_top_position - body_top_position < 0 && displayed != 'true' ) {
    // alert()


    // modal_form.style.display = 'block';
    // modal_background.style.display = 'block';

    // setTimeout(function() {
    //   modal_background.classList.add('show');
    //   modal_form.classList.add('show');
    //   modal_form.classList.add('shake');
    //   modal_form.setAttribute('data-displayed', 'true');
    // },500)


  }
})