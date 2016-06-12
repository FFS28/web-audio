'use strict';

module.exports = function (config) {

    config.set({

        basePath: '../../',

        browsers: [ 'Chrome' ],

        frameworks: [ 'jasmine' ],

        files: [
            // Polyfills.
            'node_modules/reflect-metadata/Reflect.js',

            // System.js for module loading
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',

            // Zone.js dependencies
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',

            // RxJs.
            { included: false, pattern: 'node_modules/rxjs/**/*.js', watched: false },
            { included: false, pattern: 'node_modules/rxjs/**/*.js.map', watched: false },

            { included: true, pattern: 'config/karma/test-shim.js', watched: true },

            // paths loaded via module imports
            // Angular itself
            { included: false, pattern: 'node_modules/@angular/**/*.js', watched: true },
            { included: false, pattern: 'node_modules/@angular/**/*.js.map', watched: true },

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

        // proxied base paths
        proxies: {
            // required for component assests fetched by Angular's compiler
            '/app/': '/base/build/app/'
        }

    });

};
