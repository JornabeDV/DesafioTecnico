import { BsStar, BsStarFill } from 'react-icons/bs'

const FavoriteButton = ({ isFavorite, onClick }) => {
  return (
    <button onClick={onClick}>
      {isFavorite ? <BsStarFill color='#80CC28' size={20} /> : <BsStar color='#80CC28' size={20} />}
    </button>
  )
}

export default FavoriteButton
