module.exports = {
    build: {
        cmd: 'ng build --aot --base-href /web-audio-conference-2016 --no-sourcemap --prod'
    },
    continuous: {
        cmd: 'ng test'
    },
    e2e: {
        cmd: 'ng e2e'
    },
    lint: {
        cmd: 'tslint -c config/tslint/src.json --project src/tsconfig.json --type-check src/**/*.ts'
    },
    monitor: {
        cmd: 'ng serve --port 9955'
    },
    preview: {
        cmd: 'ng serve --aot --port 9955 --prod'
    },
    test: {
        cmd: 'ng test --watch false'
    }
};
