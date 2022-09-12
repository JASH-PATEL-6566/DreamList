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

        if (message === 'ADD_PLACE') {
            const { data, userId } = req.body;
            const { name, discription, image_link } = data;

            User.find({ _id: userId })
                .then((data) => {

                    data[0].update({ $push: { places: { name, discription, image_link } } }, function (err, result) {
                        if (err) {
                            console.log(err)
                        } else {
                            res.send('done')
                        }
                    })
                    // res.send('done')
                })
        }

        if (message === 'GET_USER_INFO') {
            const { id } = req.body;

            User.find({ _id: id })
                .then((user) => {
                    res.send(user[0])
                })
        }
    }
}