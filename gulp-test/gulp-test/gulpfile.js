// Requiring Gulp
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// Requiring autoprefixer
var autoprefixer = require('gulp-autoprefixer');
// Requiring Sourcemaps
var sourcemaps = require('gulp-sourcemaps');

var browserSync = require('browser-sync');


  // Start browserSync server
  gulp.task('browserSync', function() {
    browserSync({
      server: {
        baseDir: 'app'
      }
    })
  })


gulp.task('sass', function() {
    gulp.src('app/scss/**/*.{scss,sass}')
    .pipe(sourcemaps.init()) // Initialize sourcemap plugin
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write()) // Writing sourcemaps
    .pipe(gulp.dest('app/css'))
    // Reloading the stream
    .pipe(browserSync.reload({
        stream: true
    }));
  });

  gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('app/scss/styles.scss', ['sass']);
  });

