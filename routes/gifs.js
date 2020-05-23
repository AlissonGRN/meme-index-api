const express = require("express");
const router = express.Router();
const Image = require('../models/gif')

// GET all
router.get('/', async (req, res) => {
    try {
        const images = await Image.find()
        res.json(images)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// GET one 

// CREATE

// UPDATE

// DELETE

// getGif midleware

module.exports = router;