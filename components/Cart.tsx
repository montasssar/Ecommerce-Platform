'use client';

import React from 'react';
import { useStateContext } from '@/context/StateContext';
import { AiOutlineClose } from 'react-icons/ai';
import Image from 'next/image';

export const Cart = () => {
  const {
    cartItems,
    totalPrice,
    setShowCart,
  } = useStateContext();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50">
      <div className="w-full sm:w-[400px] bg-white h-full p-6 float-right shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={() => setShowCart(false)}>
            <AiOutlineClose size={20} />
          </button>
        </div>

        {cartItems.length < 1 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item._id} className="flex justify-between items-center mb-4 border-b pb-2">
                <div className="flex items-center gap-4">
                  <Image src={item.image} alt={item.name} width={60} height={60} />
                  <div>
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-500">x{item.quantity}</div>
              </div>
            ))}

            <div className="mt-4">
              <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
              <button className="mt-4 w-full bg-black text-white py-2 rounded">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
