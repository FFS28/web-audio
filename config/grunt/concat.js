'use strict';

module.exports = {
    monitor: {
        src: [
            'build/scripts/system.js',
            'src/app/system-development.js'
        ],
        dest: 'build/scripts/system.js'
    },
    preview: {
        src: [
            'build/scripts/system.js',
            'src/app/system-production.js'
        ],
        dest: 'build/scripts/system.js'
    }
};
