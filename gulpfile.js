var gulp = require('gulp');
var liveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var eslint = require('gulp-eslint');

gulp.task('live-server', function () {
	var server = liveServer('server/main.js');
	server.start();
});

gulp.task('bundle', function () {
	return browserify({
		entries: 'app/main.jsx',
		debug: true
	})
	.transform(babelify)
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('./.temp'));
});

gulp.task('lint', function() {
  return gulp.src(['server/**/*.js', 'app/**/*.jsx'])
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('serve', ['lint', 'bundle', 'live-server'], function () {
	browserSync.init(null, {
		proxy: "http://localhost:7777",
		port: 9001
	})
});