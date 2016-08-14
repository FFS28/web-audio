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
        src: [ 'test/unit/**/*.ts', 'test/typings.d.ts' ],
        tsconfig: 'config/typescript/test.json'
    }
};
