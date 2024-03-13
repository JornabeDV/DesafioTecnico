import { createSlice } from '@reduxjs/toolkit'
import { fetchBooks, addBook, editBook, deleteBook, searchBooksByTerm } from '../../app/actions'

const initialState = {
  books: [],
  loading: false,
  error: null
}

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setFavorite: (state, action) => {
      console.log('Setting favorite:', action.payload)
      const { _id, isFavorite } = action.payload
      state.books = state.books.map(book =>
        book._id === _id ? { ...book, favorite: isFavorite } : book
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
        state.books.push(action.payload)
      })
      .addCase(editBook.fulfilled, (state, action) => {
        const { _id, book } = action.payload
        state.books = state.books.map((b) => (b._id === _id ? book : b))
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter((b) => b._id !== action.payload)
      })
  }
})

export default booksSlice.reducer
export const { setFavorite } = booksSlice.actions
