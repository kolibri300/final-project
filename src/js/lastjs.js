(() => {
  const refs = {
    openModalBtn: document.querySelector("[menu-data-last-open]"),
    closeModalBtn1: document.querySelector("[menu-data-last-close]"),
    closeModalBtn2: document.querySelector("[menu-data-last-close-btn]"),
    modal: document.querySelector("[menu-data-last-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn1.addEventListener("click", toggleModal);
  refs.closeModalBtn2.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();