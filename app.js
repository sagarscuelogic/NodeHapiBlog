(function() {
	'use strict';

	var Hapi = require('hapi'),
		HapiRouter = require('hapi-router'),
		HapiSwagger = require('hapi-swagger'),
		pkg = require('./package'),
		log = require('winston'),
		mongoose = require('mongoose'),
		server;

	server = new Hapi.Server();

	mongoose.connect('mongodb://localhost/blog');

	server.connection({
		host: 'localhost',
		port: process.env.PORT || 3000
	});

	server.register({
		register: HapiRouter,
		options: {
			routesDir: __dirname + '/server/routes/'
		},
	}, function(err) {
		if (err) {
			throw err;
		}
	});

	server.register({
		register: HapiSwagger,
		options: {
			basePath: '',
			apiVersion: pkg.version
		}
	}, function(err) {
		if (err) {
			throw err;
		}
	});

	if (!module.parent) {
		server.start(function() {
			log.info('Server running at:', server.info.uri);
		});
	}

	module.exports.server = server;
})();