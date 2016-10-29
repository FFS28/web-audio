import { browser, by, element } from 'protractor';

export class HomePage {

    public getHeadline() {
        return element(by.css('wac-app h1')).getText();
    }

    public navigateTo() {
        return browser.get('/');
    }

}
