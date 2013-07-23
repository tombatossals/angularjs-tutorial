module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'app/js/<%= pkg.name %>.min.js': ['app/js/app.js']
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'app/js/*.js', 'test/unit/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        karma: {
            unit: {
                configFile: 'config/karma.conf.js',
                singleRun: true
            },
            e2e: {
                configFile: 'config/karma-e2e.conf.js',
            }
        }
    });

    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['jshint', 'uglify']);

};
