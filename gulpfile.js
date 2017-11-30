var gulp = require ('gulp');
//Gulp Sass Plugin
var sass = require ('gulp-sass');

//CREATING a TASK

gulp.task('sass', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'));
});

gulp.task('default', function() {
    gulp.watch(['src/scss/*', 'src/scss/**/*'], ['sass']);
});
