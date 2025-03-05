import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item)=> total + item.productPrice * item.quantity, 0
  )

  return (
    <div className="container mx-auto py-5">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="font-bold">Cart is empty</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <table className="w-full text-left">
              <thead className="border-b">
                <tr>
                  <th className="py-2">Products</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">SubTotal</th>
                  <th className="py-2">Remove</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td>
                      <img
                        src={item.productImage}
                        alt={item.productName}
                        className="w-16 h-16 rounded"
                      />
                      <span>{item.productName}</span>
                    </td>

                    <td>{item.productPrice}</td>

                    <td>
                      <div className="flex items-center gap-2">
                        <button
                          className="px-2 border"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="px-2 border"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td>${(item.productPrice * item.quantity).toFixed(2)}</td>

                    <td>
                      <button
                        className="text-red-500"
                        onClick={() => removeFromCart(item.id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3>Cart Total</h3>
            <p>Total Items: {cartItems.length}</p>

            <div>
              <p>Shipping:</p>
              <p>Shipping To: Chennai</p>
              <button>Change Address</button>
            </div>
            <hr />
            <div>
              <h3>Total Price:</h3>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
              <Link to="/checkout"
              className="block text-center bg-yellow-400 py-2 rounded font-semibold"
              >Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
