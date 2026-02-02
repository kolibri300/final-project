(() => {
  const refs = {
    openModalBtn: document.querySelector("[menu-data-modal-open]"),
    closeModalBtn: document.querySelector("[menu-data-modal-close]"),
    modal: document.querySelector("[menu-data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-burger");
    document.body.classList.toggle("no-scroll");
  }
})();