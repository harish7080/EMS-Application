
app.controller('displyDynamicGrid', function displyDynamicGrid($scope, $http, ngDialog) {

    $scope.addTable = true;
    $scope.AddedColumns = [];


    $scope.rowAdding = {};
    $scope.hideTable = true;
    $scope.HideNewRow = true;
    $scope.hideDropDown = true;
    $scope.textBoxNumber = true;
    $scope.textBoxString = true;
    $scope.hideDate = true;
    $scope.areAllSelected = false;
    // $scope.AddedColumns = [];
    $scope.addedRow = [];


    $scope.openConfirmWithPreCloseCallbackOnScope = function () {
        ngDialog.openConfirm({
            template: 'modalDialogId',
            className: 'ngdialog-theme-default',
            preCloseCallback: 'preCloseCallbackOnScope',
            scope: $scope
        }).then(function (value) {
            $scope.addColumnValues = value;
            $scope.AddedColumns.push(value);
            $scope.addTable = false;
            console.log('Modal promise resolved. Value: ', value);
        }, function (reason) {
            console.log('Modal promise rejected. Reason: ', reason);
        });
    };


    $scope.checked = [];
    $scope.Toggle = function (coffee) {
        var index = $scope.checked.indexOf(coffee);
        if (index === -1) {
            $scope.checked.push(coffee);
        }
    };


    $scope.removeSelectedColumns = function () {
        angular.forEach($scope.checked, function (val) {
            var index1 = $scope.AddedColumns.indexOf(val);
            $scope.AddedColumns.splice(index1, 1);
           
        });
        $scope.checked = [];
    };



    $scope.removeAddedRow = function () {
        angular.forEach($scope.checked, function (value, index) {
            var index1 = $scope.addedRow.indexOf(value);
            $scope.addedRow.splice(index1, 1);
        });
        $scope.checked = [];
    };


    $scope.AddNewRow = function (rowAdding) {
        $scope.returnDate = false;
        $scope.HideNewRow = false;
        var AddedColumns = $scope.AddedColumns;
        angular.forEach(AddedColumns, function (value, key) {
            if (AddedColumns[key].Selected == "Number") {
                $scope.textBoxNumber = false;

            }
            if (AddedColumns[key].Selected == "String") {
                $scope.textBoxString = false;

            }
            if (AddedColumns[key].Selected == "Boolean") {
                $scope.hideDropDown = false;
            }
            if (AddedColumns[key].Selected == "Date") {
                $scope.hideDate = false;
                $scope.Date = new Date();
                $scope.rowAdding.Date = $scope.Date;
                $scope.returnDate = true;

            }
        });
        if ($scope.returnDate) {
            $scope.addedRow.push($scope.rowAdding);
            $scope.Date = new Date();
            $scope.rowAdding = {};
            $scope.rowAdding.Date = new Date();
        }
    }


});










