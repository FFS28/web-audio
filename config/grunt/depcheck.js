'use strict';

module.exports = {
    default: {
        options: {
            failOnUnusedDeps: true,
            ignoreMatches: [
                'hammerjs',
                'prismjs',
                '@angular/compiler-cli',
                '@types/*',
                'angular-cli',
                'babel-eslint',
                'eslint-config-holy-grail',
                'grunt-*',
                'husky',
                'jasmine',
                'karma*',
                'tslint',
                'tslint-config-holy-grail',
                'typescript'
            ]
        },
        src: './'
    }
};
