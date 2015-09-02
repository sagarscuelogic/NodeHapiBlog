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
		}
	};
})();