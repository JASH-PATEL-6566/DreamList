const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceListSchema = Schema({
    name: String,
    discription: String,
    image_link: String
})

module.exports = PlaceListSchema;