import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BookCard from '../BookCard/BookCard'
import { deleteBook, fetchBooks, searchBooksByTerm } from '../../app/actions'
import SearchBar from '../SearchBar/SearchBar'

const BooksCards = ({ onFavoriteClick }) => {
  const { loading, books } = useSelector(state => state.books)
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (searchTerm) {
      dispatch(searchBooksByTerm(searchTerm))
    } else {
      dispatch(fetchBooks())
    }
  }, [dispatch, searchTerm])

  const handleDelete = (_id) => {
    dispatch(deleteBook(_id))
  }

  if (loading || !books) {
    return <p>Cargando libros...</p>
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const handleReset = () => {
    setSearchTerm('')
    dispatch(fetchBooks())
  }

  const filteredBooks = searchTerm
    ? (books.data || []).filter(book => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : (books.data || [])

  return (
    <div className='flex flex-col items-center'> {/* Flexbox container para centrar la SearchBar */}
      <SearchBar onSearch={handleSearch} onReset={handleReset} />
      <div className='p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {filteredBooks.map((book) => (
          <BookCard
            key={book._id}
            book={book}
            onDelete={() => handleDelete(book._id)}
            onFavoriteClick={() => onFavoriteClick(book._id, book.favorite)}
          />
        ))}
      </div>
    </div>
  )
}

export default BooksCards
