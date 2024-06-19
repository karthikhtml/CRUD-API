const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
})

const logInSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
})

const User = mongoose.model('User', userSchema)
const Credential = mongoose.model('Credential', logInSchema)

module.exports = { User, Credential }
