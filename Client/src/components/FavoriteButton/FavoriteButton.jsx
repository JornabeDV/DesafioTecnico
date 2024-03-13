import { FaStar, FaRegStar } from 'react-icons/fa'

const FavoriteButton = ({ isFavorite, onClick }) => {
  return (
    <button onClick={onClick} className='text-2xl text-yellow-400 focus:outline-none'>
      {isFavorite ? <FaStar /> : <FaRegStar />}
    </button>
  )
}

export default FavoriteButton
