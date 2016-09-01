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
            defaultExtension: 'js',
            main: 'bundles/common.umd.js'
        },
        '@angular/compiler': {
            defaultExtension: 'js',
            main: 'bundles/compiler.umd.js'
        },
        '@angular/core': {
            defaultExtension: 'js',
            main: 'bundles/core.umd.js'
        },
        '@angular/platform-browser': {
            defaultExtension: 'js',
            main: 'bundles/platform-browser.umd.js'
        },
        '@angular/platform-browser-dynamic': {
            defaultExtension: 'js',
            main: 'bundles/platform-browser-dynamic.umd.js'
        },
        '@angular/router': {
            defaultExtension: 'js',
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
