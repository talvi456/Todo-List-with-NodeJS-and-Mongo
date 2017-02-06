var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');

/* GET todos */
router.get('/', function(req, res, next) {
	Todo.find(function(err,todos){
		if (err) return next(err);
		res.json(todos);
	});
  //res.send('respond with a resource');
});

/*POST todos*/

router.post('/', function(req,res,next){
	Todo.create(req.body, function(err,post){
		if(err) return next(err);
		res.json(post)
	});
});

module.exports = router;
