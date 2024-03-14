const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  yearOfPublish: {
    type: Number,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  favorite: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Book', bookSchema)
