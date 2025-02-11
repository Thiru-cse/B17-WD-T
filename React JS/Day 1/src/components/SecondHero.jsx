import React from 'react'

function SecondHero() {
  const handleSubmit=()=>{
    console.log("Simple Function");
    
  }
  
  return (
    <div>
      <p>Second-Hero</p>
    <button onClick={handleSubmit}>Click</button>
    </div>
  )
}

export default SecondHero