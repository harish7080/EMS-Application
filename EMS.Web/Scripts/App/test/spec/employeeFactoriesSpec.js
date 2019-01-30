
describe("Test Cases For Factories", function () {

    var employees = [{ Empid: 1, Firstname: 'A', LastName: 'B', Email: 'C@gmail.com', Gender: 'male' }];
    var masterdata = [{ StateId: 1, StateName: 'IL' }, { StateId: 5, StateName: 'MX' }, {LanguageId:6,LanguageName:'Telugu'}, {LanguageId:8,LanguageName:'English'}]
    var employeeFactories, httpBackend;
    var location;
    var states = { State: 'Telangana' };
    var names = { Name: 'Harish' };
    var employeeList = { Id: 1, Name: 'harish', State: 'Telangana', Email: 'harish.123@gmail.com' }

    beforeEach(function () {
        module('app');
        inject(function ($httpBackend, $location, employeeFactory, $q) {
            employeeFactories = employeeFactory;
            httpBackend = $httpBackend;
            location = $location;
            
            spyOn(employeeFactories, 'getEmployees').and.callThrough();
            spyOn(employeeFactories, 'getEmployeeById').and.callThrough();
            spyOn(employeeFactories, 'deleteEmployee').and.callThrough();
            spyOn(employeeFactories, 'createEmployee').and.callThrough();
            spyOn(employeeFactories, 'getMasterData').and.callThrough();
            spyOn(employeeFactories, 'getStateTags').and.callThrough();
            spyOn(employeeFactories, 'getEmployeeNames').and.callThrough();
            spyOn(employeeFactories, 'getEmployeesbyPage').and.callThrough();

        })
    });

    it('check employeeFactories name is there or not', function () {
        expect(employeeFactories).not.toBe(null);
    });

    it('check for GetEmployeesInfo information', function () {
        var resul;
        this.location = mvcActionLinks.getEmployees;
        httpBackend.expectGET("/Employee/GetEmployeesInfo/").respond(employees);
        var returnData = employeeFactories.getEmployees(this.location);
        returnData.then(function (response) {
            resul = response.data;
        });
        httpBackend.flush();
        expect(resul).toEqual(employees);
        expect((employeeFactories.getEmployees).calls.count()).toEqual(1);
    });

    it('check for AddEmployee', function () {
        var resul;
        this.location = mvcActionLinks.AddEmployee;
        httpBackend.expectPOST("/Employee/AddEmployee/",employees).respond(employees);
        var returnData = employeeFactories.createEmployee(this.location,employees);
        returnData.then(function (response) {
            resul = response;
        });
        httpBackend.flush();
        expect(resul.status).toEqual(200);
        expect((employeeFactories.createEmployee).calls.count()).toEqual(1);
    });

    it('check for GetEmployeeByID', function () {
        var resul;
        var Id = 200;
        this.location = mvcActionLinks.getEmployeeById;
        httpBackend.expectGET("/Employee/GetEmployeeByID/" +Id).respond(employees);
        var returnData = employeeFactories.getEmployeeById(this.location,Id);
        returnData.then(function (response) {
            resul = response.data;
        });
        httpBackend.flush();
        expect(resul).toEqual(employees);
        expect((employeeFactories.getEmployeeById).calls.count()).toEqual(1);
        expect(resul.length).toBe(1);
    });
    
    it('check for MasterData states and languages', function () {
        var resul;
        this.location = mvcActionLinks.getMasterData;
        httpBackend.expectGET("/Employee/MasterData").respond(masterdata);
        var returnData = employeeFactories.getMasterData(this.location);
        returnData.then(function (response) {
            resul = response.data;
        });
        httpBackend.flush();
        expect(resul).toEqual(masterdata);
        expect((employeeFactories.getMasterData).calls.count()).toEqual(1);
    });

    it('check for DeleteEmployee based on id', function () {
        var resul;
        var Id = 200;
        this.location = mvcActionLinks.DeleteEmployee;
        httpBackend.expectGET("/Employee/DeleteEmployee/" +Id).respond(employees);
        var returnData = employeeFactories.deleteEmployee(this.location,Id);
        returnData.then(function (response) {
            resul = response;
        });
        httpBackend.flush();
        expect(resul.status).toEqual(200);
        expect((employeeFactories.deleteEmployee).calls.count()).toEqual(1);
    });

    it('check for EmployeeStates', function () {
        var resul;
        this.location = mvcActionLinks.getStateTags;
        httpBackend.expectPOST('/About/EmployeeStates/?query=').respond(states);
        var returnData = employeeFactories.getStateTags(this.location);
        returnData.then(function (response) {
            resul = response.data;
        });
        httpBackend.flush();
        expect(resul).toEqual(states);
        expect((employeeFactories.getStateTags).calls.count()).toEqual(1);
    });

    it('check for EmployeeNames', function () {
        var resul;
        this.location = mvcActionLinks.getEmployeeNames;
        httpBackend.expectGET('/About/EmployeeNames/').respond(names);
        var returnData = employeeFactories.getEmployeeNames(this.location);
        returnData.then(function (response) {
            resul = response.data;
        });
        httpBackend.flush();
        expect(resul).toEqual(names);
        expect((employeeFactories.getEmployeeNames).calls.count()).toEqual(1);
    });

    it('check for EmployeesByPage by paging or search', function () {
        var resul;
        httpBackend.expectGET('/About/EmployeesByPage?currentPage=' + 1 + '&pagePerItems=' + 1 + '&states=' + "Telangana" + '&names=' + "Andhra").respond(employeeList);
        var returnData = employeeFactories.getEmployeesbyPage(1, 1, "Telangana", "Andhra");
        returnData.then(function (response) {
            resul = response.data;
        });
        httpBackend.flush();
        expect(resul).toEqual(employeeList);
        expect((employeeFactories.getEmployeesbyPage).calls.count()).toEqual(1);
    });

    afterEach(function () {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

});