var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');


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