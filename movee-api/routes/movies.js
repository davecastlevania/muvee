const express = require('express');

const router = express.Router();
const MoviesController = require('../controllers/movies/movieSearch');

/* POST Movie Resource */
router.post('/', MoviesController);

module.exports = router;
