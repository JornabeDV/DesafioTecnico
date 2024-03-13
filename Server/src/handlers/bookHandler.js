const express = require('express')
const bookController = require('../controllers/bookController')

const router = express.Router()

// Create a new book
router.post('/', bookController.createBook)

// Get all books
router.get('/', bookController.getAllBooks)

// Get a book by ID
router.get('/:id', bookController.getBookById)

// Update a book by ID
router.put('/:id', bookController.updateBookById)

// Delete a book by ID
router.delete('/:id', bookController.deleteBookById)

module.exports = router
