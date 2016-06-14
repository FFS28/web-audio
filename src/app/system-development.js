System.config({
    map: {
        zone: 'zone.js'
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
        '@angular/router': {
            defaultExtension: 'js',
            main: 'index.js'
        },
        app: {
            defaultExtension: 'js'
        },
        'reflect-metadata': {
            main: 'Reflect.js',
            map: {
                crypto: '@empty'
            }
        },
        rxjs: {
            defaultExtension: 'js'
        },
        zone: {
            main: 'dist/zone.js'
        }
    }
});

System.import('app/main');
