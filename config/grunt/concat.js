'use strict';

module.exports = {
    monitor: {
        dest: 'build/scripts/system.js',
        src: [
            'build/scripts/system.js',
            'src/app/system-development.js'
        ]
    },
    preview: {
        dest: 'build/scripts/system.js',
        src: [
            'build/scripts/system.js',
            'src/app/system-production.js'
        ]
    }
};
