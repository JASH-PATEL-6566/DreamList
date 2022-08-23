const User = require('../models/User');
const CryptoJS = require('crypto-js');
const { Utilities } = require('crypto');

module.exports = {
    greeting(req, res) {
        res.send('connected');
    },

    mutation(req, res) {
        const { message } = req.body;
        console.log(message);
        // ===== ADD USER =====
        if (message === 'ADD_USER') {
            const { props } = req.body;
            const password = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(props.password));

            const user = new User({
                username: props.username,
                password,
            })

            // var parsedWordArray = CryptoJS.enc.Base64.parse(user.password);
            // var parsedStr = parsedWordArray.toString(CryptoJS.enc.Utf8);

            user.save()
                .then(() => res.send({ message: 'user added successfully' }));
        }
    }
}