"use client";

import React from "react";

type CartItemProps = {
  game: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    genre: string;
    isNew: boolean;
  };
  onRemove: (id: string) => void;
};

const CartItem: React.FC<CartItemProps> = ({ game, onRemove }) => {
  return (
    <div className="border p-4 rounded shadow flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={game.image}
          alt={game.name}
          className="w-16 h-16 object-cover mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">{game.name}</h2>
          <p>{game.description}</p>
          <p className="font-semibold">${game.price}</p>
          {game.isNew && (
            <span className="text-sm text-green-500 font-semibold">Nuevo</span>
          )}
        </div>
      </div>
      <button
        onClick={() => onRemove(game.id)}
        className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
      >
        X
      </button>
    </div>
  );
};

export default CartItem;
