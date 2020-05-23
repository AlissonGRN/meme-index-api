const mongoose = require("mongoose");

const gifSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  postDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});


module.exports = mongoose.model('Gif', gifSchema)