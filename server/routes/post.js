(function() {
	'use strict';

	var PostController = require('../post/controller');

	module.exports = [{
		method: 'GET',
		path: '/posts',
		handler: PostController.getAll,
		config: {
			auth: false,
			description: 'Gets list of all posts',
			tags: ['api'],
			notes: 'Returns a list of all posts'
		}
	}];
})();