'use strict';

module.exports = {
    'a11y': [
        'axe-webdriver'
    ],
    'continuous': [
        'sh:continuous'
    ],
    'deploy': [
        'sh:build',
        'replace:csp-production',
        'htmlmin',
        'replace:base-href',
        'replace:inline',
        'clean:inline',
        'copy:scripts',
        'replace:scripts',
        'clean:scripts',
        'gh-pages:deploy'
    ],
    'deploy-on-version-updates': [
        'if:deploy'
    ],
    'e2e': [
        'sh:e2e'
    ],
    'lint': [
        'eslint',
        'htmlhint',
        'postcss:lint',
        'tslint',
        'depcheck'
    ],
    'monitor': [
        'sh:monitor'
    ],
    'preview': [
        'sh:preview'
    ],
    'test': [
        'sh:test'
    ]
};
