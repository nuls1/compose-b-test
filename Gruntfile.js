/*global module:false*/

module.exports = function (grunt) {
    grunt.initConfig({

        clean: ['dist'],

        assemble: {
            options: {
                partials: 'templates/partials/*.hbs',
                layoutdir: 'templates/layouts',
                layout: 'default.hbs',
                helpers: ['handlebars-helper-compose']
            },

            pages: {
                options: {
                    ext: '.html'
                },
                files: [
                    {
                        expand: true,
                        cwd: 'templates/pages',
                        src: [
                            '*.hbs'
                        ],
                        dest: 'dist/',
                        flatten: true
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('assemble');

    grunt.registerTask('default', [
        'clean',
        'assemble'
    ]);
};

