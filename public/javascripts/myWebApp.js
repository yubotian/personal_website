var app = angular.module( 'myWebApp' , ['ngRoute', 'ngResource'] ).run(function($rootScope) {
  $rootScope.authenticated = false;
  $rootScope.current_user = '';
  
  $rootScope.signout = function(){
      $rootScope.authenticated = false;
      $rootScope.current_user = '';
      $http.get('auth/signout');
  };
});


app.config(function($routeProvider){
  $routeProvider
    //the timeline display
    .when('/', {
      templateUrl: './views/main.html',
      controller: 'newsController'
    })
    //the login display
    .when('/login', {
      templateUrl: '../views/login.html',
      controller: 'authController'
    })
    //the signup display
    .when('/signup', {
      templateUrl: './views/register.html',
      controller: 'authController'
    })
    .when('/resume', {
      templateUrl: '../views/resume.html',
      controller: 'resumeController'
    });
});


app.factory('postService', function($resource){
  return $resource('/api/posts/:id');
});

app.controller ( 'newsController' , function( $scope, postService ) {
	$scope.posts = postService.query();
	$scope.newPost = { created_by : '' , created_location : '' , text : '' , created_time : '' } ; //TODO: picture


	$scope.post = function() {
    $scope.newPost.created_by = "Yubo";
    //alternatively: 
    //$scope.newPost.created_by = $rootScope.current_user;
    $scope.newPost.created_time = Date.now(); 

    postService.save($scope.newPost, function(){
      $scope.posts = postService.query();
      $scope.newPost = { created_by: '' , created_location : '' , text : '' , created_time : '' } ;
    });
    
	};
});


app.controller('authController', function($scope , $rootScope, $http , $location){
  $scope.user = {username: '', password: ''};
  $scope.error_message = '';

  $scope.login = function(){
    $http.post('/auth/login', $scope.user).success(function(data){
      if(data.state == 'success'){
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user.username;
        //redirect user
        $location.path('/');
      }
      else{
        $scope.error_message = data.message;
      }
    });
  };

  $scope.register = function(){
    $http.post('/auth/signup', $scope.user).success(function(data){
      if(data.state == 'success'){
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user.username;
        $location.path('/');
      }
      else{
        $scope.error_message = data.message;
      }
    });
  };
});

