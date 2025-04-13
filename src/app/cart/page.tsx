"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import CartItem from "@/components/CartItem";
import Image from "next/image";

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }, []);

  const handleRemove = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  const total = cartItems.reduce((sum, game) => sum + game.price, 0);

  return (
    <main className="p-8 max-w-7xl mx-auto">
      <Link href="/" className="text-sm text-[#3B3B3B] mb-4  flex items-center">
        <Image src="/izquierda.png" alt="atras" width={24} height={24} /> Back
        to Catalog
      </Link>

      <h1
        className="text-3xl font-bold mb-2 text-[#3B3B3B]"
        style={{
          fontFamily: "'Archivo', sans-serif",
          fontWeight: 700,
          fontSize: "36px",
          lineHeight: "40px",
          letterSpacing: "0.4",
        }}
      >
        Your Cart
      </h1>
      <p className="text-lg text-gray-600 mb-6">{cartItems.length} items</p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((game) => (
            <div key={game.id} className="flex items-center border-b pb-4">
              <img
                src={game.image}
                alt={game.title}
                className="w-40 h-full object-cover"
              />
              <div className="ml-4 flex-1">
                <p
                  className="text-[#737373] uppercase"
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: "16px",
                    letterSpacing: "0",
                  }}
                >
                  {game.genre}
                </p>
                <p
                  className="text-[#3B3B3B]"
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "24px",
                    letterSpacing: "0.4",
                  }}
                >
                  {game.name}
                </p>
                <p className="text-sm text-gray-500">{game.description}</p>
              </div>
              <div className="text-right">
                <button onClick={() => handleRemove(game.id)} className="">
                  <Image
                    src="/cerrar.png"
                    alt="cerrar"
                    width={24}
                    height={24}
                  />
                </button>
                <p className="text-lg font-bold mt-2">${game.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full max-w-sm">
          <div className="border rounded-md p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              Order Summary
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              {cartItems.length} items
            </p>

            <div className="space-y-2 text-sm text-gray-800">
              {cartItems.map((game) => (
                <div key={game.id} className="flex justify-between">
                  <span className="text-gray-700">{game.name}</span>
                  <span className="text-gray-700">
                    $ {game.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <hr className="my-4 border-gray-200" />

            <div className="flex justify-between text-gray-800 font-semibold">
              <span>Order Total</span>
              <span>$ {total.toFixed(2).padStart(6, "0")}</span>
            </div>
          </div>

          <button className="mt-4 w-full bg-[#585660] text-white py-3 rounded-md font-semibold text-sm shadow-sm hover:bg-[#4a4951] transition-colors">
            Checkout
          </button>
        </div>
      </div>
    </main>
  );
}
