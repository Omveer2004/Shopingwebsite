import React from 'react';
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import toast from "react-hot-toast";
import { remove } from "../redux/slices/CartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex gap-6 border-b pb-6">
      <div className="w-28 h-28">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col justify-between w-full">

        {/* Title + Desc */}
        <div>
          <h1 className="font-semibold text-lg">{item.title}</h1>
          <p className="text-gray-500 text-sm">
            {item.description.split(" ").slice(0, 10).join(" ")}...
          </p>
        </div>

        {/* Price + Delete */}
        <div className="flex justify-between items-center mt-4">
          <p className="font-extrabold text-green-500">
            ${item.price}
          </p>

          <button
            onClick={removeFromCart}
            className="p-2 bg-red-100 rounded-full hover:bg-red-200 transition"
          >
            <FcDeleteDatabase className="h-6 w-6" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default CartItem;