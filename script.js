const hamburger = document.getElementById("hamburger");

const globalNav = document.querySelector(".global-nav");

const close = document.getElementById("close");

const overlay = document.querySelector(".overlay");

const wrap_main = document.querySelector(".wrap-main");

const slider = document.getElementById("slider-background");

const doorImg = document.getElementById("door-img");

const letters = document.querySelectorAll(".letter");

const para1 = document.querySelector(".para1");

const para2 = document.querySelector(".para2");

const animationTitle = document.querySelector(".animation-title");

const animationSubtitle = document.querySelector(".animation-subtitle");

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
  doorImg.addEventListener(event, async () => {
    openDoor();
    setTimeout(async () => {
      paraAnimation();
      mainTitleAnimation();
      await titleAnimation();
    }, 1500);
  }),
);

function paraAnimation() {
  para1.classList.add("para1-animation");
  setTimeout(() => {
    para2.classList.add("para2-animation");
  }, 1000);
}

function mainTitleAnimation() {
  setTimeout(() => {
    animationTitle.classList.add("title-animation");
    animationSubtitle.classList.add("subtitle-animation");
  }, 2500);
}

async function titleAnimation() {
  for (const [index, letter] of letters.entries()) {
    if (index < 3) {
      // 日常
      await new Promise((resolve) => {
        setTimeout(() => {
          letter.classList.add("eye-catch-animation");
          resolve();
        }, index * 200);
      });
    } else if (index === 5) {
      // の
      await new Promise((resolve) => {
        setTimeout(() => {
          letter.classList.add("eye-catch-animation");
          resolve();
        }, index * 100);
      });
    } else {
      // から 非常口
      await new Promise((resolve) => {
        setTimeout(() => {
          letter.classList.add("eye-catch-animation");
          resolve();
        }, index * 30);
      });
    }
  }
}
