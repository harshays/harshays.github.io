$(document).ready(function () {
  //   $('.paper-div-ns').toggle();
  $('body').hide().fadeIn();
  var onlySelected = true;

  $('.abstract-button').click(function () {
    var id = $(this).attr('id');
    var abs = '#' + id.replace('p', 'abs');
    $(abs).toggle();
  });

  $('.bib-button').click(function () {
    var id = $(this).attr('id');
    var bib = '#' + id.replace('b', 'bib');
    $(bib).toggle();
  });

  //   $('#selected-button').click(function (e) {
  //     if (onlySelected) {
  //       e.target.innerText = 'Show selected';
  //       onlySelected = false;
  //     } else {
  //       e.target.innerText = 'Show all';
  //       onlySelected = true;
  //     }
  //     $('.paper-div-ns').toggle();
  //   });
});
