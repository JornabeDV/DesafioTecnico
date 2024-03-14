import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/books')
    return response.data
  } catch (error) {
    console.error('Error fetching books:', error)
    throw error
  }
})

export const searchBooksByTerm = createAsyncThunk('books/searchBooksByTerm', async (searchTerm) => {
  try {
    const response = await axios.get(`http://localhost:3001/api/books?search=${searchTerm}`)
    return response.data
  } catch (error) {
    console.error('Error searching books by term:', error)
    throw error
  }
})

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  try {
    const response = await axios.post('http://localhost:3001/api/books', book)
    return response.data
  } catch (error) {
    console.error('Error adding book:', error)
    throw error
  }
})

export const editBook = createAsyncThunk('books/editBook', async ({ id, book }) => {
  try {
    const response = await axios.put(`http://localhost:3001/api/books/${id}`, book)
    return { id, book: response.data }
  } catch (error) {
    console.error('Error editing book:', error)
    throw error
  }
})

export const deleteBook = createAsyncThunk('books/deleteBook', async (_id) => {
  try {
    await axios.delete(`http://localhost:3001/api/books/${_id}`)
    return _id
  } catch (error) {
    console.error('Error deleting book:', error)
    throw error
  }
})

export const toggleFavorite = createAsyncThunk(
  'books/toggleFavorite',
  async ({ _id, isFavorite }) => {
    try {
      const response = await axios.put(`http://localhost:3001/api/books/${_id}`, { favorite: isFavorite })
      return { _id, book: response.data }
    } catch (error) {
      console.error('Error toggling favorite:', error)
      throw error
    }
  }
)
