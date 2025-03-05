import { createContext, useState } from "react"
import Product from "./components/Product";
import Cart from "./components/Cart";
// import Comp1 from "./components/Comp1";
// import Comp2 from "./components/Comp2";

// export const myContext = createContext();

function App() {
// const [contextValue, setContextValue] = useState(1)
  return (
    <>
      {/* <h1>App:{contextValue}</h1> */}
      {/* <myContext.Provider value={[contextValue, setContextValue]}> */}
        {/* <Comp1 /> */}
        {/* <Comp2 /> */}
      {/* </myContext.Provider> */}
      <Product />
      <Cart/>
    </>
  );
}

export default App
