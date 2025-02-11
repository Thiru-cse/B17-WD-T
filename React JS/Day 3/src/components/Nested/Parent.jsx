import React from 'react'
import Child from './Child';

function Parent() {
    let fname = "John";
  return (
    <div>Parent
        <Child fname={fname}/>
    </div>
  )
}

export default Parent