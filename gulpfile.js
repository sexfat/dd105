var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


gulp.task('concatjs' ,function () {
    gulp.src('dev/js/*.js').pipe(gulp.dest('dest/js'));
});

gulp.task('img' ,function () {
    gulp.src(['dev/img/*.*'  , 'dev/img/**/*.*']).pipe(gulp.dest('dest/img'));
});

gulp.task('font' ,function () {
    gulp.src(['dev/font/*.*'  , 'dev/font/**/*.*']).pipe(gulp.dest('dest/font'));
});


//任務串連
gulp.task('concatcss' , ['sass'] ,function () {
    gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(gulp.dest('dest/css'));
});


gulp.task('sass' , function() {
    gulp.src('dev/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(gulp.dest('dest/css/'));
});


//打包html


gulp.task('fileinclude', function() {
    gulp.src(['dev/*.html'])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('./dest'));
  });


// gulp.task('watch' , function(){
//   gulp.watch(['sass/*.scss' , 'sass/**/*.scss'], ['concatcss']);
//   gulp.watch('js/*.js', ['concatjs']);
//   gulp.watch(['*.html' , '**/*.html'],  ['fileinclude']);
// });

gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: "./dest",
            index: "main.html"
        }
    });
    gulp.watch(['dev/*.html' , 'dev/**/*.html'],  ['fileinclude']).on('change',reload);
    gulp.watch(['dev/sass/*.scss' , 'dev/sass/**/*.scss'], ['sass']).on('change',reload);
    gulp.watch(['dev/js/*.js' , 'dev/js/**/*.js'], ['concatjs']).on('change',reload);
    gulp.watch(['dev/img/*.*' , 'dev/img/**/*.*'] ,['img'] ).on('change',reload);
    gulp.watch(['font/*.*' , 'font/**/*.*'] ,['font'] ).on('change',reload);
});






