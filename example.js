#!/usr/bin/env node

var 
	mimovie = require("./"),
	util = require("util");

mimovie("./test/movie.m4v", function(err, res) {
	if (err) {
		console.log(err);
	}else{
		console.log(util.inspect(res, null, null, true));
	}
});
