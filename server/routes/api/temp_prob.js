import { Router } from 'express';
import { execFile } from 'child_process';
import path from 'path';

export default () => {
	/**
     * @route   {POST} api/temp/*
     * @desc    Returns UTC time for logging
     * @access  Public
     */
	Router.use((req, res, next) => {
		console.log('Time: ', Date.now());
		next();
	});

	/**
     * @name Test
     * @route   {GET} api/temp/test
     * @desc    Tests temp route
     * @access  Public
     */
	Router.get('/test', (req, res) => res.json({ msg: 'Temp Works' }));

	/**
     * @name Get Temp
     * @route   {GET} api/temp
     * @desc    Tests temp route
     * @access  Public
     */
	Router.get('/now', (req, res) => {
		// eslint-disable-next-line
        const child = execFile('node', [path.join(__dirname, '../../scripts/temperature.js')], (error, stdout, stderr) => {
			if (error) {
				throw error;
			}
			res.json({ temp: stdout });
		});
	});
};