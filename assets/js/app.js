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

function addAnchors() {
  anchors.options = {
    icon: '#'
  }
  anchors.add('.content h1, .content h2, .content h3, .content h4');
}

$(function() {
  navbarMenu();
  docsDrawer();
  addAnchors();
});
