import React, { useContext } from 'react'
import { myContext } from '../App';

function Comp1() {
    const [contextValue, setContextValue] = useContext(myContext);
    const handleSubmit = () => {
        setContextValue(val=>val+1)
    }
  return (
    <div>
          <h1>Comp1-{contextValue}</h1>
          <button onClick={handleSubmit}>ADD</button>
    </div>
  );
}

export default Comp1