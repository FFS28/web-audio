'use strict';

module.exports = {
    scripts: {
        files: [
            {
                cwd: 'build/',
                dest: 'build/scripts/',
                expand: true,
                src: [ '**/*.js' ]
            }
        ]
    }
};
