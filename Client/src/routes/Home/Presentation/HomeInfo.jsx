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
    <div className='p-5 w-full'>
      <h1 className='text-[50px] lg:text-[90px] font-bold mb-2 p-3 text-center text-[#80CC28] font-josefin'>ECOBOOKS</h1>
      <BooksCards />
    </div>
  )
}

export default HomeInfo
