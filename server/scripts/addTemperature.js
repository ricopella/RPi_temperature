import cron from 'node-cron';
const path = require('path');
const { execFile } = require('child_process');
import Temperature from '../models/temperature';

// Every 5 minutes
const INTERVAL = '5 * * * *';

const createNewTemperature = cron.schedule(INTERVAL, () => {
	console.log('running a task every minute');
	// eslint-disable-next-line
    const child = execFile('node', [path.join(__dirname, './temperature.js')], (error, stdout, stderr) => {
		if (error) {
			throw { error, stderr };
		}

		const newTemperature = new Temperature({
			temperature: stdout
		});

		newTemperature.save().then(res => console.log(res));
	});
});

module.exports = createNewTemperature;