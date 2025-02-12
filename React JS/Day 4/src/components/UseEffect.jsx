import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(0);

    console.log("Outter Log");
    

    useEffect(()=>{
        // Mounting Phase
        console.log("Mounting - UseEffect");
        // setCount(val=>val+1);
        
    },[count]) // Empty array means it will run only once when component mounts
  return (
    <div>
        <h1>Count: {count}</h1>
        <h1>Item: {item}</h1>
        <button onClick={()=>{setCount(count+1)}}>Add Count</button>
        <button onClick={()=>{setItem(item+1)}}>Add Item</button>
    </div>
  )
}

export default UseEffect