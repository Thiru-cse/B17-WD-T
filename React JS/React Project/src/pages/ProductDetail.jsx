import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";

function ProductDetail () {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, removeFromCart, isInCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`https://6694b1874bd61d8314c84020.mockapi.io/api/product/${id}`)
      .then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const added = isInCart(product.id);

  const handleCart = () => {
    if (added) {
      removeFromCart(product.id);
    } else {
      addToCart({ ...product, quantity: 1 });
    }
  };

  return (
    <div className="container mx-auto p-10 flex gap-8">
      <div className="w-1/2 shadow-lg rounded">
        <img src={product.productImage} className="rounded-lg" />
      </div>

      <div className="w-1/2 flex flex-col justify-center gap-4">
        <h2 className="text-4xl font-bold">{product.productName}</h2>
        <p className="text-2xl font-semibold">${product.productPrice}</p>

        <button
          onClick={handleCart}
          className={`px-4 py-2 text-white ${
            added ? "bg-gray-500" : "bg-red-500"
          }`}
        >
          {added ? "Remove From Cart" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
