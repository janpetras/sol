'use strict';

angular.module('mean.system', ['mean.controllers.login','mean-factory-interceptor'])
	.run(function($rootScope) {
    	$rootScope.lefty = function () {
			$('body').toggleClass('sml-open');
		};
    	$rootScope.leftySleep = function () {
			$('body').removeClass('sml-open');
		};
});

