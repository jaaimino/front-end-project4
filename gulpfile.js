// include the required packages.
var gulp = require('gulp');
var stylus = require('gulp-stylus');
var nib = require('nib');

// Get one .styl file and render
gulp.task('light', function () {
  gulp.src('./stylus/lightstyle.styl')
    .pipe(stylus({ use: nib(), compress: true}))
    .pipe(gulp.dest('./css'));
});

// Get one .styl file and render
gulp.task('dark', function () {
  gulp.src('./stylus/darkstyle.styl')
    .pipe(stylus({ use: nib(), compress: true}))
    .pipe(gulp.dest('./css'));
});

// Default gulp task to run
gulp.task('default', ['light', 'dark']);