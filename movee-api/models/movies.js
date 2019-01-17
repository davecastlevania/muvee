const mongoose = require('mongoose');

const moviesSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  title: '',
  titleId: mongoose.Types.ObjectId,
}, { collection: 'Titles' });

module.exports = mongoose.model('Movies', moviesSchema);
