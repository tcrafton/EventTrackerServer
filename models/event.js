const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: String,
  description: String,
  eventDate: String
});

const ModelClass = mongoose.model('event', eventSchema);

module.exports = ModelClass;
