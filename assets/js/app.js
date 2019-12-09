const navbarMenu = () => {
  const burger = $(".navbar-burger"),
        menu = $(".navbar-menu");

  burger.click(() => {
    [burger, menu].forEach((el) => el.toggleClass('is-active'));
  });
}

$(() => {
  navbarMenu();
});
