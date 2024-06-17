const express = require('express')
const app = express()
const session = require('express-session')
const router = require('./routes/route')
const connectDB = require('./lib/db')

const PORT = 3000

connectDB()

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
