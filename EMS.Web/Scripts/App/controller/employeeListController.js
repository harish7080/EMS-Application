
app.controller('EmployeeListController', function ($http, $scope, $rootScope, $location, employeeFactory) {

    var employeeid;

    // employee filter 
    $scope.search = function (data) {
        if ((data.search == "" && data.select == "--select--") || (data.search != "" && data.select == "--select--")) {
            $scope.selects = false;
            $scope.searchs = data.search;
        }
        if (data.search == "" && data.select == "") {
            $scope.selects = false;
            $scope.searchs = data.search;
        } else {
            if ((data.select == "Equal" || data.select == "Like") && data.search != "") {
                if (data.select == "Like") {
                    $scope.searchs = data.search;
                    $scope.selects = false;
                }
                else {
                    $scope.searchs = data.search;
                    $scope.selects = true;
                }
            }
            else {
                return false;
            }
        }
    }


    //// To get all the employees
    //var getAllEmployees = function (data, success) {
    //    $scope.employees = data;
    //    employeeid = $scope.employees[0].EmpId;
    //    $rootScope.$broadcast('sendId', employeeid);
    //}
    //employeeFactory.getEmployees().success(getAllEmployees);

    // to get all the employees, used in unit test cases
    $scope.Inity = function () {
        $location = mvcActionLinks.getEmployees;
        employeeFactory.getEmployees($location).then(function (data) {
        $scope.employees = data.data;
        $scope.dropdownsearch = [{ 'Id': 1, 'Name': 'Like' }, { 'Id': 2, 'Name': 'Equal' }]
        $rootScope.$broadcast('sendId', data.data[0].EmpId);
        });
    }
    $scope.Inity();

    // Clear add button
    $scope.toggleAdd = function () {
        employeeid = 0;
        $rootScope.$broadcast('sendId', employeeid);
    }

    // Edit button 
    $scope.toggleEdit = function () {
        employeeid = this.employee.EmpId;
        $rootScope.$broadcast('sendId', employeeid);
    }

    //delete button 
    $scope.toggleDelete = function (id) {
        var confirmanswer = window.confirm('Do you Want Delete?');
        if (confirmanswer) {
            $location = mvcActionLinks.DeleteEmployee;
            employeeFactory.deleteEmployee($location, id).then(function (data) {

                if (data.data.Success == true)
                {
                    alert(messages.deleteSuccessMessage);
                    $scope.Inity();
                    //$location = mvcActionLinks.getEmployees;
                    //employeeFactory.getEmployees($location).success(getAllEmployees).error(errorCallback);
                }

            });
        }
    }

    //error callback
    errorCallback = function (data, status, header, config) {
        alert(data.Exceptions);
    };

    $scope.$on('updateEmployeeGridView', function (event, args) {
        $scope.Inity();
        //$location = mvcactionlinks.getemployees;
        //employeefactory.getemployees($location).success(getallemployees);
    });

});