'use strict';

module.exports = {
    deploy: {
        ifTrue: [ 'gh-pages:deploy' ],
        options: {
            test: () => {
                console.log(process.env.TRAVIS_TAG);

                return (process.env.TRAVIS === 'true' &&
                    process.env.TRAVIS_PULL_REQUEST === 'false' &&
                    process.env.TRAVIS_SECURE_ENV_VARS === 'true' &&
                    process.env.TRAVIS_TAG !== undefined);
        }
    }
};
