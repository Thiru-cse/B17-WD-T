import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductDeatail() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/cart');
  }
  return (
    <div>
      <h1>Product Detail</h1>
      <button onClick={handleSubmit}>Cart Page</button>
    </div>
  )
}

export default ProductDeatail