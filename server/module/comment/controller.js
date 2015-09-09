(function() {
	'use strict';

	var CommentUtil = require('./util');

	module.exports = {
		getAll: getAll,
		getOne: getOne,
		add: add,
		edit: edit,
		delete: deleteOne
	};

	function getAll(req, reply) {
		CommentUtil.getAll(req.params.id)
			.then(reply)
			.catch(function(err) {
				reply(err);
			});
	}

	function getOne(req, reply) {
		reply('API under development');
	}

	function add(req, reply) {
		CommentUtil
			.create(req.payload)
			.then(reply)
			.catch(function(err) {
				console.error('error cought at controller');
				console.trace(err.stack);
				reply(err);
			});
	}

	function edit(req, reply) {
		reply('API under development');
	}

	function deleteOne(req, reply) {
		reply('API under development');
	}
})();