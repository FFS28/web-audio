System.config({
    bundles: {
        'app/bundle.js': [
            'app/main.js'
        ]
    },
    map: {
        '@angular': 'npm:@angular',
        'reflect-metadata': 'npm:reflect-metadata',
        'rxjs': 'npm:rxjs',
        'zone': 'npm:'
    },
    packages: {
        '@angular/common': {
            main: 'bundles/common.umd.js'
        },
        '@angular/compiler': {
            main: 'bundles/compiler.umd.js'
        },
        '@angular/core': {
            main: 'bundles/core.umd.js'
        },
        '@angular/platform-browser': {
            main: 'bundles/platform-browser.umd.js'
        },
        '@angular/platform-browser-dynamic': {
            main: 'bundles/platform-browser-dynamic.umd.js'
        },
        '@angular/router': {
            main: 'bundles/router.umd.js'
        },
        'app': {
            defaultExtension: 'js'
        },
        'reflect-metadata': {
            main: 'Reflect.js',
            map: {
                crypto: '@empty'
            }
        },
        'rxjs': {
            defaultExtension: 'js'
        },
        'zone': {
            main: 'zone.js/dist/zone.js'
        }
    },
    paths: {
        'npm:*': '/*'
    }
});

System.import('app/main.js');
