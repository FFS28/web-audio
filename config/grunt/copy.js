'use strict';

module.exports = {
    common: {
        files: [
            {
                dest: 'build/scripts/prism.js',
                src: 'node_modules/prismjs/prism.js'
            }, {
                dest: 'build/scripts/hammer.js',
                src: 'node_modules/hammerjs/hammer.js'
            }
        ]
    },
    monitor: {
        files: [
            {
                dest: 'build/index.html',
                src: 'src/index.html'
            }, {
                cwd: 'src/',
                dest: 'build/',
                expand: true,
                src: [ 'app/**/*.css', 'app/**/*.html' ]
            }, {
                dest: 'build/styles/styles.css',
                src: 'src/styles/styles.css'
            }, {
                dest: 'build/scripts/system.js',
                src: 'node_modules/systemjs/dist/system.src.js'
            }, {
                dest: 'build/styles/prism-okaidia.css',
                src: 'node_modules/prismjs/themes/prism-okaidia.css'
            }
        ]
    },
    preview: {
        files: [
            {
                dest: 'build/404.html',
                src: 'src/index.html'
            }, {
                cwd: 'src/',
                dest: 'build/',
                expand: true,
                src: [ 'app/**/*.html' ]
            }, {
                dest: 'build/scripts/system.js',
                src: 'node_modules/systemjs/dist/system-csp-production.js'
            }
        ]
    }
};
