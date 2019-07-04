var gulp = require('gulp');
var runSequence = require('run-sequence');
var fs= require('fs');

const each = require('gulp-each');

const INTL_PROP_PATH = './code.txt';
const INTL_PROP_FILE = fs.createWriteStream(INTL_PROP_PATH);

gulp.task('copy',function(){
	const sourceDir = './code';
	return gulp.src([sourceDir + '/**/*.java',sourceDir + '/**/*.html',sourceDir + '/**/*.xml',sourceDir + '/**/*.js']).pipe(each(function(content, file, callback) {
		
		let contents = content.split('\n');
		for (let line of contents) {
			INTL_PROP_FILE.write(`${line}\n`);
			
		}
		callback(null, content);
	}));
});

//完整构建
gulp.task('default',function(){
	runSequence('copy');
});

