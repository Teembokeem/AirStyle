var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');
var sh = require('shelljs');

var paths = {
  sass: ['./www/views/**/*.scss', './www/css/*.scss', './www/views/**/*', './www/views/**/**/*.scss', './www/**/**/*.js', './www/**/**/*.scss']
};

gulp.task('default', ['watch']);

gulp.task('sass', function (done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', function (d) {
      console.log('ERROR======>', d);
      return sass.logError(d);
    })
    .pipe(gulp.dest('./www/css/'))
    .pipe(browserSync.stream())
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', ['sass'], function () {

  browserSync.init({
    server: {
      baseDir: './www/'
    },
    port: 3001
  })
  gulp.watch(paths.sass, ['sass'])
    .on('change', function (event) {
      // browserSync.stream();
      browserSync.reload();
      console.log('File LOG' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('install', ['git-check'], function () {
  return bower.commands.install()
    .on('log', function (data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});


gulp.task('git-check', function (done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
