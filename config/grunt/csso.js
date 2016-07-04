'use strict';

module.exports = {
    default: {
        files: [ {
            cwd: 'src/',
            dest: 'build/',
            expand: true,
            src: [ '**/*.css' ]
        }, {
            dest: 'build/styles/prism-okaidia.css',
            src: 'node_modules/prismjs/themes/prism-okaidia.css'
        } ]
    }
};
