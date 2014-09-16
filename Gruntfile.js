module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            multiple_files: {
                  expand: true,
                  flatten: true,
                  src: 'assets/stylesheets/*.css', // -> src/css/file1.css, src/css/file2.css
                  dest: 'assets/built-stylesheets/' // -> dest/css/file1.css, dest/css/file2.css
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