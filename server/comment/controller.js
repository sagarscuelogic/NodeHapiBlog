(function() {
	'use strict';

	var CommentUtil = require('./util');

	module.exports = {
		getAll: function(req, reply) {
			CommentUtil.getAll()
				.then(reply)
				.catch(function(err) {
					reply(err);
				});
		}
	};
})();