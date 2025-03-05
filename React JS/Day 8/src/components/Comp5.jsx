import React, { useContext } from 'react'
import { myContext } from '../App';

function Comp5() {
    const [contextValue, setContextValue] = useContext(myContext);
  return (
    <div>
      <h1>Comp5-{contextValue}</h1>
    </div>
  );
}

export default Comp5