const movie = require("../models/movie");

const getAllMovies = async (req, res) => {
  try {
    const movies = await movie.find({});
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createMovie = async (req, res) => {
  try {
    const movies = await movie.create(req.body);
    res.status(201).json(movies);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleMovie = async (req, res) => {
  try {
    const { id: movieID } = req.params;
    const movies = await movie.findOne({ _id: movieID });
    if (!movies) {
      res.status(404).json({ msg: `No data found with id: ${movieID}` });
    }

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id: movieID } = req.params;
    const movies = await movie.findOneAndUpdate({ _id: movieID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!movies) {
      res.status(404).json({ msg: `No data found with id: ${movieID}` });
    }

    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id: movieID } = req.params;
    const movies = await movie.findOneAndDelete({ _id: movieID });
    if (!movies) {
      res.status(404).json({ msg: `No data found with id: ${movieID}` });
    }
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllMovies,
  createMovie,
  getSingleMovie,
  updateMovie,
  deleteMovie,
};
