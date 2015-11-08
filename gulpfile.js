'use strict';

var gulp = require('gulp');
var gulpMocha = require('gulp-mocha');
var appFiles = ['write-head.js'];
var testFiles = ['./test/write-head-test.js'];

gulp.task('mocha', function() {
  return gulp.src(testFiles, {read: false})
    .pipe(gulpMocha({reporter: 'landing'}));
});

gulp.task('default', ['mocha']);
