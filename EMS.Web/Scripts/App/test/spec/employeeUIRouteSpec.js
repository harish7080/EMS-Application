
describe('Test Cases For UI-Routing', function () {

    var state, route, Route, getUrls, name, URl, detailstmaplateURL, listtmaplateURL;

    beforeEach(function () {
        module('app');
        inject(function ($state) {
            state = $state;
        });
    });

    it('Test Case for Employee State', function () {
        getUrls = state.get('Employee');
        name = getUrls.name;
        URl = getUrls.url;
        detailstmaplateURL = getUrls['views']['edit@']['templateUrl'];
        listtmaplateURL = getUrls['views'][""]['templateUrl'];
        expect(name).toBe('Employee');
        expect(URl).toBe('/Employee');
        expect(detailstmaplateURL).toBe('/Employee/EmployeeDetails');
        expect(listtmaplateURL).toBe('/Employee/EmployeeList');
    });

    it('Test Case for About State', function () {
        getUrls = state.get('About');
        name = getUrls.name;
        URl = getUrls.url;
        tmaplateURL = getUrls['views']['index@']['templateUrl'];
        expect(name).toBe('About');
        expect(URl).toBe('/About');
        expect(tmaplateURL).toBe('/About/Index');
    });

    it('Test Case for Paging State', function () {
        getUrls = state.get('Paging');
        name = getUrls.name;
        URl = getUrls.url;
        tmaplateURL = getUrls['views']['paging@']['templateUrl'];
        expect(name).toBe('Paging');
        expect(URl).toBe('/Paging');
        expect(tmaplateURL).toBe('/About/EmployeePaging');
    })

});

