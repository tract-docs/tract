{{ $indexUrl := printf "%s/index.json" .Lang | relURL }}
const navbarMenu = () => {
  const burger = $(".navbar-burger"),
        menu = $(".navbar-menu");

  burger.click(() => {
    [burger, menu].forEach((el) => el.toggleClass('is-active'));
  });
}

const search = () => {
  const searchBar = $('#search-bar');

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

  const jsonify = (res) => {
    return res.json();
  }

  const showSearchDrawer = () => {
    searchBar.hide();
  }

  const searchBarFocus = () => {
    showSearchDrawer();
  }

  const handleIndex = (idx) => {
    searchBar.on('focus', searchBarFocus);
  }

  fetch('{{ $indexUrl }}')
    .then(jsonify)
    .then(handleIndex);
}

$(function() {
  navbarMenu();
  search();
});
