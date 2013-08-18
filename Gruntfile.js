/*global module:false*/

module.exports = function(grunt) {

  "use strict";

  var itsbeen = "// "
    , st = new Date(1376840738828)
    , ct = new Date()
    , diff = {
      y: ct.getFullYear() - st.getFullYear(),
      m: ct.getMonth() - st.getMonth(),
      d: ct.getDate() - st.getDate()
    };

  itsbeen += "Project started before ";
  itsbeen += (diff.y === 0) ? "" : diff.y === 1 ? 1 + " year, " : ((diff.y < 0 ? 30 - Math.abs(diff.y) : diff.y) + " years") + " and "; 
  itsbeen += (diff.m === 0) ? "" : diff.m === 1 ? 1 + " month and " : ((diff.m < 0 ? 30 - Math.abs(diff.m) : diff.m) + " months") + " and "; 
  itsbeen += (diff.d === 0) ? "" : diff.d === 1 ? 1 + " day " : ((diff.d < 0 ? 30 - Math.abs(diff.d) : diff.d) + " days"); 
  itsbeen += "\n";

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    banner: "// ========================= \n" +
      "// <%= pkg.title %> - <%= pkg.version %>\n" +
      "// ========================= \n" + 
      "// <%= grunt.template.today(\"yyyy-mm-dd\") %>\n" +
      itsbeen +
      "// http://erikroyall.github.com/<%= pkg.name %>/\n" +
      "// Copyright (c) 2013 Erik Royall\n" +
      "// Licensed under <%= pkg.license %> (see LICENSE-MIT) \n\n",

    concat: {
      options: {
        banner: "<%= banner %>",
        stripBanners: true
      },
      dist: {
        src: [
          "src/start.js",
          "src/end.js"
        ],
        dest: "dist/<%= pkg.name %>.js"
      }
    },

    uglify: {
      options: {
        banner: "<%= banner %>"
      },
      dist: {
        src: "<%= concat.dist.dest %>",
        dest: "dist/<%= pkg.name %>.min.js"
      }
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        globals: {}
      },

      gruntfile: {
        src: "Gruntfile.js"
      },

      lib_test: {
        src: ["lib/**/*.js", "test/**/*.js"]
      }
    },

    nodeunit: {
      files: ["test/**/*_test.js"]
    },

    yuidoc: {
      compile: {
        name: "<%= pkg.title %>",
        description: "<%= pkg.description %>",
        version: "<%= pkg.version %>",
        url: "<%= pkg.homepage %>",
        options: {
          paths: 'src',
          outdir: 'api_docs'
        }
      }
    }

    watch: {
      gruntfile: {
        files: "<%= jshint.gruntfile.src %>",
        tasks: ["jshint:gruntfile"]
      },

      lib_test: {
        files: "<%= jshint.lib_test.src %>",
        tasks: ["jshint:lib_test", "nodeunit"]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-qunit");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-yuidoc");
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Default task.
  grunt.registerTask("default", ["jshint", "nodeunit", "concat", "uglify"]);

};
