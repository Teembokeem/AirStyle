var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');
var sh = require('shelljs');
var del = require('del');
var runSequence = require('run-sequence');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var pump = require('pump');
var minifier = require('gulp-uglify');
var uglifyjs = require('uglify-js');
var ngAnnotate = require('gulp-ng-annotate');
var useref = require('gulp-useref');
var obfuscate = require('gulp-obfuscate');
var cleanCSS = require('gulp-clean-css');
var gulpif = require('gulp-if');
var templateCache = require('gulp-angular-templatecache');
var cache = require('gulp-cached');

var paths = {
    sass: ['./www/views/**/*.scss', './www/css/*.scss', './www/views/**/**/*.scss', './www/**/**/*.scss']
};

gulp.task('default', ['watch']);

gulp.task('sass', function(done) {
    gulp.src('./scss/ionic.app.scss').pipe(sass()).on('error', function(d) {
        console.log('ERROR======>', d);
        return sass.logError(d);
    }).pipe(gulp.dest('./www/css/')).pipe(browserSync.stream()).pipe(minifyCss({keepSpecialComments: 0})).pipe(rename({extname: '.min.css'})).pipe(gulp.dest('./www/css/')).on('end', done);
});

//templateCache
gulp.task('templates', function(cb) {
    return gulp.src(['./www/**/**/*.html', '!./www/index.html', '!./www/lib/**/**/*.html']).pipe(templateCache({standalone: true})).pipe(gulp.dest('./www/templates/'));
});

gulp.task('watch', ['sass','templates'], function() {

    browserSync.init({
        server: {
            baseDir: './www/'
        },
        port: 8000
    })
    gulp.watch(paths.sass, ['sass']).on('change', function(event) {
        // browserSync.stream();
        browserSync.reload();
        console.log('File LOG' + event.path + ' was ' + event.type + ', running tasks...');
    });
    gulp.watch('./www/**/**/*.js').on('change', function(e){
        browserSync.reload();
    })

    gulp.watch([
        './www/**/**/*.html', '!./www/index.html', '!./www/lib/**/**/*.html'
    ], ['templates']);

    gulp.watch('./www/templates/templates.js').on('change',function(e) {
        browserSync.reload();
    })
});

gulp.task('install', ['git-check'], function() {
    return bower.commands.install().on('log', function(data) {
        gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
    if (!sh.which('git')) {
        console.log('  ' + gutil.colors.red('Git is not installed.'), '\n  Git, the version control system, is required to download Ionic.', '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.', '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.');
        process.exit(1);
    }
    done();
});

//delete all build
gulp.task('clean', function() {
    return del.sync('build');
});

//Copy src to Build
gulp.task('copysrc', function(cb) {
    return gulp.src([
        './www/fonts/*', './www/docs/*', './www/templates/templates.js', './www/lib/ionic/fonts/*'
    ], {base: './www/'}).pipe(gulp.dest('./build/'));
})

//Image minification
gulp.task('minify-image', function(cb) {
    return gulp.src(['./www/img/**/**/*.+(png|jpg|JPG|jpeg|gif|svg)']).pipe(imagemin({optimizationLevel: 5, progressive: true, interlaced: true})).pipe(gulp.dest('./build/img/'));
});

//combines all angular js files and moving in to one....
gulp.task('use-ref', function(cb) {
    var options = {
        mangle: false,
        compress: {
            drop_console: true
        },
        output: {}
    };

    pump([
        gulp.src('./www/index.html').pipe(useref()).pipe(gulpif('*.js', minifier(options, uglifyjs))).pipe(gulpif('*.css', cleanCSS())),
        gulp.dest('./build/')
    ], cb);

});
//minify  main index.html
gulp.task('minify-index', function(cb) {
    pump([
        gulp.src('./build/index.html'),
        htmlmin({collapseWhitespace: true, removeComments: true}),
        gulp.dest('./build/')
    ], cb);
})

//minify html
gulp.task('minify-html', function(cb) {
    // , './careers/**/*.html'
    return gulp.src(['./www/**/**/*.html', '!./www/index.html', '!./www/lib/**/**/*.html']).pipe(htmlmin({collapseWhitespace: true})).pipe(gulp.dest('./build/'));
});

//minify all js files
gulp.task('minify-js', function(cb) {
    // the same options as described above
    var options = {
        mangle: false,
        compress: {
            drop_console: true
        },
        output: {}
    };
    pump([
        gulp.src([
            './www/core/**/**/*.js', './www/views/**/**/*.js', '!./www/templates/*.js'
        ], {base: './www/'}),
        minifier(options, uglifyjs).on('error', gutil.log),
        gulp.dest('./build/')
    ], cb);
});

//gulp final task
gulp.task('production', ['templates'], function(cb) {
    runSequence('clean', [
        'copysrc', 'minify-js', 'minify-image', 'use-ref'
    ], 'minify-html', 'minify-index', cb);
});
