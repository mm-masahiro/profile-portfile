import "../css/styles.scss";
import "../css/reset.css";

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
