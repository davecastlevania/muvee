var express = require('express');
var router = express.Router();

var MoviesController = require('../controllers/movies/movieSearch');

/* GET Movies Available. */
router.get('/', function(req, res, next) {
    console.log("Hit movies route")
    console.log(req.body)
    res.send('Search for a Movie');
});
/* POST Movie Resource */
router.post('/', MoviesController);

module.exports = router;
