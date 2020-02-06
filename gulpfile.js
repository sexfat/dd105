var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');



// $('aa').on('click' ,function(){
// console.log('enter');

// })

gulp.task('concatjs' ,function () {
    gulp.src('js/*.js').pipe(gulp.dest('dest/js'));
});

gulp.task('concatcss' ,function () {
    gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(gulp.dest('dest/css'));
});


gulp.task('sass' , function() {
    gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(gulp.dest('css/'));
})