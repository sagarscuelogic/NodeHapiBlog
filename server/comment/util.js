(function() {
	'use strict';

	var Promise = require('bluebird'),
		PostModel = require('./model'),
		_ = require('lodash');

	module.exports = {
		getAll: function() {
			console.log('I am called');
			return new Promise(function(resolve, reject) {
				PostModel
					.find({})
					.select({
						_id: false,
						title: true,
						author: true,
						date: true
					})
					.then(function(result) {
						resolve(toResponseJson(result));
					})
					.catch(reject);
			});
		}
	};

	function toResponseJson(result) {
		return {
			success: true,
			count: _.size(result),
			result: addCommentCount(result)
		};
	};

	function addCommentCount(result) {

	}
})();