import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      cart.reduce((acc, curr) => acc + curr.price, 0)
    );
  }, [cart]);

  return (
    <div className="max-w-6xl mx-auto p-10">

      {
        cart.length > 0 ? (

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* LEFT SIDE (Items) */}
            <div className="md:col-span-2 space-y-6">
              {
                cart.map((item, index) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    itemIndex={index}
                  />
                ))
              }
            </div>

            {/* RIGHT SIDE (Summary) */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md h-fit sticky top-24">

              <h2 className="text-gray-500 font-semibold">YOUR CART</h2>
              <h1 className="text-2xl font-extrabold text-green-600">
                SUMMARY
              </h1>

              <p className="mt-4 text-gray-600">
                Total Items: {cart.length}
              </p>

              <div className="mt-10">
                <p className="font-bold text-lg">
                  Total Amount: ${totalAmount.toFixed(2)}
                </p>

                <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                  Checkout Now
                </button>
              </div>

            </div>

          </div>

        ) : (

          <div className="flex flex-col justify-center items-center h-[60vh] gap-4">
            <h1 className="font-bold text-xl">Your cart is empty!</h1>

            <Link to="/">
              <button className="bg-green-500 px-6 py-2 rounded text-white hover:bg-green-600 transition">
                Shop Now
              </button>
            </Link>
          </div>

        )
      }

    </div>
  );
};

export default Cart;