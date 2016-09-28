'use strict';

const modrewrite = require('connect-modrewrite');

const middleware = (connect, options, middlewares) => [
    modrewrite([
        '^/web-audio-conference-2016$ /index.html [L]',
        '^[^\\.]*$ /404.html [L]',
        '^/web-audio-conference-2016/(.*)$ /$1 [L]',
    ]),
    ...middlewares
];

module.exports = {
    a11y: {
        options: {
            base: './build',
            hostname: 'localhost',
            middleware,
            port: 9955
        }
    },
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
            middleware,
            port: 9955
        }
    }
};
