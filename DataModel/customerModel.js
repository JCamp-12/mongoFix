const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	Bust: {
		type: Number,
		required: true
	},
	waist: {
		type: Number,
		required: true
	},
	hip: {
		type: Number,
		required:  true
	},
	thigh: {
		type: Number,
		required: true
	},
	acrossBack: {
		type: Number
	},
	blouseLength: {
		type: Number
	},
	dressLength: {
		type: Number
	},
	skirtLength: {
		type: Number
	},
    topArm: {
    	type: Number
    },
    aroundArm: {
    	type: Number
    },
    bustLevel: {
    	type: Number
    },
    bustSeparation: {
    	type: Number
    },
    shortSleeve: {
    	type: Number
    },
    longSleeve: {
    	type: Number
    },
    crotchLevel: {
    	type: Number
    },
	createdOn: {
		type: Date,
		required: true,
		default: Date.now
	}
});

module.exports = mongoose.model('customerData', DataSchema); // customerData is the name of the collection in our database.

