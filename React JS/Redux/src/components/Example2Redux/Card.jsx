import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../features/Example2ReduxOp/ProductSlice';

function Card() {
    const ProductData = useSelector((state) => state.proReducer.data);
    const status = useSelector((state) => state.proReducer.status);
    const error = useSelector((state) => state.proReducer.error);
    
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchProduct());
    }, [dispatch]);

    if (status === "Loading") {
      return <div>Loading...</div>;
    }

    if (status === "Failed") {
      return <div>Error:{error}</div>;
    }

  return (
    <div>
      <h1>Card</h1>
          {ProductData.map((item, index) => {
              return (
                <>
                  <div key={index} style={{ border: "1px solid black", margin: "10px" }}>
                    <img
                      src={item.productImage}
                      alt={item.productName}
                      style={{ height: "100px" }}
                    />
                    <li>{item.productName}</li>
                    <li>{item.productPrice}</li>
                  </div>
                </>
              );
          })}
    </div>
  );
}

export default Card