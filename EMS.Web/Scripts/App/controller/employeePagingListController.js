
app.controller('EmployeePagingListController', function ($scope, $location, employeeFactory, $http) {
 
    $scope.maxSize = 5;
    $scope.PerPageItems = 10;
    $scope.currentPage = 1;
    $scope.filterState = [];
    $scope.filterName = [];
    
    // Page changed 
    $scope.pageChanged = function () {
        $scope.employees = [];
        employeeFactory.getEmployeesbyPage($scope.currentPage, $scope.PerPageItems, $scope.filterState, $scope.filterName).then(function (response) {
        $scope.employees = response.data.List;
        });
    };

    // Initially get the employee list
    $scope.getEmployees = function () {
        employeeFactory.getEmployeesbyPage($scope.currentPage, $scope.PerPageItems, $scope.filterState, $scope.filterName).then(function (response) {
            $scope.employees = response.data.List;
            $scope.filteredItems = response.data.count;
        })
    };
    $scope.getEmployees();

    // Getting employee states
    $scope.loadTags = function (query) {
        $location = mvcActionLinks.getStateTags;
        return employeeFactory.getStateTags($location + query);
    };

    $scope.getEmployeeNames = function () {
        // Getting employee names
        $location = mvcActionLinks.getEmployeeNames;
        employeeFactory.getEmployeeNames($location).then(function (data) {
            $scope.employeeNames = data.data;
        });
    }
    $scope.getEmployeeNames();

    // Search method
    $scope.search = function (tagStates, outputNames) {
        $scope.filterState = [];
        $scope.filterName = [];
        var states = tagStates;
        var name = outputNames;
        angular.forEach(states, function (value, key) {
            var state = value;
            $scope.filterState.push(state.State);
        });
        angular.forEach(name, function (value, key) {
            var name = value;
            $scope.filterName.push(name.Name);
        });
        employeeFactory.getEmployeesbyPage($scope.currentPage, $scope.PerPageItems, $scope.filterState, $scope.filterName).then(function (response) {
            $scope.employees = response.data.List;
            $scope.filteredItems = response.data.count;
            $scope.totalItems = response.data.count;  
            $scope.currentPage = 1;
            $scope.setPage = function (pageNo) {
                $scope.currentPage = pageNo;
            };
            $scope.maxSize = 5;
            $scope.bigTotalItems = 175;
            $scope.bigCurrentPage = 1;
        });
    }

});

