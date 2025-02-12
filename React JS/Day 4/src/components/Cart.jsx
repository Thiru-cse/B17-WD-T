import React, { useState } from 'react'

function Cart() {
    const [item, setItem] = useState(0);
  return (
    <div>
        <h1>Cart Comp - {item}</h1>
        <button onClick={()=>{setItem(val=>val+1)}} >Add</button>
        <button onClick={()=>{setItem(val=>val-1)}}>Remove</button>
    </div>
  )
}

export default Cart