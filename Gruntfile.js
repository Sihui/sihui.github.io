module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            multiple_files: {
                  expand: true,
                  flatten: true,
                  src: 'assets/stylesheets/*.css',
                  dest: 'assets/built-stylesheets/'
                }
        },
        watch: {
            styles: {
                files: ['assets/stylesheets/{,*/}*.css'],
                tasks: ['autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
/*use built file to replace original file*/
//module.exports = function (grunt) {
//    grunt.initConfig({
//        autoprefixer: {
//
//               dist: {
//                  files: [{
//                    expand: true,
//                    cwd: 'assets/stylesheets/',
//                    src: '{,*/}*.css',
//                    dest: 'assets/stylesheets/'
//                  }]
//                }
//        },
//       watch: {
//            styles: {
//                files: ['assets/stylesheets/{,*/}*.css'],
//                tasks: ['autoprefixer']
//            }
//        }
//    });
//    grunt.loadNpmTasks('grunt-autoprefixer');
//    grunt.loadNpmTasks('grunt-contrib-watch');
//};
