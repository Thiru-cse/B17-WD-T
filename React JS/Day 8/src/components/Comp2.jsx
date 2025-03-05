import React, { useContext } from 'react'
import { myContext } from '../App';
import Comp3 from './Comp3';

function Comp2() {
  const [contextValue, setContextValue] = useContext(myContext);
  const handleSubmit = () => {
    setContextValue((val) => val - 1);
  };
  return (
    <div>
      <h1>Comp2 - {contextValue}</h1>
      <button onClick={handleSubmit}>SUB</button>

      <Comp3 />
    </div>
  );
}

export default Comp2