import "../css/styles.scss";
import "../css/reset.css";

const Flipsnap = require("flipsnap");

function setUpSlider() {
  if (window.matchMedia("(max-width: 415px)").matches) {
    Flipsnap("#about_slide", { distance: 260 });
    const aboutSelects = document.querySelectorAll(".about_select");

    document.addEventListener("fspointmove", function () {
      for (let i = 0; i < aboutSelects.length; i += 1) {
        aboutSelects[i].classList.toggle("current");
      }
    });

    Flipsnap("#job_slide", { distance: 260 });
    const jobSelects = document.querySelectorAll(".job_select");

    document.addEventListener("fspointmove", function () {
      for (let i = 0; i < jobSelects.length; i += 1) {
        jobSelects[i].classList.toggle("current");
      }
    });

    Flipsnap("#hobby_slide", { distance: 260 });
    const hobbySelects = document.querySelectorAll(".hobby_select");

    document.addEventListener("fspointmove", function () {
      for (let i = 0; i < hobbySelects.length; i += 1) {
        hobbySelects[i].classList.toggle("current");
      }
    });
  }
}

function setUpCursor() {
  const cursor = document.querySelector(".cursor");
  const cursorWidth = 20; // カーソルの大きさ
  let mouseX = 0; // マウスのX座標
  let mouseY = 0; // マウスのY座標

  document.addEventListener("mousemove", (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
    cursor.style.display = "block";
    cursor.style.left = `${mouseX - cursorWidth / 2}px`;
    cursor.style.top = `${mouseY - cursorWidth / 2}px`;
  });
}

function init() {
  setUpSlider();
  setUpCursor();
}

init();
