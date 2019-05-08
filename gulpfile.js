var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var server = require('browser-sync').create();


gulp.task('styles', function () {
     gulp.src('source/less/style.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("source/css"))
        .pipe(server.stream());
});


gulp.task("serve", ["styles"],function() {
    server.init({
            server: "source"
    });
    gulp.watch("source/less/**/*.less", ["styles"]);
    gulp.watch("source/*.html")
     .on("change",server.reload);
});

gulp.task("default", ["styles"]);
gulp.task("default", ["serve"]); 








 