angular.module('userApp', [
	'ngAnimate',
	'app.routes',
	'authService',
	'userService',
	'mainCtrl',
	'userCtrl'
	])
.config(function($httpProvider)	{	
	//attach our auth interceptor to the http requests
	$httpProvider.interceptors.push('AuthInterceptor');
});