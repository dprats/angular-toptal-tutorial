'use strict';

/**
 * @ngdoc function
 * @name toptalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the toptalApp
 */
angular.module('toptalApp.controllers',[]).

	//drivers controller
	controller('driversController', function($scope, ergastAPIservice){
		//stuff
		$scope.nameFilter = null;
		$scope.driversList =[];

		$scope.searchFilter = function(driver){
			var keyword = new RegExp($scope.nameFilter, 'i');
			return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
		};

		ergastAPIservice.getDrivers().success(function(res){
			//dig into response to get relevant data
			$scope.driversList = res.MRData.StandingsTable.StandingsLists[0].DriverStandings;
		});


	}).

	//individual driver controller

	controller('driverController', function($scope,$routeParams, ergastAPIservice){

		$scope.id = $routeParams.id;
		$scope.races = [];
		$scope.driver = null;

		ergastAPIservice.getDriverDetails($scope.id).success(function(response){
			$scope.driver = response.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
		});

		ergastAPIservice.getDriverRaces($scope.id).success(function(response){
			$scope.races = response.MRData.RaceTable.Races; 
		});

	});