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

module.exports = connectDB
