const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	},
	postDate: {
		type: Date,
		required: true,
		default: Date.now
	}
})