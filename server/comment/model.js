(function() {
	'use strict';

	var Promise = require('bluebird'),
		mongoose = require('mongoose'),
		Schema = mongoose.Schema;

	var CommentSchema = new Schema({
		post: {
			type: Number,
			required: true
		},
		parent: {
			type: Number,
			default: 0
		},
		body: String,
		author: {
			type: Number,
			required: true
		},
		date: {
			type: Date,
			default: Date.now
		}
	});

	var Comment = mongoose.model('Comment', CommentSchema, 'comments');

	module.exports = Comment;
})();