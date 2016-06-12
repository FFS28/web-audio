'use strict';

module.exports = {
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
