import "../css/styles.scss";
import "../css/reset.css";

const $ = require("jquery");
const Flipsnap = require("flipsnap");

if (window.matchMedia("(max-width: 415px)").matches) {
  $(function () {
    Flipsnap("#about_slide", {
      distance: 280,
    });
  });
  $(function () {
    Flipsnap("#job_slide", {
      distance: 280,
    });
  });
  $(function () {
    Flipsnap("#hobby_slide", {
      distance: 280,
    });
  });
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
  setUpCursor();
}

init();
