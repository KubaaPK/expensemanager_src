(function () {
	'use strict';
	require('angular');
	require('angular-ui-router');


	require('./app.routes');
	require('./shared/getdataService');
	require('./components/index/indexController');


	var app = angular.module('kona', [
		'ui.router',
		'app.routes',
		'getdataFactory',
		'app.index'
	]);
})();





