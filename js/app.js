var app=angular.module("MyApp",['ui.bootstrap']);
app.controller("AppCtrl",function($scope)
{
	$scope.NavItems=[
	{
		text:"About",
		url:"#/about"
	},
	{
		text:"Projects",
		url:"#/projects"
	},
	{
		text:"Blog",
		url:"#/blog"
	},
	{
		text:"Academics",
		url:"#/academics"
	}
	]
});