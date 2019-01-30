
describe('Test Cases For EmployeeDetails UI', function () {

    beforeEach(function () {
        module('app');

        inject(function ($rootScope, $compile, $filter) {
            scope = $rootScope.$new();
            compiler = $compile;
            req = new XMLHttpRequest();
            req.onload = function (x) {
                result = req.response;
            }
            req.open('get', '/Employee/EmployeeDetails', false);
            req.send();
            formElement = angular.element(result);
            scope.$digest();
        });
    });

    it('should have one form as we expected', function () {
        var findForm = formElement.find('form');
        expect(findForm.length).toEqual(1);
    })

    it('should have number of divs as we expect', function () {
        var findDiv = formElement.find('div');
        expect(findDiv.length).toEqual(40);
    })

    it('should have number of input tags as we expected', function () {
        var findInput = formElement.find('input');
        expect(findInput.length).toEqual(8);
    })

    it('should have number of span tags as we expected', function () {
        var findSpan = formElement.find('span');
        expect(findSpan.length).toEqual(13);
    })

    it('should have number of label tags as we expected', function () {
        var findLabel = formElement.find('label');
        expect(findLabel.length).toEqual(9);
    })

    it('To test the node name and node value of Form', function () {
        var findForm = formElement.find('form');
        var findNameNodeName = findForm[0].attributes[0].nodeName;
        var findNameNodeValue = findForm[0].attributes[0].nodeValue;
        var findNoValidateNodeName = findForm[0].attributes[1].nodeName;
        var findNgSubmitNodeName = findForm[0].attributes[2].nodeName;
        var findNgSubmitNodeValue = findForm[0].attributes[2].nodeValue;
        expect(findNameNodeName).toEqual("name");
        expect(findNameNodeValue).toEqual("form");
        expect(findNoValidateNodeName).toEqual("novalidate");
        expect(findNgSubmitNodeName).toEqual("ng-submit");
        expect(findNgSubmitNodeValue).toEqual("submitted = true");
        expect(findForm.length).toEqual(1);
    })

    it('class name of div tags should be same as we expect', function () {
        var findDiv = formElement.find('div');
        var findFirstDivClassName = findDiv[0].className;
        var findSecondDivClassName = findDiv[1].className;
        var findThirdDivClassName = findDiv[2].className;
        var findFourthDivClassName = findDiv[3].className;
        var findFifthDivClassName = findDiv[4].className;
        var findSixDivClassName = findDiv[5].className;
        var findSeventhDivClassName = findDiv[6].className;
        var findEightDivClassName = findDiv[7].className;
        var findNineDivClassName = findDiv[8].className;
        var findTenDivClassName = findDiv[9].className;
        var findElevenDivClassName = findDiv[10].className;
        var findTwelveDivClassName = findDiv[11].className;
        var findThirteethDivClassName = findDiv[12].className;
        var findFourteethDivClassName = findDiv[13].className;
        var findFifteethDivClassName = findDiv[14].className;
        var findSixteethDivClassName = findDiv[15].className;
        expect(findFirstDivClassName).toEqual("clearfix");
        expect(findSecondDivClassName).toEqual("panel_divider");
        expect(findThirdDivClassName).toEqual("col-sm-12 padding-top");
        expect(findFourthDivClassName).toEqual("");
        expect(findFifthDivClassName).toEqual("col-sm-10 no-padding padding-bottom");
        expect(findSixDivClassName).toEqual("col-sm-4 no-padding");
        expect(findSeventhDivClassName).toEqual("col-sm-8");
        expect(findEightDivClassName).toEqual("col-sm-10 no-padding padding-bottom");
        expect(findNineDivClassName).toEqual("col-sm-4 no-padding");
        expect(findTenDivClassName).toEqual("col-sm-8");
        expect(findElevenDivClassName).toEqual("col-sm-10 no-padding padding-bottom");
        expect(findTwelveDivClassName).toEqual("col-sm-4 no-padding");
        expect(findThirteethDivClassName).toEqual("col-sm-8");
        expect(findFourteethDivClassName).toEqual("col-sm-10 no-padding padding-bottom");
        expect(findFifteethDivClassName).toEqual("col-sm-4 no-padding");
        expect(findSixteethDivClassName).toEqual("col-sm-8");
        expect(findDiv.length).toEqual(40);  
    })

    it('class name of div tags should be same as we expected ', function () {
        var findDiv = formElement.find('div');
        var findSeventeethDivClassName = findDiv[16].className;
        var findEighteethDivClassName = findDiv[17].className;
        var findNineteethDivClassName = findDiv[18].className;
        var findTwentyDivClassName = findDiv[19].className;
        var findTwentyOneDivClassName = findDiv[20].className;
        var findTwentyTwoDivClassName = findDiv[21].className;
        var findTwentyThreeDivClassName = findDiv[22].className;
        var findTwentyFourDivClassName = findDiv[23].className;
        var findTwentyFiveDivClassName = findDiv[24].className;
        var findTwentySixDivClassName = findDiv[25].className;
        var findTwentySevenDivClassName = findDiv[26].className;
        var findTwentyEightDivClassName = findDiv[27].className;
        var findTwentyNineDivClassName = findDiv[28].className;
        var findThirtyDivClassName = findDiv[29].className;
        var findThirtyOneDivClassName = findDiv[30].className;
        var findThirtyTwoDivClassName = findDiv[31].className;
        var findThirtyThreeDivClassName = findDiv[32].className;
        var findThirtyFourDivClassName = findDiv[33].className;
        var findThirtyFiveDivClassName = findDiv[34].className;
        var findThirtySixDivClassName = findDiv[35].className;
        var findThirtySevenDivClassName = findDiv[36].className;
        var findThirtyEightDivClassName = findDiv[37].className;
        var findThirtyNineDivClassName = findDiv[38].className;
        var findFourtyDivClassName = findDiv[39].className;
        expect(findSeventeethDivClassName).toEqual("col-sm-10 no-padding padding-bottom");
        expect(findEighteethDivClassName).toEqual("col-sm-4 no-padding");
        expect(findNineteethDivClassName).toEqual("col-sm-8");
        expect(findTwentyDivClassName).toEqual("");
        expect(findTwentyOneDivClassName).toEqual("action-checkbox");
        expect(findTwentyTwoDivClassName).toEqual("col-sm-10 no-padding padding-bottom");
        expect(findTwentyThreeDivClassName).toEqual("col-sm-4 no-padding");
        expect(findTwentyFourDivClassName).toEqual("col-sm-8");
        expect(findTwentyFiveDivClassName).toEqual("clearfix");
        expect(findTwentySixDivClassName).toEqual("clearfix");
        expect(findTwentySevenDivClassName).toEqual("");
        expect(findTwentyEightDivClassName).toEqual("col-sm-10 no-padding padding-bottom");
        expect(findTwentyNineDivClassName).toEqual("col-sm-4 no-padding");
        expect(findThirtyDivClassName).toEqual("col-sm-8");
        expect(findThirtyOneDivClassName).toEqual("");
        expect(findThirtyTwoDivClassName).toEqual("clearfix");
        expect(findThirtyThreeDivClassName).toEqual("");
        expect(findThirtyFourDivClassName).toEqual("col-sm-3 no-padding");
        expect(findThirtyFiveDivClassName).toEqual("col-sm-8 padl30");
        expect(findThirtySixDivClassName).toEqual("clearfix");
        expect(findThirtySevenDivClassName).toEqual("col-sm-10 no-padding padding-bottom padt20");
        expect(findThirtyEightDivClassName).toEqual("col-sm-4 no-padding");
        expect(findThirtyNineDivClassName).toEqual("col-sm-8");
        expect(findFourtyDivClassName).toEqual("");
        expect(findDiv.length).toEqual(40);
    })

    it('should have 0 tables as we expect', function () {
        var findTable = formElement.find('table');
        expect(findTable.length).toEqual(0);
    })

    it('To test the ng-model of 4th div', function () {
        var findDiv = formElement.find('div').eq(3);
        var findDivNodeName = findDiv[0].attributes[0].nodeName;
        var findDivNodeValue = findDiv[0].attributes[0].nodeValue;
        var divInnerHtml = findDiv[0].innerHTML;
        var div = angular.element(divInnerHtml);
        var findNgModelNodeName = div[0].attributes[0].nodeName;
        var findNgModelNodeValue = div[0].attributes[0].nodeValue;
        expect(findNgModelNodeName).toEqual("ng-model");
        expect(findNgModelNodeValue).toEqual("employee.EmpId");
        expect(findDiv.length).toEqual(1);
        expect(findDivNodeName).toEqual("ng-hide");
        expect(findDivNodeValue).toEqual("true");
    })

    it('To test the ng-model of first input tag', function () {
        var findInput = formElement.find('input').eq(0);
        var findNameNodeName = findInput[0].attributes[0].nodeName;
        var findNameNodeValue = findInput[0].attributes[0].nodeValue;
        var findClassNodeName = findInput[0].attributes[1].nodeName;
        var findClassNodeValue = findInput[0].attributes[1].nodeValue;
        var findRequiredNodeName = findInput[0].attributes[2].nodeName;
        var findTypeNodeName = findInput[0].attributes[3].nodeName;
        var findTypeNodeValue = findInput[0].attributes[3].nodeValue;
        var findNgModelNodeName = findInput[0].attributes[5].nodeName;
        var findNgModelNodeValue = findInput[0].attributes[5].nodeValue;
        expect(findNgModelNodeName).toEqual("ng-model");
        expect(findNgModelNodeValue).toEqual("employee.FirstName");
        expect(findNameNodeName).toEqual("name");
        expect(findNameNodeValue).toEqual("firstname");
        expect(findClassNodeName).toEqual("class");
        expect(findClassNodeValue).toEqual("form-control");
        expect(findRequiredNodeName).toEqual("required");
        expect(findTypeNodeName).toEqual("type");
        expect(findTypeNodeValue).toEqual("text");
    })

    it('To test the ng-model of second input tag', function () {
        var findInput = formElement.find('input').eq(1);
        var findNameNodeName = findInput[0].attributes[0].nodeName;
        var findNameNodeValue = findInput[0].attributes[0].nodeValue;
        var findClassNodeName = findInput[0].attributes[1].nodeName;
        var findClassNodeValue = findInput[0].attributes[1].nodeValue;
        var findRequiredNodeName = findInput[0].attributes[2].nodeName;
        var findTypeNodeName = findInput[0].attributes[3].nodeName;
        var findTypeNodeValue = findInput[0].attributes[3].nodeValue;
        var findNgModelNodeName = findInput[0].attributes[5].nodeName;
        var findNgModelNodeValue = findInput[0].attributes[5].nodeValue;
        expect(findNgModelNodeName).toEqual("ng-model");
        expect(findNgModelNodeValue).toEqual("employee.LastName");
        expect(findNameNodeName).toEqual("name");
        expect(findNameNodeValue).toEqual("lastname");
        expect(findClassNodeName).toEqual("class");
        expect(findClassNodeValue).toEqual("form-control");
        expect(findRequiredNodeName).toEqual("required");
        expect(findTypeNodeName).toEqual("type");
        expect(findTypeNodeValue).toEqual("text");
    })

    it('To test the ng-model of third input tag', function () {
        var findInput = formElement.find('input').eq(2);
        var findNameNodeName = findInput[0].attributes[0].nodeName;
        var findNameNodeValue = findInput[0].attributes[0].nodeValue;
        var findClassNodeName = findInput[0].attributes[1].nodeName;
        var findClassNodeValue = findInput[0].attributes[1].nodeValue;
        var findRequiredNodeName = findInput[0].attributes[2].nodeName;
        var findTypeNodeName = findInput[0].attributes[3].nodeName;
        var findTypeNodeValue = findInput[0].attributes[3].nodeValue;
        var findNgModelNodeName = findInput[0].attributes[5].nodeName;
        var findNgModelNodeValue = findInput[0].attributes[5].nodeValue;
        expect(findNgModelNodeName).toEqual("ng-model");
        expect(findNgModelNodeValue).toEqual("employee.Email");
        expect(findNameNodeName).toEqual("name");
        expect(findNameNodeValue).toEqual("email");
        expect(findClassNodeName).toEqual("class");
        expect(findClassNodeValue).toEqual("form-control");
        expect(findRequiredNodeName).toEqual("required");
        expect(findTypeNodeName).toEqual("type");
        expect(findTypeNodeValue).toEqual("email");
    })

    it('To test the ng-model of fourth input tag', function () {
        var findInput = formElement.find('input').eq(3);
        var findNameNodeName = findInput[0].attributes[0].nodeName;
        var findNameNodeValue = findInput[0].attributes[0].nodeValue;
        var findRequiredNodeName = findInput[0].attributes[1].nodeName;
        var findTypeNodeName = findInput[0].attributes[2].nodeName;
        var findTypeNodeValue = findInput[0].attributes[2].nodeValue;
        var findNgModelNodeName = findInput[0].attributes[3].nodeName;
        var findNgModelNodeValue = findInput[0].attributes[3].nodeValue;
        var findValueNodeName = findInput[0].attributes[4].nodeName;
        var findValueNodeValue = findInput[0].attributes[4].nodeValue;
        expect(findNgModelNodeName).toEqual("ng-model");
        expect(findNgModelNodeValue).toEqual("employee.Gender");
        expect(findNameNodeName).toEqual("name");
        expect(findNameNodeValue).toEqual("Gender");
        expect(findValueNodeName).toEqual("value");
        expect(findValueNodeValue).toEqual("1");
        expect(findRequiredNodeName).toEqual("required");
        expect(findTypeNodeName).toEqual("type");
        expect(findTypeNodeValue).toEqual("radio");
    })
})

