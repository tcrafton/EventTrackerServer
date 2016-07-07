const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventName: String,
  description: String,
  eventDate: String,
  address: {
    number: String,
    street: String,
    city: String,
    state: String,
    zipcode: Number
  }
});

const ModelClass = mongoose.model('event', eventSchema);

module.exports = ModelClass;
