var minifycss = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var notifier = require('node-notifier');
var notify = require('gulp-notify');

var gulp = require ('gulp');
//Gulp Sass Plugin
var sass = require ('gulp-sass');

//CREATING a TASK

gulp.task('sass', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(sass()
                    .on("error", notify.onError({
                        title: "Sass Error",
                        message: "Error: <%= error.message %>"
                    }))
                )

        .pipe(plumber())
        .pipe(minifycss())
        .pipe(gulp.dest('assets/css'));
});



gulp.task('default', function() {
    gulp.watch(['src/scss/*', 'src/scss/**/*'], ['sass']);
});
