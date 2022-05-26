const scrolltop = document.querySelector('.scrolltop');

scrolltop.addEventListener('click', () => {
  window.scroll({
    top: 100,
    left: 100,
    behavior: 'smooth',
  });
});
