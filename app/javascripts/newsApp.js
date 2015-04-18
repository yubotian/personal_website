//chirpApp.js

var app = angular.module( 'newsApp' , [] );

app.controller ( 'newsController' , function( $scope ) {
	$scope.posts = [] ;
	$scope.newPost = { created_by : '' , text : '' , craeted_at : '' } ; //TODO: picture

	$scope.post = function() {
		$scope.newPost.created_at = Date.now() ;
		$scope.posts.push ( $scope.newPost ) ;
		$scope.newPost = { created_by : '' , text : '' , craeted_at : '' } ;

	}

	
});

