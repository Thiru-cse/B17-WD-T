import React from 'react'
import { useSelector } from 'react-redux'

function DisplayReduxState() {
    const operationStateValue = useSelector((state) => state.opReducer.value); // Fetch state value from redux store
  return (
    <div>
      <h1>DisplayReduxState</h1>
      <p>State Value:{operationStateValue}</p>
    </div>
  );
}

export default DisplayReduxState