const cspBuilder = require('content-security-policy-builder');
const cspProductionConfig = require('../csp/production');
const crypto = require('crypto');
const fs = require('fs');

// eslint-disable-next-line padding-line-between-statements
const computeHashOfFile = (filename, algorithm, encoding) => {
    const content = fs.readFileSync(filename, 'utf-8');

    return computeHashOfString(content, algorithm, encoding);
};
const computeHashOfString = (string, algorithm, encoding) => {
    return crypto
        .createHash(algorithm)
        .update(string)
        .digest(encoding);
};
const replaceHashInMatch = (grunt, match, prefix, index) => {
    const filename = grunt.file.expand({ cwd: 'build/web-audio-conference-2016/scripts' }, `${ prefix }.*.js`)[0];

    if (filename === undefined) {
        return match;
    }

    const hash = `sha384-${ computeHashOfFile(`build/web-audio-conference-2016/scripts/${ filename }`, 'sha384', 'base64') }`;
    const chunkExpression = new RegExp(`${ index }:"sha384-[a-zA-Z0-9+/]{64}"`);

    return match.replace(chunkExpression, `${ index }:"${ hash }"`);
};

module.exports = (grunt) => {
    return {
        'bundle': {
            files: {
                './': [
                    'build/web-audio-conference-2016/main*.js'
                ]
            },
            options: {
                patterns: [ {
                    match: /"\/ngsw-worker\.js"/g,
                    replacement: '"/web-audio-conference-2016/ngsw-worker.js"'
                } ]
            }
        },
        'chunks': {
            files: {
                './': [
                    'build/web-audio-conference-2016/index.html'
                ]
            },
            options: {
                patterns: [ {
                    match: /""\+\({[^}]*}\[e\]\|\|e\)\+"(?:-es(?:2015|5))?\."\+{([0-9]+:"[a-f0-9]{20}",?)+}/g,
                    replacement: (match) => match.replace(/^""/g, '"scripts/"')
                }, {
                    match: /{([1-9][0-9]*:"sha384-[a-zA-Z0-9+/]{64}",?)+}/g,
                    replacement: (match) => {
                        let updatedMatch = replaceHashInMatch(grunt, match, 'common', 1);

                        const offset = (match === updatedMatch) ? 4 : 5;
                        const numberOfHashes = match
                            .split(/sha384-/)
                            .length;

                        for (let i = offset; i < numberOfHashes; i += 1) {
                            updatedMatch = replaceHashInMatch(grunt, updatedMatch, `${ i }`, i);
                        }

                        return updatedMatch;
                    }
                } ]
            }
        },
        'csp-production': {
            files: {
                'build/web-audio-conference-2016/index.html': [
                    'build/web-audio-conference-2016/index.html'
                ]
            },
            options: {
                patterns: [ {
                    match: /<meta\shttp-equiv="content-security-policy">/,
                    replacement: () => {
                        const html = fs.readFileSync('build/web-audio-conference-2016/index.html', 'utf-8');
                        const regex = /<script[^>]*?>([^<](.|[\n\r])*?)<\/script>/gm;
                        const scriptHashes = [];

                        let result = regex.exec(html);

                        while (result !== null) {
                            scriptHashes.push(`'sha256-${ computeHashOfString(result[1], 'sha256', 'base64') }'`);

                            result = regex.exec(html);
                        }

                        const cspConfig = {
                            ...cspProductionConfig,
                            directives: {
                                ...cspProductionConfig.directives,
                                'script-src': ('script-src' in cspProductionConfig.directives)
                                    ? (Array.isArray(cspProductionConfig.directives['script-src']))
                                        ? [ ...cspProductionConfig.directives['script-src'], ...scriptHashes ]
                                        : [ cspProductionConfig.directives['script-src'], ...scriptHashes ]
                                    : [ ...scriptHashes ]
                            }
                        };
                        const cspString = cspBuilder(cspConfig);

                        return `<meta content="${ cspString }" http-equiv="content-security-policy">`;
                    }
                } ]
            }
        },
        'manifest': {
            files: {
                './': [
                    'build/web-audio-conference-2016/ngsw.json'
                ]
            },
            options: {
                patterns: [ {
                    match: /assets\/([a-z0-9-]+)\.(ico|jpg|png)/g,
                    replacement: (_, filename, extension) => grunt.file.expand({ cwd: 'build/web-audio-conference-2016' }, `assets/*.${ filename }.${ extension }`)[0]
                }, {
                    match: /\/([a-z0-9-]+\.[a-z0-9]*\.css)"/g,
                    replacement: (_, filename) => `/styles/${ filename }"`
                }, {
                    match: /\/([a-z0-9-]*\.[a-z0-9]*\.js)"/g,
                    replacement: (_, filename) => `/scripts/${ filename }"`
                }, {
                    match: /[\s]*"\/web-audio-conference-2016(\/scripts)?\/runtime(?:-es(?:2015|5))?.[a-z0-9]*\.js",/g,
                    replacement: ''
                }, {
                    match: /[\s]*"\/web-audio-conference-2016(\/scripts)?\/runtime(?:-es(?:2015|5))?.[a-z0-9]*\.js":\s"[a-z0-9]+",/g,
                    replacement: ''
                }, {
                    // Replace the hash value inside of the hashTable for "/scripts/main-es*.js" because it was modified before.
                    match: /"\/web-audio-conference-2016(\/scripts\/main(?:-es(?:2015|5))?.[a-z0-9]+.js)":\s"[a-z0-9]+"/g,
                    replacement: (_, filename) => {
                        return `"/web-audio-conference-2016${ filename }": "${ computeHashOfFile(`build/web-audio-conference-2016${ filename }`, 'sha1', 'hex') }"`;
                    }
                }, {
                    // Replace the hash value inside of the hashTable for "/styles/styles*.css" because it was modified before.
                    match: /"\/web-audio-conference-2016(\/styles\/styles\.[a-z0-9]*\.css)":\s"[a-z0-9]+"/g,
                    replacement: (_, filename) => {
                        return `"/web-audio-conference-2016${ filename }": "${ computeHashOfFile(`build/web-audio-conference-2016${ filename }`, 'sha1', 'hex') }"`;
                    }
                }, {
                    // Replace the hash value inside of the hashTable for "/(index|start).html" because it was modified before.
                    match: /"\/web-audio-conference-2016\/(index|start)\.html":\s"[a-z0-9]+"/g,
                    replacement: (_, filename) => {
                        return `"/web-audio-conference-2016/${ filename }.html": "${ computeHashOfFile(`build/web-audio-conference-2016/${ filename }.html`, 'sha1', 'hex') }"`;
                    }
                } ]
            }
        },
        'runtime': {
            files: {
                './': [
                    'build/web-audio-conference-2016/index.html'
                ]
            },
            options: {
                patterns: [ {
                    match: /<script\ssrc="(runtime(?:-es(?:2015|5))?.[a-z0-9]*\.js)"\scrossorigin="anonymous"(\s(?:nomodule|type="module"))?\sintegrity="sha384-[a-zA-Z0-9+/]*=*"><\/script>/g,
                    replacement: (match, filename, moduleAttribute) => {
                        if (moduleAttribute === undefined) {
                            return `<script>${ fs.readFileSync(`build/web-audio-conference-2016/${ filename }`) }</script>`;
                        }

                        return `<script${ moduleAttribute }>${ fs.readFileSync(`build/web-audio-conference-2016/${ filename }`) }</script>`;
                    }
                } ]
            }
        },
        'scripts': {
            files: {
                './': [
                    'build/web-audio-conference-2016/index.html'
                ]
            },
            options: {
                patterns: [ {
                    match: /<script\ssrc="([a-z0-9-]*\.[a-z0-9]*\.js)"\scrossorigin="anonymous"(\s(?:nomodule|type="module"))?\sintegrity="(sha384-[a-zA-Z0-9+/]*=*)"><\/script>/g,
                    replacement: (match, filename, moduleAttribute, initialHash) => {
                        const updatedHash = (/main(?:-es(?:2015|5))?.[a-z0-9]*\.js/.test(filename)) ?
                            `sha384-${ computeHashOfFile(`build/web-audio-conference-2016/scripts/${ filename }`, 'sha384', 'base64') }` :
                            initialHash;

                        if (moduleAttribute === undefined) {
                            return `<script src="scripts/${ filename }" crossorigin="anonymous" integrity="${ updatedHash }"></script>`;
                        }

                        return `<script src="scripts/${ filename }" crossorigin="anonymous"${ moduleAttribute } integrity="${ updatedHash }"></script>`;
                    }
                } ]
            }
        },
        'styles': {
            files: {
                './': [
                    'build/web-audio-conference-2016/index.html'
                ]
            },
            options: {
                patterns: [ {
                    match: /<link\srel="stylesheet"\shref="(styles\.[a-z0-9]*\.css)"\scrossorigin="anonymous"\sintegrity="sha384-[a-zA-Z0-9+/]*=*">/g,
                    replacement: (match, filename) => {
                        const hash = `sha384-${ computeHashOfFile(`build/web-audio-conference-2016/styles/${ filename }`, 'sha384', 'base64') }`;

                        return `<link href="styles/${ filename }" rel="stylesheet" crossorigin="anonymous" integrity="${ hash }">`;
                    }
                } ]
            }
        }
    };
};
