$(document).ready(function () {

  const filterBtns = $('.project-filter');
  const allWork = $('.work');
  const dasher = $('#dasher');
  const poke = $('#poke');
  const music = $('#music');
  const hero = $('#hero');
  const news = $('#news');
  const trivia = $('#trivia');

  filterBtns.on('click', function () {
    let btnId = $(this)[0].id
    filterBtns.removeClass('project-highlight');
    $(this).addClass('project-highlight');

    switch (btnId) {
      case 'all-btn':
        allWork.removeClass('hidden');
        break;
      case 'full-stack-btn':
        allWork.removeClass('hidden');
        music.addClass('hidden');
        hero.addClass('hidden');
        trivia.addClass('hidden'); 
        break;
      case 'react-btn':
        allWork.removeClass('hidden');
        dasher.addClass('hidden');
        music.addClass('hidden');
        news.addClass('hidden');
        trivia.addClass('hidden');
        break;
      case 'node-btn':
        allWork.removeClass('hidden');
        music.addClass('hidden');
        trivia.addClass('hidden');
        break;
      default:
        console.log('Something went wrong');
    }

    
  })



});