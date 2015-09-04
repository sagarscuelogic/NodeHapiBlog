(function() {
	'use strict';

	var Promise = require('bluebird'),
		CommentModel = require('./model'),
		commonFunctions = require('../../common/commonFunctions');

	module.exports = {
		getAll: getAll,
		getCountByPost: getCountByPost,
		create: create
	};

	function getAll(postId, parent) {
		return new Promise(function(resolve, reject) {
			CommentModel
				.find({
					post: postId,
					parent: parent || 0
				})
				.then(function(result) {
					return generateCommentTree(postId, result);
				})
				.then(function() {
					resolve(commonFunctions.toResponseJson(result));
				})
				.catch(reject);
		});
	}

	function getCountByPost(postId) {
		return new Promise(function(resolve, reject) {
			CommentModel.count({
				post: postId,
				parent: 0
			}, function(err, count) {
				if (err) reject(err);
				resolve(count);
			});
		});
	}

	function create(comment) {
		return new Promise(function(resolve, reject) {
			new CommentModel(comment)
				.save()
				.then(resolve)
				.onReject(reject);
		});
	}

	function generateCommentTree(postId, result) {
		if(Array.isArray(result)) {
			var resultArray = [];
			return Promise.each(result, function(comment) {
				return getAll(postId, comment.id)
					.then(function(result) {
						comment = post.toObject();
						comment.children = result;
						resultArray.push(comment);
					})
					.catch(function(err) {
						console.error('error', err);
					});
			}).thenReturn(resultArray);
		}
	}
})();