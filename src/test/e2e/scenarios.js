'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('My Hello World App', function() {

    beforeEach(function() {
        browser().navigateTo('../../app/index.html');
    });

    it('should show the area view and calculate the', function() {
        input("name").enter("jacksparrow");
    });

});
