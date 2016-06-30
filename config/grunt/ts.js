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
        src: [ 'test/unit/**/*.ts', 'typings/index.d.ts' ],
        tsconfig: 'config/typescript/test.json'
    }
};
