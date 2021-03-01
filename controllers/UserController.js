const User = require("../models/UserModel")
class UserContronller {

    async getAllUsers() {
        let response = await User.find({});
        return response;
    }

    async createUser(user) {
        console.log(user);
        
    }

    async updateUser() {

    }

    async deleteUser() {

    }

    async getUser(id) {

    }


}

module.exports = UserContronller;