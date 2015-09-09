(function() {
	var expect = require('chai').expect,
		request = require('superagent'),
		baseUrl;

	baseUrl = 'http://localhost:3000';

	describe('Node Blog API App', function() {
		describe('When requested at /post', function() {
			it('should return list of posts available', function(done) {
				request.get(baseUrl + '/post').end(function assert(err, res) {
					expect(err).to.not.be.ok;
					expect(res).to.have.property('status', 200);
					expect(res.body.success).to.equal(true);
					expect(res.body.count).to.equal(10);
					expect(res.body.result[0].comments).to.equal(50);
					done();
				});
			});
		});
	});
})();