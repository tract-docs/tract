function navbarMenu() {
  const burger = $(".navbar-burger"),
        menu = $(".navbar-menu");

  burger.click(() => {
    [burger, menu].forEach((el) => el.toggleClass('is-active'));
  });
}

function tableOfContents() {
  tocbot.init({
    tocSelector: '.toc',
    contentSelector: '.content',
    scrollSmooth: true
  });
}

function docsDrawer() {
  $('#drawer-toggle').click(() => {
    $('#nav-modal').addClass('is-active');
  });

  $('#nav-modal-close').click(() => {
    $('#nav-modal').removeClass('is-active');
  });
}

$(function() {
  navbarMenu();
  tableOfContents();
  docsDrawer();
});
