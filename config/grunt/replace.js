'use strict';

var fs = require('fs'),
    lusca = require('lusca'),
    path = require('path');

const cspDevelopmentConfig = require('../csp/development');
const cspProductionConfig = require('../csp/production');

module.exports = (grunt) => {
    return {
        'assets': {
            files: {
                './': [
                    'build/app/modules/**/components/**/*.js'
                ]
            },
            options: {
                patterns: [ {
                    match: /styleUrls:\s*\['(component\.css)'\]/g,
                    replacement: (match, assetFilename, offset, string, sourceFilename) => {
                        var asset = path.resolve(path.dirname(sourceFilename), assetFilename);

                        return `styles: ["${ fs.readFileSync(asset) }"]`;
                    }
                }, {
                    match: /templateUrl:\s*'(component\.html)'/g,
                    replacement: (match, assetFilename, offset, string, sourceFilename) => {
                        var asset = path.resolve(path.dirname(sourceFilename), assetFilename);

                        // return `template: '${ fs.readFileSync(asset).toString().replace(/'/g, '\\\'') }'`;
                        return `template: \`${ fs.readFileSync(asset).toString().replace(/`/g, '\\\`') }\``; // eslint-disable-line newline-per-chained-call, no-useless-escape
                    }
                } ]
            }
        },
        'bundle': {
            files: {
                'build/app/bundle.js': [
                    'build/app/bundle.js'
                ]
            },
            options: {
                patterns: [ {
                    match: /build\/(app)/g,
                    replacement: '$1'
                } ]
            }
        },
        'csp-development': {
            files: {
                'build/index.html': [
                    'build/index.html'
                ]
            },
            options: {
                patterns: [ {
                    match: /<meta\shttp-equiv="content-security-policy">/,
                    replacement: () => {
                        const cspConfig = lusca.csp.createPolicyString(cspDevelopmentConfig);

                        return `<meta content="${ cspConfig }" http-equiv="content-security-policy">`;
                    }
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
                        const cspConfig = lusca.csp.createPolicyString(cspProductionConfig);

                        return `<meta content="${ cspConfig }" http-equiv="content-security-policy">`;
                    }
                } ]
            }
        },
        'index': {
            files: {
                'build/index.html': [
                    'build/index.html'
                ]
            },
            options: {
                patterns: [ {
                    match: /<base\shref="\/">/,
                    replacement: '<base href="/web-audio-conference-2016">'
                }, {
                    match: /<link\shref="styles\//g,
                    replacement: '<link href="web-audio-conference-2016/styles/'
                }, {
                    match: /<script\ssrc="scripts\//g,
                    replacement: '<script src="web-audio-conference-2016/scripts/'
                }, {
                    match: /scripts\/system\.js/,
                    replacement: () => grunt.file.expand({ cwd: 'build' }, 'scripts/*.system.js')[0]
                }, {
                    match: /styles\/styles\.css/,
                    replacement: () => grunt.file.expand({ cwd: 'build' }, 'styles/*.styles.css')[0]
                } ]
            }
        },
        'links': {
            files: {
                './': [
                    'build/app/modules/**/components/**/*.js'
                ]
            },
            options: {
                patterns: [ {
                    match: /styleUrls:\s*\['(component\.css)'\]/g,
                    replacement: (match, assetFilename, offset, string, sourceFilename) => {
                        var asset = path.relative('build/', path.join(path.dirname(sourceFilename), assetFilename));

                        return `styleUrls: [ '${ asset }' ]`;
                    }
                }, {
                    match: /templateUrl:\s*'(component\.html)'/g,
                    replacement: (match, assetFilename, offset, string, sourceFilename) => {
                        var asset = path.relative('build/', path.join(path.dirname(sourceFilename), assetFilename));

                        return `templateUrl: '${ asset }'`;
                    }
                } ]
            }
        },
        'systemjs': {
            files: [ {
                cwd: 'build/scripts/',
                dest: 'build/scripts/',
                expand: true,
                src: [ '*.system.js' ]
            } ],
            options: {
                patterns: [ {
                    match: /bundles:\s{/,
                    replacement: `baseURL: '/web-audio-conference-2016',
                        bundles: {`
                }, {
                    match: /app\/bundle\.js/,
                    replacement: () => grunt.file.expand({ cwd: 'build' }, 'app/*.bundle.js')[0]
                } ]
            }
        }
    };
};
