$(document).ready(function() {
    $('body').hide().fadeIn();

    $('.abstract-button').click(function() {
      var id = $(this).attr('id')
      var abs = '#'+id.replace('p', 'abs');
      $(abs).toggle();
    })

    $('.bib-button').click(function() {
      var id = $(this).attr('id');
      var bib = '#'+id.replace('b', 'bib');
      $(bib).toggle();
    })
});
