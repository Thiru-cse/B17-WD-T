import React from 'react'

function Product(props) {
  return (
    <div>
        
        <li>{props.name}</li>
        <li>{props.price}</li>
        <li>{props.category}</li>
    </div>
  )
}

export default Product