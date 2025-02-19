import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Product() {
  return (
    <div>
      <h1>Product</h1>
      <Link to="productdetail">Product Detail</Link>

      <Outlet />
    </div>
  );
}

export default Product