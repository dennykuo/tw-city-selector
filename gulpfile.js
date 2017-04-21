// *************************
// File Setting
// *************************

// Dir
var jsDir = './src/*.js';
var jsSrc = './src/tw-city-selector.js';
var jsDest = './';
var dataSrc = './src/data.js';
var dataDest = './docs/js/';
var docsJs = './docs/js/';
var fileName = 'tw-city-selector.js';


// *************************
// Require plugins
// *************************

// Core
// -------------
var gulp = require('gulp');
var webServer = require('gulp-webserver');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var concat = require('gulp-concat');
var groupConcat = require('gulp-group-concat');

// JS
// -------------
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

// Browserify
// -------------
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var babelify = require('babelify');
var stringify = require('stringify');

// Rollup
// -------------
// var rollup = require('rollup');
var rollup = require('rollup-stream');
var babelRollup = require('rollup-plugin-babel');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
// var rollupNodeResolve = require('rollup-plugin-node-resolve');
// var rollupCommonjs = require('rollup-plugin-commonjs');

// Test
// -------------
var nightwatch = require('gulp-nightwatch');


// *************************
// Run Gulp
// *************************

// Default
// -------------
gulp.task('default', function () {
    gulp.start('ru');
});

// Watch
// -------------
gulp.task('watch', function () {
    gulp.watch([jsDir, './tests/*.js'], ['ru', 'data']);
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
        host: '127.0.0.1',
        fallback: 'index.html',
        livereload: true
    }));
});

// Javascript
// -------------
gulp.task('js', function () {
    return gulp.src(srcDir + 'js/main.js')
        .pipe(gulp.dest(jsDest))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(jsDest))
		.pipe(gulp.dest(docsJs))
        .pipe(notify({ message: 'JS task complete' }))
});

// Browserify
// -------------
gulp.task('bf', function () {
    var b = browserify({
        entries: [jsSrc],
        standalone: 'TwCitySelector',
        debug: true
    })
    .transform(babelify);

    return b.bundle()
        .pipe(source(fileName))
        .pipe(gulp.dest(jsDest))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(jsDest))
		.pipe(gulp.dest(docsJs))
        .pipe(notify({ message: 'BF task complete' }))
});

// Rollup
// -------------
gulp.task('ru', function () {
    return rollup({
        entry: jsSrc,
        rollup: require('rollup'), // 使用原生 rollup
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
    .pipe(sourcemaps.init({ loadMaps: true })) // 讀取原始文件中 sourcemap
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(jsDest))
	.pipe(gulp.dest(docsJs))
    .pipe(notify({ message: 'RU task complete' }))
});

gulp.task('data', function () {
	return rollup({
        entry: dataSrc,
        rollup: require('rollup'), // 使用原生 rollup
        plugins: [
            babelRollup({
                babelrc: false, // 忽略 babelrc 設定值，以便下方 presets 改為 Rollup 所用
                presets: ['es2015-rollup']
            })
        ],
        format: 'umd',
        moduleName: 'data', // umd 或 iife 格式時，若入口文件含 export，必須加上
        // sourceMap: true
    })
    .pipe(source('data.js'))
    .pipe(gulp.dest(dataDest))
    // .pipe(buffer())
    // .pipe(sourcemaps.init({ loadMaps: true })) // 讀取原始文件中 sourcemap
    // .pipe(uglify())
    // .pipe(rename({ suffix: '.min' }))
    // .pipe(sourcemaps.write('./'))
    // .pipe(gulp.dest(jsDest))
	// .pipe(gulp.dest(docsJs))
    .pipe(notify({ message: 'Data task complete' }))
});

// jQuery
// gulp.task('jq', function () {
//     var b = browserify({
//         entries: ['./src/jquery.tw-city-selector.js'],
//         // standalone: 'App',
//         debug: true
//     })
//     .transform(babelify);
//
//     return b.bundle()
//         .pipe(source('jquery.tw-city-selector.js'))
//         .pipe(gulp.dest(jsDest))
//         .pipe(buffer())
//         .pipe(sourcemaps.init())
//         .pipe(uglify())
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(sourcemaps.write('./'))
//         .pipe(gulp.dest(jsDest))
//         .pipe(notify({ message: 'jq task complete' }))
// });

// Test
gulp.task('test', ['bf'], function () {
    return gulp.src(jsSrc)
        .pipe(nightwatch({
            configFile: 'nightwatch.json'
        }));
});
