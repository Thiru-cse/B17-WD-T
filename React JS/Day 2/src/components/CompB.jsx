import React from 'react'

function CompB({ obj }) {
  return (
   <>
   <div>
    <h1>Component B</h1>
    <h2>Batch:{obj.batch}</h2>
    <h2>Team:{obj.team}</h2>
   </div>
   </>
    
  )
}

export default CompB