'use strict';

module.exports = {
    build: {
        cmd: 'ng build --base-href /web-audio-conference-2016 --prod'
    },
    continuous: {
        cmd: 'ng test'
    },
    e2e: {
        cmd: 'LC_NUMERIC="en_US.UTF-8" ng e2e'
    },
    monitor: {
        cmd: 'ng serve --port 9955'
    },
    preview: {
        cmd: 'ng serve --port 9955 --prod'
    },
    test: {
        cmd: 'ng test --watch false'
    }
};
