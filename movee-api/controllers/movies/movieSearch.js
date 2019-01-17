var Movies = require('../../models/Movies');

MovieSearch = function(req, res, next) {
    console.log(req.body)
    var data = req.body
    Movies.find(
        { "TitleName": {"$regex": data.TitleName, "$options": "1"}},
        function(err, data) {
            if (err) {
                res.send(err)
            }
            else {
                res.json(data)
            }
    });
}

module.exports = MovieSearch;