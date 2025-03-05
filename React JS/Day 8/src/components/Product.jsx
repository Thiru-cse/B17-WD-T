import React, { useContext } from "react";
import { cartContext } from "./CartProvider";

function Product() {
    const { addToCart } = useContext(cartContext);
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
    },
  ];
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Products Component</h1>
        <div style={{display:"flex", justifyContent:"space-around", border:"1px solid black", padding:"10px"}}>
          {products.map((item) => (
            <>
              <div key={item.id}>
                <h2>{item.name}</h2>
                <h2>{item.price}</h2>
                <button
                  onClick={() => {
                    addToCart(item);
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    );
}

export default Product;
