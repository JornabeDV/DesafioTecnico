import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiMenu } from 'react-icons/hi'
import { useDispatch } from 'react-redux'
import { fetchBooks } from '../../app/actions'
import Logo from '../../assets/LogoEcobooks.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleHomeClick = () => {
    dispatch(fetchBooks())
  }

  return (
    <nav className='bg-[#13121280] shadow-lg'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-20'>
          <div className='flex-shrink-0'>
            <Link to='/' onClick={handleHomeClick}>
              <img src={Logo} alt='Logo' className='h-20' />
            </Link>
          </div>
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white hover:text-gray-300'>
              <HiMenu className='h-8 w-8' />
            </button>
          </div>
          <div className='hidden md:block'>
            <ul className='flex space-x-4'>
              <li>
                <Link to='/Home' className='text-white text-m bg-black py-2 px-8 rounded-lg border-2 border-[#B2FA5B] shadow'>Home</Link>
              </li>
              <li>
                <Link to='/Form' className='text-white text-m bg-black py-2 px-8 rounded-lg border-2 border-[#B2FA5B] shadow'>AddBook</Link>
              </li>
              <li>
                <Link to='/Favorites' className='text-white text-m bg-black py-2 px-8 rounded-lg border-2 border-[#B2FA5B] shadow'>Favorites</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <ul className='flex flex-col items-center justify-center space-y-4'>
            <li>
              <Link to='/Home' className='text-white hover:text-gray-300' onClick={handleHomeClick}>Home</Link>
            </li>
            <li>
              <Link to='/Form' className='text-white hover:text-gray-300'>AddBook</Link>
            </li>
            <li>
              <Link to='/Favorites' className='text-white hover:text-gray-300'>Favorites</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
