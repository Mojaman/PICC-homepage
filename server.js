import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-analytics.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  doc,
  getDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

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

const welcomeRef = doc(db, "template", "welcome");
const welcomeSnap = await getDoc(welcomeRef);

const activityRef = doc(db, "template", "activity");
const activitySnap = await getDoc(activityRef);

const roomRef = doc(db, "template", "room");
const roomSnap = await getDoc(roomRef);

//DOM取得
const templateWelcome = document.getElementById("template_welcome");
const templateActivity = document.getElementById("template_activity");
const templateRoom = document.getElementById("template_room");
const displayNews = document.getElementById("display_news");

templateWelcome.innerHTML = welcomeSnap.data().text.replace(/\n/g, "<br>");
templateActivity.innerHTML = activitySnap.data().text.replace(/\n/g, "<br>");
templateRoom.innerHTML = roomSnap.data().text.replace(/\n/g, "<br>");

//ページ読み込み後に実行
await reloadNews();

async function reloadNews() {
  displayNews.innerHTML = "";
  const collectionRef = collection(db, "articles");
  const querySnapshot = await getDocs(collectionRef);

  querySnapshot.forEach((doc) => {
    const published = doc.data().published;
    if (published === 1) {
      const div = document.createElement("div");
      const a = document.createElement("a");
      a.href = `Subpages/article.html?page=${doc.id}`;
      a.textContent = doc.data().title;
      div.appendChild(a);
      displayNews.appendChild(div);
    }
  });
}
