var mongoose = require('mongoose');

var moviesSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: "",
    titleId: mongoose.Types.ObjectId,
    }, { collection: 'Titles'});

// Movies.find({}, function(err, data) { console.log(err, data, data.length);});

module.exports = mongoose.model('Movies', moviesSchema);
