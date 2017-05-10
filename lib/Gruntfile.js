module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {  //squish all javascript files into one and move it into the 'dist' folder
      '../dist/app.js': ['../javascripts/DOMHandler.js']
    },
    jshint: {
      files: ['../javascripts/**/*.js'], //location of javascript files
      options: {
        predef: ["document", "console", "$" ], //allows for predefined things not found in js
        esnext: true, //allows for ES6
        globalstrict: true,
        globals: {"$":true, "SandwichMaker": true}, //name value pairs, allows to define global vars used in many files.
        browserify: true
      }
    },
    watch: { //automatically watch for changes
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint']
      },
      browserify: {
        files: ['../javascripts/**/*.js'],
        tasks: ['browserify']
      }
    }
  });

  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
};