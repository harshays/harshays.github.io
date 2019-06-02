$(document).ready(function() {
    $('body').hide().fadeIn();

    $('.abstract-button').click(function() {
      $(this).unbind("mouseenter mouseleave");
      var id = $(this).attr('id')
      var abs = '#'+id.replace('p', 'abs');
      $(abs).toggle();
    })
});
