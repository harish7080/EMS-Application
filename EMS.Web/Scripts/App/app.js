
var app = angular.module('app', ['ui.router', 'angularFileUpload', 'ngDialog', 'ui.bootstrap', 'ngTagsInput', 'isteven-multi-select']);

app.controller("MainController", function ($scope) { });

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/Employee');

    $stateProvider

     .state('Employee', {

         url: '/Employee',
         views: {
             '': {
                 templateUrl: '/Employee/EmployeeList',
             },

             'edit@': {
                 templateUrl: '/Employee/EmployeeDetails'
             },
         }
     })

    .state('About', {

        url: '/About',
        views:{
            'index@': {
                templateUrl: '/About/Index'
            }
        }

    })

     .state('Paging', {

         url: '/Paging',
         views: {
             'paging@': {
                 templateUrl: '/About/EmployeePaging'
             }
         }
     })

});

