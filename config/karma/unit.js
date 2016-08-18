'use strict';

module.exports = function (config) {

    /* eslint-disable indent */
    var configuration = {

            basePath: '../../',

            files: [
                // Polyfills.
                'node_modules/reflect-metadata/Reflect.js',

                // System.js for module loading
                'node_modules/systemjs/dist/system-polyfills.js',
                'node_modules/systemjs/dist/system.src.js',

                // Zone.js dependencies
                'node_modules/zone.js/dist/zone.js',
                'node_modules/zone.js/dist/sync-test.js',
                'node_modules/zone.js/dist/proxy-zone.js',
                'node_modules/zone.js/dist/jasmine-patch.js',
                'node_modules/zone.js/dist/async-test.js',
                'node_modules/zone.js/dist/fake-async-test.js',

                // RxJs.
                { included: false, pattern: 'node_modules/rxjs/**/*.js', watched: false },
                { included: false, pattern: 'node_modules/rxjs/**/*.js.map', watched: false },

                { included: true, pattern: 'config/karma/test-shim.js', watched: true },

                // paths loaded via module imports
                // Angular itself
                { included: false, pattern: 'node_modules/@angular/!(tsc-wrapped)/**/*.js', watched: true },
                { included: false, pattern: 'node_modules/@angular/!(tsc-wrapped)/**/*.js.map', watched: true },

                // Our built application code
                { included: false, pattern: 'build/**/*.js', watched: true },
                { included: false, pattern: 'test/**/*.js', watched: true },

                // paths loaded via Angular's component compiler
                // (these paths need to be rewritten, see proxies section)
                { included: false, pattern: 'build/**/*.html', watched: true },
                { included: false, pattern: 'build/**/*.css', watched: true },

                // paths to support debugging with source maps in dev tools
                { included: false, pattern: 'src/**/*.ts', watched: false },
                { included: false, pattern: 'build/**/*.js.map', watched: false }
            ],

            frameworks: [ 'jasmine' ],

            // proxied base paths
            proxies: {
                // required for component assests fetched by Angular's compiler
                '/app/': '/base/build/app/'
            }

        };
    /* eslint-enable indent */

    if (process.env.TRAVIS) {
        configuration.browserNoActivityTimeout = 120000;

        configuration.browsers = [
            'ChromeSauceLabs'
        ];

        configuration.captureTimeout = 120000;

        configuration.customLaunchers = {
            ChromeSauceLabs: {
                base: 'SauceLabs',
                browserName: 'chrome',
                platform: 'OS X 10.11'
            }
        };

        configuration.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
    } else {
        configuration.browsers = [
            'Chrome'
        ];
    }

    config.set(configuration);

};
