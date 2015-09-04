(function() {
	'use strict';

	var mongoose = require('mongoose'),
		Promise = require('bluebird'),
		UserModel = require('./model'),
		CommentUtil = require('../comment/util'),
		commonFunctions = require('../../common/commonFunctions');

	module.exports = {
		getAll: function() {
			return new Promise(function(resolve, reject) {
				UserModel
					.find({})
					.select({
						_id: true,
						name: true,
						role: true
					})
					.then(function(result) {
						resolve(commonFunctions.toResponseJson(result));
					})
					.catch(reject);
			});
		}
	};
})();