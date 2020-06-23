const { defaultProject, projects } = require('../../angular.json');

// eslint-disable-next-line padding-line-between-statements
const port = projects[defaultProject].architect.serve.options.port;

module.exports = {
    chrome: {
        options: {
            browser: 'chrome'
        },
        urls: [
            `http://localhost:${port}/slides/1`,
            `http://localhost:${port}/slides/2`,
            `http://localhost:${port}/slides/3`,
            `http://localhost:${port}/slides/4`,
            `http://localhost:${port}/slides/5`,
            `http://localhost:${port}/slides/6`,
            `http://localhost:${port}/slides/7`,
            /*
             * @todo Modify grunt-axe-webdriver to allow to exclude selectors (.token.comment)
             * `http://localhost:${ port }/slides/8`,
             */
            `http://localhost:${port}/slides/9`,
            // `http://localhost:${ port }/slides/10`,
            `http://localhost:${port}/slides/11`,
            // `http://localhost:${ port }/slides/12`,
            `http://localhost:${port}/slides/13`,
            `http://localhost:${port}/slides/14`,
            `http://localhost:${port}/slides/15`,
            `http://localhost:${port}/slides/16`,
            `http://localhost:${port}/slides/17`,
            `http://localhost:${port}/slides/18`,
            `http://localhost:${port}/slides/19`,
            `http://localhost:${port}/slides/20`,
            `http://localhost:${port}/slides/21`,
            `http://localhost:${port}/slides/22`,
            `http://localhost:${port}/slides/2`
        ]
    }
};
