import React, { useReducer } from 'react'
import ReducerAction from './ReducerAction/ReducerAction';

function UseReducer() {
    const[state, dispatch] = useReducer(ReducerAction, 0)
  return (
    <div>
      {state}<br/>
      <button onClick={()=>{dispatch({type:"ADD", payload:1})}}>Add</button>
      <button onClick={()=>{dispatch({type:"SUB", payload:1})}}>SUB</button>
    </div>
  );
}

export default UseReducer