import "../css/styles.scss";
import "../css/reset.css";

const Flipsnap = require("flipsnap");

function setUpSlider() {
  if (window.matchMedia("(max-width: 415px)").matches) {
    const aboutSlide = Flipsnap("#about_slide", { distance: 275 }); // eslint-disable-line no-unused-vars
    const aboutSelect = document.querySelectorAll(".about_select");

    document.addEventListener("fspointmove", function () {
      for (let i = 0; i < aboutSelect.length; i += 1) {
        aboutSelect[i].classList.toggle("current");
      }
    });

    Flipsnap("#job_slide", { distance: 275 });
    const jobSelect = document.querySelectorAll(".job_select");

    document.addEventListener("fspointmove", function () {
      for (let i = 0; i < jobSelect.length; i += 1) {
        jobSelect[i].classList.toggle("current");
      }
    });

    Flipsnap("#hobby_slide", { distance: 275 });
    const hobbySelect = document.querySelectorAll(".hobby_select");

    document.addEventListener("fspointmove", function () {
      for (let i = 0; i < hobbySelect.length; i += 1) {
        hobbySelect[i].classList.toggle("current");
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
