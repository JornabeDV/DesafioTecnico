import { useState } from 'react'

const SearchBar = ({ onSearch, onReset }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    onSearch(searchTerm)
  }

  const handleReset = () => {
    setSearchTerm('')
    onReset()
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className='grid lg:flex'>
      <input className='p-2 rounded m-3' type='text' value={searchTerm} onChange={handleChange} placeholder='Search by title...' />
      <button onClick={handleSearch} className='m-3 bg-[#80CC28] hover:bg-[#7fcc288c] text-black font-bold py-2 px-4 rounded'>
        Search
      </button>

      <button onClick={handleReset} className='m-3 bg-[#80CC28] hover:bg-[#7fcc288c] text-black font-bold py-2 px-4 rounded'>
        Reset
      </button>
    </div>
  )
}

export default SearchBar
