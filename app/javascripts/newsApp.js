//chirpApp.js

var app = angular.module( 'newsApp' , [] );

app.controller ( 'newsController' , function( $scope ) {
	$scope.posts = [] ;
	$scope.newPost = { created_by : '' , created_location : '' , text : '' , created_time : '' } ; //TODO: picture

	$scope.post = function() {
		$scope.newPost.created_time = Date.now() ;
		$scope.posts.push ( $scope.newPost ) ;
		$scope.newPost = { created_by: '' , created_location : '' , text : '' , created_time : '' } ;

	}

	
});

