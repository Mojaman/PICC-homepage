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

// スムーズな開閉あにめーしょん
// document.querySelectorAll("details.smooth-details").forEach((details) => {
//   const content = details.querySelector(".details-content");

//   details.addEventListener("toggle", () => {
//     if (details.open) {
//       const height = content.scrollHeight;
//       content.style.height = height + "px";

//       content.addEventListener(
//         "transitionend",
//         () => {
//           content.style.height = height + "px";
//         },
//         { once: true },
//       );
//     } else {
//       const height = content.scrollHeight;
//       content.style.height = height + "px";

//       requestAnimationFrame(() => {
//         content.style.height = "0px";
//       });
//     }
//   });
// });
document.querySelectorAll("details.smooth-details").forEach((details) => {
  const content = details.querySelector(".details-content");

  // 初回の高さ計算を安定させる
  // 一瞬だけ高さを auto にしてレイアウトを確定させる
  content.style.height = "auto";
  const fixedHeight = content.scrollHeight;
  content.style.height = "0px";

  details.addEventListener("toggle", () => {
    if (details.open) {
      content.style.height = fixedHeight + "px";
    } else {
      content.style.height = fixedHeight + "px";
      requestAnimationFrame(() => {
        content.style.height = "0px";
      });
    }
  });
});
