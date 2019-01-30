
describe("Test Cases For EmployeeListcontroller", function () {

    var employees = [{ Empid: 1, Firstname: 'A', LastName: 'B', Email: 'C@gmail.com' }];
    var employeess = [{ Empid: 1, FirstName: 'd', LastName: 'e', Email: 'f@gmail.com', LanguageIds: [1, 2], Success: true }];
    var empFactList, httpBackend;
    var id = 10;
    var searchDataLike = { "search": "dd", "select": "Like" };
    var searchDataEqual = { "search": "dd", "select": "Equal" };
    var searchDataNull = { "search": "", "select": "" };
    var delsatus = { Exceptions: null, StatusCode: 200, Success: true };

    beforeEach(function () {
        module('app');
    });
   
    beforeEach(inject(function ($controller, $rootScope, employeeFactory, $q) {
        scope = $rootScope.$new();
        empFactList = employeeFactory
        spyOn(empFactList, 'getEmployees').and.callThrough().and.callFake(function (s) {
            var deferred = $q.defer();
            deferred.resolve({ data: employees });
            return deferred.promise;
        });
        spyOn(empFactList, 'deleteEmployee').and.callThrough().and.callFake(function (s) {
            var deferred = $q.defer();
            deferred.resolve({ data: delsatus });
            return deferred.promise;
        });
        spyOn(empFactList, 'getEmployeeById').and.callThrough().and.callFake(function (s) {
            var deferred = $q.defer();
            deferred.resolve({ data: employees });
            return deferred.promise;
        });
        controller = $controller('EmployeeListController', {
            $scope: scope,
            employeeFactory: empFactList
        });

    }));

    
    it('check factory is there or not', function () {
        expect(empFactList).not.toBe(null);
    });
    
    it('check get employees method is there or not', function () {
        expect(angular.isFunction(empFactList.getEmployees)).toBe(true);
    });
    it('calling get employee from controllers', function () {
        scope.Inity();
        scope.$root.$digest();
        expect(empFactList.getEmployees).toHaveBeenCalled();
    });
    it('calling get employee count', function () {
        empFactList.getEmployees.calls.reset();
        scope.Inity();
        scope.$root.$digest();
        expect(empFactList.getEmployees.calls.count()).toBe(1);
    });
    
    it('Checking deleteEmployee Factory method', function () {
        expect(angular.isFunction(empFactList.deleteEmployee)).toBe(true);
    });
    it('check delete', function () {
        spyOn(window, 'confirm').and.returnValue(true);
        empFactList.deleteEmployee.calls.reset()
        expect(empFactList.deleteEmployee.calls.count()).toBe(0);
        scope.toggleDelete(id);
        scope.$root.$digest();
        expect(empFactList.deleteEmployee.calls.count()).toBe(1);
    });
    it('chek the Delete funtion calling or not', function () {
        spyOn(window, 'confirm').and.returnValue(false);
        expect(empFactList.deleteEmployee.calls.count()).toBe(0);
        scope.toggleDelete(id);
        scope.$root.$digest();
        expect(empFactList.deleteEmployee.calls.count()).toBe(0);
    });


    it('check GetEmployeeById method is there or not', function () {
        expect(angular.isFunction(empFactList.getEmployeeById)).toBe(true);
    });
    it('calling get employee by id method', function () {
        var Id = 102;
        empFactList.getEmployeeById.calls.reset();
        scope.Inity(Id);
        scope.$root.$digest();
        expect(empFactList.getEmployeeById.calls.count()).toBe(0);
    });

    it('should return filtered searched data if we select like', function () {
        scope.search(searchDataLike);
        expect(scope.selects).toBe(false);
        expect(scope.searchs).toBe(searchDataLike.search);
    });
    it('should return filtered searched data if we select equal', function () {
        scope.search(searchDataEqual);
        expect(scope.selects).toBe(true);
        expect(scope.searchs).toBe(searchDataEqual.search);
    });
    it('should return false if it has null selected and empty searched', function () {
        scope.search(searchDataNull);
        expect(scope.selects).toBe(false);
        expect(scope.searchs).toBe('');
    });

});

