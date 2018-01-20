// created by ccHotaru at 2015-7-14
var path = require('path')
var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  uglify = require('gulp-uglify'),
  autoprefixer = require('gulp-autoprefixer'),
  less = require('gulp-less')

gulp.task('less', function () {
  // return gulp.src('./less/**/*.less')
  return gulp.src('./css/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./css'));
});

// 处理 css 包括 autoprefixer uglify concat
var cssPath = './css/*.css',
  cssDestPath = './css';
gulp.task('css', function() {
  return gulp.src(cssPath)
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true,
      remove: true
    }))
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(cssDestPath))
})

gulp.task('default', ['less', 'css'])