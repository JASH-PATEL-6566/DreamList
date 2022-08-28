const User = require('../models/User');

module.exports = {
    greeting(req, res) {
        res.send('connected');
    },

    mutation(req, res) {
        const { message } = req.body;

        if (message === 'GET_DATA') {
            const { id } = req.body;

            User.find({ _id: id })
                .then(data => {
                    res.send(data)
                })
        }



        // Add new User
        if (message === 'ADD_NEW_USER') {
            const { _id, username } = req.body;

            const user = new User({
                _id,
                userName: username
            })

            user.save()
                .then(() => res.send({ message: 'User created' }))
        }
    }
}