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

const search = () => {
  const options = {
    shouldSort: true,
    threshold: 0.6,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
      {
        name: 'title',
        weight: 0.7
      },
      {
        name: 'summary',
        weight: 0.5,
      },
      {
        name: 'body',
        weight: 0.3
      }
    ]
  }

  fetch('/index.json')
    .then((res) => {
      return res.json();
    })
    .then((docs) => {
      console.log(docs.length);

      const fuse = new Fuse(docs, options);

      const res = fuse.search('Tract');

      res.forEach((item) => {
        console.log(item);
      });
    });
}

const docFocus = () => {
  if ($('.dashboard-panel.main')) {
    $('.dashboard-panel.main').focus();
  }
}

$(function() {
  navbarMenu();
  docsDrawer();
  homeNavbar();
  search();
});
