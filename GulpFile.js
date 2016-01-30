/**
 * Created by svillagracia on 1/30/16.
 */
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var uglify      = require('gulp-uglify');
var minify      = require('gulp-minify');
var sourcemaps  = require('gulp-sourcemaps');
var strip       = require('gulp-strip-comments');
var ngAnnotate  = require('gulp-ng-annotate');
var concat      = require('gulp-concat');
var bytediff    = require('gulp-bytediff');
var minifyCss   = require('gulp-minify-css');
