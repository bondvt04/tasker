/**
 * Created by anatoliybondar on 8/21/15.
 */

var gulp = require('gulp');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
//var removeUseStrict = require("gulp-remove-use-strict");
var replace = require("gulp-replace");


gulp.task('clean-dest', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('copy-src-to-dist', ['clean-dest'], function () {
    return gulp.src(['src/**/*'])
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['copy-src-to-dist'], function () {
    return gulp.src('dist/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel())

        //.pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        //.pipe(removeUseStrict())
        .pipe(replace(/\'use strict\'\;/g, ''))

        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);