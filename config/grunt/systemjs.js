'use strict';

var packages = require('../systemjs/packages.json');

module.exports = {
    default: {
        files: [ {
            dest: './build/app/bundle.js',
            src: './build/app/main.js'
        } ],
        options:  {
            builder: {
                map: {
                    '@angular': 'npm:@angular',
                    'app': 'build/app',
                    'reflect-metadata': 'npm:reflect-metadata',
                    'rxjs': 'npm:rxjs',
                    'zone': 'npm:'
                },
                packages,
                paths: {
                    'npm:*': 'node_modules/*'
                }
            }
        }
    }
};
