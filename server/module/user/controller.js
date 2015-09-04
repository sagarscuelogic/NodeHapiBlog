(function() {
	'use strict';

	var UserUtil = require('./util');

	module.exports = {
		getAll: function(req, reply) {
			UserUtil.getAll()
				.then(reply)
				.catch(function(err) {
					reply(err);
				});
		},
		getOne: function(req, reply) {
			reply('API under development');
		},
		add: function(req, reply) {
			reply('API under development');
		},
		edit: function(req, reply) {
			reply('API under development');
		},
		delete: function(req, reply) {
			reply('API under development');
		}
	};
})();