
describe('Test Cases For Employee UI Validations ', function () {

    var compiler, scope, httpBackend, listcontrollerInstance, element1;

    beforeEach(function () {
        module('app');
    });

    beforeEach(inject(function ($compile, $rootScope, $httpBackend, $controller) {
        scope = $rootScope.$new();
        scope.employee = {};
        compiler = $compile
        httpBackend = $httpBackend;
        listcontrollerInstance = $controller;

        var req = new XMLHttpRequest();
        req.onload = function () {
            directiveTemplate = req.responseText;
        };
        req.open("get", "/Employee/EmployeeDetails", false);

        req.send();
        formElement = angular.element(directiveTemplate);
    }))

    describe("view Text Fields unit test", function () {

        it('First Name input validation for  if its True', function () {
            var form = formElement.find('form');
            var divselect = form.find('input');
            scope.employee.FirstName = "harish";
            scope.employee.LastName = "kumar";
            scope.employee.Email = "harish@gmail.com";
            scope.employee.Gender = 1;
            scope.employee.StateId = 2;
            compiler(form)(scope);
            scope.$digest();
            var forms = scope.form;
            forms.firstname.$setViewValue("h");
            forms.lastname.$setViewValue("k");
            forms.email.$setViewValue("h@gmail.com");
            forms.Gender.$setViewValue(1)
            forms.stateid.$setViewValue(2)
            expect(forms.firstname.$valid).toBe(true);
            expect(forms.lastname.$valid).toBe(true);
            expect(forms.email.$valid).toBe(true);
            expect(forms.Gender.$valid).toBe(true)
            expect(forms.stateid.$valid).toBe(true)
        });

        it('First Name input validation for  if its False', function () {
            var form = formElement.find('form');
            var divselect = form.find('input');
            scope.employee.FirstName = "";
            scope.employee.LastName = "";
            scope.employee.email = "harish@";
            scope.employee.Gender = "";
            scope.employee.StateId = "";
            compiler(form)(scope);
            scope.$digest();
            var forms = scope.form;
            forms.firstname.$setViewValue("");
            forms.lastname.$setViewValue("");
            forms.email.$setViewValue("harish@");
            forms.Gender.$setViewValue("")
            forms.stateid.$setViewValue("")
            expect(forms.firstname.$valid).toBe(false);
            expect(forms.lastname.$valid).toBe(false);
            expect(forms.email.$valid).toBe(false);
            expect(forms.Gender.$valid).toBe(false)
            expect(forms.stateid.$valid).toBe(false)
        })

        it('should connect the div', function () {
            var div = formElement.find('div');
            expect(div.css('display')).toBe('');
        });

        it('should have correct save employee function name in saveButton', function () {
            var formObject = formElement.find('form');
            var forElement = formObject.find('input');
            var submitButton = forElement[7].outerHTML;
            expect(submitButton).toContain('save(employee)');
        });

        it('check for gender RadioButton for Male', function () {
            var form = formElement.find('form');
            var gender = form.find('input');
            var male = gender[3].value;
            scope.employee = {};
            scope.employee.Gender = '1';
            scope.$digest();
            expect(male).toBe(scope.employee.Gender);
        });

        it('check for gender RadioButton for FeMale', function () {
            var form = formElement.find('form');
            var gender = form.find('input')
            var female = gender[4].value;
            scope.employee = {};
            scope.employee.Gender = '0';
            scope.$digest();
            expect(female).toBe(scope.employee.Gender);
        });

        it('validation for Languages', function () {
            var form = formElement.find('form');
            var formele = form.find('div').eq(16);
            scope.languages = [{ LanguageId: 1, LanguageName: "English" }, { LanguageId: 2, LanguageName: "Hindi" }, { LanguageId: 3, LanguageName: "Telugu" }];
            compiler(form)(scope);
            scope.$digest();
            expect(formele[0].childElementCount).toBe(3);
        });

        it('validation for  states', function () {
            var form = formElement.find('form');
            var formele = form.find('div').eq(19);
            scope.states = [{ StateId: 1, StateName: "AP" }, { StateId: 2, StateName: "UP" }];
            compiler(form)(scope);
            scope.$digest();
            expect(formele[0].childElementCount).toBe(2);
        });

        it('check for files', function () {
            var form = formElement.find('form');
            form = angular.element(form);
            var formele = form.find('span');
            formele = '<div>' + formele[11].innerHTML + '</div>';
            formele = angular.element(formele);
            compiler(formele)(scope);
            scope.FilesList = [{ FileName: "File1" }, { FileName: "File2" }, { FileName: "File3" }, { FileName: "File4" }];
            compiler(form)(scope);
            scope.$digest();
            var divs = formele.find('div');
            expect(divs.length).toBe(4);
        });

        it('check for files', function () {
            var form = formElement.find('form');
            var formele = form.find('span').eq(11);
            compiler(formele)(scope);
            scope.FilesList = [{ FileName: "File1" }, { FileName: "File2" }, { FileName: "File3" }, { FileName: "File4" }];
            compiler(form)(scope);
            scope.$digest();
            expect(formele.find('div').length).toBe(4);
        });

    })
})