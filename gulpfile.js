'use strict';

var gulp = require('gulp');
var orecoreTasks = require('orecore-build');

orecoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
