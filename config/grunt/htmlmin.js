'use strict';

module.exports = {
    default: {
        files: [ {
            cwd: 'src/',
            dest: 'build/',
            expand: true,
            // Templates are not minified for now to preserve whitespace in code examples.
            src: [ '*.html' ] // **/*.html
        } ],
        options: {
            caseSensitive: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeComments: true
        }
    }
};
