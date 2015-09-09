(function() {
	'use strict';

	var Promise = require('bluebird'),
		mongoose = require('mongoose'),
		Schema = mongoose.Schema;

	var CommentSchema = new Schema({
		post: {
			type: Schema.Types.ObjectId,
			ref: "post",
			required: true
		},
		parent: {
			type: Schema.Types.ObjectId,
			ref: 'comments',
			default: null
		},
		body: {
			type: String,
			required: true
		},
		author: {
			type: Schema.Types.ObjectId,
			ref: 'users',
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