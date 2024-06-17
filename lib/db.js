const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Database connected successfully')
  } catch (error) {
    console.error(error.message)
  }
}
MONGODB_URI =
  'mongodb+srv://admin:1234@users.vovuvqd.mongodb.net/?retryWrites=true&w=majority&appName=users'
module.exports = connectDB
