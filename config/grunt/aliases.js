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
    deploy: [
        'build:production',
        'replace:index',
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
        'ts:test',
        'karma:test'
    ]
};
