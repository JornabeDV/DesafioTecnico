import { useDispatch, useSelector } from 'react-redux'
import { setFavorite } from '../../../features/books/bookSlice'
import FavoriteBooksCards from '../../../components/FavoriteBooksCards/FavoriteBooksCards'

const FavoritesInfo = () => {
  const dispatch = useDispatch()
  const books = useSelector((state) => state.books.books)
  console.log(books)
  if (!Array.isArray(books.data)) {
    return <div>Cargando libros...</div>
  }

  const favoriteBooks = books.data.filter(book => book.favorite === true)
  console.log(favoriteBooks)
  const handleFavoriteClick = (_id, isFavorite) => {
    dispatch(setFavorite({ _id, isFavorite }))
  }
  console.log(handleFavoriteClick)
  return (
    <div className='p-5'>
      <h1 className='text-[50px] lg:text-[90px] font-bold mb-4 p-5 text-center text-[#80CC28] font-josefin'>FAVORITES</h1>
      <FavoriteBooksCards books={favoriteBooks} onFavoriteClick={handleFavoriteClick} />
    </div>
  )
}

export default FavoritesInfo
