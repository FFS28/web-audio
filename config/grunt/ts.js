'use strict';

module.exports = {
    app: {
        options: {
            rootDir: 'src/'
        },
        outDir: 'build/',
        src: [ 'src/app/**/*.ts', 'src/typings.d.ts'  ],
        tsconfig: 'config/typescript/app.json'
    },
    test: {
        options: {
            rootDir: 'test/'
        },
        outDir: 'test/',
        src: [ 'test/typings.d.ts', 'test/unit/components/*.ts' ],
        tsconfig: 'config/typescript/test.json'
    }
};
