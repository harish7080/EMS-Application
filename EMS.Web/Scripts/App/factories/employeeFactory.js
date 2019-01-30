
app.factory('employeeFactory', function ($http, $upload, $location) {
  
    return {
        
        getEmployees: function ($location) {
            return $http.get($location)
        },
        getEmployeeById: function ($location, id) {
            return $http.get($location + id)
        },
        deleteEmployee: function ($location, id) {
            return $http.get($location + id)
        },
        getMasterData: function ($location) {
            return $http.get($location)
        },
        createEmployee: function ($location, employee) {
            return $http.post($location, employee)
        },
        updateEmployee: function ($location,employee) {
            return $http.get($location, employee)
        },
        getStateTags: function ($location) {
            return $http.post($location)
        },
        getEmployeeNames: function ($location) {
            return $http.get($location)
        },
        getEmployeesbyPage: function (currentPage, pagePerItems, state, name) {
            return $http.get('/About/EmployeesByPage?currentPage=' + currentPage + '&pagePerItems=' + pagePerItems  + '&states=' + state + '&names=' + name);
        },
        uploadFile: function ($file) {
            var result = $upload.upload({
                url: '/File/Upload',
                method: "POST",
                file: $file
            }).success(function (data) {
                return data;
            }).error(function (data, status) {
                return status;
            });
            return result;
        }

    }
});