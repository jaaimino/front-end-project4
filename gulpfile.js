// include the required packages.
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');

// Get one .styl file and render
gulp.task('red', function () {
  gulp.src('./stylus/materialred.styl')
    .pipe(stylus({ use: nib(), compress: true}))
    .pipe(gulp.dest('./css'));
});

// Get one .styl file and render
gulp.task('blue', function () {
  gulp.src('./stylus/materialblue.styl')
    .pipe(stylus({ use: nib(), compress: true}))
    .pipe(gulp.dest('./css'));
});

// Get one .styl file and render
gulp.task('pink', function () {
  gulp.src('./stylus/materialpink.styl')
    .pipe(stylus({ use: nib(), compress: true}))
    .pipe(gulp.dest('./css'));
});

// Default gulp task to run
gulp.task('default', ['red', 'blue', 'pink']);