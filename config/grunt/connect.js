'use strict';

module.exports = {
    monitor: {
        options: {
            base: [ './build', './node_modules' ],
            hostname: 'localhost',
            livereload: true,
            port: 9955
        }
    },
    preview: {
        options: {
            base: './build',
            hostname: 'localhost',
            livereload: true,
            port: 9955
        }
    }
};
