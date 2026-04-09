export const modalOpen = (isOpen: boolean | undefined): void => {
  if (isOpen) {
    document.body.style.setProperty('--scroll-width',
      `${window.innerWidth - document.documentElement.clientWidth}px`);
    document.body.classList.add('modal-open');
  }
  else {
    document.body.style.removeProperty('--scroll-width');
    document.body.classList.remove('modal-open');
  }
}
