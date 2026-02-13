(() => {
  const refs = {
    openModalBtn: document.querySelector("[menu-data-modal-rev-open]"),
    closeModalBtn1: document.querySelector("[menu-data-modal-rev-close]"),
    closeModalBtn2: document.querySelector("[menu-data-modal-rev-close-btn]"),
    modal: document.querySelector("[menu-data-rev-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn1.addEventListener("click", toggleModal);
  refs.closeModalBtn2.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();