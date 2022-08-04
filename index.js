var express = require('express')
var cors = require('cors')
var PORT = process.env.PORT || 3000
var app = express()

app.get('/', cors(), function (req, res, next) {
  res.json({msg: 'hi express'})
})
 
app.get('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
})
 
app.listen(PORT, function () {
  console.log('CORS-enabled web server listening on port 80')
})