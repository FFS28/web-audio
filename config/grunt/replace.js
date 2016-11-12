'use strict';

const cspBuilder = require('content-security-policy-builder');
const crypto = require('crypto');
const fs = require('fs');

const cspProductionConfig = require('../csp/production');

module.exports = {
    'base-href': {
        files: {
            'build/index.html': [
                'build/index.html'
            ]
        },
        options: {
            patterns: [ {
                match: /<base\shref="\/">/,
                replacement: '<base href="/web-audio-conference-2016">'
            } ]
        }
    },
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
                    const html = fs.readFileSync('build/index.html', 'utf-8');

                    const regex = /<script[^>]*?>([^<](.|[\n\r])*?)<\/script>/gm;

                    const scriptHashes = [];

                    let result = regex.exec(html);

                    while (result !== null) {
                        scriptHashes.push(`sha256-${ crypto
                            .createHash('sha256')
                            .update(result[1])
                            .digest('base64') }`);

                        result = regex.exec(html);
                    }

                    const cspConfig = Object.assign({}, cspProductionConfig);

                    cspConfig.directives = Object.assign({}, {
                        'script-src': ('script-src' in cspConfig.directives)
                            ? [ ...cspConfig.directives['script-src'], ...scriptHashes ]
                            : [ ...scriptHashes ]
                    });

                    const cspString = cspBuilder(cspConfig);

                    return `<meta content="${ cspString }" http-equiv="content-security-policy">`;
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
                    return `<script type="text/javascript" src="web-audio-conference-2016/scripts/${ filename }"></script>`;
                }
            } ]
        }
    }
};
