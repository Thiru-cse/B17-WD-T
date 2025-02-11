import Product from "./components/Array/Product"
import Push from "./components/Array/Push";
import BodyContent from "./components/BodyContent";
import Features from "./components/Features";
import Header from "./components/Header";
import CompA from "./components/propsdrilling/CompA";

function App() {
  // const products = [
  //   {id:1, name:"Acer laptop", price:35000, category:"Electronics"},
  //   {id:2, name:"Dell laptop", price:50000, category:"Electronics"},
  //   {id:3, name:"Lenovo laptop", price:75000, category:"Electronics"},
  //   {id:4, name:"Keyboard", price:5000, category:"toys"},
  //   {id:5, name:"remote car", price:50000, category:"toys"},
  // ]

  // const electronics = products.filter(product => product.category === "Electronics");

  // const handleSubmit=(e)=>{
  //   const catValue = e.target.value; // Electronics
  //   const catArr = products.filter((item)=> item.category === catValue);
  //   console.log(catArr);
  // }

  // const totalPrice = products.reduce((acc, product) => acc + product.price, 0); // 0 + 35000 = 35000+50000 = 85000

  return (
    <>
      <Header/>
      <Features/>
      <BodyContent/>
      {/* <CompA /> */}
      {/* <h1>Product List</h1>
      {products.map((item)=>(
        <Product key={item.id} name={item.name} price={item.price} category={item.category} />
      ))}

      <button value="Electronics" onClick={(e)=>handleSubmit(e)}>Electronics</button> */}
      {/* <Push /> */}
    </>
  )
}

export default App
