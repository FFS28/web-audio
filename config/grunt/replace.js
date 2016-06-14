'use strict';

var path = require('path'),
    fs = require('fs');

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
                    return `template: \`${ fs.readFileSync(asset).toString().replace(/`/g, '\\\`') }\``;
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
            } ]
        }
    }
};
