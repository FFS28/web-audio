'use strict';

module.exports = {
    inline: [
        'build/inline.js'
    ],
    scripts: [
        'build/*.bundle.map',
        'build/*.bundle.js',
        'build/*.bundle.js.gz'
    ],
    styles: [
        'build/*.bundle.map',
        'build/*.bundle.css',
        'build/*.bundle.css.gz'
    ]
};
