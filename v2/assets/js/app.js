$(document).ready(function () {

  const filterBtns = $('.project-filter');
  const allWork = $('.work');
  const dasher = $('#dasher');
  const poke = $('#poke');
  const music = $('#music');
  const hero = $('#hero');
  const news = $('#news');
  const trivia = $('#trivia');

  const controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 1050}});

  filterBtns.on('click', function () {
    let btnId = $(this)[0].id
    filterBtns.removeClass('cat-active');
    $(this).addClass('cat-active');

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

	// build scenes
	const portScene = new ScrollMagic.Scene({triggerElement: "#portfolio"})
          .setClassToggle("#port-nav", "highlight") // add class toggle
					.addTo(controller);
	const aboutScene = new ScrollMagic.Scene({triggerElement: "#about-me"})
          .setClassToggle("#about-nav", "highlight") // add class toggle
					.addTo(controller);
	const contactScene = new ScrollMagic.Scene({triggerElement: "#contact"})
          .setClassToggle("#contact-nav", "highlight") // add class toggle
					.addTo(controller);

});