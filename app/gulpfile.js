var gulp         	= require('gulp'),
	concat       	= require('gulp-concat'),
	uglifyJS    	= require('gulp-uglify-es').default,
	uglifyCSS		=	require('gulp-uglifycss'),
	babel			=	require('gulp-babel');

gulp.task('styles', function() {
	return gulp.src('./src_css/style.css')
	.pipe(concat('styles.min.css'))
	.pipe(uglifyCSS())
	.pipe(gulp.dest('./distr_css'))
});


gulp.task('scripts', function() {
	return gulp.src([
		'src_js/ajax.js',
		'src_js/script.js',
		'src_js/main.js',
		])
	.pipe(concat('scripts.min.js'))
	.pipe(babel({
            presets: ['@babel/env']
        }))
	.pipe(uglifyJS())
	.pipe(gulp.dest('./distr_js'))
});



gulp.task('default', gulp.parallel('styles', 'scripts'));
