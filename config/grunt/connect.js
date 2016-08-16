'use strict';

var modrewrite = require('connect-modrewrite');

module.exports = {
    monitor: {
        options: {
            base: [ './build', './node_modules' ],
            hostname: 'localhost',
            livereload: true,
            middleware: (connect, options, middlewares) => [
                modrewrite(['^[^\\.]*$ /index.html [L]']),
                ...middlewares
            ],
            port: 9955
        }
    },
    preview: {
        options: {
            base: './build',
            hostname: 'localhost',
            livereload: true,
            middleware: (connect, options, middlewares) => [
                modrewrite([
                    '^/web-audio-conference-2016$ /index.html [L]',
                    '^[^\\.]*$ /404.html [L]',
                    '^/web-audio-conference-2016/(.*)$ /$1 [L]'
                ]),
                ...middlewares
            ],
            port: 9955
        }
    }
};
