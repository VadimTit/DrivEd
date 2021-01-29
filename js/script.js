$('.nav__toggle').on('click', menuToggle);

function menuToggle() {
  // $('.menu__list').slideToggle(700);
  $(this).toggleClass('nav__toggle--active');
  $('.nav__links').toggleClass('nav__links--open');
}

$('.nav-select').on('click', function () {
  $('.nav-select__options').toggleClass('nav-select__options--active');
  $('.nav-select').toggleClass('nav-select--actived ');
});

$(document).ready(function () {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const t = 1000;
    const d = $(this).attr('href');
    $('html,body')
      .stop()
      .animate({ scrollTop: $(d).offset().top - 100 }, t);
  });
});
;
