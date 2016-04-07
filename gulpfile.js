'use strict';

let gulp = require('gulp'),
    babel = require('gulp-babel'),
    watch = require('gulp-watch'),
    csslint = require('gulp-csslint');

gulp.task('css', () => {
    gulp.src('src/**/*.css')
        .pipe(csslint())
        .pipe(csslint.reporter())
        .pipe(gulp.dest('./dist'));
});

gulp.task('babel', () => {
    return gulp.src('./src/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
    gulp.watch('./src/**/*.js', ['babel']);
    gulp.watch('./src/**/*.css', ['css']);
});

gulp.task('default', ['babel', 'css', 'watch']);