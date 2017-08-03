'use strict';

const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less', function() {
    gulp.src( 'src/less/style.less' )                   // berem fail
    .pipe( less())                                      // ispolzuem etot fail v pakete LESS
    .pipe( gulp.dest( 'build/css' ))                    // rezultat zapilivaem rezultat v papku BUILD/CSs
});

gulp.task('html', function() {
    gulp.src( 'src/index.html' )                        // berem fail
    .pipe( gulp.dest( 'build' ))                        // zapilivaem v papku build
})

gulp.task ( 'watch', function() {
    gulp.watch( 'src/**/*.html', [ 'html' ])
    gulp.watch( 'src/less/**/*.less', [ 'less' ] )
});


