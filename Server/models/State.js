const mongoose = require('mongoose');
const Schema = mongoose.Schema;
npm 
const StateSchema = Schema({
    active: Schema.Types.ObjectId,
    users: []
})

const State = new mongoose.model('state', StateSchema);

module.exports = State;