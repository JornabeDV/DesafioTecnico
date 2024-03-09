const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

// MongoDB connection

mongoose.connect()

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
