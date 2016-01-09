'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const stylus = require('gulp-stylus');
const nib = require('nib');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const minifyCss = require('gulp-minify-css');
const runSequence = require('run-sequence');
const concat = require('gulp-concat');

const config = require('./package.json').config;
const generateIndexView = require('./tools/index.js').generateIndexView;

gulp.task('server', () => {
    return connect.server({
        port: 3001,
        root: [__dirname]
    });
});

gulp.task('babel', () => {
    return gulp.src(`${config.jsPath}/*.js`)
        .pipe(concat(`${config.name}.js`))
        .pipe(babel({
            presets: ['es2015']
        }))
        .on('error', function(err) {
            console.log('error', err.toString());
            this.emit('end');
        })
        .pipe(gulp.dest(config.dist));
});

gulp.task('stylus', () => {
    return gulp.src(`${config.cssPath}/*.styl`)
        .pipe(stylus({
            use: [nib()]
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(concat(`${config.name}.css`))
        .pipe(gulp.dest(config.dist))
        .pipe(connect.reload());
});

gulp.task('min-js', () => {
    return gulp.src(`${config.dist}/${config.name}.js`)
        .pipe(uglify())
        .pipe(rename(`${config.name}.min.js`))
        .pipe(gulp.dest(config.dist));
});

gulp.task('min-css', () => {
    return gulp.src(`${config.dist}/${config.name}.css`)
        .pipe(minifyCss())
        .pipe(rename(`${config.name}.min.css`))
        .pipe(gulp.dest(config.dist));
});

gulp.task('build', () => {
    return runSequence('min-js', 'min-css');
});

gulp.task('view', () => {
    generateIndexView();
});

gulp.task('watch', () => {
    watch(`${config.jsPath}/*.js`, () => {
        runSequence('babel');
    });

    watch(`${config.cssPath}/*.styl`, () => {
        runSequence('stylus');
    });

    watch(`${config.viewPath}/*.hbs`, () => {
        runSequence('view');
    });
});

gulp.task('default', ['server', 'watch', 'babel', 'stylus', 'view']);
