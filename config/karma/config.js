const { join } = require('path');
const { env } = require('process');

module.exports = (config) => {
    config.set({
        basePath: '../../',

        client: {
            clearContext: false
        },

        coverageReporter: {
            dir: join(__dirname, '../../coverage/web-audio-conference-2016'),
            reporters: [{ type: 'html' }, { type: 'text-summary' }],
            subdir: '.'
        },

        frameworks: ['@angular-devkit/build-angular', 'jasmine'],

        plugins: ['@angular-devkit/build-angular/plugins/karma', 'karma-*'],

        reporters: ['progress', 'kjhtml'],

        restartOnFileChange: true
    });

    if (env.TRAVIS) {
        config.set({
            browserNoActivityTimeout: 120000,

            browsers: ['ChromeSauceLabs'],

            captureTimeout: 120000,

            customLaunchers: {
                ChromeSauceLabs: {
                    base: 'SauceLabs',
                    browserName: 'chrome',
                    platform: 'OS X 10.11'
                }
            },

            tunnelIdentifier: env.TRAVIS_JOB_NUMBER
        });
    } else {
        config.set({
            browsers: ['ChromeHeadless']
        });
    }
};
