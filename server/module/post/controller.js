(function() {
	'use strict';

	var PostUtil = require('./util');

	module.exports = {
		getAll: function(req, reply) {
			PostUtil.getAll()
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