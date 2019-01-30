
app.controller('fileUploadController', function ($scope, $http, $location, $timeout, $upload, employeeFactory) {
    $scope.fileUploadObj = { Index: "0" };
    $scope.FilesList = [];
    $scope.upload = [];
    $scope.fileErrors = false;
    $scope.onFileSelect = function ($files) {
        $scope.selectedFiles = $files;
        for (var i = 0; i < $files.length; i++) {
            var $file = $files[i];
            (function (index) {
                $scope.upload[index] =
                employeeFactory.uploadFile($file).then(function (data) {
                    $scope.FilesList.push(data.data);
                    $scope.fileErrors = false;
                },function(error){
                    $scope.fileErrors=true;
                
                });
            })(i);
        }
    }
    $scope.OpenAttachedFile = function (path) {
        AttachmentWindowPopUp(path);
    }

    //TO show Attachments in WindowsPopUp
    var AttachmentWindowPopUp = function (page) {
        window.open(page, "_blank", "menubar=0,resizable=1,width=800,height=700,scrollbars=1");
        return false;
    }


    $scope.$parent.$broadcast('UploadedFiles', $scope.FilesList)

    $scope.$on('ExistedFiles', function (event, data) {
        $scope.FilesList = data;
    });
});




//app.controller('fileUploadController', function ($scope, $http, $location, $timeout, $upload,employeeFactory) {
//    $scope.fileUploadObj = { Index: "0" };
//    $scope.FilesList = [];
//    $scope.upload = [];
//    $scope.onFileSelect = function ($files) {
//        $scope.selectedFiles = $files;

//        for (var i = 0; i < $files.length; i++) {
//            var $file = $files[i];
//            (function (index) {
//                $scope.upload[index] = $upload.upload({
//                    //url: CommonWebapi.uploadFiles, // webapi url
//                    url: '/File/Upload', // webapi url
//                    method: "POST",
//                    file: $file
//                }).progress(function (evt) {


//                }).success(function (data, status, headers, config) {
//                    if (data.Success == true && (data.Exceptions == null || data.Exceptions.length == 0)) {
//                        $scope.FilesList.push(data);
//                    }
//                    else {
//                        AlertFunction.ShowAlertMessage(ErrorEmployeeMessagesConstants.ErrorFileUploading)
//                    }
//                }).error(function (data, status, headers, config) {
//                    //console.log(data);
//                });
//            })(i);
//        }

//    }

//    $scope.OpenAttachedFile = function (path) {
//        AttachmentWindowPopUp(path);
//    }

//    $scope.$parent.$broadcast('UploadedFiles', $scope.FilesList)

//    $scope.$on('ExistedFiles', function (event, data) {
//        $scope.FilesList = data;
//    });

//});