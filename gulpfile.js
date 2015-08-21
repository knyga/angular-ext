var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var Server = require('karma').Server;

gulp.task('default', function() {
    return gulp.src(['src/angular-ext.js'])
        .pipe(jshint())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('test', function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }).start()
    //new Server({
    //    configFile: __dirname + '/karma.conf.js',
    //    singleRun: true
    //}, done).start();
    done();
});