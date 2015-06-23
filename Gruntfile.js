module.exports = function(grunt) {
    grunt.initConfig({        
        karma: {
            options: {
                frameworks: ['jasmine'],
                files: ['src/*.js'],
                browsers: ['FirefoxDeveloper']
            },
            unit: {
                options: {
                    autoWatch: false,
                    background: true
                }
            },
            unit_dist: {
                options: {
                    autoWatch: false,
                    singleRun: true
                }
            }
        },        
        watch: {
            karma: {
                files: ['src/*.js'],
                tasks: ['karma:unit:run']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('test', ['karma:unit_dist']);
    grunt.registerTask('test-dev', ['karma:unit', 'watch']);
};