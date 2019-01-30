
describe("Test Cases For EmployeePagingListController", function () {

    var employees = { "count": 1, "List": [{ "Id": 1, Name: "harish", State: "Telangana", Email: "harish@gmail.com" }] };
   
    var employeeNames = [{ Name: "harish" }];

    var empFactList, httpBackend;

    var query = "Tel", result = "Telangana";

    var employeeStates = [{ State: "Telangana" }, {State:"Andhra"}, {State:"Tamilnadu"}, {State:"Maharashtra"}];

    var employeeName = [{ Name: "harish" }, { Name: "kumar" }, { Name: "imran" }, { Name: "asif" }];

    beforeEach(function () {
        module('app');
    });

    beforeEach(inject(function ($controller, $rootScope, employeeFactory, $q) {

        scope = $rootScope.$new();
        empFactList = employeeFactory
        
        spyOn(empFactList, 'getEmployeesbyPage').and.callThrough().and.callFake(function (s) {
            var deferred = $q.defer();
            deferred.resolve({ data: employees });
            return deferred.promise;
        })

        spyOn(empFactList, 'getEmployeeNames').and.callThrough().and.callFake(function (s) {
            var deferred = $q.defer();
            deferred.resolve({ data: employeeNames });
            return deferred.promise;
        })

        spyOn(empFactList, 'getStateTags').and.callThrough().and.callFake(function (s) {
            var deferred = $q.defer();
            deferred.resolve({ data: result });
            return deferred.promise;
        })

        controller = $controller('EmployeePagingListController', {
            $scope: scope,
            employeeFactory: empFactList
        });

    }));

    it('check factory is there or not', function () {
        expect(empFactList).not.toBe(null);
    });
    it('check getEmployeesbyPage method is there or not', function () {
        expect(angular.isFunction(empFactList.getEmployeesbyPage)).toBe(true);
    });

    it('calling getEmployees method from controllers', function () {
        scope.getEmployees();
        scope.$root.$digest();
        expect(empFactList.getEmployeesbyPage).toHaveBeenCalled();
    });
    it('calling getEmployees(getEmployeesbyPage) count', function () {
        empFactList.getEmployeesbyPage.calls.reset();
        scope.getEmployees();
        scope.$root.$digest();
        expect(empFactList.getEmployeesbyPage.calls.count()).toBe(1);
        expect(scope.employees).toEqual(employees.List);
        expect(scope.employees.length).toEqual(employees.List.length);
    });

    it('calling pageChanged method from controllers', function () {
        scope.pageChanged();
        scope.$root.$digest();
        expect(empFactList.getEmployeesbyPage).toHaveBeenCalled();
    });
    it('calling pageChanged(getEmployeesbyPage) count', function () {
        empFactList.getEmployeesbyPage.calls.reset();
        scope.pageChanged();
        scope.$root.$digest();
        expect(empFactList.getEmployeesbyPage.calls.count()).toBe(1);
        expect(scope.employees).toEqual(employees.List);
        expect(scope.employees.length).toEqual(employees.List.length);
    });

    it('calling getEmployeeNames method from controllers', function () {
        scope.getEmployeeNames();
        scope.$root.$digest();
        expect(empFactList.getEmployeeNames).toHaveBeenCalled();
    });
    it('calling getEmployeeNames(getEmployeesbyPage) count', function () {
        empFactList.getEmployeeNames.calls.reset();
        scope.getEmployeeNames();
        scope.$root.$digest();
        expect(empFactList.getEmployeeNames.calls.count()).toBe(1);
        expect(scope.employeeNames).toEqual(employeeNames);
        expect(scope.employeeNames.length).toEqual(employeeNames.length);
    });

    it('calling loadTags(states) method from controllers', function () {
        scope.loadTags(query);
        scope.$root.$digest();
        expect(empFactList.getStateTags).toHaveBeenCalled();
    });
    it('calling getStateTags count', function () {
        empFactList.getStateTags.calls.reset();
        scope.loadTags(query);
        scope.$root.$digest();
        expect(empFactList.getStateTags.calls.count()).toBe(1);
    });

    it('calling loadTags(states) method from controllers', function () {
        scope.search(employeeStates,employeeName);
        scope.$root.$digest();
        expect(empFactList.getEmployeesbyPage).toHaveBeenCalled();
    });
    it('calling loadTags count', function () {
        empFactList.getEmployeesbyPage.calls.reset();
        scope.search(employeeStates, employeeName);
        scope.$root.$digest();
        expect(empFactList.getEmployeesbyPage.calls.count()).toBe(1);
        expect(scope.employees).toEqual(employees.List);
        expect(scope.employees.length).toEqual(employees.List.length);
        expect(scope.filteredItems).toEqual(employees.count);
        expect(scope.totalItems).toEqual(employees.count);
    });

});

