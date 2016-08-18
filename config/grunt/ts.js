'use strict';

module.exports = {
    app: {
        options: {
            rootDir: 'src/'
        },
        tsconfig: 'src/app/tsconfig.json'
    },
    test: {
        options: {
            rootDir: './'
        },
        outDir: 'build/',
        src: [ 'test/unit/**/*.ts' ],
        tsconfig: 'config/typescript/test.json'
    }
};
