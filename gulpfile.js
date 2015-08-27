var gulp = require('gulp');
var liveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var eslint = require('gulp-eslint');
var notify = require('gulp-notify');
var reload = browserSync.reload;

var p = {
  jsx: 'app/**/*.jsx'
};

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
	.pipe(gulp.dest('./.temp'))
  .pipe(reload({stream: true}));
});

gulp.task('watchify', function() {
  var bundler = watchify(browserify('app/main.jsx', watchify.args));

  function rebundle() {
    return bundler
      .bundle()
      .on('error', notify.onError())
      .pipe(source('app.js'))
      .pipe(gulp.dest('./.temp'))
      .pipe(reload({stream: true}));
  }

  bundler.transform(babelify)
  .on('update', rebundle);
  return rebundle();
});


gulp.task('lint', function() {
  return gulp.src(['server/**/*.js', 'app/**/*.jsx', 'app/**/*.js'])
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('watchTask', function() {
  gulp.watch(['app/**/*.jsx', 'app/**/*.js'], ['lint']);
});

gulp.task('serve', ['watchify', 'live-server'], function () {
	browserSync.init(null, {
		proxy: "http://localhost:7777",
		port: 9001
	})
});

gulp.task('watch', function () {
  gulp.start(['watchTask', 'serve'])
});