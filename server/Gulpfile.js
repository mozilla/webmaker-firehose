var gulp = require("gulp");
var watch = require("gulp-watch");

// where are we running?
var path = require("path");
var cwd = path.dirname(__filename);

/**
 * Javascript linting
 */
gulp.task("lint-server", function() {
  var jshint = require("gulp-jshint");

  return gulp.src(cwd + "/**/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"));
});

/**
 * Run server
**/
gulp.task("run-server", function() {
  var server = require("gulp-express");
  server.run({ file: cwd + "/index.js" });
});

/**
 * watch server
**/
gulp.task("watch-server", function() {
  watch(cwd + "/**/*.js", function() {
    var server = require("gulp-express");
    server.run({ file: cwd + "/index.js" });
  });
});

