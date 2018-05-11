module.exports = {
    default: {
        files: [ {
            cwd: 'build/web-audio-conference-2016',
            dest: 'build/web-audio-conference-2016',
            expand: true,
            src: [ '**/*.html' ]
        } ],
        options: {
            caseSensitive: true,
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeComments: true
        }
    }
};
