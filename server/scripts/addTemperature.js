const path = require('path');
const { execFile } = require('child_process');
import Temperature from '../models/temperature';

const saveNewTemp = () => execFile('node', [path.join(__dirname, './temperature.js')], (error, stdout, stderr) => {
	if (error) {
		throw { error, stderr };
	}

	const newTemperature = new Temperature({
		temperature: stdout
	});

	newTemperature.save().then(res => console.log(res));
});


module.exports = saveNewTemp;