
app.controller('EmployeeDetailsController', function ($scope, $rootScope, $http, $upload,$location, employeeFactory) {

    $scope.employee = {};

    $scope.employee.LanguageIds = [];

    $scope.LanguageIds = {};

    //$scope.languageid = {};

    $scope.FilesList = [];
    $scope.fileUploadObj = { Index: "0" };
    $scope.upload = [];
    
    $scope.$on('sendId', function (event, employeeid) {
        if (employeeid == 0) {
            $scope.employee = {};
            $scope.employee.LanguageIds = [];
            $scope.employee.StateId = "";
            $scope.employee.Gender = "";
            $scope.FilesList = [];
            $scope.submitted = false;
            $scope.$broadcast('ExistedFiles', $scope.FilesList);
            //$location = mvcActionLinks.getEmployeeById;
            //employeeFactory.getEmployeeById($location,employeeid).success(getNewEmployee);
        }
        else {
            $scope.employee.EmpId = employeeid;
            $location = mvcActionLinks.getEmployeeById;
            employeeFactory.getEmployeeById($location,employeeid).success(getEmployeeByid);
        }
    });

    
    $location = mvcActionLinks.getMasterData;
    employeeFactory.getMasterData($location).then(function (data) {
        $scope.states = data.data.States;
        $scope.languages = data.data.Languages;
    });


    //to add a new employee
    var getNewEmployee = function (data, status) {
        $scope.employee = data;
        $scope.employee.StateId = "";
        $scope.employee.Gender = "";
        $scope.FilesList = [];
        $scope.submitted = false;
        $scope.$broadcast('ExistedFiles', $scope.FilesList);
    }


    // get list of employees
    var getEmployeeByid = function (data, success) {
        $scope.employee = data;
        $scope.FilesList = data.Files;
        $scope.$broadcast('ExistedFiles', $scope.FilesList);
    };


    // to select or deselect languages
    $scope.toggleSelection = function toggleSelection(languageid) {
        var index = $scope.employee.LanguageIds.indexOf(languageid);
        if (index > -1) { // already selected languages index
            $scope.employee.LanguageIds.splice(index, 1);
        }
            // is newly selected
        else {
            $scope.employee.LanguageIds.push(languageid);
        }
    };


    //If error occurs it will be call back to this errorCallback
    errorCallback = function (data, status, header, config) {
        alert(data.Message);
    };


    // to save employee
    $scope.save = function (employee) {
        if (employee.LanguageIds.length == 0)
        {
            return false;
        }
        else
        {
            var empdata = employee;

            LanguageIds = [];

            empdata.LanguageIds = $scope.employee.LanguageIds.slice();

            empdata.Files = $scope.FilesList;

            $scope.employee = empdata;

            $location = mvcActionLinks.AddEmployee;

            employeeFactory.createEmployee($location, $scope.employee).then(function (data) {
                if (data.data.Success == true) {
                    alert(messages.saveSuccessMessage);
                }
                $rootScope.$broadcast('updateEmployeeGridView', { dataaddupdate: data });
            })

            //}).error(errorCallback);
        }
    }

    //to uploading a files.
    $scope.$on('UploadedFiles', function (event, data) {
        $scope.FilesList = data;
    });

});