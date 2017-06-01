module.exports = {
    analyze: {
        cmd: 'webpack-bundle-analyzer build/stats.json'
    },
    build: {
        cmd: 'ng build --aot --base-href /web-audio-conference-2016 --no-sourcemap --prod --stats-json'
    },
    continuous: {
        cmd: 'ng test'
    },
    e2e: {
        cmd: 'ng e2e'
    },
    lint: {
        cmd: 'ng lint --type-check'
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
