'use strict';

module.exports = {
    default: {
        options: {
            failOnUnusedDeps: true,
            ignoreMatches: [ 'hammerjs', 'prismjs', 'systemjs' ],
            withoutDev: true
        },
        src: './'
    }
};
