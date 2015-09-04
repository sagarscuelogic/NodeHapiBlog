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
			type: Number,
			default: 0
		},
		body: {
			type: String,
			required: true
		},
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