import CompA from "./components/CompA";
import CompB from "./components/CompB";
import CompC from "./components/CompC";
import Home from "./components/Home";

function App() {
  let a = 10;
  let b = 20;
  const arr = [1, 2, 3, 4, 5];
  const obj = { batch: "B17", team: "thiru" };
  const arrObj = [
    {id: 2, firstName: "john", designation:"FE DEV"}, //0
    {id: 2, firstName: "subathra", designation:"SDE"}, //1
    {id: 30, firstName: "dharani", designation:"BE DEV"},
  ]
  return (
    <>
      <h1>App Component -{a}</h1>
      <CompA a={a} arr={arr} />
      <CompB obj={obj} />
      <CompC arrObj={arrObj} />
      <Home arrObj={arrObj}/>
    </>
  );
}

export default App;
