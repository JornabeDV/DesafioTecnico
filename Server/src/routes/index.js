// Principal Handler
const express = require('express')
const bookHandler = require('../handlers/bookHandler')

const router = express.Router()

// bookHandler
router.use('/books', bookHandler)

module.exports = router
