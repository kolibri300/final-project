(() => {
  const refs = {
    openModalBtn: document.querySelector("[menu-data-modal-revthx-open]"),
    closeModalBtn: document.querySelector("[menu-data-modal-revthx-close]"),
    modal: document.querySelector("[menu-data-revthx-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();