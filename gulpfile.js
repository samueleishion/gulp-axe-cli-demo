'use strict';

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  exec = require('gulp-exec'),
  axe = require('gulp-axe-cli'),
  axeConfig = {
    urls: function(file) {
      file = 'http://localhost:3000/' + file.substring(file.lastIndexOf('/') + 1);
      return file;
    },
    'tags': ['wcag2a', 'wcag2aa'],
    'rules': ['color-contrast'],
    'disable': ['html-has-lang'],
    'scope': {
      'include': '#main',
      'exclude': '#brand'
    },
    'browser': '',
    'timeout': 120,
    'load-delay': 2000,
    'save': true
  };

gulp.task('test', function() {
  gulp.start('test:a11y');
});

gulp.task('test:a11y', function() {
  gulp.src(["./static/**/*.html"])
    .pipe(axe(axeConfig))
    .pipe(gulp.dest("./static"));
});
