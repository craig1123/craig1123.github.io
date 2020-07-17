var gulp = require("gulp");
var uglify = require("gulp-uglify");
var minifyCss = require("gulp-minify-css");
var htmlmin = require("gulp-htmlmin");
var browserSync = require("browser-sync").create();
var useref = require("gulp-useref");
var gulpIf = require("gulp-if");
var imagemin = require("gulp-imagemin");
var cache = require("gulp-cache");
var del = require("del");

gulp.task("css", function (done) {
  gulp
    .src("src/**/*.css")
    .pipe(minifyCss({ keepSpecialComments: 0 }))
    .pipe(gulp.dest("css/"));
  done();
});

gulp.task("images", function (done) {
  gulp
    .src("src/images/**/*.+(png|jpg|svg)")
    .pipe(cache(imagemin()))
    .pipe(gulp.dest("images"));
  done();
});

gulp.task("useref", function (done) {
  gulp
    .src("src/**/*.html")
    .pipe(useref())
    .pipe(gulpIf("*.js", uglify()))
    .pipe(gulpIf("*.css", minifyCss({ keepSpecialComments: 0 })))
    .pipe(
      gulpIf(
        "*.html",
        htmlmin({
          removeComments: true,
          collapseWhitespace: true,
          ignoreCustomFragments: [/<%[\s\S]*?%>/, /<\?[=|php]?[\s\S]*?\?>/],
        })
      )
    )
    .pipe(gulp.dest("./"));
  done();
});

gulp.task("clean", function (done) {
  del.sync(["./css", "./index.html", "./js", "./images"]);
  done();
});

gulp.task("watch", function () {
  browserSync.init({
    server: {
      baseDir: "./src",
    },
  });
  gulp.watch("src/**/*.css").on("change", browserSync.reload);
  gulp.watch("src/index.html").on("change", browserSync.reload);
  gulp.watch("src/**/*.js").on("change", browserSync.reload);
});

gulp.task("default", gulp.series("watch"));

gulp.task("build", gulp.series("clean", "useref", "images"));
