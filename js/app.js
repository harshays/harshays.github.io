$(document).ready(function () {
  //   $('.paper-div-ns').toggle();
  $('body').hide().fadeIn();
  var onlySelected = true;

  // Function to toggle abstract
  function toggleAbstract(id) {
    var abs = '#' + id.replace('p', 'abs');
    $(abs).toggle();
  }

  // Make blog-div clickable - open in new tab
  $('.blog-div').click(function () {
    window.open($(this).find('a.blog-title').attr('href'), '_blank');
  });

  $('.abstract-button').click(function (e) {
    e.stopPropagation(); // Prevent event from bubbling to paper-div
    var id = $(this).attr('id');
    toggleAbstract(id);
  });

  // Add click handler for paper-div
  $('.paper-div').click(function () {
    // Find the abstract button within this paper div
    var abstractBtn = $(this).find('.abstract-button');
    var id = abstractBtn.attr('id');
    toggleAbstract(id);
  });

  $('.bib-button').click(function (e) {
    e.stopPropagation(); // Prevent event from bubbling to paper-div
    var id = $(this).attr('id');
    var bib = '#' + id.replace('b', 'bib');
    $(bib).toggle();
  });
});
