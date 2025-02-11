import React from 'react'
import CompC from './CompC'

function CompB({ a}) {

  return (
    <div>CompB
        <CompC a={a} />
    </div>
  )
}

export default CompB