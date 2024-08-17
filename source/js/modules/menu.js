const mainMenu = document.querySelector('.header__navigation');
const menuToggle = document.querySelector('.header__navigation-toggle');
const menuLinks = mainMenu.querySelectorAll('.header__navigation-link');

const noHiddenMenu = window.matchMedia('(min-width: 1440px)');

const onMenuToggleClick = () => {
  mainMenu.classList.toggle('header__navigation--hidden');
  document.body.classList.toggle('menu-open');
};

const openMainMenu = () => menuToggle.addEventListener('click', onMenuToggleClick);

const onMenuLinkClick = (menuLink) => menuLink.addEventListener('click', onMenuToggleClick);

const clickMenuLinks = () => {
  if (noHiddenMenu.matches) {
    return;
  }
  menuLinks.forEach((menuLink) => onMenuLinkClick(menuLink));
};

export {openMainMenu, clickMenuLinks};
