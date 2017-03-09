var gulp = require('gulp');

var minifyCss = require('gulp-minify-css'); // appel le module gulp-minify-css

gulp.task('css', function () {
	gulp.src('*.css') // prend tous les fichiers CSS dans le répertoire src/css
		.pipe(minifyCss()) //compresser les css
		.pipe(gulp.dest('dist/css/')); // gulp.dest permet de placer dans un dossier distant
});