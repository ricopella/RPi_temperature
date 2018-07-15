const express = require('express');
const router = express.Router();
const { execFile } = require('child_process');
const path = require('path');
const file = require.resolve('../../scripts/temperature.js');

/**
 * @route   {POST} api/temp/*
 * @desc    Returns UTC time for logging
 * @access  Public
 */
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
    const child = execFile('node', [path.join(__dirname, '../../scripts/temperature.js')], (error, stdout, stderr) => {
        if (error) {
            throw error;
        }
        res.json({ temp: stdout })
    });
})

module.exports = router;