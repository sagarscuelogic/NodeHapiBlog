(function() {
	'use strict';

	var Joi = require('joi'),
		UserController = require('../module/user/controller');

	module.exports = [{
		method: 'GET',
		path: '/user',
		handler: UserController.getAll,
		config: {
			auth: false,
			description: 'Gets list of all users',
			tags: ['api'],
			notes: 'Returns a list of all users'
		}
	}, {
		method: 'POST',
		path: '/user',
		handler: UserController.add,
		config: {
			auth: false,
			description: 'Create new User',
			tags: ['api'],
			notes: 'Returns success status and id of new record created',
			validate: {
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
		method: 'GET',
		path: '/user/{id}',
		handler: UserController.getOne,
		config: {
			auth: false,
			description: 'Gets one specific user',
			tags: ['api'],
			notes: 'Returns requested user object',
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
		path: '/user/{id}',
		handler: UserController.edit,
		config: {
			auth: false,
			description: 'Update a user',
			tags: ['api'],
			notes: 'Returns a list of all users',
			validate: {
				params: {
					id: Joi.string().required()
				},
				payload: {
					title: Joi.string().required(),
					author: Joi.string().required(),
					body: Joi.string(),
					status: Joi.string().required()
				},
				failAction: function(req, reply, source, error) {
					reply(error);
				}
			}
		}
	}, {
		method: 'DELETE',
		path: '/user/{id}',
		handler: UserController.delete,
		config: {
			auth: false,
			description: 'Deletes a specific user',
			tags: ['api'],
			notes: 'Deletes a specific user',
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