const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Crear modelo y esquema de un ninja

//crear  esquema de geolocalizacion

const characterSchema = new Schema({
  id : {type: Number, required: true},
  name: { type: String, required: [true, "Name is required"] },
  status: { type: String, required: [true, "Status is required"] },
  species: { type: String, required: [true, "Specie is required"] },
  type: { type: String},
  gender: { type: String, required: [true, "Gender is required"] },
  origin : {
  name: { type: String, required: [true, "Name of the origin is required"] },

  },
  location : {
      name: { type: String, required: [true, "Name of Location Required"]}
  },

});

const Character = mongoose.model("Character", characterSchema);

module.exports = Character;