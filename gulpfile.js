var gulp = require("gulp");
var del = require("del");
var tsc = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');
var tsProject = tsc.createProject("tsconfig.json");
var tslint = require('gulp-tslint');
var watch = require('gulp-watch');

/**
 * Remove build directory.
 */
gulp.task('clean', function (cb) {
    return del(["dist"], cb);
});

/**
 * Compile TypeScript sources and create sourcemaps in dist directory.
 */
gulp.task("compile", function () {
    var tsResult = gulp.src("src/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist"));
});

/**
 * Copy all resources that are not TypeScript files into dist directory.
 */
gulp.task("resources", function () {
    return gulp.src(["src/**/*", "!**/*.ts"])
        .pipe(gulp.dest("dist"));
});

/**
 * Copy all required libraries into dist directory.
 */
gulp.task("libs", function () {
    return gulp.src([
        'core-js/client/shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'systemjs/dist/system.src.js',
        'reflect-metadata/Reflect.js',
        'rxjs/**',
        'zone.js/dist/**',
        '@angular/**'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("dist/lib"));
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    watch(["src/**/*.ts"], function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
        gulp.start('compile');
    });
    watch(["src/**/*.html", "src/**/*.css"], function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
        gulp.start('resources');
    });
});

/**
 * Build the project.
 */
gulp.task("build", ['compile', 'resources', 'libs']);