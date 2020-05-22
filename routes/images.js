const express = require('express')
const router = express.Router()
const Image = require('../models/image')

// GET all
router.get('/', (req, res) => {
    res.send('Hello')
})

// GET one
router.get("/:id", (req, res) => {})

// CREATING one
router.post('/', (req, res) => {})

// UPDATE one
router.patch("/:id", (req, res) => {})

// DELETE one 
router.delete('/:id', (req, res) => {})

// getImages midleware

module.exports = router;