import { HomePage } from './home.po';

describe('/', function() {

    let page: HomePage;

    beforeEach(() => {
        page = new HomePage();
    });

    it('should display the correct headline', () => {
        page.navigateTo();
        expect(page.getHeadline()).toEqual('Non Audio Signal Processing');
    });

});
