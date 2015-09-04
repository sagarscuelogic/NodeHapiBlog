(function() {
	'use strict';

	var Promise = require('bluebird'),
		mongoose = require('mongoose'),
		Schema = mongoose.Schema;

	var UserSchema = new Schema({
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		role: {
			type: String,
			required: true
		},
		date: {
			type: Date,
			default: Date.now
		}
	});

	var User = mongoose.model('User', UserSchema, 'users');

	module.exports = User;
})();