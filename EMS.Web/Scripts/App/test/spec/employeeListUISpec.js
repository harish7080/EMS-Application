
describe('Test Cases For EmployeeList UI', function () {

    beforeEach(function () {
        module('app');

        inject(function ($rootScope, $compile, $filter) {
            scope = $rootScope.$new();
            compiler = $compile;
            req = new XMLHttpRequest();
            req.onload = function (x) {
                result = req.response;
            }
            req.open('get', '/Employee/EmployeeList', false);
            req.send();
            formElement = angular.element(result);
            scope.$digest();
        });
    });

    it('should have number of divs as we expect', function () {
        var findDiv = formElement.find('div');
        expect(findDiv.length).toEqual(6);
    })

    it('class names of divs should be same as we expect', function () {
        var findDiv = formElement.find('div');
        var findFirstDivClassName = findDiv[0].className;
        var findSecondDivClassName = findDiv[1].className;
        var findThirdDivClassName = findDiv[2].className;
        var findFourthDivClassName = findDiv[3].className;
        var findFifthDivClassName = findDiv[4].className;
        var findSixDivClassName = findDiv[5].className;
        expect(findDiv.length).toEqual(6);
        expect(findFirstDivClassName).toEqual("clearfix");
        expect(findSecondDivClassName).toEqual("col-sm-6");
        expect(findThirdDivClassName).toEqual("btn btn-success pull-left");
        expect(findFourthDivClassName).toEqual("btn btn-success pull-right");
        expect(findFifthDivClassName).toEqual("clearfix");
        expect(findSixDivClassName).toEqual("table-responsive scroll play");
    })

    it('should have number of tables as we expect ', function () {
        var findTable = formElement.find('table');
        expect(findTable.length).toBe(2);
    });

    it('should have total number of td tags in table as we expect', function () {
        var findTable = formElement.find('table');
        var findTableTdTags = findTable.find('td')
        expect(findTable.length).toEqual(2);
        expect(findTableTdTags.length).toEqual(7);
    })

    it('should have total number of tr tags in table as we expect', function () {
        var findTable = formElement.find('table');
        var findTableTrTags = findTable.find('tr')
        expect(findTable.length).toEqual(2);
        expect(findTableTrTags.length).toEqual(4);
    })

    it('To test ng-repeate for Table Rows Repeations', function () {
        var table = formElement.find('table');
        var findtable = table[1].innerHTML;
        var requiredTable = angular.element(findtable);
        var findTr = requiredTable.find('tr');
        expect(findTr.length).toEqual(2);
    });

    it('To test ng-repeate for Table Columns Repeations', function () {
        var table = formElement.find('table');
        var findtable = table[1].innerHTML;
        var requiredTable = angular.element(findtable);
        var findTd = requiredTable.find('td');
        expect(findTd.length).toEqual(5);
    });

    it('To test ng-click in the second table', function () {
        var table = formElement.find('table');
        var findtable = table[1].innerHTML;
        var requiredTable = angular.element(findtable);
        var findTd = requiredTable.find('td');
        var findThirdTd = findTd[3].innerHTML;
        var findFourthTd = findTd[4].innerHTML;
        var findNgClickEdit = angular.element(findThirdTd);
        var findNgClickDelete = angular.element(findFourthTd);
        var ngClickEditNodeName = findNgClickEdit[0].attributes[0].nodeName;
        var ngClickEditNodeValue = findNgClickEdit[0].attributes[0].nodeValue;
        var ngClickDeleteNodeName = findNgClickDelete[0].attributes[0].nodeName;
        var ngClickDeleteNodeValue = findNgClickDelete[0].attributes[0].nodeValue;
        expect(ngClickEditNodeName).toEqual("ng-click");
        expect(ngClickEditNodeValue).toEqual("toggleEdit(employee)");
        expect(ngClickDeleteNodeName).toEqual("ng-click");
        expect(ngClickDeleteNodeValue).toEqual("toggleDelete(employee.EmpId)");
    });

    it('checking ng-click of filter employees button', function () {
        var findDiv = formElement.find('div');
        var findRequiredDiv = findDiv[2].innerHTML;
        var findButton = angular.element(findRequiredDiv);
        var findSearchButtonNodeName = findButton[0].attributes[2].nodeName;
        var findSearchButtonNodeValue = findButton[0].attributes[2].nodeValue;
        expect(findDiv.length).toEqual(6);
        expect(findSearchButtonNodeName).toEqual("ng-click");
        expect(findSearchButtonNodeValue).toEqual("search(search)");
    })

    it('checking ng-click of Add Employee button', function () {
        var findDiv = formElement.find('div');
        var findRequiredDiv = findDiv[3].innerHTML;
        var findButton = angular.element(findRequiredDiv);
        var findSearchButtonNodeName = findButton[0].attributes[2].nodeName;
        var findSearchButtonNodeValue = findButton[0].attributes[2].nodeValue;
        expect(findDiv.length).toEqual(6);
        expect(findSearchButtonNodeName).toEqual("ng-click");
        expect(findSearchButtonNodeValue).toEqual("toggleAdd()");
    })

    it('checking ng-model of Filter button', function () {
        var table = formElement.find('table');
        var findTable = table[0].innerHTML;
        var requiredTable = angular.element(findTable);
        var findTd = requiredTable.find('td');
        var findFirstTd = findTd[0].innerHTML;
        var requiredData = angular.element(findFirstTd);
        var findNgModelNodeName = requiredData[0].attributes[1].nodeName;
        var findNgModelNodeValue = requiredData[0].attributes[1].nodeValue;
        expect(table.length).toEqual(2);
        expect(findNgModelNodeName).toEqual("ng-model");
        expect(findNgModelNodeValue).toEqual("search.select");
    })

    it('checking ng-model of Search Here TextBox', function () {
        var table = formElement.find('table');
        var findTable = table[0].innerHTML;
        var requiredTable = angular.element(findTable);
        var findTd = requiredTable.find('td');
        var findFirstTd = findTd[1].innerHTML;
        var requiredData = angular.element(findFirstTd);
        var findNgModelNodeName = requiredData[0].attributes[3].nodeName;
        var findNgModelNodeValue = requiredData[0].attributes[3].nodeValue;
        expect(table.length).toEqual(2);
        expect(findNgModelNodeName).toEqual("ng-model");
        expect(findNgModelNodeValue).toEqual("search.search");
    })

    it('should have number of th tags as we expect', function () {
        var findTh = formElement.find('th');
        expect(findTh.length).toEqual(5);
    })

    it('should load the filter', inject(function ($filter) {
        var myFilter = $filter('filter');
        expect(myFilter).toBeDefined();
    }));

})

