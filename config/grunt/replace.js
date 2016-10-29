'use strict';

var fs = require('fs'),
    lusca = require('lusca');

const cspProductionConfig = require('../csp/production');

module.exports = {
    'csp-production': {
        files: {
            'build/index.html': [
                'build/index.html'
            ]
        },
        options: {
            patterns: [ {
                match: /<meta\shttp-equiv="content-security-policy">/,
                replacement: () => {
                    const cspConfig = lusca.csp.createPolicyString(cspProductionConfig);

                    return `<meta content="${ cspConfig }" http-equiv="content-security-policy">`;
                }
            } ]
        }
    },
    'inline': {
        files: {
            './': [
                'build/index.html'
            ]
        },
        options: {
            patterns: [ {
                match: /<script\stype="text\/javascript"\ssrc="inline.js"><\/script>/g,
                replacement: () => {
                    return `<script type="text/javascript">${ fs.readFileSync('build/inline.js') }</script>`;
                }
            } ]
        }
    },
    'scripts': {
        files: {
            './': [
                'build/index.html'
            ]
        },
        options: {
            patterns: [ {
                match: /<script\stype="text\/javascript"\ssrc="([a-z]*\.[a-z0-9]*\.bundle\.js)"><\/script>/g,
                replacement: (match, filename) => {
                    return `<script type="text/javascript" src="scripts/${ filename }"></script>`;
                }
            } ]
        }
    }
};
