const express = require('express');
const router = express.Router();
const { execFile } = require('child_process');
const path = require('path');
const temperature = require('../../models/temperature');

router.use((req, res, next) => {
	console.log('Time: ', Date.now());
	next();
});

/**
 * @name Test
 * @route   {GET} api/temp/test
 * @desc    Tests temp route
 * @access  Public
 */
router.get('/test', (req, res) => res.json({ msg: 'Temp Works' }));

/**
 * @name Get Temp
 * @route   {GET} api/temp
 * @desc    Tests temp route
 * @access  Public
 */
router.get('/now', (req, res) => {
	// eslint-disable-next-line
    const child = execFile('node', [path.join(__dirname, '../../scripts/temperature.js')], (error, stdout, stderr) => {
		if (error) {
			throw error;
		}
		res.json({ temp: stdout });
	});
});

router.get('/mostrecent', (req, res) => {
	temperature.find().sort({ _id: -1 }).limit(1).then(temp => {
		if (!temp) {
			return res.status(404).json({ errors: { temp: 'No Temp Found' } });
		}
		return res.json({ temp });
	});
});

module.exports = router;