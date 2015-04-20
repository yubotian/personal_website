//chirpApp.js

var app = angular.module( 'myWebApp' , ['ngRoute'] );

app.config(function($routeProvider){
  $routeProvider
    //the timeline display
    .when('/', {
      templateUrl: '../views/main.html',
      controller: 'newsController'
    })
    //the login display
    .when('/login', {
      templateUrl: '../views/login.html',
      controller: 'authController'
    })
    //the signup display
    .when('/register', {
      templateUrl: '../views/register.html',
      controller: 'authController'
    })
    .when('/resume', {
      templateUrl: '../views/resume.html',
      controller: 'resumeController'
    });
});



app.controller ( 'newsController' , function( $scope ) {
	$scope.posts = [] ;
	$scope.newPost = { created_by : '' , created_location : '' , text : '' , created_time : '' } ; //TODO: picture

	$scope.post = function() {
		$scope.newPost.created_time = Date.now() ;
		$scope.posts.push ( $scope.newPost ) ;
		$scope.newPost = { created_by: '' , created_location : '' , text : '' , created_time : '' } ;

	}

	
});


app.controller('authController', function($scope){
  $scope.user = {username: '', password: ''};
  $scope.error_message = '';

  $scope.login = function(){
    //placeholder until authentication is implemented
    $scope.error_message = 'login request for ' + $scope.user.username;
  };

  $scope.register = function(){
    //placeholder until authentication is implemented
    $scope.error_message = 'registration request for ' + $scope.user.username;
  };
});

