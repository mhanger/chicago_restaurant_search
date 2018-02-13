import { browser, by, element } from 'protractor';

describe('Home page', () => {
    beforeAll(done => {
        browser.get('/')
        .then(done);
    });

    it('should have search input', () => {
        browser.sleep(1000);
        let ng2Input = element(by.css('input'));
        expect(ng2Input.isDisplayed()).toBeTruthy();
    });
});
