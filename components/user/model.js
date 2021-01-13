const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
  name: String,
});

module.exports = mongoose.model('User', mySchema)