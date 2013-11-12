module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    htmlmin: {
      dist: {
        options: {
          removeComments    : true,
          collapseWhitespace: true
        },
        files  : {
          'build/index.html': 'index.html',
          'build/view.html': 'partials/view.html'
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build  : {
        src : ['lib/{angular,bootstrap,jquery}/*.min.js'],
        dest: 'build/<%= pkg.name %>.min.js'
      },
      buildie: {
        src : ['lib/iecompatible/*/{*.min.js,html5shiv.js}'],
        dest: 'build/<%= pkg.name %>ie.min.js'
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('html', ['htmlmin']);
};
