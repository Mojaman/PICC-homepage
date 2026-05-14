const hamburger = document.getElementById("hamburger");

const globalNav = document.querySelector(".global-nav");

const close = document.getElementById("close");

hamburger.addEventListener("click", () => {
  globalNav.classList.toggle("active");
  globalNav.classList.add("loaded");
});

close.addEventListener("click", () => {
  globalNav.classList.toggle("active");
});
