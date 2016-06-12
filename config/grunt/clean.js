'use strict';

module.exports = {
    all: [
        'build/*'
    ],
    temporary: [
        'build/app/*',
        'build/.baseDir.js',
        'build/.baseDir.js.map',
        '!build/app/bundle.js',
        '!build/app/bundle.js.map'
    ]
};
