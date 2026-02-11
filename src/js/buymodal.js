(() => {
  const refs = {
    openModalBtn: document.querySelector("[menu-data-modal-buy-open]"),
    closeModalBtn1: document.querySelector("[menu-data-modal-buy-close]"),
    closeModalBtn2: document.querySelector("[menu-data-modal-buy-close-btn]"),
    modal: document.querySelector("[menu-data-buy-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn1.addEventListener("click", toggleModal);
  refs.closeModalBtn2.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
    if (!refs.modal.classList.contains("is-hidden")) {
      const scrollBox = refs.modal.querySelector(".buychoc");
      scrollBox.scrollTop = 0;
    }
  }
})();