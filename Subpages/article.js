import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";
import {
  getFirestore,
  onSnapshot,
  updateDoc,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";
// import { articles_data } from "./articles_list.js";

// Firebase設定
const firebaseConfig = {
  apiKey: "AIzaSyD2-qs_MfQk1540EgVtl6F3bH0tEmRIU88",
  authDomain: "homepage-test-cc15b.firebaseapp.com",
  projectId: "homepage-test-cc15b",
  storageBucket: "homepage-test-cc15b.firebasestorage.app",
  messagingSenderId: "306865836134",
  appId: "1:306865836134:web:8e6262f6f9fab6477a9da7",
  measurementId: "G-Z4B1QECB3Y",
};

// 初期化
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

//ナビゲーションここから

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

//ここまでナビゲーションの処理
//DOM取得
const title = document.getElementById("title");
const content = document.getElementById("content");

const params = new URLSearchParams(location.search);
const page = params.get("page");

//docRefは住所の指定に過ぎない
const docRef = doc(db, "articles", page);
const pageRef = await getDoc(docRef);
//そのまま使える
const pageData = pageRef.data();
const contentLength = pageData.content.length;

//ページ読み込み後に実行
pageAdapt();

function pageAdapt() {
  title.innerText = pageData.title;

  content.innerHTML = "";
  for (let i = 0; i < contentLength; i++) {
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");

    h4.textContent = pageData.content[i].subheading;
    h4.classList.add("index");
    p.textContent = pageData.content[i].sentence.replace(/\n/g, "<br>");

    div.appendChild(h4);
    div.appendChild(p);

    content.appendChild(div);
  }
}
