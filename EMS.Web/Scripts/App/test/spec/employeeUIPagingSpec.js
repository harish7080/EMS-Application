
describe('Test Cases For Employee UI Paging', function () {

    beforeEach(function () {
        module('app');

        inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();
            compiler = $compile;
            req = new XMLHttpRequest();
            req.onload = function (x) {
                result = req.response;
            }
            req.open('get', '/About/EmployeePaging', false);
            req.send();
            formElement = angular.element(result);
            scope.$digest();

        });
    });

    it('should have only one form', function () {
        var findForm = formElement.find('form');
        expect(findForm.length).toEqual(1);
    })

    it('should have number of divs as we expect', function () {
        var findDiv = formElement.find('div');
        expect(findDiv.length).toEqual(3);
    })

    it('class name of div should be same as we expect', function () {
        var findDiv = formElement.find('div');
        var findDiv3ClassName = findDiv[2].className;
        expect(findDiv.length).toEqual(3);
        expect(findDiv3ClassName).toEqual("table-responsive scroll play");
    })

    it('should have number of tables as we expect ', function () {
        var findTable = formElement.find('table');
        expect(findTable.length).toBe(2);
    });

    it('class name of table should be same as we expect', function () {
        var findTable = formElement.find('table');
        var findTableClass = findTable[1].className;
        expect(findTableClass).toEqual("table");
        expect(findTable.length).toEqual(2);
    })

    it('To test ng-repeat for Table Rows Repeations', function () {
        var table = formElement.find('table');
        var findtable = table[1].innerHTML;
        var requiredTable = angular.element(findtable);
        var findTr = requiredTable.find('tr');
        expect(findTr.length).toEqual(2);
    });

    it('To test ng-repeat for Table Columns Repeations', function () {
        var table = formElement.find('table');
        var findtable = table[1].innerHTML;
        var requiredTable = angular.element(findtable);
        var findTd = requiredTable.find('td');
        expect(findTd.length).toEqual(4);
    });

    it('should have total number of th tags in table as we expect', function () {
        var table = formElement.find('table');
        var findtable = table[1].innerHTML;
        var requiredTable = angular.element(findtable);
        var findTh = requiredTable.find('th');
        expect(findTh.length).toEqual(4);
    })

    it('should have total number of td tags in table as we expect', function () {
        var findTable = formElement.find('table');
        var findTableTdTags = findTable.find('td')
        expect(findTable.length).toEqual(2);
        expect(findTableTdTags.length).toEqual(6);
    })

    it('should have total number of tr tags in table as we expect', function () {
        var findTable = formElement.find('table');
        var findTableTrTags = findTable.find('tr')
        expect(findTable.length).toEqual(2);
        expect(findTableTrTags.length).toEqual(3);
    })

    it('should have total number of td tags in all tables as we expect', function () {
        var findTable = formElement.find('table');
        var findFirstTable = findTable[0].innerHTML;
        var firstTable = angular.element(findFirstTable);
        var findFirstTableTdTags = firstTable.find('td');
        var findSecondTable = findTable[1].innerHTML;
        var secondTable = angular.element(findSecondTable);
        var findSecondTableTdTags = secondTable.find('td');
        expect(findTable.length).toEqual(2);
        expect(findFirstTableTdTags.length).toEqual(2);
        expect(findSecondTableTdTags.length).toEqual(4);
    })

    it('should have total number of tr tags in all tables as we expect', function () {
        var findTable = formElement.find('table');
        var findFirstTable = findTable[0].innerHTML;
        var firstTable = angular.element(findFirstTable);
        var findFirstTableTdTags = firstTable.find('tr');
        var findSecondTable = findTable[1].innerHTML;
        var secondTable = angular.element(findSecondTable);
        var findSecondTableTdTags = secondTable.find('tr');
        expect(findTable.length).toEqual(2);
        expect(findFirstTableTdTags.length).toEqual(1);
        expect(findSecondTableTdTags.length).toEqual(2);
    })
    
    it('should have one tags-input as we expect', function () {
        var findTagsInput = formElement.find('tags-input');
        var findTagsInputNodeName = findTagsInput[0].attributes[0].nodeName;
        var findTagsInputNodeValue = findTagsInput[0].attributes[0].nodeValue;
        var findDisplayNodeName = findTagsInput[0].attributes[1].nodeName;
        var findDisplayNodeValue = findTagsInput[0].attributes[1].nodeValue;
        expect(findTagsInput.length).toBe(1);
        expect(findTagsInputNodeName).toEqual("ng-model");
        expect(findTagsInputNodeValue).toEqual("stateTags");
        expect(findDisplayNodeName).toEqual("display-property");
        expect(findDisplayNodeValue).toEqual("State");
    });
    
    it('should have one pagination as we expect', function () {
        var findPagination = formElement.find('pagination');
        var findClassName = findPagination[0].className;
        expect(findPagination.length).toEqual(1);
        expect(findClassName).toEqual("pagination-sm");
    });

    it('checking ng-change of pagination should be same as we expect', function () {
        var findPagination = formElement.find('pagination');
        var findNgChangeNodeName = findPagination[0].attributes[2].nodeName;
        var findNgChangeNodeValue = findPagination[0].attributes[2].nodeValue;
        expect(findNgChangeNodeName).toEqual("ng-change");
        expect(findNgChangeNodeValue).toEqual("pageChanged(currentPage,PerPageItems)");
        expect(findPagination.length).toEqual(1);
    })

    it('class name of pagination should be same as we expect ', function () {
        var findPagination = formElement.find('pagination');
        var findClassName = findPagination[0].className;
        var findNgModelNodeName = findPagination[0].attributes[1].nodeName;
        var findNgModelNodeValue = findPagination[0].attributes[1].nodeValue;
        var findNgChangeNodeName = findPagination[0].attributes[2].nodeName;
        var findNgChangeNodeValue = findPagination[0].attributes[2].nodeValue;
        var findTotalItemsNodeName = findPagination[0].attributes[7].nodeName;
        var findTotalItemsNodeValue = findPagination[0].attributes[7].nodeValue;
        var findItemsPerPageNodeName = findPagination[0].attributes[8].nodeName;
        var findItemsPerPageNodeValue = findPagination[0].attributes[8].nodeValue;
        var findPageNodeName = findPagination[0].attributes[9].nodeName;
        var findPageNodeValue = findPagination[0].attributes[9].nodeValue;
        expect(findPagination.length).toEqual(1);
        expect(findClassName).toEqual("pagination-sm");
        expect(findNgModelNodeName).toEqual("ng-model");
        expect(findNgModelNodeValue).toEqual("currentPage");
        expect(findNgChangeNodeName).toEqual("ng-change");
        expect(findNgChangeNodeValue).toEqual("pageChanged(currentPage,PerPageItems)");
        expect(findTotalItemsNodeName).toEqual("total-items");
        expect(findTotalItemsNodeValue).toEqual("filteredItems");
        expect(findItemsPerPageNodeName).toEqual("items-per-page");
        expect(findItemsPerPageNodeValue).toEqual("PerPageItems");
        expect(findPageNodeName).toEqual("page");
        expect(findPageNodeValue).toEqual("currentPage");
    })
    
    it('should have one auto-complete as we expect', function () {
        var findAutoComplete = formElement.find('auto-complete');
        var findAutoCompleteNodeValue = findAutoComplete[0].attributes[0].nodeValue;
        var findAutoCompleteValue = findAutoComplete[0].attributes[0].value;
        var findAutoCompleteTextContent = findAutoComplete[0].attributes[0].textContent;
        expect(findAutoComplete.length).toEqual(1);
        expect(findAutoCompleteNodeValue).toEqual("loadTags($query)");
        expect(findAutoCompleteValue).toEqual("loadTags($query)");
        expect(findAutoCompleteTextContent).toEqual("loadTags($query)");
    });

    it('should have one search button as we expect', function () {
        var findForm = formElement.find('form');
        var findSearchButton = findForm.find('input');
        var findButtonType = findSearchButton[0].type;
        var findButtonValue = findSearchButton[0].value;
        expect(findSearchButton.length).toEqual(1);
        expect(findButtonType).toEqual("submit");
        expect(findButtonValue).toEqual("Search");
    })

    it('class name of search button should be same as we expect', function () {
        var findForm = formElement.find('form');
        var findSearchButton = findForm.find('input');
        var findClassName = findSearchButton[0].className;
        expect(findClassName).toEqual("btn btn-success");
        expect(findSearchButton.length).toEqual(1);
    })

    it('checking ng-click of search button', function () {
        var findForm = formElement.find('form');
        var findSearchButton = findForm.find('input');
        var searchButtonNodeName = findSearchButton[0].attributes[3].nodeName;
        var searchButtonNodeValue = findSearchButton[0].attributes[3].nodeValue;
        expect(searchButtonNodeName).toEqual("ng-click");
        expect(searchButtonNodeValue).toEqual("search(stateTags,selectedEmployeeNames)");
        expect(findSearchButton.length).toEqual(1);
    })

    it('value and type of search button should be same as we expect', function () {
        var findForm = formElement.find('form');
        var findSearchButton = findForm.find('input');
        var findButtonType = findSearchButton[0].type;
        var findButtonValue = findSearchButton[0].value;
        var findButtonStyle = findSearchButton[0].attributes[1].name;
        var findButtonHeight = findSearchButton[0].attributes[1].value;
        var findButtonDefaultValue = findSearchButton[0].defaultValue;
        expect(findButtonType).toEqual("submit");
        expect(findButtonValue).toEqual("Search");
        expect(findButtonStyle).toEqual("style");
        expect(findButtonHeight).toEqual("height: 35px;");
        expect(findButtonDefaultValue).toEqual("Search");
        expect(findSearchButton.length).toEqual(1);
    })
    
    it('should have one isteven-multi-select as we expect', function () {
        var findForm = formElement.find('form');
        var findistevenmultiselect = findForm.find('div');
        expect(findForm.length).toEqual(1);
        expect(findistevenmultiselect.length).toEqual(1);
    })

    it('checking other properties of isteven-multi-select', function () {
        var findForm = formElement.find('form');
        var findistevenmultiselect = findForm.find('div');
        var findOutputPropertiesNodeName = findistevenmultiselect[0].attributes[0].nodeName;
        var findOutputPropertiesNodeValue = findistevenmultiselect[0].attributes[0].nodeValue;
        var findTickPropertyNodeName = findistevenmultiselect[0].attributes[1].nodeName;
        var findTickPropertyNodeValue = findistevenmultiselect[0].attributes[1].nodeValue;
        var findItemLabelNodeName = findistevenmultiselect[0].attributes[2].nodeName;
        var findItemLabelNodeValue = findistevenmultiselect[0].attributes[2].nodeValue;
        var findButtonLabelNodeName = findistevenmultiselect[0].attributes[3].nodeName;
        var findButtonLabelNodeValue = findistevenmultiselect[0].attributes[3].nodeValue;
        var findOutputModelNodeName = findistevenmultiselect[0].attributes[4].nodeName;
        var findOutputModelNodeValue = findistevenmultiselect[0].attributes[4].nodeValue;
        var findInputModelNodeName = findistevenmultiselect[0].attributes[5].nodeName;
        var findInputModelNodeValue = findistevenmultiselect[0].attributes[5].nodeValue;
        expect(findOutputPropertiesNodeName).toEqual("output-properties");
        expect(findOutputPropertiesNodeValue).toEqual("Name");
        expect(findTickPropertyNodeName).toEqual("tick-property");
        expect(findTickPropertyNodeValue).toEqual("ticked");
        expect(findItemLabelNodeName).toEqual("item-label");
        expect(findItemLabelNodeValue).toEqual("Name");
        expect(findButtonLabelNodeName).toEqual("button-label");
        expect(findButtonLabelNodeValue).toEqual("Name");
        expect(findOutputModelNodeName).toEqual("output-model");
        expect(findOutputModelNodeValue).toEqual("selectedEmployeeNames");
        expect(findInputModelNodeName).toEqual("input-model");
        expect(findInputModelNodeValue).toEqual("employeeNames");
    })

    it('To test ng-model in the first table', function () {
        var table = formElement.find('table');
        var findtable = table[0].innerHTML;
        var requiredTable = angular.element(findtable);
        var findTd = requiredTable.find('td');
        var findSecondTd = findTd[1].innerHTML;
        var findPerPageItems = angular.element(findSecondTd);
        var findNgModelNodeName = findPerPageItems[0].attributes[0].nodeName;
        var findNgModelNodeValue = findPerPageItems[0].attributes[0].nodeValue;
        var findNgChangeNodeName = findPerPageItems[0].attributes[1].nodeName;
        var findNgChangeNodeValue = findPerPageItems[0].attributes[1].nodeValue;
        expect(findNgModelNodeName).toEqual("ng-model");
        expect(findNgModelNodeValue).toEqual("PerPageItems");
        expect(findNgChangeNodeName).toEqual("ng-change");
        expect(findNgChangeNodeValue).toEqual("pageChanged(currentPage,PerPageItems)");
    });

    it('To test ng-repeat in the second table', function () {
        var table = formElement.find('table');
        var findtable = table[1].innerHTML;
        var requiredTable = angular.element(findtable);
        var findTr = requiredTable.find('tr');
        var ngrepeatNodeName = findTr[1].attributes[0].nodeName;
        var ngrepeatNodeValue = findTr[1].attributes[0].nodeValue;
        expect(ngrepeatNodeName).toEqual("ng-repeat");
        expect(ngrepeatNodeValue).toEqual("employee in employees | limitTo:PerPageItems");
        expect(table.length).toEqual(2);
        expect(findTr.length).toEqual(2);
    });

    it('should have number of option tags in first table as we expect', function () {
        var table = formElement.find('table');
        var findtable = table[0].innerHTML;
        var requiredTable = angular.element(findtable);
        var findOption = requiredTable.find('option');
        var firstOptionNodeName = findOption[0].attributes[0].nodeName;
        var firstOptionNodeValue = findOption[0].attributes[0].nodeValue;
        var secondOptionNodeName = findOption[1].attributes[0].nodeName;
        var secondOptionNodeValue = findOption[1].attributes[0].nodeValue;
        var thirdOptionNodeName = findOption[2].attributes[0].nodeName;
        var thirdOptionNodeValue = findOption[2].attributes[0].nodeValue;
        var fourthOptionNodeName = findOption[3].attributes[0].nodeName;
        var fourthOptionNodeValue = findOption[3].attributes[0].nodeValue;
        var fifthOptionNodeName = findOption[4].attributes[0].nodeName;
        var fifthOptionNodeValue = findOption[4].attributes[0].nodeValue;
        expect(firstOptionNodeName).toEqual("value");
        expect(firstOptionNodeValue).toEqual("");
        expect(secondOptionNodeName).toEqual("value");
        expect(secondOptionNodeValue).toEqual("5");
        expect(thirdOptionNodeName).toEqual("value");
        expect(thirdOptionNodeValue).toEqual("10");
        expect(fourthOptionNodeName).toEqual("value");
        expect(fourthOptionNodeValue).toEqual("15");
        expect(fifthOptionNodeName).toEqual("value");
        expect(fifthOptionNodeValue).toEqual("20");
        expect(findOption.length).toEqual(5);
        expect(table.length).toEqual(2);
    })

})
