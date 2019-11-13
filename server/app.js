const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()
const mainRoutes = require('./routes')
const projectRoutes = require('./routes/project')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.set('view engine', 'pug')
app.use('/static', express.static('public'))
app.use(mainRoutes)
app.use(projectRoutes)

app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
}) // create 404 error

app.use((err, req, res, next) => {
  res.locals.error = err
  if (err.status >= 100 && err.status < 600) {
    res.status(err.status)
    console.log(err.status)
    console.log(err.message)
    console.log(err.stack)
  } else {
    res.status(500)
    console.log(500)
    console.log(err.message)
    console.log(err.stack)
  }
  res.render('error')
}) // render template for the error.

app.listen(process.env.PORT || 3000, () => {
  console.log('The server is running on local host: 3000!')
})
