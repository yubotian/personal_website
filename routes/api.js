//api.js


//pulls in express module
var express = require('express');
var router = express.Router();

router.use(function( req , res , next ){

	if (req.method === "GET"){
		return next();
	}

	if(!req.isAuthenticated()) {
		// user not authed, redirect to login page
		return res.redirect('/#login');
	}

	//user authed continue to next middleware or handler
	return next();
});

/* GET home page. */
router.route('/posts')
		
		//returns all posts
		.get( function( req , res ) {
			//temp solution
			res.send({message: 'TODO: return all posts'});

		})

		.post(function( req , res ) {
			//temp solution
			res.send({message: 'TODO: create a new post'});
		});

router.route('/posts/:id')
		//:id wil parse the path and pass the id as param

		//returns a paticular post
		.get(function( req , res ){
			res.send({message: 'TODO: return post with ID ' + req.params.id});
		})

		//update existing post
		.put( function( req , res){
			res.send({message: 'TODO: modify post with ID ' + req.params.id});
		})

		//delete existing post
		.delete( function( req , res){
			res.send({message: 'TODO: delete post with ID ' + req.params.id});
		});



//export a router registered with express to be used by app.js
module.exports = router;