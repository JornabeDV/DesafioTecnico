import React from 'react'
import { useDispatch } from 'react-redux'
import swal from 'sweetalert'
import ButtonCard from '../ButtonCard/ButtonCard'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import { Link } from 'react-router-dom'
import { setFavorite } from '../../features/books/bookSlice'

const BookCard = ({ book, onDelete }) => {
  const dispatch = useDispatch()

  const showAlert = (message) => {
    swal(message)
  }

  const handleFavorite = () => {
    const newFavoriteState = !book.favorite
    swal(newFavoriteState ? 'Book marked as favorite' : 'Book removed from favorites')
    dispatch(setFavorite({ _id: book._id, isFavorite: newFavoriteState }))
  }

  const handleDelete = () => {
    showAlert('Book deleted successfully')
    onDelete()
  }

  return (
    <div className='bg-white border border-[#B2FA5B] rounded-lg shadow-md overflow-hidden flex flex-col items-center relative p-2'>
      <FavoriteButton isFavorite={book.favorite} onClick={handleFavorite} className='ab top-0 right-0 m-2' />
      <div className='p-4 text-center'>
        <h3 className='text-xl font-bold mb-2'>{book.title}</h3>
        <p className='text-gray-600'>Author: {book.author}</p>
        <p className='text-gray-600'>Publication Date: {book.yearOfPublish}</p>
        <p className='text-gray-600'>Genre: {book.genre}</p>
      </div>
      <div className='p-4'>
        <ButtonCard onClick={handleDelete} color='red'>Eliminar</ButtonCard>
        <Link to={`/Form/${book._id}`}>
          <ButtonCard>Editar</ButtonCard>
        </Link>
      </div>
    </div>
  )
}

export default BookCard
