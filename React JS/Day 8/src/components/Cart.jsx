import React, { useContext } from 'react'
import { cartContext } from './CartProvider'

function Cart() {
    const { cart } = useContext(cartContext);
  return (
      <div>
          <h1>Cart</h1>
          {cart.map((item) => (
              <>
                  <div key={item.id}>
                      <h2>{item.name}</h2>
                      <p>{item.price}</p>
              </div>
              </>
          ))}
      </div>
  )
}

export default Cart