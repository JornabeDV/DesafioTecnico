import { useDispatch, useSelector } from 'react-redux'
import FavoriteBooksCards from '../../../components/FavoriteBooksCards/FavoriteBooksCards'
import { toggleFavorite } from '../../../app/actions'

const FavoritesInfo = () => {
  const dispatch = useDispatch()
  const books = useSelector((state) => state.books.books)
  if (!Array.isArray(books.data)) {
    return <div>Loading books...</div>
  }
  const favoriteBooks = books.data.filter(book => book.favorite === true)

  const handleFavoriteClick = (_id, isFavorite) => {
    dispatch(toggleFavorite({ id: _id, currentFavorite: isFavorite }))
  }

  return (
    <div className='p-5'>
      <h1 className='text-[50px] lg:text-[90px] font-bold mb-4 p-5 text-center text-[#80CC28] font-josefin'>FAVORITES</h1>
      <FavoriteBooksCards books={favoriteBooks} onFavoriteClick={handleFavoriteClick} />
    </div>
  )
}

export default FavoritesInfo
