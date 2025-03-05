import React, { useContext } from 'react'
import { myContext } from '../App';
import Comp4 from './Comp4';

function Comp3() {
    const [contextValue, setContextValue] = useContext(myContext);
    const handleSubmit = () => {
      setContextValue(0);
    };
  return (
    <div>
      <h1>Comp3</h1>
      <button onClick={handleSubmit}>Reset</button>
      <Comp4/>
    </div>
  );
}

export default Comp3