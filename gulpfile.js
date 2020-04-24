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
    .pipe(gulp.dest("nginx/www/img"));
});

// var responsive = require('gulp-responsive')

// gulp.task('default', function () {
//   return gulp
//     .src('src/img/*.{jpeg,jpg}')
//     .pipe(
//       responsive({
//         'background-*.jpg': {
//           width: 700,
//           quality: 50
//         },
//       })
//     )
//     .pipe(gulp.dest('dist'))
// })
