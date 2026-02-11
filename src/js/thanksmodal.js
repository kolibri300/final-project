(() => {
  const refs = {
    openModalBtn: document.querySelector("[menu-data-thx-buy-open]"),
    closeModalBtn: document.querySelector("[menu-data-thx-buy-close]"),
    modal: document.querySelector("[menu-data-thx-buy-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();