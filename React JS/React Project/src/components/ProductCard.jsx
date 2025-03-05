import React, { useContext } from 'react'
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function ProductCard({ product }) {
  
  const { addToCart, removeFromCart, isInCart } = useContext(CartContext);

  const navigate = useNavigate();

  const added = isInCart(product.id);

  const handleClick = (e) => {
    e.stopPropagation();
    added ? removeFromCart(product.id) : addToCart(product);
  };

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div onClick={handleNavigate} className="shadow-lg rounded-lg p-4 cursor-pointer">
      <img src={product.productImage} className='h-52 w-full object-cover rounded' />
      <h3 className='mt-2 font-semibold'>{product.productName}</h3>
      <p className='text-gray-600'>{product.productPrice}</p>

      <div className='flex text-yellow-400 my-2'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>

      <button
        onClick={handleClick}
        className={`px-4 py-1 rounded-full text-white ${
          added ? "bg-gray-500" : "bg-red-500"
        }`}
      >
        {added ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard