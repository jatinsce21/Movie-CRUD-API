const express = require("express");
const router = express.Router();

const {
  getAllMovies,
  createMovie,
  getSingleMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movies");

//routing
router.route("/").get(getAllMovies).post(createMovie);
router.route("/:id").get(getSingleMovie).patch(updateMovie).delete(deleteMovie);

module.exports = router;
