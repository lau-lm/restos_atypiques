var gulp = require('gulp');


var minify = require('gulp-minify');
var babel = require('gulp-babel');

var minifyCss = require('gulp-minify-css'); // appel le module gulp-minify-css

gulp.task('css', function () {
	gulp.src('*.css') // prend tous les fichiers CSS dans le répertoire src/css
		.pipe(minifyCss()) //compresser les css
		.pipe(gulp.dest('dist/css/')); // gulp.dest permet de placer dans un dossier distant
});

gulp.task('js', function () {
	gulp.src('javascripts/*.js') // prend tous les fichiers CSS dans le répertoire src/css
		.pipe(babel({ // compiler de l'ES6 à l'ES5 ("let" etc...)
			presets: ['es2015']
		}))
		.pipe(minify()) //compresser les js
		.pipe(gulp.dest('dist/js/')); // gulp.dest permet de placer dans un dossier distant
});