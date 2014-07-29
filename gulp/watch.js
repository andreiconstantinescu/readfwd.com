'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('watch', ['build', 'serve'], function () {
  gulp.watch('./app/**/*.html', ['html']);
  gulp.watch('./app/**/*.js', ['js']);

  gulp.watch('./dist/**/*').on('change', function () {
    browserSync.reload();
  });
});

gulp.task('serve', function () {
  browserSync({
    server: {
      baseDir: './dist'
    }
  });
});
