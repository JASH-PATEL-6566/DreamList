const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlaceListSchema = Schema({
    name: String,
    discription: String,
    tags: [{ name: String }]
})

module.exports = PlaceListSchema;