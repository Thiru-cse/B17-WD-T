import React, { useState } from 'react'

function State() {
    let arr = 10;

    const [data, setData] = useState(5);

    const handleSubmit=()=>{
        arr=arr+1;
        console.log(arr);
    }

    const handleState=()=>{
        setData(val => val+1)
        console.log(data);
    }

  return (
    <div>
        <h1>Props - {arr}</h1>
        <button onClick={handleSubmit}>Increment</button>
        <h1>State - {data}</h1>
        <button onClick={handleState}>State Update</button>
    </div>
  )
}

export default State