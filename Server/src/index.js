const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

// MongoDB connection

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error(err))

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
