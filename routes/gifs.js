const express = require("express");
const router = express.Router();
const Image = require("../models/gif");

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
router.get("/:id", getGif, (req, res) => {
	res.json(res.gif)
})

// CREATE
router.post("/", async (req, res) => {
	const gif = new Gif({
		name: req.body.name,
		url: req.body.url,
		postDate: req.body.postDate,
	})
	try {
		const newGif = await gif.save()
		res.status(201).json(newGif)
	} catch (error) {
		res.status(404).json({ message: error.message })
	}
})

// UPDATE
router.patch("/:id", getGif, async (req, res) => {
	if (req.body.name != null){
		res.image.name = req.body.name;
	}
	if (req.body.url != null){
		res.image.url = req.body.url;
	}
	try {
		const updatedGif = await res.gif.save()
		res.json(updatedGif)
	} catch (error) {
		res.status(400).json({ message: error.message })		
	}

})

// DELETE
router.delete("/:id", getGif, async (req, res) => {
	try {
		await res.image.remove()
		res.json({message: "Gif deleted"})
	} catch (error) {
		res.status(500).json({message: error.message })
	}
})

// getGif midleware
async function getGif(req, res, next) {
  let gif;
  try {
    gif = await Image.findById(req.params.id);
    if (gif == null) {
      return res.status(404).send({ message: "Cannot find gif" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.gid = gif;
  next();
}

module.exports = router;
