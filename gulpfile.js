'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');

const less = require('gulp-less');
const watchLess = require('gulp-watch-less');

const LessPluginCleanCSS = require('less-plugin-clean-css');
const LessPluginAutoPrefix = require('less-plugin-autoprefix');
const cleanCSS = new LessPluginCleanCSS({advanced: true});
const autoPrefix = new LessPluginAutoPrefix({browsers: ['> 5%', 'not ie <= 9']});

const paths = {
  less: [
    './modules/custom/**/*.less'
  ],
  es6: [
    './modules/custom/**/*.es6'
  ]
};

// Process LESS files.
const processLess = function (pipe, env) {
  var options = {};
  if (env != 'dev') {
    options = {plugins: [autoPrefix, cleanCSS]};
  }
  return pipe
    .pipe(less(options))
    .pipe(rename({suffix: '-compiled'}))
    .pipe(gulp.dest(function (file) {
      return file.base;
    }));
};

// One-time processing of files.
gulp.task('less', function () {
  return processLess(gulp.src(paths.less));
});

// Process ECMAScript6 files.
gulp.task('es6', function () {
  return gulp.src(paths.es6)
    .pipe(babel())
    .pipe(rename({suffix: '-compiled'}))
    .pipe(gulp.dest(function (file) {
      return file.base;
    }));
});

gulp.task('build', ['less', 'es6']);

gulp.task('default', ['build', 'watch']);

// Rerun the task when a file changes.
gulp.task('watch', function () {
  processLess(watchLess(paths.less), 'dev');
  gulp.watch(paths.es6, ['es6']);
});
