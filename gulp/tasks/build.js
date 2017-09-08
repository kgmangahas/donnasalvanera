var gulp = require('gulp');
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev');


browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
    browserSync.init({
        notify: false,
        server: {
            baseDir: "dist"
        }    
        
    });
});




gulp.task('deleteDistFolder',  function () {
   return del("./dist");
});


gulp.task('copyGeneralFiles',['deleteDistFolder'], function() {
    var pathsToCopy = [
        './app/**/*',
        '!./app/index.html',
        '!./app/assets/images/**',
        '!./app/assets/styles/**',
        '!./app/assets/scripts/**',
        '!./app/temp',
        '!./app/temp/**'
    ];
    return gulp.src(pathsToCopy)
        .pipe(gulp.dest("./dist"));
})


gulp.task('useMinTrigger', ['deleteDistFolder',], function() {
    gulp.start("usemin");
});




gulp.task('usemin', ['styles', 'scripts'], function() {
   return gulp.src("./app/index.html") 
        .pipe(usemin({
            css: [rev()],
            js: [rev()]
        }))
        .pipe(gulp.dest("./dist"));
});


gulp.task('optimizeImages', ['deleteDistFolder'], function() {
   return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons','!./app/assets/images/icons/**/*'])
    .pipe(imagemin({
       progressive: true,
       interlaced: true,
       multipass: true
   }))
    .pipe(gulp.dest("./dist/assets/images"));
});






gulp.task('build', ['deleteDistFolder', 'copyGeneralFiles',  'optimizeImages','useMinTrigger'] );