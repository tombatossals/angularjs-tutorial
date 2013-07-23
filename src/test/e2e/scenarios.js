'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('My Hello World App', function() {

    beforeEach(function() {
        browser().navigateTo('/app/index.html');
    });

    it('should greet the user when he enters his name', function() {
        input("name").enter("jacksparrow");
        expect(element("#greeting").text()).toBe("Hello jacksparrow");
    });

    it('should greet the user when he enters his name', function() {
        input("name").enter("jacksparrow");
        input("number").enter("3");
        expect(element("#greeting").text()).toBe("Hello jacksparrow");
        element("#area").click();
        expect(browser().location().url()).toBe("/area");

        expect(element("#areaResult").text()).toBe("The area of a circle with radius 3 is 28.27.");
    });
});
