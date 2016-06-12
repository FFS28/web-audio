'use strict';

var pkg = require('../../package.json');

module.exports = {
    deploy: {
        options: {
            base: 'build/',
            repo: pkg.repository.url.replace(/:\/\//, `://${ process.env.GIT_HUB_ACCESS_TOKEN }@`),
            silent: true,
            user: {
                name: process.env.GIT_HUB_USER_NAME,
                email: process.env.GIT_HUB_USER_EMAIL
            }
        },
        src: [ '**' ]
    }
};
