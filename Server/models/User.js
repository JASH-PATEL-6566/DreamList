const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PlaceListSchema = require('./placeList');

const UserSchema = Schema({
    username: String,
    password: String,
    places: [PlaceListSchema]
})

const User = new mongoose.model('user', UserSchema);

module.exports = User;