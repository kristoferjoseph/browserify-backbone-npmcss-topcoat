var npmcss = require('npm-css'),
    path = require('path'),
    _ = require('lodash'),
    fs = require('fs');


module.exports = function(grunt) {

    grunt.initConfig({

        ejs: {
            index: {
                src: 'src/index.ejs.html',
                dest: 'public/index.html'
            },
            options: {
                title: 'The big title',
                dev: true
            }
        },

        browserify: {
            basic: {
                src: ['src/js/index.js'],
                dest: 'public/index.js'
            },
            options: {
                transform: ['browserify-ejs']
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            min: {
                files: {
                    'public/index.min.js': ['public/index.js']
                }
            }
        },

        cssmin: {
            combine: {
                files: {
                    'public/index.min.css': ['public/index.css']
                }
            }
        },

        watch: {
            scripts: {
                files: ['src/**/*.*'],
                tasks: ['default'],
                options: {
                    spawn: true,
                    livereload: true
                },
            },
        },

        npmcss: {}

        // The End. Of Config.
    });

    // 3rd party infra
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // main entry points
    grunt.registerTask('default', ['ejs:index', 'browserify', 'npmcss']);
    grunt.registerTask('release', ['default', 'uglify:min', 'cssmin']);

    // FIXME these tasks should become modules in their own right
    grunt.registerTask('npmcss', [], function() {
        var css = npmcss(path.join(__dirname, 'src', 'css', 'index.css'));
        require('fs').writeFileSync(path.join(__dirname, 'public', 'index.css'), css);
        grunt.log.ok('Bundled public/index.css');
    });

    grunt.registerTask('ejs', 'Compile the index.ejs.html file.', function(arg1) {

        grunt.config.requires('ejs.index');
        grunt.config.requires('ejs.options');

        var index = grunt.config('ejs.index'),
            src = index.src,
            dest = index.dest,
            txt = fs.readFileSync(path.join(__dirname, src)).toString(),
            out = _.template(txt, grunt.config('ejs.options'));

        grunt.log.ok('Bundled public/index.html');
        fs.writeFileSync(dest, out);
    });
};
