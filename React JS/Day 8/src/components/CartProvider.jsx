import React, { createContext, useState } from 'react'

export const cartContext = createContext();
function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => { 
        setCart((preVal)=>[...preVal, product])
    };
    console.log(cart);
    

  return (
      <div>
          <cartContext.Provider value={{ cart, addToCart }}>
              {children}
          </cartContext.Provider>
    </div>
  )
}

export default CartProvider