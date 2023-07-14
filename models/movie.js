const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  imdb: {
    type: Number,
  },
  year: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("movies", movieSchema);
