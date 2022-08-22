const User = require('../models/User');

module.exports = {
    greeting(req, res) {
        res.send('connected');
    }
}