$(document).ready(function () {

  const filterBtns = $('.project-filter');

    filterBtns.on('click', function() {
      console.log($(this));
      filterBtns.removeClass('project-highlight');
      $(this).addClass('project-highlight');
    })

});