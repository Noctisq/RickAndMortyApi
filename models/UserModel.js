const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
 
  user: { type: String, required: [true, "user is required"] },
  password: { type: String, required: [true, "Password is required"] }

});

const User = mongoose.model("User", userSchema);

module.exports = User;