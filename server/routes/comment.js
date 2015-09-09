(function() {
	'use strict';

	var Joi = require('joi'),
		CommentController = require('../module/comment/controller');

	module.exports = [{
		method: 'GET',
		path: '/post/{id}/comments',
		handler: CommentController.getAll,
		config: {
			auth: false,
			description: 'Gets list of all comments for a post',
			tags: ['api'],
			notes: 'Returns a list of all comments for a post',
			validate: {
				params: {
					id: Joi.string().required()
				}
			}
		}
	}, {
		method: 'POST',
		path: '/comment',
		handler: CommentController.add,
		config: {
			auth: false,
			description: 'Create new Comment',
			tags: ['api'],
			notes: 'Returns success status and id of new record created',
			validate: {
				payload: {
					post: Joi.string().required(),
					parent: Joi.string().required(),
					body: Joi.string().required(),
					author: Joi.string().required()
				},
				failAction: function(req, reply, source, error) {
					reply(error);
				}
			}
		}
	}, {
		method: 'GET',
		path: '/comment/{id}',
		handler: CommentController.getOne,
		config: {
			auth: false,
			description: 'Gets one specific comment',
			tags: ['api'],
			notes: 'Returns requested comment object',
			validate: {
				params: {
					id: Joi.string().required()
				},
				failAction: function(req, reply, source, error) {
					reply(error);
				}
			}
		}
	}, {
		method: 'PUT',
		path: '/comment/{id}',
		handler: CommentController.edit,
		config: {
			auth: false,
			description: 'Update a comment',
			tags: ['api'],
			notes: 'Returns a list of all comments',
			validate: {
				params: {
					id: Joi.string().required()
				},
				payload: {
					title: Joi.string().required(),
					author: Joi.string().required(),
					body: Joi.string().required(),
					status: Joi.string().required()
				},
				failAction: function(req, reply, source, error) {
					reply(error);
				}
			}
		}
	}, {
		method: 'DELETE',
		path: '/comment/{id}',
		handler: CommentController.delete,
		config: {
			auth: false,
			description: 'Deletes a specific comment',
			tags: ['api'],
			notes: 'Deletes a specific comment',
			validate: {
				params: {
					id: Joi.string().required()
				},
				failAction: function(req, reply, source, error) {
					reply(error);
				}
			}
		}
	}];
})();