// Include gulp
var gulp = require("gulp");

var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
// var cssnano = require("gulp-cssnano");

gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss')
        .pipe(sass())
        // .pipe(cssnano())
        .pipe(prefix('last 2 versions'))
        .pipe(gulp.dest('css/'))
});

gulp.task("watch", function() {
    gulp.watch("src/scss/*.scss", ["sass"]);
});

gulp.task("default", ["sass", "watch"]);