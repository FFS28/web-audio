'use strict';

var fs = require('fs'),
    path = require('path');

module.exports = {
    assets: {
        files: {
            './': [
                'build/app/components/**/*.js'
            ]
        },
        options: {
            patterns: [ {
                match: /styleUrls:\s*\['(component\.css)'\]/g,
                replacement: (match, assetFilename, offset, string, sourceFilename) => {
                    var asset = path.resolve(path.dirname(sourceFilename), assetFilename);

                    return `styles: ['${ fs.readFileSync(asset) }']`;
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
    bundle: {
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
    index: {
        files: {
            'build/404.html': [
                'build/404.html'
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
            } ]
        }
    },
    systemjs: {
        files: {
            'build/scripts/system.js': [
                'build/scripts/system.js'
            ]
        },
        options: {
            patterns: [ {
                match: /bundles:\s{/,
                replacement: `baseURL: '/web-audio-conference-2016',
                    bundles: {`
            } ]
        }
    }
};
