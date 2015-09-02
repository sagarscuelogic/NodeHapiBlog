(function() {
	'use strict';

	var Promise = require('bluebird'),
		mongoose = require('mongoose'),
		Schema = mongoose.Schema;

	var PostSchema = new Schema({
		title: {
			type: String,
			required: true
		},
		author: {
			type: String,
			required: true
		},
		body: String,
		status: {
			type: String,
			required: true,
			enum: ['new', 'draft', 'rejected', 'published']
		},
		hidden: Boolean,
		meta: {
			votes: Number,
			favs: Number
		},
		tags: Array,
		categories: Array,
		created_date: {
			type: Date,
			default: Date.now
		},
		updated_date: {
			type: Date,
			default: Date.now
		}
	});

	var Post = mongoose.model('Post', PostSchema, 'posts');

	module.exports = Post;
})();