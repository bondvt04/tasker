/**
 * Created by anatoliybondar on 8/21/15.
 */

var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');




gulp.task('copy-src-to-dist', function () {
    return gulp.src(['src/**/*'])
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['copy-src-to-dist'], function () {
    return gulp.src('dist/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())
        //.pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);