const navbarMenu = () => {
  const burger = $(".navbar-burger"),
        menu = $(".navbar-menu");

  burger.click(() => {
    [burger, menu].forEach((el) => el.toggleClass('is-active'));
  });
}

const docsDrawer = () => {
  $('#drawer-toggle').click(() => {
    $('#nav-modal').addClass('is-active');
  });

  $('#nav-modal-close').click(() => {
    $('#nav-modal').removeClass('is-active');
  });
}

const homeNavbar = () => {
  const elem = $('#home-navbar'),
    threshold = $('#home-hero').height(),
    brand = $('#home-navbar-brand');

  $(window).scroll(() => {
    if ($(window).scrollTop() > threshold) {
      elem.addClass('is-fixed-top');
      brand.removeClass('is-hidden');
    } else {
      elem.removeClass('is-fixed-top');
      brand.addClass('is-hidden');
    }
  });
}

$(function() {
  navbarMenu();
  docsDrawer();
  homeNavbar();

  if ($('.dashboard-panel.main')) {
    $('.dashboard-panel.main').focus();
  }
});
