import axios from 'axios';
import React, { useState } from 'react'

function DeleteProduct({ fetchData }) {
  const [id, setId] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(
        `https://6694b1874bd61d8314c84020.mockapi.io/api/product/${id}`
      );
      console.log(response.data);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Delete Products</h1>
      <form onSubmit={handleSubmit}>
        <label>Product ID:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <br />
        <button type="submit">Delete</button>
      </form>
    </>
  );
}

export default DeleteProduct;