
describe('Test Cases For File Upload Controller', function () {
    var rootScope,
        uploadfactory,
        httpBackend,
        employeeFactoryMock,
        scope;

    var errorStatus = true;
    var mockSaveEmployee = { "EmpId": 0, "Name": "a", "Email": "b@gmail.com", "LanguageIds": [1, 2] };
    var singleFile = [{ "lastModifiedDate": "Mon Mar 23 2015 14:58:36 GMT+0530 (India Standard Time)", "name": "image1.jpg", "size": 8647, "type": "image/jpeg" }]

    var filedata = [{ "lastModifiedDate": "Mon Mar 23 2015 14:58:36 GMT+0530 (India Standard Time)", "name": "image1.jpg", "size": 8647, "type": "image/jpeg" },
        { "lastModifiedDate": "Mon Mar 23 2015 14:58:36 GMT+0530 (India Standard Time)", "name": "image2.jpg", "size": 8647, "type": "image/jpeg" }];


    var singleFileResult = [{
        "FileId": 0x00000000,
        "FileIndex": 0x00000000,
        "FileName": "image1.jpg",
        "FilePath": "EMSAttachments/20150406015522278_image1.jpg",
        "FilePathURL": "http://cemsportal.com/EMSService/EMSAttachments/20150406015522278_image1.jpg",
        "FileUId": "20150406015522278",
        "IsActive": true
    }]

    var mockfiledata = {
        "FileId": 0x00000000,
        "FileIndex": 0x00000000,
        "FileName": "image1.jpg",
        "FilePath": "EMSAttachments/20150406015522278_image1.jpg",
        "FilePathURL": "http://cemsportal.com/EMSService/EMSAttachments/20150406015522278_image1.jpg",
        "FileUId": "20150406015522278",
        "IsActive": true
    }

    var resMock = [{
        "FileId": 0x00000000,
        "FileIndex": 0x00000000,
        "FileName": "image1.jpg",
        "FilePath": "EMSAttachments/20150406015522278_image1.jpg",
        "FilePathURL": "http://cemsportal.com/EMSService/EMSAttachments/20150406015522278_image1.jpg",
        "FileUId": "20150406015522278",
        "IsActive": true
    },
    {
        "FileId": 0x00000000,
        "FileIndex": 0x00000000,
        "FileName": "image1.jpg",
        "FilePath": "EMSAttachments/20150406015522278_image1.jpg",
        "FilePathURL": "http://cemsportal.com/EMSService/EMSAttachments/20150406015522278_image1.jpg",
        "FileUId": "20150406015522278",
        "IsActive": true
    }];

    beforeEach(function () {
        module('app');
    });

    beforeEach(function () {
        employeeFactoryMock = {


            uploadFile: function () {

            },
            window: function () {

            }

        };
    });

    beforeEach(inject(function ($rootScope, $httpBackend, $rootScope, $timeout, $upload, $controller, $q) {
        uploadfactory = $upload;
        q = $q;
        scope = $rootScope.$new();
        httpBackend = $httpBackend;
        spyOn(employeeFactoryMock, 'uploadFile').and.callFake(function (input) {
            deferred = q.defer();
            if (errorStatus)
            {
                deferred.resolve({data:mockfiledata})
            }
            else
            {
                deferred.reject("error");
                return deferred.promise;
            }

            deferred.resolve({ data: mockfiledata });
            return deferred.promise;
        });

        spyOn(window, 'open').and.callFake(function (input) {
            deferred = q.defer();
            deferred.resolve({ data: true });
            return deferred.promise;
        });
        var controller = $controller('fileUploadController',
        {
           $scope: scope,
           $location: location,
           employeeFactory: employeeFactoryMock,
           $upload: uploadfactory
        });

    }));

    var fileList = [];

    describe('should test upload file', function () {

        it('should call employeeFactory', function () {
            employeeFactoryMock.uploadFile.calls.reset();
            scope.onFileSelect(filedata);
            expect(employeeFactoryMock.uploadFile).toHaveBeenCalled();
        });

        it('should expected single file to be uploaded', function () {
            scope.onFileSelect(singleFile);
            scope.$root.$digest();
            expect(scope.FilesList).toEqual(singleFileResult);
        });

        it('should expected multiple files to be uploaded', function () {
            scope.onFileSelect(filedata);
            scope.$root.$digest();
            expect(scope.FilesList).toEqual(resMock);
        });

        it('should length of the file to be equal', function () {
            scope.onFileSelect(filedata);
            scope.$root.$digest();
            expect(scope.selectedFiles.length).toEqual(filedata.length);
        });

        it('should open attachment', function () {
            expect(window.open.calls.count()).toBe(0);
            scope.OpenAttachedFile("http://cemsportal.com/EMSService/EMSAttachments/20150406042619460_image1.jpg");
            scope.$root.$digest();
            expect(window.open.calls.count()).toBe(1);

        })

        it("file upload when error", function () {
            errorStatus = false;
            scope.onFileSelect(filedata);
            scope.$root.$digest();
            expect(scope.fileErrors).toEqual(true);
        });

    });
});