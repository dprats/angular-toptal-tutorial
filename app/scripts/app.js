'use strict';

/**
 * @ngdoc overview
 * @name toptalApp
 * @description
 * # toptalApp
 *
 * Main module of the application.
 */
angular.module('toptalApp', [
  'toptalApp.controllers',
    'toptalApp.services',
    'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
// config(['$routeProvider', function($routeProvider){

  // $routeProvider.
  //   when('/drivers',{
  //     templateUrl: 'partials/drivers.html',
  //     controller: 'driversController'
  //   }).
  //   when('/drivers/:id',{
  //     templateUrl: 'partials/driver.html',
  //     controller: 'driversController'
  //   }).
  //   otherwise({
  //     redirect: '/drivers'
  //   });

 $routeProvider.
  when('/', {templateUrl: 'partials/drivers.html', controller: 'driversController'}).
  when('/drivers/:id', {templateUrl: 'partials/driver.html', controller: 'driverController'}).
  otherwise({redirectTo: '/drivers'});

}]);

