import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import BookCard from '../BookCard/BookCard'
import { deleteBook, fetchBooks, searchBooksByTerm } from '../../app/actions'
import SearchBar from '../SearchBar/SearchBar'

const BooksCards = () => {
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
    dispatch(deleteBook(_id)).then(() => {
      dispatch(fetchBooks())
    })
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

  const sortedBooks = filteredBooks.slice().sort((a, b) => {
    const titleA = a.title.toLowerCase()
    const titleB = b.title.toLowerCase()
    if (titleA < titleB) {
      return -1
    }
    if (titleA > titleB) {
      return 1
    }
    return 0
  })

  return (
    <div className='flex flex-col items-center'>
      <SearchBar onSearch={handleSearch} onReset={handleReset} />
      <div className='p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {sortedBooks.map((book) => (
          <BookCard
            key={book._id}
            book={book}
            onDelete={() => handleDelete(book._id)}
          />
        ))}
      </div>
    </div>
  )
}

export default BooksCards
