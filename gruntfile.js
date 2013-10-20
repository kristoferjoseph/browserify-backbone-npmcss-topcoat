var npmcss = require('npm-css')
,   path   = require('path')


module.exports = function (grunt) {
    
    grunt.initConfig({

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
            options: {mangle:false},
            min: {
                files: {
                    'public/index.min.js': ['public/index.js']
                }
            }
        },

        npmcss: {}

    // The End. Of Config.
    })
  
  
    grunt.loadNpmTasks('grunt-browserify')
    grunt.loadNpmTasks('grunt-contrib-uglify')

    grunt.registerTask('default', ['browserify', 'uglify:min', 'npmcss'])

    grunt.registerTask('npmcss', [], function() {
        var css = npmcss(path.join(__dirname, 'src', 'css', 'index.css'))
        require('fs').writeFileSync(path.join(__dirname, 'public', 'index.css'), css)
    })
// The End.  
}
