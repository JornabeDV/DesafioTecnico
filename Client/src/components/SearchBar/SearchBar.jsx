import React, { useState } from 'react'

const SearchBar = ({ onSearch, onReset }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    onSearch(searchTerm)
  }

  const handleReset = () => {
    setSearchTerm('') // Vaciar la barra de búsqueda
    onReset() // Restablecer y renderizar todos los libros nuevamente
  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <input
        type='text'
        value={searchTerm}
        onChange={handleChange}
        placeholder='Search by title...'
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default SearchBar
