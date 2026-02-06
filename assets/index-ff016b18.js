(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const style = "";
(() => {
  const refs = {
    openModalBtn: document.querySelector("[menu-data-modal-open]"),
    closeModalBtn: document.querySelector("[menu-data-modal-close]"),
    modal: document.querySelector("[menu-data-modal]")
  };
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-burger");
    document.body.classList.toggle("no-scroll");
  }
})();
const mySlider = new Splide(
  "#mySliderPr",
  {
    type: "loop",
    focus: 0,
    arrows: false,
    autoplay: true,
    perPage: 4,
    gap: "18px",
    breakpoints: {
      1200: {
        fixedWidth: "270px"
      },
      768: {
        perPage: 1,
        fixedWidth: "335px"
      }
    }
  }
);
const mySliderRe = new Splide(
  "#mySliderRe",
  {
    type: "loop",
    focus: 0,
    arrows: false,
    autoplay: true,
    perPage: 3,
    gap: "28px",
    breakpoints: {
      1200: {
        perPage: 2,
        gap: "16px"
      },
      768: {
        perPage: 1
      }
    }
  }
);
const buyChoc = new Splide(
  "#BuyChocolate",
  {
    type: "loop",
    focus: 0,
    arrows: false,
    perPage: 3,
    gap: "16px"
  }
);
mySlider.mount();
mySliderRe.mount();
buyChoc.mount();
const video = document.querySelector(".made-video");
const play = document.querySelector(".made-play");
const pause = document.querySelector(".made-pause");
play.addEventListener("click", (e) => {
  if (video.paused) {
    video.play();
    pause.style.display = "none";
  } else {
    video.pause();
    pause.style.display = "flex";
  }
});
