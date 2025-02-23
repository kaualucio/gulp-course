const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'))
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat')
const babel = require('gulp-babel')
function compileSass() {
  return gulp.src('scss/*.scss')
  .pipe(sass({ style: 'compressed' }))
  .pipe(autoprefixer({
    overrideBrowserslist: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest('css/'))
  .pipe(browserSync.stream())
}

function gulpJs() {
  return gulp.src('js/scripts/*.js')
  .pipe(concat('all.js'))
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(gulp.dest('js/'))
}

function browser() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
}

function watch() {
  gulp.watch('scss/*.scss', compileSass)
  gulp.watch('*.html').on('change', browserSync.reload)
  gulp.watch('js/scripts/*.js', gulpJs)
}

gulp.task('browser-sync', browser)
gulp.task('sass', compileSass)
gulp.task('watch', watch)
gulp.task('allJs', gulpJs)
gulp.task('default', gulp.parallel('watch', 'browser-sync', 'sass', 'allJs'))
