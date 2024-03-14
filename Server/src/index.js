const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const mainRouter = require('./routes/index')

const cors = require('cors')

const app = express()
const port = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

// Middleware
app.use(express.json())
app.use(cors())
app.use('/api', mainRouter)

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error(err))

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
