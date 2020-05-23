const express = require("express");
const router = express.Router();
const Image = require("../models/image");

// GET all
router.get("/", async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET one
router.get("/:id", getImage, (req, res) => {
	res.json(res.image)
});

// CREATING one
router.post("/", async (req, res) => {
  const image = new Image({
    name: req.body.name,
    url: req.body.url,
    postDate: req.body.postDate,
	});
	try {
		const newImage = await image.save()
		res.status(201).json(newImage)
	} catch(error) {
		res.status(404).json({message: error.message})
	}
});

// UPDATE one
router.patch("/:id", (req, res) => {});

// DELETE one
router.delete("/:id", (req, res) => {});

// getImage midleware
async function getImage(req, res, next) {
	let image
	try {
		image = await Image.findById(req.params.id)
		if (image == null) {
			return res.status(404).send({message: "Cannot find subscriber"})
		}
	} catch (error) {
		return res.status(500).json({message: error.message})
	}

	res.image = image
	next()
}

module.exports = router;
