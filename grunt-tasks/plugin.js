module.exports = function (grunt) {
    grunt.config('concat.plugin', {
        src: [
            '<%= srcDir %>/start.js',
            '<%= srcDir %>/core.js',
            '<%= srcDir %>/MonacoEditor.js',
            '<%= srcDir %>/end.js'
        ],
        dest: '<%= buildDir %>/ht-ui-<%= name %>-debug.js'
    });
    grunt.config('concat.api', {
        src: [
            'ide-support/zh/MonacoEditor.js'
        ],
        dest: '<%= rootDir %>/build/ht-ui-<%= name %>-api_zh.js'
    });
    grunt.config('concat.api_en', {
        src: [
            'ide-support/en/MonacoEditor.js'
        ],
        dest: '<%= rootDir %>/build/ht-ui-<%= name %>-api_en.js'
    });
    grunt.config('uglify.plugin', {
        src: '<%= buildDir %>/ht-ui-<%= name %>-debug.js',
        dest: '<%= rootDir %>/lib/ht-ui-<%= name %>.js'
    });
    grunt.config('guide.plugin', ['zh/build/guide.md', 'en/build/guide.md']);
};