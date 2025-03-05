import React from "react";

function GetProduct({ products }) {
  return (
    <div>
      {products.map((item) => (
        <>
          <div key={item.id}>
            <h3>{item.id}</h3>
            <h3>{item.productName}</h3>
            <p>{item.productPrice}</p>
            <p>{item.productImage}</p>
          </div>
        </>
      ))}
    </div>
  );
}

export default GetProduct;
