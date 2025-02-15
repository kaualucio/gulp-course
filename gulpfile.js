const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'))
// const watch = require('gulp-watch');

function compileSass() {
  return gulp.src('scss/*.scss')
  .pipe(sass({ style: 'compressed' }))
  .pipe(autoprefixer({
    overrideBrowserslist: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('css/'))
}

function watch() {
  gulp.watch('scss/*.scss', compileSass)
}

gulp.task('sass', compileSass)
gulp.task('default', watch)