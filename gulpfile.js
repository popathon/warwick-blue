
var gulp = require('gulp'),
    requireDir = require('require-dir');

//load gulp tasks from gulp directory
requireDir('./gulp')
requireDir('./gulp/generators')
requireDir('./gulp/tasks')
//requireDir('./gulp/workflows')

/*
 *
 *
 *
 *
 *
 *
 *
 * workflows
 * */

gulp.task('build', ['html', 'scripts', 'less', 'images', 'data']);
gulp.task('build-angular', ['html', 'scripts','ng-copy-templates' ,'less', 'images', 'data']);

/*
 * default
 * */

gulp.task('default-no-browser-sync', ['build', 'watch', 'server']);
gulp.task('default', ['build', 'watch', 'server-with-browser-sync']);

gulp.task('default-angular', ['build-angular', 'watch-angular', 'server-with-browser-sync']);
gulp.task('default-angular-no-browser-sync', ['build-angular', 'watch-angular', 'server-with-browser-sync']);
