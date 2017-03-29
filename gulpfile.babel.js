import gulp from 'gulp';
import concat from 'gulp-concat';
import annotate from 'gulp-ng-annotate';
import plumber from 'gulp-plumber';
import uglify from 'gulp-uglify';
import watch from 'gulp-watch';
import sass from 'gulp-sass';
import path from 'path';
import babel from 'gulp-babel';

const paths = {
  jsSource: ['./js/*.js'],
  sassSource: ['./styles/*.scss'],
  paths: [ path.join(__dirname, 'styles') ]
};
const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded',
  paths: [ path.join(__dirname, 'styles') ]
};

gulp.task('js', () =>  {
  return gulp.src(paths.jsSource)
  .pipe(plumber())
  .pipe(babel({
    presets: ["es2015"]
  }))
  .pipe(concat('bundle.js'))
  .pipe(annotate())
  .pipe(uglify())
  .pipe(gulp.dest('./js'));
});


gulp.task('sass', () => {
  return gulp.src(paths.sassSource)
  .pipe(sass(sassOptions).on('error', sass.logError))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('./styles'));
});

gulp.task('watch', () =>  {
  gulp.watch(paths.jsSource, ['js']);
  gulp.watch(paths.sassSource, ['sass']);
});

gulp.task('default', ['watch', 'js', 'sass']);
