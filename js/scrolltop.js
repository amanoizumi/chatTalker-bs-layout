const scrolltop = document.querySelector('.scrolltop');

scrolltop.addEventListener('click', () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
