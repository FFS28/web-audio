import { browser, by } from 'protractor';
import { elementShotMatchers, expectElementShot, resembleElementShot } from 'element-shot';

const IS_SMOKE_TEST = !!process.env.IS_SMOKE_TEST;

const navigateTo = (path: string) => {
    return browser.get((IS_SMOKE_TEST) ? `https://chrisguttandin.github.io/web-audio-conference-2016/${ path }` : path);
}

describe('slides', () => {

    beforeEach(() => {
        jasmine.addMatchers(elementShotMatchers);
    });

    describe('first slide', () => {

        it('should look the same', async () => {
            navigateTo('/');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-1');

            expectElementShot(result).toBeRegressionFree();
        });

        it('should look the same', async () => {
            navigateTo('/slides/1');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-1');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('second slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/2');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-2');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('third slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/3');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-3');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('fourth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/4');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-4');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('fifth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/5');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-5');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('sixth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/6');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-6');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('seventh slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/7');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-7');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('eighth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/8');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-8');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('nineth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/9');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-9');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('tenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/10');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-10');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('eleventh slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/11');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-11');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('twelveth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/12');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-12');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('thirteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/13');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-13');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('fourteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/14');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-14');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('fifteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/15');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-15');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('sixteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/16');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-16');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('seventeenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/17');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-17');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('eighteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/18');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-18');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('nineteenth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/19');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-19');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('twentieth slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/20');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-20');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('twenty first slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/21');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-21');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('twenty second slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/22');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-22');

            expectElementShot(result).toBeRegressionFree();
        });

    });

    describe('twenty third slide', () => {

        it('should look the same', async () => {
            navigateTo('/slides/23');

            const result = await resembleElementShot(by.tagName('body'), 'test/screenshots/slide-23');

            expectElementShot(result).toBeRegressionFree();
        });

    });

});
