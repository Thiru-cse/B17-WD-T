import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'

function Shop() {
  const [products, setProducts] = useState([])

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios
      .get("https://6694b1874bd61d8314c84020.mockapi.io/api/product/")
      .then((res) => setProducts(res.data));
  }, [])
  
  const filterProducts = products.filter((product) => 
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
   )

  return (
    <div className='container mx-auto p-4'>
      <SearchBar setSearchTerm={setSearchTerm} />

      <div className='grid grid-cols-4 gap-4 p-4'>
        {filterProducts.length > 0 ? (
          filterProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))) : (
          <p className='col-span-4 text-center'>No products found</p>
        )}
      </div>
    </div>
  );
}

export default Shop