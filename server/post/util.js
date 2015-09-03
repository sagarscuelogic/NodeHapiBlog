(function() {
	'use strict';

	var mongoose = require('mongoose'),
		Promise = require('bluebird'),
		PostModel = require('./model'),
		CommentUtil = require('../comment/util');

	module.exports = {
		getAll: function() {
			return new Promise(function(resolve, reject) {
				PostModel
					.find({})
					.select({
						_id: true,
						title: true,
						author: true,
						date: true
					})
					.limit(10)
					.then(function(result) {
						return addCommentCount(result);
					})
					.then(function(result) {
						// console.log(result);
						resolve(toResponseJson(result));
					})
					.catch(reject);
			});
		},
		removeComments: function(post) {

		}
	};

	function toResponseJson(result) {
		return {
			success: true,
			// count: result.length,
			count: result
		};
	}

	function addCommentCount(result) {
		if(Array.isArray(result)) {
			var resultArray = [];
			return Promise.each(result, function(post) {
				CommentUtil
					.getCountByPost(mongoose.Schema.ObjectId(post._id))
					.then(function(count) {
						post.comments = count;
						resultArray.push(post);
					})
					.then(function() {
						console.log(resultArray);
					})
					.catch(function(err) {
						console.error('error', err);
					});
			}).thenReturn(resultArray);
		}
	}
})();