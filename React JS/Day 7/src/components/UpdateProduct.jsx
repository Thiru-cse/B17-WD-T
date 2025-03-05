import axios from 'axios';
import React, { useState } from 'react'

function UpdateProduct({ fetchData }) {
  const [id, setId] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://6694b1874bd61d8314c84020.mockapi.io/api/product/${id}`,
        {
          productName: productName,
          productPrice: productPrice,
        }
      );
      console.log(response.data);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Update</h1>
      <form onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <br />
        <label>Product Price:</label>
        <input
          type="number"
          value={productPrice}
          onChange={(e) => {
            setProductPrice(e.target.value);
          }}
        />
        <br />
        <label>Product ID:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        /><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UpdateProduct