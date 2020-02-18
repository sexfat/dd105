var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
var fileinclude = require('gulp-file-include');



// $('aa').on('click' ,function(){
// console.log('enter');

// })

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

gulp.task('watch' , function(){
  gulp.watch(['sass/*.scss' , 'sass/**/*.scss'], ['concatcss']);
  gulp.watch('js/*.js', ['concatjs']);
  gulp.watch('*.html', ['concatjs']);
});


gulp.task('fileinclude', function() {
    gulp.src(['product.html'])
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('./dest'));
  });

