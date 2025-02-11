import React from 'react'

function Child(props) {
    props.name = "Thiru";
  return (
    <div>Child-{props.fname}</div>
  )
}

export default Child