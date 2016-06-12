'use strict';

module.exports = {
    default: {
        files: [ {
            cwd: 'src/',
            dest: 'build/',
            expand: true,
            src: [ 'app/**/*.css' ]
        } ]
    }
};
