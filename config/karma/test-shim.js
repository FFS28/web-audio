/*global jasmine, __karma__, window*/
Error.stackTraceLimit = Infinity;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;

__karma__.loaded = function () {};

function isJsFile (path) {
    return path.slice(-3) == '.js';
}

function isSpecFile (path) {
    return path.includes('/test/');
}

var allSpecFiles = Object.keys(window.__karma__.files)
  .filter(isSpecFile)
  .filter(isJsFile);

// Load our SystemJS configuration.
System.config({
    baseURL: '/base'
});

System.config({
    map: {
        'rxjs': 'node_modules/rxjs',
        '@angular': 'node_modules/@angular',
        'app': 'build'
    },
    packages: {
        '@angular/common': {
            defaultExtension: 'js',
            main: 'index.js'
        },
        '@angular/compiler': {
            defaultExtension: 'js',
            main: 'index.js'
        },
        '@angular/core': {
            defaultExtension: 'js',
            main: 'index.js'
        },
        '@angular/platform-browser': {
            defaultExtension: 'js',
            main: 'index.js'
        },
        '@angular/platform-browser-dynamic': {
            defaultExtension: 'js',
            main: 'index.js'
        },
        app: {
            defaultExtension: 'js',
            main: 'main.js'
        },
        rxjs: {
            defaultExtension: 'js'
        }
    }
});

Promise
    .all([
        System.import('@angular/core/testing'),
        System.import('@angular/platform-browser-dynamic/testing')
    ])
    .then(function (providers) {
        var testing = providers[0];
        var testingBrowser = providers[1];

        testing.setBaseTestProviders(
            testingBrowser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
            testingBrowser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
        );
    })
    .then(function () {
        // Finally, load all spec files.
        // This will run the tests directly.
        return Promise.all(
            allSpecFiles.map(function (moduleName) {
                return System.import(moduleName);
            }));
    })
    .then(__karma__.start, __karma__.error);
