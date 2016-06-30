'use strict';

module.exports = {
    continuous: {
        files: [
            'src/**/*.css',
            'src/**/*.html',
            'src/**/*.js',
            'src/**/*.ts',
            'test/**/*.ts'
        ],
        tasks: [
            'ts:test',
            'karma:continuous:run'
        ]
    },
    monitor: {
        files: [
            'src/**/*.css',
            'src/**/*.html',
            'src/**/*.js',
            'src/**/*.ts'
        ],
        options: {
            livereload: true
        },
        tasks: [
            'build:development'
        ]
    },
    preview: {
        files: [
            'src/**/*.css',
            'src/**/*.html',
            'src/**/*.js',
            'src/**/*.ts'
        ],
        options: {
            livereload: true
        },
        tasks: [
            'build:production'
        ]
    }
};
