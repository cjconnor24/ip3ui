var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  gulp.watch('./sass/**/*.scss',['styles']);
});

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

// gulp.task('test', function() {
//     gulp.src('sass/test.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./scss/'));
// });
