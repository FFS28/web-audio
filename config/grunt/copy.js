module.exports = {
    404: {
        files: [
            {
                cwd: 'src/',
                dest: 'build/web-audio-conference-2016/',
                expand: true,
                src: [ '404.html' ]
            }
        ]
    },
    html: {
        files: [
            {
                dest: 'build/web-audio-conference-2016/start.html',
                src: 'build/web-audio-conference-2016/index.html'
            }
        ]
    },
    scripts: {
        files: [
            {
                cwd: 'build/web-audio-conference-2016/',
                dest: 'build/web-audio-conference-2016/scripts/',
                expand: true,
                src: [ '**/!(ngsw-worker).js' ]
            }
        ]
    },
    styles: {
        files: [
            {
                cwd: 'build/web-audio-conference-2016/',
                dest: 'build/web-audio-conference-2016/styles/',
                expand: true,
                src: [ '**/*.css' ]
            }
        ]
    }
};
