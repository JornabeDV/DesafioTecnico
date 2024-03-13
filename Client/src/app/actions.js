import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get('http://localhost:3001/api/books')
  return response.data
})
export const searchBooksByTerm = createAsyncThunk('books/searchBooksByTerm', async (searchTerm) => {
  const response = await axios.get(`http://localhost:3001/api/books?search=${searchTerm}`)
  return response.data
})

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post('http://localhost:3001/api/books', book)
  return response.data
})

export const editBook = createAsyncThunk('books/editBook', async ({ id, book }) => {
  const response = await axios.put(`http://localhost:3001/api/books/${id}`, book)
  return { id, book: response.data }
})

export const deleteBook = createAsyncThunk('books/deleteBook', async (_id) => {
  await axios.delete(`http://localhost:3001/api/books/${_id}`)
  return _id
})
