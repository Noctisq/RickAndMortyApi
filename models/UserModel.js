const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Crear modelo y esquema de un ninja

//crear  esquema de geolocalizacion

const userSchema = new Schema({
  id : {type: Number, required: true},
  email: { type: String, required: [true, "EMAIL is required"] },
  password: { type: String, required: [true, "Password is required"]}

});

const User = mongoose.model("User", userSchema);

module.exports = User;