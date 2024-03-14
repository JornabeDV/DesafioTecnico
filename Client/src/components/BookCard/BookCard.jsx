import { useState } from 'react'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'
import ButtonCard from '../ButtonCard/ButtonCard'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import { toggleFavorite } from '../../app/actions'
import { Link } from 'react-router-dom'

const BookCard = ({ book, onDelete }) => {
  const dispatch = useDispatch()
  const [isFavorite, setIsFavorite] = useState(book.favorite)

  const showAlert = (message) => {
    swal(message)
  }

  const handleFavorite = () => {
    const newFavoriteState = !isFavorite
    setIsFavorite(newFavoriteState)
    dispatch(toggleFavorite({ _id: book._id, isFavorite: newFavoriteState }))
    showAlert(newFavoriteState ? 'Book marked as favorite' : 'Book removed from favorites')
  }

  const handleDelete = () => {
    showAlert('Book deleted successfully')
    onDelete()
  }

  return (
    <div className='bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col items-center relative p-2'>
      <FavoriteButton isFavorite={isFavorite} onClick={handleFavorite} className='relatives top-0 right-0 m-2' />
      <div className='p-4 text-center'>
        <h3 className='text-xl font-bold mb-2'>{book.title}</h3>
        <p className='text-gray-600'>Author: {book.author}</p>
        <p className='text-gray-600'>Publication Date: {book.yearOfPublish}</p>
        <p className='text-gray-600'>Genre: {book.genre}</p>
      </div>
      <div className='p-4'>
        <ButtonCard onClick={handleDelete}>Delete</ButtonCard>
        <Link to={`/Form/${book._id}`}>
          <ButtonCard>Editar</ButtonCard>
        </Link>
      </div>
    </div>
  )
}

export default BookCard
