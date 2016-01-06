var app=angular.module("MyApp",['ui.bootstrap','ngRoute']);
app.constant('config', {
    baseUrl : 'http://127.0.0.1:61368/index.html'
});
app.config(function($routeProvider)
{
	$routeProvider
	.when('/about',
          {
        templateUrl:'view/about.html',
        controller:'AboutCtrl'
    })
    .when('/projects',
          {
        templateUrl:'view/projects.html',
        controller:'ProjectCtrl'
    })
    .when('/blog',
          {
        templateUrl:'view/blog.html',
        controller:'BlogCtrl'
    })
    .when('/academics',
          {
        templateUrl:'view/academics.html',
        controller:'AcadCtrl'
    })
    .otherwise({
        templateUrl:'view/intro.html',
        controller:'IntroCtrl'
    });
});
app.controller("AppCtrl",function($scope)
{
	$scope.NavItems=[
	{
		class:"fa fa-user",
		text:"About",
		url:"#/about"
	},
	{
		class:"fa fa-code",
		text:"Projects",
		url:"#/projects"
	},
	{
		class:"fa fa-pencil-square",
		text:"Blog",
		url:"#/blog"
	},
	{
		class:"fa fa-graduation-cap",
		text:"Academics",
		url:"#/academics"
	}
	]
});