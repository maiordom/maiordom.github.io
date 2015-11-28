'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');

gulp.task('server', () => {
    return connect.server({
        port: 3001,
        root: [__dirname]
    });
});

gulp.task('default', ['server']);