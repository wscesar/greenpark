
/*=======================================================
=            Show Data Table On Modal Window            =
=======================================================
 */

(function() {
  (function() {
    return $('.icon-paper, .icon-paper + img').on('click', function() {
      var modal_backgrund, modal_table, table, tables;
      table = this.parentNode.getAttribute('data-table');
      table = document.querySelector(table);
      tables = document.querySelectorAll('.modal ul');
      modal_table = document.querySelector('.modal.table');
      modal_backgrund = document.querySelector('.modal.background');
      tables[0].classList.remove('show');
      tables[1].classList.remove('show');
      tables[2].classList.remove('show');
      table.classList.add('show');
      modal_table.style.display = 'block';
      modal_backgrund.style.display = 'block';
      return setTimeout((function() {
        modal_table.classList.add('show');
        return modal_backgrund.classList.add('show');
      }), 100);
    });
  })();

}).call(this);

