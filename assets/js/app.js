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

const fixOnScroll = (el, threshold) => {
  const elem = $(el);

  $(window).scroll(() => {
    if ($(window).scrollTop() > threshold) {
      elem.addClass('is-fixed-top');
    } else {
      elem.removeClass('is-fixed-top');
    }
  });
}

const homeNavbar = () => {
  fixOnScroll('#home-navbar', $('#home-hero').height());
}

$(function() {
  navbarMenu();
  docsDrawer();
  homeNavbar();
});
