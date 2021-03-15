const User = require("../models/UserModel")
const bcrypt = require('bcrypt');
const saltRounds = 10;
class UserContronller {

    async authUser(user, res) {
        const userFound = await User.findOne({ user: user.user });
        if (!userFound) res.sendStatus(400);
        bcrypt.compare(user.password, userFound.password, function (err, result) {
            console.log(
                "result", result
            );

            if (result) {
                res.sendStatus(200)
            } else {
                res.sendStatus(400)

            }
        });

    }

    async registerUser(user) {
        bcrypt.hash(user.password, saltRounds, async function (err, hash) {
            if (err) return console.log(err);

            let response = await User.create({
                user: user.user,
                password: hash,

            });
            return response;
        });

    }




}

module.exports = UserContronller;