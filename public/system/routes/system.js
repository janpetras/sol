'use strict';

//Setting up route
angular.module('mean.system').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// For unmatched routes:
		$urlRouterProvider.otherwise('/');

			// states for my app
			$stateProvider              
				.state('home', {
					url: '/',
					templateUrl: 'public/system/views/index.html'
				})
				.state('auth', {
					templateUrl: 'public/auth/views/index.html'
				})
				.state('about', {
					url: '/about',
					templateUrl: 'public/system/views/about.html'
				});
			}
	])
	.config(['$locationProvider',
		function($locationProvider) {
			$locationProvider.hashPrefix('!');
		}
	]);
