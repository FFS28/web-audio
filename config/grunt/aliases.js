'use strict';

module.exports = {
    'build:development': [
        'clean:all',
        'copy:common',
        'copy:monitor',
        'concat:monitor',
        'ts:app',
        'replace:links'
    ],
    'build:production': [
        'clean:all',
        'copy:common',
        'copy:preview',
        'concat:preview',
        'csso',
        'htmlmin',
        'ts:app',
        'replace:assets',
        'systemjs',
        'replace:bundle',
        'clean:temporary',
        'rev',
        'replace:index',
        'replace:systemjs'
    ],
    'continuous': [
        'clean:all',
        'ts:test',
        'karma:continuous',
        'watch:continuous'
    ],
    'deploy': [
        'build:production',
        'replace:csp-production',
        'gh-pages:deploy'
    ],
    'deploy-on-version-updates': [
        'if:deploy'
    ],
    'lint': [
        'eslint',
        'htmlhint',
        'postcss:lint',
        'tslint'
    ],
    'monitor': [
        'build:development',
        'replace:csp-development',
        'connect:monitor',
        'watch:monitor'
    ],
    'preview': [
        'build:production',
        'replace:csp-development',
        'connect:preview',
        'watch:preview'
    ],
    'test': [
        'clean:all',
        'ts:test',
        'karma:test'
    ]
};
