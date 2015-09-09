(function() {
	'use strict';

	var mongoose = require('mongoose'),
		Promise = require('bluebird'),
		UserModel = require('./model'),
		CommentUtil = require('../comment/util'),
		commonFunctions = require('../../common/commonFunctions');

	module.exports = {
		getAll: getAll
	};

	function getAll() {
		return new Promise(function(resolve, reject) {
			UserModel
				.find({})
				.select({
					id: true,
					email: true
				})
				.then(function(result) {
					resolve(commonFunctions.toResponseJson(result));
				})
				.catch(reject);
		});
	}
})();