const Character = require("../models/CharacterModel")
class CharacterContronller {

    async getAllCharacters() {
        let response = await Character.find({});
        return response;
    }

    async createCharacter(character) {
        console.log(character);
        
        //let response = await Character.create({});
        // return response;
    }

    async updateCharacter() {

    }

    async deleteCharacter() {

    }

    async getCharacter(id) {

    }


}

module.exports = CharacterContronller;