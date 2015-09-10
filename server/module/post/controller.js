(function() {
	'use strict';

	var PostUtil = require('./util');

	module.exports = {
		getAll: getAll,
		getOne: getOne,
		add: add,
		edit: edit,
		delete: deleteOne
	};

	function getAll(req, reply) {
		PostUtil.getAll()
			.then(reply)
			.catch(function(err) {
				reply(err);
			});
	}

	function getOne(req, reply) {
		PostUtil
			.getOne(req.params.id)
			.then(reply)
			.catch(function(err) {
				reply(err);
			});
	}

	function add(req, reply) {
		PostUtil
			.add(req.payload)
			.then(reply)
			.catch(function(err) {
				console.trace(err.stack)
				reply(err);
			});
	}

	function edit(req, reply) {
		PostUtil
			.edit(req.params.id, req.payload)
			.then(reply)
			.catch(function(err) {
				reply(err);
			});
	}

	function deleteOne(req, reply) {
		PostUtil
			.delete(req.params.id)
			.then(reply)
			.catch(function(err) {
				reply(err);
			});
	}
})();