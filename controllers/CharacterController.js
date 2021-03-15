const Character = require("../models/CharacterModel")
class CharacterController {

    async getAllCharacters() {
        let response = await Character.find({});
        return response;
    }

    async createCharacter(character) {

        let response = await Character.create(character);
        return response;
    }

    async updateCharacter(id, body) {

        const { name, status, species, gender, origin, location } = body;
        console.log(body)
        let response = await Character.findOneAndUpdate({ _id: id }, { 
            name: name,
            status: status,
            species: species,
            gender: gender,
            origin : { name: origin.name},
            location: { name: location.name}
        });
        console.log(response)
        return response;
    }

    async deleteCharacter(id) {

        let response = await Character.deleteOne({ _id: id });
        console.log(response)
        return response;
    }



}

module.exports = CharacterController;