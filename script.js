const hamburger = document.getElementById("hamburger");

const globalNav = document.querySelector(".global-nav");

const close = document.getElementById("close");

const overlay = document.querySelector(".overlay");

const wrap_main = document.querySelector(".wrap-main");

const slider = document.getElementById("slider-background");

const doorImg = document.getElementById("door-img");

hamburger.addEventListener("click", () => {
  globalNav.classList.toggle("active");
  globalNav.classList.add("loaded");
});

close.addEventListener("click", () => {
  globalNav.classList.toggle("active");
});

function checkOverLay() {
  if (isOutOfViewport(slider)) {
    // slider.classList.add("active");
    console.log("out of viewport");
    clearOverLay();
  } else {
    // slider.classList.remove("active");
    console.log("in viewport");
  }
}

function isOutOfViewport(el) {
  const rect = el.getBoundingClientRect();

  return (
    rect.bottom < 50 ||
    rect.top > window.innerHeight ||
    rect.right < 0 ||
    rect.left > window.innerWidth
  );
}

function clearOverLay() {
  overlay.classList.add("inactive");
  wrap_main.classList.add("active");
  window.scrollTo(0, 0);
  window.removeEventListener("scroll", checkOverLay);
}

window.addEventListener("scroll", checkOverLay);

function isResetOverLay() {
  if (!isOutOfViewport(slider)) {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }
}
//ページ更新時に、スクロール位置がsliderの範囲内であれば、スクロール位置をリセットするyo

isResetOverLay();

// ドアの開閉アニメーション

function openDoor() {
  doorImg.classList.remove("shake");
  doorImg.classList.add("open");
}

["click", "touchstart"].forEach((event) =>
  doorImg.addEventListener(event, openDoor),
);
