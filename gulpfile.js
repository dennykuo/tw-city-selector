// *************************
// Setting
// *************************

let host = '127.0.0.1';
let jsDir = './src/*.js';
let jsSrc = './src/tw-city-selector.js';
let jsDest = './';
let dataSrc = './src/data.js';
let dataDest = './docs/js/';
let docsJs = './docs/js/';
let fileName = 'tw-city-selector.js';


// *************************
// Require plugins
// *************************

// Core
// -------------
let gulp = require('gulp');
let webServer = require('gulp-webserver');
let sourcemaps = require('gulp-sourcemaps');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let notify = require('gulp-notify');

// Rollup
// -------------
let rollup = require('rollup');
let rollupStream = require('rollup-stream');
let babelRollup = require('rollup-plugin-babel');
let source = require('vinyl-source-stream');
let buffer = require('vinyl-buffer');
// let rollupStreamNodeResolve = require('rollupStream-plugin-node-resolve');
// let rollupStreamCommonjs = require('rollupStream-plugin-commonjs');

// Babel
// -------------
let babel = require('gulp-babel');


// *************************
// Run Tasks
// *************************

// Default
// -------------
gulp.task('default', function () {
    gulp.start(['scripts', 'demo-data']);
});

// Watch
// -------------
gulp.task('watch', function () {
    gulp.watch([jsDir, './tests/*.js'], ['scripts', 'demo-data']);
    gulp.start(['webServer']);
});


// *************************
// Tasks
// *************************

// Web server
// -------------
gulp.task('webServer', function() {
  return gulp.src('./docs')
    .pipe(webServer({
        host: host,
        fallback: 'index.html',
        livereload: true
    }));
});

// Ccripts
// -------------
gulp.task('scripts', function () {
    return rollupStream({
        entry: jsSrc,
        // rollup: rollup,
        plugins: [
            babelRollup({
                babelrc: false, // 忽略 babelrc 設定值，以便下方 presets 改為 Rollup 所用
                presets: ['es2015-rollup']
            })
        ],
        format: 'umd',
        moduleName: 'TwCitySelector', // umd 或 iife 格式時，若入口文件含 export，必須加上
        sourceMap: true
    })
    .pipe(source(fileName))
    .pipe(gulp.dest(jsDest))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(jsDest))
	.pipe(gulp.dest(docsJs))
    .pipe(notify({ message: 'scripts task complete' }))
});

gulp.task('demo-data', function () {
	return rollupStream({
        entry: dataSrc,
        plugins: [
            babelRollup({
                babelrc: false, // 忽略 babelrc 設定值，以便下方 presets 改為 Rollup 所用
                presets: ['es2015-rollup']
            })
        ],
        format: 'umd',
        moduleName: 'data' // umd 或 iife 格式時，若入口文件含 export，必須加上
    })
    .pipe(source('data.js'))
    .pipe(gulp.dest(dataDest))
});
