
describe('Test Cases For Employee Filter', function () {

    var element, scope;

    var elementlike, elementequal;

    var searchDataLike = { "search": "dd", "select": "Like" };
    var searchDataEqual = { "search": "dd", "select": "Equal" };
    var searchDataNull = { "search": "", "select": "" };

    beforeEach(module('app'));

    beforeEach(inject(function ($rootScope, $compile) {

        element = angular.element('<div class="table-responsive scroll play">' +
            '<h3>EMS Employees:</h3>' +
            '<table>' +
            '<tr ng-repeat="employee in employees" FirstName="{{employee.FirstName}}">' +
            '</tr></table></div>');

        elementequal = angular.element('<div class="table-responsive scroll play">' +
            '<h3>EMS Employees:</h3>' +
            '<table>' +
            '<tr ng-repeat="employee in employees | filter:searchequal:True" ' + 
            '</tr></table></div>');

        scope = $rootScope;

        scope.employees = [{
            'FirstName': 'Rama', 'LastName': 'Raju', 'Email': 'a@ajrgroup.in'
        }, {
            'FirstName': 'Vijay', 'LastName': 'Kumar', 'Email': 'b@ajrgroup.in'
        }, {
            'FirstName': 'Satish', 'LastName': 'Kumar', 'Email': 'c@ajrgroup.in'
        }, {
            'FirstName': 'Ramesh', 'LastName': 'Kumar', 'Email': 'd@ajrgroup.in'
        }];

        scope.searchequal = [{'FirstName':'Harish','LastName':'Kumar','Email':'harish.7080@gmail.com'}]

        scope.searchlike = [{'FirstName': 'Harish', 'LastName': 'Kumar', 'Email': 'harish.7080@gmail.com'}]

        $compile(element)(scope);
        //$compile(elementequal)(scope);
        scope.$digest();
    }));

    it("should have the correct amount of employees in the list", function () {
        var list = element.find('tr');
        expect(list.length).toBe(4);
    });

    it('should return filtered searched data if we select like', function () {
        var list = element.find('tr');
        expect(scope.searchlike).toBe(list);
    });

});