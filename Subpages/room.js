const hamburger = document.getElementById("hamburger");

const globalNav = document.querySelector(".global-nav");

const close = document.getElementById("close");

const imgIndexes = document.querySelectorAll(".room-img-index");

// 変数宣言

let currentIndex = 0;

const roomData = [
  {
    index: 0,
    imgSrc: "../sample.png",
    alt: "部室の画像1",
    color: "#e9644c",
    intro: "test",
  },
  {
    index: 1,
    imgSrc: "../sample.png",
    alt: "部室の画像2",
    color: "#f8fc33",
    intro: "test",
  },
  {
    index: 2,
    imgSrc: "../sample.png",
    alt: "部室の画像3",
    color: "#2dc020",
    intro: "test",
  },
  {
    index: 3,
    imgSrc: "../sample.png",
    alt: "部室の画像4",
    color: "#0f8b8b",
    intro: "test",
  },
  {
    index: 4,
    imgSrc: "../sample.png",
    alt: "部室の画像5",
    color: "#323ee6",
    intro: "test",
  },
  {
    index: 5,
    imgSrc: "../sample.png",
    alt: "部室の画像6",
    color: "#7f3cd6",
    intro: "test",
  },
];

hamburger.addEventListener("click", () => {
  globalNav.classList.toggle("active");
  globalNav.classList.add("loaded");
});

close.addEventListener("click", () => {
  globalNav.classList.toggle("active");
});

imgIndexes.forEach((index) => {
  index.addEventListener("click", () => {
    imgIndexes.forEach((i) => i.classList.remove("active"));
    index.classList.add("active");
    currentIndex = parseInt(index.getAttribute("data-index"));
    updateRoomImage();
  });
});

function updateRoomImage() {
  const imgContainer = document.querySelector(".room-img-container");
  const imgElement = imgContainer.querySelector("img");
  const currentData = roomData[currentIndex];
  imgElement.src = currentData.imgSrc;
  imgElement.alt = currentData.alt;
  imgContainer.style.backgroundColor = currentData.color;
}

updateRoomImage();
