
describe("Test Cases For EmployeeDetailsController", function () {

    var q, Controller, window, scope;

    var employeeDetails = { FirstName: "a", LastName: "b", Email: "c@gmail.com", Gender: "1", StateId: "1", LanguageIds: [1, 2], Files: [] };

    var successstatus = { Exceptions: null, StatusCode: 200, Success: true };

    beforeEach(function () {
        module("app");
    });

    beforeEach(inject(function ($rootScope, $controller, employeeFactory, $q, $window) {

        scope = $rootScope.$new();
        q = $q;
        window = $window;
        
        spyOn(employeeFactory, 'createEmployee').and.callThrough().and.callFake(function (s) {
            var deferred = $q.defer();
            deferred.resolve({ data: successstatus });
            return deferred.promise;
        });

        spyOn(employeeFactory, 'getMasterData').and.callThrough().and.callFake(function (s) {
            var deferred = $q.defer();
            deferred.resolve({ data: successstatus });
            return deferred.promise;
        });

        controller = $controller('EmployeeDetailsController', {
            $scope: scope
        });

    }));

    it('save EmployeeDetails should return Status as True', function () {
        scope.save(employeeDetails);
        scope.$root.$digest();
        expect(scope.employee).toEqual(employeeDetails);
    });

});