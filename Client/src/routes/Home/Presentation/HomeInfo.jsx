import { useDispatch } from 'react-redux'
import { BooksCards } from '../../../components'
import { useEffect } from 'react'
import { fetchBooks } from '../../../app/actions'

const HomeInfo = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return (
    <div className='p-5'>
      <h1 className='text-[40px] font-bold mb-4 p-5 text-center'>BOOKSTORE</h1>
      <BooksCards />
    </div>
  )
}

export default HomeInfo
