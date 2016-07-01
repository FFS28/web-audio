'use strict';

module.exports = {
    'build:development': [
        'clean:all',
        'copy:common',
        'copy:monitor',
        'concat:monitor',
        'ts:app'
    ],
    'build:production': [
        'clean:all',
        'copy:common',
        'copy:preview',
        'concat:preview',
        'csso',
        // 'htmlmin',
        'ts:app',
        'replace:assets',
        'systemjs',
        'replace:bundle',
        'clean:temporary'
    ],
    continuous: [
        'clean:all',
        'ts:test',
        'karma:continuous',
        'watch:continuous'
    ],
    deploy: [
        'build:production',
        'replace:index',
        'replace:systemjs',
        'if:deploy'
    ],
    monitor: [
        'build:development',
        'connect:monitor',
        'watch:monitor'
    ],
    preview: [
        'build:production',
        'connect:preview',
        'watch:preview'
    ],
    test: [
        'clean:all',
        'ts:test',
        'karma:test'
    ]
};
