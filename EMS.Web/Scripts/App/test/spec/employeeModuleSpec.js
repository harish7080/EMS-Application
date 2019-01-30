
describe("Test Cases for Module", function () {

    var module, uibootstrap, ngtagsinput, istevenmultiselect;
    var module, deps, dep;

    var hasModule = function (e) {
        return deps.indexOf(e) >= 0;
    };
    var hasFileUpload = function (a) {
        return dep.indexOf(a) >= 0;
    };
    var hasUibootstrap = function (e) {
        return uibootstrap.indexOf(e) >= 0;
    }
    var hasNgtagsinput = function (e) {
        return ngtagsinput.indexOf(e) >= 0;
    }
    var hasIstevenmultiselect = function (e) {
        return istevenmultiselect.indexOf(e) >= 0;
    }

    beforeEach(function () {
        module = angular.module('app');
        deps = module.value('app').requires;
        dep = module.value('angularFileUpload').requires;
        uibootstrap = module.value('ui.bootstrap').requires;
        ngtagsinput = module.value('ngTagsInput').requires;
        istevenmultiselect = module.value('isteven-multi-select').requires;
    });

    it("should be registered", function () {
        expect(module).not.toEqual(null);
    });
    it("should have ui router as a dependency", function () {
        expect(hasModule('ui.router')).toEqual(true);
    });
    it("should have angular file upload as a dependency", function () {
        expect(hasFileUpload('angularFileUpload')).toEqual(true);
    });
    it("should have ui.bootstrap as a dependency", function () {
        expect(hasUibootstrap('ui.bootstrap')).toEqual(true);
    });
    it("should have ngTagsInput as a dependency", function () {
        expect(hasNgtagsinput('ngTagsInput')).toEqual(true);
    });
    it("should have isteven-multi-select as a dependency", function () {
        expect(hasIstevenmultiselect('isteven-multi-select')).toEqual(true);
    });

});
