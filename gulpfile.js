var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


gulp.task('concatjs' ,function () {
    gulp.src('js/*.js').pipe(gulp.dest('dest/js'));
});
//任務串連
gulp.task('concatcss' , ['sass'] ,function () {
    gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(gulp.dest('dest/css'));
});


gulp.task('sass' , function() {
    gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(gulp.dest('css/'));
});


//打包html


gulp.task('fileinclude', function() {
    gulp.src(['*.html'])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('./dest'));
  });


gulp.task('watch' , function(){
  gulp.watch(['sass/*.scss' , 'sass/**/*.scss'], ['concatcss']);
  gulp.watch('js/*.js', ['concatjs']);
  gulp.watch(['*.html' , '**/*.html'],  ['fileinclude']);
});

gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: "./dest",
            index: "main.html"
        }
    });
    gulp.watch(['*.html' , '**/*.html'],  ['fileinclude']).on('change',reload);
    gulp.watch(['sass/*.scss' , 'sass/**/*.scss'], ['sass']).on('change',reload);
    gulp.watch(['img/*.*' , 'img/**/*.*']).on('change',reload);
});






