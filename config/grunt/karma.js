'use strict';

module.exports = {
    continuous: {
        background: true,
        configFile: 'config/karma/unit.js',
        singleRun: false
    },
    test: {
        configFile: 'config/karma/unit.js',
        singleRun: true
    }
};
