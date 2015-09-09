(function() {
	'use strict';

	var Promise = require('bluebird'),
		CommentModel = require('./model'),
		commonFunctions = require('../../common/commonFunctions'),
		ObjectId = require('mongoose').Schema.ObjectId,
		postId;

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
					parent: parent || null
				})
				.then(function(result) {
					return generateCommentTree(postId, result);
				})
				.then(function(result) {
					resolve(parent ? result : commonFunctions.toResponseJson(result));
				})
				.catch(reject);
		});
	}

	function getCountByPost(postId) {
		return new Promise(function(resolve, reject) {
			CommentModel.count({
				post: postId,
				parent: null
			}, function(err, count) {
				if (err) reject(err);
				resolve(count);
			});
		});
	}

	function create(comment) {
		return new Promise(function(resolve, reject) {
			new CommentModel()
				.save(comment, function(err, result) {
					if(err) {
						console.error('error cought at util');
						console.trace(err.stack);
						reject(err);
					}
					resolve(result);
				});
		});
	}

	function generateCommentTree(postId, result) {
		if(Array.isArray(result)) {
			var resultArray = [];
			return Promise.each(result, function(comment) {
				return getAll(comment.post, comment.id)
					.then(function(result) {
						comment = comment.toObject();
						comment.children = result;
						delete comment.post;
						delete comment.parent;
						resultArray.push(comment);
					})
					.catch(function(err) {
						console.error('error', err);
					});
			}).thenReturn(resultArray);
		}
	}
})();