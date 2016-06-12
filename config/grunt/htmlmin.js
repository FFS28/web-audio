'use strict';

module.exports = {
    default: {
        files: [ {
            cwd: 'src/',
            dest: 'build/',
            expand: true,
            src: [ 'app/**/*.html' ]
        } ],
        options: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeComments: true
        }
    }
};
