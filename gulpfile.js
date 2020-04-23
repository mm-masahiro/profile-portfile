const gulp = require("gulp");
const imagemin = require("gulp-imagemin");

gulp.task("images", function () {
  return gulp
    .src("src/img/*.{jpg,jpeg,png}")
    .pipe(
      imagemin({
        progressive: true,
      })
    )
    .pipe(gulp.dest("public/img"));
});
