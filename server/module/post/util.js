(function() {
	'use strict';

	var mongoose = require('mongoose'),
		Promise = require('bluebird'),
		PostModel = require('./model'),
		CommentUtil = require('../comment/util'),
		commonFunctions = require('../../common/commonFunctions');

	module.exports = {
		getAll: getAll,
		getOne: getOne,
		add: add,
		edit: edit,
		delete: deleteOne
	};

	function getAll(limit) {
		return new Promise(function(resolve, reject) {
			PostModel
				.find({})
				.select({
					title: true,
					author: true,
					date: true
				})
				.limit(10)
				.then(function(result) {
					addCommentCount(result)
						.then(function(response) {
							resolve(commonFunctions.toResponseJson(response));
						});
				})
				.catch(function(error) {
					reject(error);
				});
		});
	}

	function addCommentCount(result) {
		if (Array.isArray(result)) {
			var resultArray = [];
			return Promise.each(result, function(post) {
				return CommentUtil
					.getCountByPost(post.id)
					.then(function(count) {
						post = post.toObject();
						post.comments = count;
						resultArray.push(post);
					})
					.catch(function(err) {
						console.error('error', err);
					});
			}).thenReturn(resultArray);
		}
	}

	function getOne(id) {
		return new Promise(function(resolve, reject) {
			PostModel
				.findById(id)
				.then(resolve)
				.catch(reject);
		});
	}

	function add(post) {
		return new Promise(function(resolve, reject) {
			var newPost = new PostModel();
			for (var key in post) newPost[key] = post[key];
			newPost
				.save()
				.then(resolve)
				.onReject(reject);
		});
	}

	function edit(id, post) {
		return new Promise(function(resolve, reject) {
			PostModel
				.update(id, post, function(err, result) {
					if (err) reject(err);
					resolve(result);
				});
		});
	}

	function deleteOne(id) {
		return new Promise(function(resolve, reject) {
			PostModel
				.remove({
					_id: id
				})
				.then(resolve)
				.catch(reject);
		});
	}
})();