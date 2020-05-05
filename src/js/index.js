import "../css/styles.scss";
import "../css/reset.css";

const $ = require("jquery");
const Flipsnap = require("flipsnap");

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
