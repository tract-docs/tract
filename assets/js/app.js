function navbarMenu() {
  const burger = $(".navbar-burger"),
        menu = $(".navbar-menu");

  burger.click(() => {
    [burger, menu].forEach((el) => el.toggleClass('is-active'));
  });
}

function docsDrawer() {
  const trigger = $('#docs-drawer-trigger');

  trigger.click((e) => {
    
  });
}

$(function() {
  navbarMenu();
  docsDrawer();
});
