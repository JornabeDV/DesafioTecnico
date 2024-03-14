const bookSchema = require('../models/book')

// Create a new user
exports.createBook = (req, res) => {
  bookSchema.create(req.body)
    .then(book => res.json({ error: false, message: 'Book created successfully', data: book }))
    .catch(error => res.json({ error: true, message: 'Error creating book', data: error }))
}

// Get all books
exports.getAllBooks = (req, res) => {
  bookSchema.find()
    .then(books => res.json({ error: false, message: 'Books retrieved successfully', data: books }))
    .catch(error => res.json({ error: true, message: 'Error retrieving books', data: error }))
}

// Get a book by ID
exports.getBookById = (req, res) => {
  const bookId = req.params.id
  bookSchema.findById(bookId)
    .then(book => {
      if (!book) {
        res.json({ error: true, message: 'Book not found', data: null })
      } else {
        res.json({ error: false, message: 'Book retrieved successfully', data: book })
      }
    })
    .catch(error => res.json({ error: true, message: 'Error retrieving book', data: error }))
}

// Update a book by ID
exports.updateBookById = (req, res) => {
  const bookId = req.params.id
  const updatedBook = req.body
  bookSchema.findByIdAndUpdate(bookId, updatedBook, { new: true })
    .then(book => {
      if (!book) {
        res.json({ error: true, message: 'Book not found', data: null })
      } else {
        res.json({ error: false, message: 'Book updated successfully', data: book })
      }
    })
    .catch(error => res.json({ error: true, message: 'Error updating book', data: error }))
}

// Delete a book by ID
exports.deleteBookById = (req, res) => {
  const bookId = req.params.id
  bookSchema.findByIdAndDelete(bookId)
    .then(book => {
      if (!book) {
        res.json({ error: true, message: 'Book not found', data: null })
      } else {
        res.json({ error: false, message: 'Book deleted successfully', data: book })
      }
    })
    .catch(error => res.json({ error: true, message: 'Error deleting book', data: error }))
}
