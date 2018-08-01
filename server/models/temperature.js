const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TemperatureSchema = new Schema({
	temperature: {
		type: String,
		required: true
	}
}, {
	timestamps: true
});

module.exports = mongoose.model('Temperature', TemperatureSchema);