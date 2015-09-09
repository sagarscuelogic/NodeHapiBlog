(function() {
	'use strict';

	var UserUtil = require('./util');

	module.exports = {
		getAll: getAll,
		getOne: getOne,
		add: add,
		edit: edit,
		delete: deleteOne
	};

	function getAll(req, reply) {
		UserUtil.getAll()
			.then(reply)
			.catch(function(err) {
				reply(err);
			});
	}

	function getOne(req, reply) {
		reply('API under development');
	}

	function add(req, reply) {
		reply('API under development');
	}

	function edit(req, reply) {
		reply('API under development');
	}

	function deleteOne(req, reply) {
		reply('API under development');
	}
})();