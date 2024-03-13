import { useSelector, useDispatch } from 'react-redux'
import BookCard from '../BookCard/BookCard'
import { deleteBook, fetchBooks } from '../../app/actions'

const FavoriteBooksCards = ({ onFavoriteClick }) => {
  const { loading, books } = useSelector(state => state.books)
  const dispatch = useDispatch()

  if (loading) {
    return <p>Loading favorite books...</p>
  }

  if (!books || !Array.isArray(books.data) || books.data.length === 0) {
    return <p className='text-xl'>No favorite books available.</p>
  }

  const handleDelete = (_id) => {
    dispatch(deleteBook(_id))
    dispatch(fetchBooks())
  }

  const favoriteBooks = books.data.filter((book) => book.favorite)

  return (
    <div className='p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {favoriteBooks.map((book) => (
        <BookCard
          key={book._id} book={book} onDelete={() => handleDelete(book._id)}
          onFavoriteClick={() => onFavoriteClick(book._id, book.favorite)}
        />
      ))}
    </div>
  )
}

export default FavoriteBooksCards
