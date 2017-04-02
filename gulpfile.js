var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var expect = require('gulp-expect-file');
var inject = require('gulp-inject');
var injectPartials = require('gulp-inject-partials');

// Bundle Stylesheets
gulp.task('css', function () {
	// Source CSS file, bundle in 1 file.
    var cssFiles = [
        'src/css/styles.css',
        'src/css/app.css'
    ];

    gulp.src(cssFiles)
        .pipe(expect(cssFiles))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./public/assets/css/'));
});

// Bundle scripts
gulp.task('js', function () {
    // Source JS file, bundle in 1 file.
    var jsFiles = [
        'src/js/*.js'
    ];

    gulp.src(jsFiles)
        .pipe(expect(jsFiles))
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/assets/js/'));
});

gulp.task('plugins', function () {
    var pluginsFiles = [
        'src/plugins/*',
        'src/plugins/*/*',
        'src/plugins/*/*/*',
        'src/plugins/*/*/*/*'
    ];

    gulp.src(fontFiles)
        .pipe(expect(fontFiles))
        .pipe(gulp.dest('./public/assets/plugins/'));
});

gulp.task('fonts', function () {
    var fontFiles = [
        'bower_components/bootstrap/dist/fonts/*.*',
        'bower_components/font-awesome/fonts/*.*'
    ];

    gulp.src(fontFiles)
        .pipe(expect(fontFiles))
        .pipe(gulp.dest('./public/assets/fonts/'));
});

gulp.task('imgs', function () {
    var imgsFiles = [
        'src/img/*',
        'src/img/*/*'
    ];

    gulp.src(imgsFiles)
        .pipe(expect(imgsFiles))
        .pipe(gulp.dest('./public/assets/img/'));
});

gulp.task('html', function(){
  var htmlFiles = [
      'src/html/*'
  ];

  gulp.src(htmlFiles)
      .pipe(expect(htmlFiles))
      .pipe(injectPartials({
              removeTags: true
           }))
      .pipe(gulp.dest('./public/'));

});

gulp.task('build', function () {
    gulp.start('css', 'js', 'fonts','plugins','imgs','html');
});

gulp.task('watch', function () {
	gulp.watch("src/css/*",['css']);
	gulp.watch("src/js/*",['js']);
    gulp.watch("src/img/*",['imgs']);
    gulp.watch("src/html/*",['html']);
    gulp.watch("src/html/partials/*",['html']);
});
