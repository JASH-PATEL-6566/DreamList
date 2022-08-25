const User = require('../models/User');
const CryptoJS = require('crypto-js');
// const { Utilities } = require('crypto');

module.exports = {
    greeting(req, res) {
        res.send('connected');
    },

    mutation(req, res) {
        const { message } = req.body;
        // console.log(message);
        // ===== ADD USER =====
        if (message === 'ADD_USER') {
            const { props } = req.body;

            User.find({ username: props.username })
                .then(data => {
                    console.log(data.length);
                    if (data.length === 0) {
                        const password = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(props.password));

                        const user = new User({
                            username: props.username,
                            password,
                        })
                        user.save()
                            .then(() => res.send({ message: 'user added successfully' }));
                    }
                    else {
                        res.send({ message: 'already exist' });
                    }
                })
            // var parsedWordArray = CryptoJS.enc.Base64.parse(user.password);
            // var parsedStr = parsedWordArray.toString(CryptoJS.enc.Utf8);
        }

        // =====LOGIN=====
        if (message === 'LOGIN') {
            const { details } = req.body;
            const password = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(details.password));
            // console.log(password);
            User.find({ username: details.username })
                .then(data => {
                    if (data.length && password === data[0].password) {
                        const { username, _id, places } = data[0];
                        res.send({
                            data: {
                                _id,
                                username,
                                places
                            }, message: 'done'
                        });
                    }
                    else {
                        res.send({ message: 'fail' })
                    }
                })
        }
    }
}