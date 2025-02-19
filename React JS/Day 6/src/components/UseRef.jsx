import React, { useEffect, useRef } from 'react'

function UseRef() {
    const uRef = useRef();

    useEffect(() => {
        uRef.current.focus();
    },[])

  return (
    <div>
      <label>Name</label>
      <input type="text" ref={uRef} />
      <br />
      <label>Password</label>
      <input type="password" />
      <br />
      <button>Submit</button>
    </div>
  );
}

export default UseRef