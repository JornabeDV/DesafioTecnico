const Footer = () => {
  return (
    <footer className='bg-gray-600 shadow-lg h-20'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center h-20'>
          <div className='text-white'>
            <p>© 2024 BookStore. All Rights Reserved.</p>
          </div>
          <div className='hidden md:block'>
            <ul className='flex space-x-4'>
              <li>
                <a to='#' className='text-white cursor-pointer hover:text-gray-300'>About Us</a>
              </li>
              <li>
                <a to='"#"' className='text-white cursor-pointer hover:text-gray-300'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
