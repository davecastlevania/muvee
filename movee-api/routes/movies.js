var express = require('express');
var router = express.Router();
var Movies = require('../models/movies');

/* GET Movies Available. */
router.get('/', function(req, res, next) {
    console.log("Hit movies route")
    console.log(req.body)
    res.send('Search for a Movie');
});
/* POST Movie Resource */
router.post('/', function(req, res, next) {
    console.log(req.body)
    var data = req.body
    res.send('Search Complete... you searched for ' + req.body.TitleName);
    // var Movies = mongoose.model('User', new Schema({ TitleName: String, _id: Number}, { collection : 'Titles' }));   // collection name;
    // Movies.find({}, function(err, data) { console.log(err, data, data.length);});
    Movies.find(
        { "TitleName": {"$regex": data.TitleName, "$options": "1"}},
        function(err, data) { 
            console.log(err, data) 
        });
});


module.exports = router;
