const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menu && nav) menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
