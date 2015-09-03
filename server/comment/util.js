(function() {
	'use strict';

	var Promise = require('bluebird'),
		CommentModel = require('./model');

	module.exports = {
		getAll: function(postId) {
			return new Promise(function(resolve, reject) {
				CommentModel
					.find({
						post: postId,
						parent: 0
					})
					.then(function(result) {
						return generateCommentTree();
					})
					.then(function() {
						resolve(toResponseJson(result));
					})
					.catch(reject);
			});
		},
		getCountByPost: function(postId) {
			return new Promise(function(resolve, reject) {
				CommentModel.count({
					post: postId,
					parent: 0
				}, function(err, count) {
					if (err) reject(err);
					resolve(count);
				});
			});
		},
		create: function(comment) {
			return new Promise(function(resolve, reject) {
				new CommentModel(comment).save().then(resolve).onReject(reject);
			});
		}
	};

	function toResponseJson(result) {
		return {
			success: true,
			count: result.length,
			result: result
		};
	}
})();