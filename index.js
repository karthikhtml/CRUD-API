const express = require('express')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session')

const router = require('./routes/route')

require('dotenv').config()
const PORT = process.env.PORT || 5000

mongoose.connect(process.env.URI).then(() => {
  console.log('Database connected successfully')
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'ejs')

app.use(
  session({
    secret: 'mey key',
    saveUninitialized: true,
    resave: false,
  })
)

app.use((req, res, next) => {
  res.locals.message = req.session.message
  delete req.session.message
  next()
})

app.use('', router)

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`)
})
