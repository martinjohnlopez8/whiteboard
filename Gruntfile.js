module.exports = function(grunt) {

	var styleguide = require('devbridge-styleguide');

	grunt.registerTask('start-styleguide', function () {
		var done = this.async();
		styleguide.startServer().then(function (instance) {
			instance.on('close', done);
		});
	});

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		compass: {
			dist: {
				options: {
					sassDir: 'assets/css',
					cssDir: 'assets/css'
				}
			}
		},

		watch: {
			stylesheets: {
				files: '**/*.scss',
				tasks: 'compass'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.registerTask('default', ['watch']);
};