import React from 'react'
import CompB from './CompB'

function CompA({ a }) {
  return (
    <div>CompA
        <CompB a={a} />
    </div>
  )
}

export default CompA