const mongoose  = require("mongoose")
const { v4: uuidv4 } = require('uuid');

const uuid = uuidv4();
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
  });
  
  const User = mongoose.model('User', userSchema);

  module.exports = User

  