const menu = document.querySelector('.navitems');
const openMenu = document.querySelector('.menuhamburger');
const bars = document.querySelector('.toggle');
const scrollDownSection = document.querySelector('.scroll-down');

// mobile menu
openMenu.addEventListener('click', function (e) {
  if (menu.style.display === 'none') {
    menu.style.display = 'flex';
    bars.style.opacity = '0.5';
  } else {
    menu.style.display = 'none';
    bars.style.opacity = '1';
  }
});

scrollDownSection.addEventListener('click', function (e) {
  console.log('clicked');
  document
    .querySelector('.items-on-grid')
    .scrollIntoView({ behavior: 'smooth' });
});
