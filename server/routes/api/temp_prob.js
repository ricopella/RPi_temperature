const express = require('express');
const router = express.Router();

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

module.exports = router;