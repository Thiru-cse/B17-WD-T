import React from 'react'

function SearchBar({ setSearchTerm }) {
  return <div className='flex justify-center mt-4'>
    <input
      className='border-2 border-gray-300 py-2 px-2 rounded-md w-1/2'
      type="text"
      placeholder='Search for products'
      onChange={(e) => setSearchTerm(e.target.value)} />
  </div>;
}

export default SearchBar