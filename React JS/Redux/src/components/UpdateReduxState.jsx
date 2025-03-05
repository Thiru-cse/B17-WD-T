import React from 'react'
import { useDispatch } from 'react-redux'
import { ADD, MUL, SUB } from '../features/OperationSlice';

function UpdateReduxState() {
    const dispatch = useDispatch();
  return (
    <div>
          <h1>UpdateReduxState</h1>
          <button onClick={()=>{dispatch(ADD(1))}}>ADD</button>
          <button onClick={()=>{dispatch(SUB(1))}}>SUB</button>
          <button onClick={()=>{dispatch(MUL(2))}}>MUL</button>
    </div>
  );
}

export default UpdateReduxState