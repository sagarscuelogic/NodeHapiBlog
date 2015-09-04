(function() {
	var mongoose = require('mongoose');
	module.exports = {
		toResponseJson: function(result) {
			return {
				success: true,
				count: result.length,
				result: result
			};
		},
		toObjectId: function(id) {
			return mongoose.Schema.ObjectId(id);
		}
	};
})();