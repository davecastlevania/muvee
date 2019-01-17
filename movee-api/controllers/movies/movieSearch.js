const Movies = require('../../models/movies');

const MovieSearch = function find(req, res) {
  const payload = req.body;
  Movies.find(
    { TitleName: { $regex: payload.TitleName, $options: '1' } },
    (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.json(data);
      }
    },
  );
};

module.exports = MovieSearch;
