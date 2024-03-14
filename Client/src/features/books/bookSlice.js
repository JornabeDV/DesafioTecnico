import { createSlice } from '@reduxjs/toolkit'
import { fetchBooks, addBook, editBook, deleteBook, searchBooksByTerm, toggleFavorite } from '../../app/actions'

const initialState = {
  books: [],
  loading: false,
  error: null
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  updateBook (state, action) {
    if (Array.isArray(state.books)) {
      state.books = state.books.map(book =>
        book._id === action.payload._id ? action.payload.book : book
      )
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.books = action.payload
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
      .addCase(searchBooksByTerm.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.books = action.payload
      })
      .addCase(addBook.fulfilled, (state, action) => {
        if (Array.isArray(state.books)) {
          state.books.push(action.payload)
        }
      })
      .addCase(editBook.fulfilled, (state, action) => {
        const { _id, book } = action.payload
        if (Array.isArray(state.books)) {
          state.books = state.books.map((b) => (b._id === _id ? book : b))
        }
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        if (Array.isArray(state.books)) {
          state.books = state.books.filter((b) => b._id !== action.payload)
        }
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        if (Array.isArray(state.books)) {
          const updatedBookIndex = state.books.findIndex(book => book._id === action.payload._id)
          if (updatedBookIndex !== -1) {
            state.books[updatedBookIndex] = action.payload.book
          }
        }
      })
  }
})

export default booksSlice.reducer
export const { updateBook } = booksSlice.actions
