(function() {
	var mongoose = require('mongoose');
	module.exports = {
		toResponseJson: toResponseJson,
		toObjectId: toObjectId
	};

	function toResponseJson(result) {
		return {
			success: true,
			count: result.length,
			result: result
		};
	}

	function toObjectId(id) {
		return mongoose.Schema.ObjectId(id);
	}
})();